from django.contrib import admin

from core.custom_admin import CustomAdmin

from .models import Country, Department, Designation, District, Language, State, Unit, Year, Zone


@admin.register(Department)
class DepartmentAdmin(CustomAdmin):
    list_display = ("name", "is_active")


@admin.register(Designation)
class DesignationAdmin(CustomAdmin):
    list_display = ("name", "is_active")


@admin.register(Year)
class YearAdmin(CustomAdmin):
    list_display = ("name", "is_active")


@admin.register(Language)
class LanguageAdmin(CustomAdmin):
    list_display = ("name", "family", "native_name", "lang_code", "is_active")


@admin.register(Country)
class CountryAdmin(CustomAdmin):
    list_display = ("name", "is_active")


@admin.register(State)
class StateAdmin(CustomAdmin):
    list_display = ("name", "state_code", "tin_number", "country", "is_active")


@admin.register(District)
class DistrictAdmin(CustomAdmin):
    list_display = ("name", "slug", "state", "is_active")
    list_filter = ("state",)


@admin.register(Zone)
class ZoneAdmin(CustomAdmin):
    list_display = ("name", "pk", "slug", "district", "is_active")
    list_filter = ("district",)


@admin.register(Unit)
class UnitAdmin(CustomAdmin):
    list_display = ("name", "zone", "is_active")
