from django import forms

from .models import UmrahPayment


class UmrahPaymentForm(forms.ModelForm):
    class Meta:
        model = UmrahPayment
        fields = ("reciept_number", "amount", "roundoff", "date", "mode", "notes")
