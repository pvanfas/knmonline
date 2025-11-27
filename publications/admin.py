from django.contrib import admin

from core.custom_admin import CustomAdmin

from .models import Issue, Magazine, MagazineCategory, Publisher


@admin.register(MagazineCategory)
class MagazineCategoryAdmin(CustomAdmin):
    prepopulated_fields = {"slug": ("name",)}


@admin.register(Publisher)
class PublisherAdmin(CustomAdmin):
    pass


@admin.register(Magazine)
class MagazineAdmin(CustomAdmin):
    pass


@admin.register(Issue)
class IssueAdmin(CustomAdmin):
    pass
