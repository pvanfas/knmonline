from django.contrib import admin

from core.custom_admin import CustomAdmin

from .models import Extension


@admin.register(Extension)
class ExtensionAdmin(CustomAdmin):
    pass
