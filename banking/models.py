from decimal import Decimal

from django.core.validators import MinValueValidator
from django.db import models

from core.base import BaseModel


class PaymentPurpose(BaseModel):
    code = models.CharField(max_length=128)
    name = models.CharField(max_length=128)

    def __str__(self):
        return str(f"{self.code} - {self.name}")


class Payment(BaseModel):
    purpose = models.ForeignKey(
        PaymentPurpose,
        limit_choices_to={"is_active": True},
        on_delete=models.PROTECT,
        related_name="banking_payment_purpose",
    )
    name = models.CharField(max_length=128)
    address = models.TextField(max_length=128)
    mobile = models.CharField(max_length=128)
    amount = models.DecimalField(default=0.00, decimal_places=2, max_digits=15, validators=[MinValueValidator(Decimal("0.00"))])
    remarks = models.TextField(max_length=128, blank=True, null=True)

    def __str__(self):
        return str(f"{self.name} - {self.amount}")
