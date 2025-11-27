from decimal import Decimal, InvalidOperation, ROUND_HALF_UP

from django import template

register = template.Library()

DEFAULT_SYMBOL = "₹"


def _to_decimal(value):
    if isinstance(value, Decimal):
        return value
    if value is None or value == "":
        return Decimal("0")
    try:
        return Decimal(str(value))
    except (InvalidOperation, TypeError, ValueError):
        raise ValueError("indian_humanize filters accept numeric values.")


def _group_indian(int_string):
    sign = ""
    if int_string.startswith("-"):
        sign, int_string = "-", int_string[1:]
    if len(int_string) <= 3:
        return f"{sign}{int_string}"
    last_three = int_string[-3:]
    rest = int_string[:-3]
    groups = []
    while rest:
        groups.insert(0, rest[-2:])
        rest = rest[:-2]
    grouped = ",".join(groups + [last_three])
    return f"{sign}{grouped}"


def _format_indian_number(value, places=2, use_grouping=True, force_decimal=False):
    quantize_exp = Decimal("1") if not places else Decimal(f"1.{'0' * places}")
    normalized = value.quantize(quantize_exp, rounding=ROUND_HALF_UP)
    int_part, _, frac_part = f"{normalized:f}".partition(".")
    if use_grouping:
        int_part = _group_indian(int_part)
    if places == 0 and not force_decimal:
        return int_part
    if not frac_part:
        frac_part = "0" * places
    elif len(frac_part) < places:
        frac_part = frac_part.ljust(places, "0")
    return f"{int_part}.{frac_part}" if places or force_decimal else int_part


@register.filter(name="indian_comma")
def indian_comma(value):
    """
    Format an integer-like value with Indian-style commas.

    Example:
        {{ 12345678|indian_comma }} -> "1,23,45,678"
    """

    try:
        number = _to_decimal(value)
    except ValueError:
        return value
    return _group_indian(f"{number.quantize(Decimal('1'), rounding=ROUND_HALF_UP):f}")


@register.filter(name="indian_currency")
def indian_currency(value, symbol=DEFAULT_SYMBOL):
    """
    Format a numeric value as an Indian currency string prefixed with the given symbol.

    Usage:
        {{ amount|indian_currency }}
        {{ amount|indian_currency:"Rs." }}
        {{ amount|indian_currency:"" }}  {# without symbol #}
    """

    try:
        number = _to_decimal(value)
    except ValueError:
        return value
    formatted = _format_indian_number(number, places=2, use_grouping=True, force_decimal=True)
    return f"{symbol}{formatted}" if symbol else formatted


@register.filter(name="indian_compact")
def indian_compact(value, precision=1):
    """
    Abbreviate large values using Indian numbering units.

    Produces strings such as "1.5 Lakh" / "2.3 Crore".

    Usage:
        {{ amount|indian_compact }}
        {{ amount|indian_compact:0 }}  {# without decimal places #}
    """

    try:
        number = _to_decimal(value)
    except ValueError:
        return value

    units = [
        (Decimal("10000000"), "Crore"),
        (Decimal("100000"), "Lakh"),
        (Decimal("1000"), "Thousand"),
    ]

    abs_number = abs(number)
    for threshold, label in units:
        if abs_number >= threshold:
            scaled = number / threshold
            quantize_exp = Decimal("1") if int(precision) <= 0 else Decimal(f"1.{'0' * int(precision)}")
            scaled = scaled.quantize(quantize_exp, rounding=ROUND_HALF_UP)
            return f"{scaled.normalize():f} {label}"

    return _format_indian_number(number, places=max(int(precision), 0), use_grouping=True, force_decimal=int(precision) > 0)
