from django.db import models

from core.base import BaseModel


class Standard(BaseModel):
    code = models.CharField(max_length=128)
    name = models.CharField(max_length=128)

    def __str__(self):
        return str(f"{self.code} - {self.name}")


class Book(BaseModel):
    standard = models.ForeignKey("Standard", limit_choices_to={"is_active": True}, on_delete=models.PROTECT, related_name="book_standard")
    code = models.CharField(max_length=128)
    name = models.CharField(max_length=128)

    def __str__(self):
        return str(f"{self.code} - {self.name}")


class Complex(BaseModel):
    code = models.CharField(max_length=128)
    name = models.CharField(max_length=128)

    def __str__(self):
        return str(f"{self.code} - {self.name}")


class Madrasa(BaseModel):
    code = models.CharField(max_length=128)
    name = models.CharField(max_length=128)
    complex = models.ForeignKey("Complex", limit_choices_to={"is_active": True}, on_delete=models.PROTECT, related_name="madrasa_complex")
    zone = models.ForeignKey("core.Zone", limit_choices_to={"is_active": True}, on_delete=models.PROTECT, related_name="madrasa_zone")

    def __str__(self):
        return str(f"{self.code} - {self.name}")
