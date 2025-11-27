from django.contrib import admin

from core.custom_admin import CustomAdmin

from .models import (
    Administration,
    DistrictCommittee,
    Organization,
    StateCommittee,
    Type,
    UnitCommittee,
    ZoneCommittee,
)


@admin.register(Organization)
class OrganizationAdmin(CustomAdmin):
    pass


@admin.register(Type)
class TypeAdmin(CustomAdmin):
    pass


@admin.register(Administration)
class AdministrationAdmin(CustomAdmin):
    pass


@admin.register(StateCommittee)
class StateCommitteeAdmin(CustomAdmin):
    pass


@admin.register(DistrictCommittee)
class DistrictCommitteeAdmin(CustomAdmin):
    pass


@admin.register(ZoneCommittee)
class ZoneCommitteeAdmin(CustomAdmin):
    pass


@admin.register(UnitCommittee)
class UnitCommitteeAdmin(CustomAdmin):
    pass
