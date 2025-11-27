from django.contrib import admin

from core.custom_admin import CustomAdmin

from .models import Book, Complex, Madrasa, Standard


@admin.register(Standard)
class Standarddmin(CustomAdmin):
    pass


@admin.register(Book)
class BookionAdmin(CustomAdmin):
    pass


@admin.register(Complex)
class ComplexAdmin(CustomAdmin):
    pass


@admin.register(Madrasa)
class MadrasaAdmin(CustomAdmin):
    pass
