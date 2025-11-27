from django.contrib import admin

from core.custom_admin import CustomAdmin

from .models import Institution


@admin.register(Institution)
class InstitutionAdmin(CustomAdmin):
    pass
