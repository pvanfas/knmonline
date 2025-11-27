from django.db import models

from core.base import BaseModel


class Ticket(BaseModel):
    name = models.CharField(max_length=128)

    def __str__(self):
        return str(f"{self.name}")
