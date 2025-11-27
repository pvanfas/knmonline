from django.db import models
from versatileimagefield.fields import VersatileImageField

from core.base import BaseModel


class Institution(BaseModel):
    title = models.CharField(max_length=128)
    logo = VersatileImageField(blank=True, null=True, upload_to="images/institutions/logos")
    about = models.TextField(blank=True, null=True)
    website = models.URLField(blank=True, null=True)

    def __str__(self):
        return str(self.title)
