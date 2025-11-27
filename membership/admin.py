from django.contrib import admin

from core.custom_admin import CustomAdmin

from .models import Member


@admin.register(Member)
class MemberAdmin(CustomAdmin):
    list_display = ("__str__", "first_name", "last_name", "mobile", "district", "zone", "unit")
    list_filter = ("state", "district", "zone", "unit", "profession")
    search_fields = ("first_name", "last_name", "mobile", "zone")
    list_per_page = 100
