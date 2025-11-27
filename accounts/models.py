from django.contrib.auth.models import AbstractUser
from django.db import models

USERTYPE_CHOICES = (
    ("Administrator", "Administrator"),
    ("ChiefElectoralOfficer", "Chief Electoral Officer"),
    ("Staff", "Staff"),
)


class User(AbstractUser):
    password_val = models.CharField("Password Repeat", max_length=30, blank=True)
    bio = models.TextField("User Bio", max_length=500, blank=True)
    place = models.CharField("User Location", max_length=30, blank=True)
    address = models.TextField("User Adress", blank=True)
    dob = models.DateField("Date of Birth", null=True, blank=True)
    phone = models.CharField("Phone Number", max_length=30, blank=True)
    usertype = models.CharField("User Type", max_length=30, choices=USERTYPE_CHOICES, default="Staff")

    def __str__(self):
        if self.first_name and self.last_name:
            return f"{self.first_name} {self.last_name}"
        elif self.first_name:
            return self.first_name
        elif self.username:
            return self.username
        else:
            return self.get_usertype_display()
