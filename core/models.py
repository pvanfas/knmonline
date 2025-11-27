from django.db import models
from django.urls import reverse_lazy
from django.utils.safestring import mark_safe

from core.base import BaseModel


class Department(BaseModel):
    name = models.CharField(max_length=128)

    class Meta:
        ordering = ("name",)
        verbose_name = "Department"
        verbose_name_plural = "Departments"

    def get_absolute_url(self):
        return reverse_lazy("core:department_detail", kwargs={"pk": self.pk})

    @staticmethod
    def get_list_url():
        return reverse_lazy("core:department_list")

    @staticmethod
    def get_create_url():
        return reverse_lazy("core:department_create")

    def get_update_url(self):
        return reverse_lazy("core:department_update", kwargs={"pk": self.pk})

    def get_delete_url(self):
        return reverse_lazy("core:department_delete", kwargs={"pk": self.pk})

    def __str__(self):
        return str(self.name)


class Designation(BaseModel):
    name = models.CharField(max_length=128)

    class Meta:
        ordering = ("name",)
        verbose_name = "Designation"
        verbose_name_plural = "Designations"

    def get_absolute_url(self):
        return reverse_lazy("core:designation_detail", kwargs={"pk": self.pk})

    @staticmethod
    def get_list_url():
        return reverse_lazy("core:designation_list")

    @staticmethod
    def get_create_url():
        return reverse_lazy("core:designation_create")

    def get_update_url(self):
        return reverse_lazy("core:designation_update", kwargs={"pk": self.pk})

    def get_delete_url(self):
        return reverse_lazy("core:designation_delete", kwargs={"pk": self.pk})

    def __str__(self):
        return str(self.name)


class Year(BaseModel):
    name = models.CharField(max_length=128)

    class Meta:
        ordering = ("name",)
        verbose_name = "Year"
        verbose_name_plural = "Years"

    def get_absolute_url(self):
        return reverse_lazy("core:year_detail", kwargs={"pk": self.pk})

    @staticmethod
    def get_list_url():
        return reverse_lazy("core:year_list")

    @staticmethod
    def get_create_url():
        return reverse_lazy("core:year_create")

    def get_update_url(self):
        return reverse_lazy("core:year_update", kwargs={"pk": self.pk})

    def get_delete_url(self):
        return reverse_lazy("core:year_delete", kwargs={"pk": self.pk})

    def __str__(self):
        return str(self.name)


class Language(BaseModel):
    family = models.CharField(max_length=128)
    name = models.CharField(max_length=128)
    native_name = models.CharField(max_length=128, blank=True, null=True)
    lang_code = models.CharField(max_length=128, blank=True, null=True)

    class Meta:
        ordering = ("name",)
        verbose_name = "Language"
        verbose_name_plural = "Languages"

    def get_absolute_url(self):
        return reverse_lazy("core:language_detail", kwargs={"pk": self.pk})

    @staticmethod
    def get_list_url():
        return reverse_lazy("core:language_list")

    @staticmethod
    def get_create_url():
        return reverse_lazy("core:language_create")

    def get_update_url(self):
        return reverse_lazy("core:language_update", kwargs={"pk": self.pk})

    def get_delete_url(self):
        return reverse_lazy("core:language_delete", kwargs={"pk": self.pk})

    def __str__(self):
        return str(self.name)


class Country(BaseModel):
    name = models.CharField(max_length=128)
    slug = models.SlugField(unique=True, blank=True, null=True)
    code = models.CharField(max_length=128)
    flag = models.CharField(max_length=400)

    class Meta:
        verbose_name = "Country"
        verbose_name_plural = "Countries"

    def flag_thumb(self):
        return mark_safe('<img src="%s" height="10"/>' % (self.flag))

    def get_absolute_url(self):
        return reverse_lazy("core:country_detail", kwargs={"pk": self.pk})

    @staticmethod
    def get_list_url():
        return reverse_lazy("core:country_list")

    @staticmethod
    def get_create_url():
        return reverse_lazy("core:country_create")

    def get_update_url(self):
        return reverse_lazy("core:country_update", kwargs={"pk": self.pk})

    def get_delete_url(self):
        return reverse_lazy("core:country_delete", kwargs={"pk": self.pk})

    def __str__(self):
        return str(self.name)


class State(BaseModel):
    name = models.CharField(max_length=128)
    country = models.ForeignKey(Country, blank=True, null=True, limit_choices_to={"is_active": True}, on_delete=models.PROTECT, related_name="country_state")
    slug = models.SlugField(unique=True, blank=True, null=True)
    state_code = models.CharField(max_length=2)
    tin_number = models.CharField(max_length=2)

    class Meta:
        ordering = ("name",)
        verbose_name = "State"
        verbose_name_plural = "States"

    def get_absolute_url(self):
        return reverse_lazy("core:state_detail", kwargs={"pk": self.pk})

    @staticmethod
    def get_list_url():
        return reverse_lazy("core:state_list")

    @staticmethod
    def get_create_url():
        return reverse_lazy("core:state_create")

    def get_update_url(self):
        return reverse_lazy("core:state_update", kwargs={"pk": self.pk})

    def get_delete_url(self):
        return reverse_lazy("core:state_delete", kwargs={"pk": self.pk})

    def __str__(self):
        return str(self.name)


class District(BaseModel):
    state = models.ForeignKey(State, limit_choices_to={"is_active": True}, on_delete=models.PROTECT, related_name="district_state")
    slug = models.SlugField(unique=True, blank=True, null=True)
    name = models.CharField(max_length=128)

    @property
    def zone_count(self):
        return self.districts.count()

    class Meta:
        ordering = ("state", "name")
        verbose_name = "District"
        verbose_name_plural = "Districts"

    def get_absolute_url(self):
        return reverse_lazy("core:district_detail", kwargs={"pk": self.pk})

    @staticmethod
    def get_list_url():
        return reverse_lazy("core:district_list")

    @staticmethod
    def get_create_url():
        return reverse_lazy("core:district_create")

    def get_update_url(self):
        return reverse_lazy("core:district_update", kwargs={"pk": self.pk})

    def get_delete_url(self):
        return reverse_lazy("core:district_delete", kwargs={"pk": self.pk})

    def __str__(self):
        return str(f"{self.name} - {self.state.name}")


class Zone(BaseModel):
    district = models.ForeignKey(District, limit_choices_to={"is_active": True}, on_delete=models.PROTECT, related_name="zone_district")
    slug = models.SlugField(unique=True, blank=True, null=True)
    name = models.CharField(max_length=128)

    class Meta:
        ordering = ("district", "name")

    def get_absolute_url(self):
        return reverse_lazy("core:zone_detail", kwargs={"pk": self.pk})

    @staticmethod
    def get_list_url():
        return reverse_lazy("core:zone_list")

    @staticmethod
    def get_create_url():
        return reverse_lazy("core:zone_create")

    def get_update_url(self):
        return reverse_lazy("core:zone_update", kwargs={"pk": self.pk})

    def get_delete_url(self):
        return reverse_lazy("core:zone_delete", kwargs={"pk": self.pk})

    def __str__(self):
        return str(self.name)


class Unit(BaseModel):
    zone = models.ForeignKey(Zone, limit_choices_to={"is_active": True}, on_delete=models.PROTECT, related_name="unit_zone")
    name = models.CharField(max_length=128)

    class Meta:
        ordering = ("zone", "name")
        verbose_name = "Unit"
        verbose_name_plural = "Units"

    def get_absolute_url(self):
        return reverse_lazy("core:unit_detail", kwargs={"pk": self.pk})

    @staticmethod
    def get_list_url():
        return reverse_lazy("core:unit_list")

    @staticmethod
    def get_create_url():
        return reverse_lazy("core:unit_create")

    def get_update_url(self):
        return reverse_lazy("core:unit_update", kwargs={"pk": self.pk})

    def get_delete_url(self):
        return reverse_lazy("core:unit_delete", kwargs={"pk": self.pk})

    def __str__(self):
        return str(self.name)
