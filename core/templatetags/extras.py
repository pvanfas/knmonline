from django import template


register = template.Library()


@register.filter(name="times")
def times(number):
    return range(number)


@register.filter()
def class_name(value):
    return value.__class__.__name__
