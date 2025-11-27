from django.db import models
from django.urls import reverse_lazy

from core.base import BaseModel

MEMBERSHIP_YEAR_CHOICES = (("2019-2024", "2019-2024"), ("2024-2029", "2024-2029"))


class Member(BaseModel):
    first_name = models.CharField(max_length=50, blank=True, null=True)
    last_name = models.CharField(max_length=50, blank=True, null=True)
    mobile = models.CharField(max_length=50, blank=True, null=True)
    whatsapp = models.CharField(max_length=50, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    state = models.ForeignKey("core.State", on_delete=models.CASCADE, blank=True, null=True)
    district = models.ForeignKey("core.District", on_delete=models.CASCADE, blank=True, null=True)
    zone = models.ForeignKey("core.Zone", on_delete=models.CASCADE, blank=True, null=True)
    parent_name = models.CharField(max_length=100, blank=True, null=True)
    profession = models.CharField(max_length=100, blank=True, null=True)
    educational_qualification = models.CharField(max_length=100, blank=True, null=True)
    username = models.CharField(max_length=100, blank=True, null=True)
    password = models.CharField(max_length=100, blank=True, null=True)
    designation = models.CharField(max_length=100, blank=True, null=True)
    membership_year = models.CharField(max_length=100, choices=MEMBERSHIP_YEAR_CHOICES)

    unit = models.ForeignKey("core.Unit", on_delete=models.CASCADE, blank=True, null=True)

    def get_absolute_url(self):
        return reverse_lazy("membership:member_detail", kwargs={"pk": self.pk})

    @staticmethod
    def get_list_url():
        return reverse_lazy("membership:member_list")

    @staticmethod
    def get_create_url():
        return reverse_lazy("membership:member_create")

    def get_update_url(self):
        return reverse_lazy("membership:member_update", kwargs={"pk": self.pk})

    def get_delete_url(self):
        return reverse_lazy("membership:member_delete", kwargs={"pk": self.pk})

    def full_name(self):
        return self.__str__()

    def __str__(self):
        if self.first_name and self.last_name:
            return f"{self.first_name} {self.last_name}"
        elif self.first_name:
            return f"{self.first_name}"
        return f"{self.mobile}"
