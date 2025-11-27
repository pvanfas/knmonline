from django.contrib import admin

from core.custom_admin import CustomAdmin

from .models import Payment, PaymentPurpose


@admin.register(PaymentPurpose)
class PaymentPurposeAdmin(CustomAdmin):
    pass


@admin.register(Payment)
class PaymentAdmin(CustomAdmin):
    pass
