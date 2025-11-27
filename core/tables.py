from django.utils.safestring import mark_safe

from core.base import BaseTable

from .models import Country, Department, Designation, District, Language, State, Unit, Year, Zone


class CountryTable(BaseTable):
    def render_flag(self, value):
        return mark_safe(f'<img src="{value}" alt="Flag" width="30" height="30" class="rounded-circle object-cover">')

    class Meta:
        model = Country
        fields = ("name", "code", "flag")
        attrs = {"class": "table key-buttons border-bottom table-hover"}  # noqa: RUF012


class DepartmentTable(BaseTable):
    class Meta:
        model = Department
        fields = ("name",)
        attrs = {"class": "table key-buttons border-bottom table-hover"}  # noqa: RUF012


class DesignationTable(BaseTable):
    class Meta:
        model = Designation
        fields = ("name",)
        attrs = {"class": "table key-buttons border-bottom table-hover"}  # noqa: RUF012


class YearTable(BaseTable):
    class Meta:
        model = Year
        fields = ("name",)
        attrs = {"class": "table key-buttons border-bottom table-hover"}  # noqa: RUF012


class LanguageTable(BaseTable):
    class Meta:
        model = Language
        fields = ("name", "family", "native_name", "lang_code")
        attrs = {"class": "table key-buttons border-bottom table-hover"}  # noqa: RUF012


class StateTable(BaseTable):
    class Meta:
        model = State
        fields = ("name", "state_code", "tin_number")
        attrs = {"class": "table key-buttons border-bottom table-hover"}  # noqa: RUF012


class DistrictTable(BaseTable):
    class Meta:
        model = District
        fields = ("name", "state")
        attrs = {"class": "table key-buttons border-bottom table-hover"}  # noqa: RUF012


class ZoneTable(BaseTable):
    class Meta:
        model = Zone
        fields = ("name", "district")
        attrs = {"class": "table key-buttons border-bottom table-hover"}  # noqa: RUF012


class UnitTable(BaseTable):
    class Meta:
        model = Unit
        fields = ("name", "zone", "zone__district")
        attrs = {"class": "table key-buttons border-bottom table-hover"}  # noqa: RUF012
