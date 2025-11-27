from datetime import date
from decimal import Decimal

from django.core.validators import MinValueValidator
from django.db import models
from django.db.models import Sum
from django.urls import reverse_lazy
from django.utils.safestring import mark_safe
from num2words import num2words

from core.base import BaseModel

GENDER_CHOICE = (("Male", "Male"), ("Female", "Female"))
COLOR_CHOICE = (("RED", "RED"), ("BLUE", "BLUE"), ("GREEN", "GREEN"), ("PINK", "PINK"), ("YELLOW", "YELLOW"))
CASH_MODE_CHOICE = (("CASH", "CASH"), ("BANK", "BANK TRANSFER"), ("CHEQUE", "CHEQUE PAYMENT"), ("UPI", "UPI PAYMENT"), ("ONLINE", "ONLINE TRANSFER"))
MAHRAM_CHOICE = (
    ("WIFE", "Wife"),
    ("FATHER_S_WIFE", "Father’s wife"),
    ("MOTHER", "Mother"),
    ("DAUGHTER", "Daughter"),
    ("SISTER", "Sister"),
    ("AUNT", "Aunt"),
    ("NIECE", "Niece"),
    ("FOSTER_MOTHER", "Foster Mother"),
    ("FOSTER_SISTER", "Foster Sister"),
    ("MOTHER_IN_LAW", "Mother-in-law"),
    ("DAUGHTER_IN_LAW", "Daughter-in-law"),
    ("HUSBAND", "Husband"),
    ("STEP_FATHER", "Step father"),
    ("FATHER", "Father"),
    ("SON", "Son"),
    ("BROTHER", "Brother"),
    ("UNCLE", "Uncle"),
    ("NEPHEW", "Nephew"),
    ("FOSTER_SON", "Foster son"),
    ("FOSTER_BROTHER", "Foster Brother"),
    ("FATHER_IN_LAW", "Father-in-law"),
    ("SON_IN_LAW", "Son-in-law"),
)


class Agency(BaseModel):
    name = models.CharField(max_length=128)
    location = models.CharField(max_length=128)
    mobile = models.CharField(max_length=128)
    whatsapp = models.CharField(max_length=128, blank=True, null=True)
    address = models.TextField("Address", blank=True, null=True)

    class Meta:
        verbose_name = "Agency"
        verbose_name_plural = "Agencies"

    def get_absolute_url(self):
        return reverse_lazy("umrah:agency_detail", kwargs={"pk": self.pk})

    @staticmethod
    def get_list_url():
        return reverse_lazy("umrah:agency_list")

    @staticmethod
    def get_create_url():
        return reverse_lazy("umrah:agency_create")

    def get_update_url(self):
        return reverse_lazy("umrah:agency_update", kwargs={"pk": self.pk})

    def get_delete_url(self):
        return reverse_lazy("umrah:agency_delete", kwargs={"pk": self.pk})

    def applicants_count(self):
        return self.applicant_agency.count()

    def __str__(self):
        return str(self.name)


class Batch(BaseModel):
    serial_no = models.CharField(max_length=128)
    name = models.CharField(max_length=128)
    code = models.CharField(max_length=128, unique=True, blank=True, null=True)
    residence = models.TextField("Residence in Makkah", blank=True, null=True)
    slug = models.SlugField(unique=True)
    color = models.CharField(max_length=128, choices=COLOR_CHOICE, default="RED")
    amount = models.DecimalField(default=0.00, decimal_places=2, max_digits=15, validators=[MinValueValidator(Decimal("0.00"))])
    year = models.IntegerField()
    is_completed = models.BooleanField(default=False)

    class Meta:
        ordering = ("serial_no",)
        verbose_name = "Umrah Batch"
        verbose_name_plural = "Umrah Batches"

    def applicants_count(self):
        return self.applicant_batch.count()

    def bulk_id_card(self):
        url = reverse_lazy("umrah:bulk_id_card", kwargs={"pk": self.pk})
        return mark_safe(f"<a href='{url}' class='btn btn-sm btn-light btn-outline-success' target='_blank'>ID Cards</a>")

    def bulk_reciepts(self):
        url = reverse_lazy("umrah:bulk_reciepts", kwargs={"pk": self.pk})
        return mark_safe(f"<a href='{url}' class='btn btn-sm btn-light btn-outline-success' target='_blank'>Reciepts</a>")

    def bulk_vouchers(self):
        url = reverse_lazy("umrah:bulk_vouchers", kwargs={"pk": self.pk})
        return mark_safe(f"<a href='{url}' class='btn btn-sm btn-light btn-outline-success' target='_blank'>Vouchers</a>")

    def bulk_tags(self):
        url = reverse_lazy("umrah:bulk_tags", kwargs={"pk": self.pk})
        return mark_safe(f"<a href='{url}' class='btn btn-sm btn-light btn-outline-success' target='_blank'>Tags</a>")

    def subtotal(self):
        return self.amount * self.applicants_count()

    def cash_balance(self):
        return self.payment_bank_total() + self.payment_cash_total() - self.voucher_total()

    def voucher_total(self):
        return sum([voucher.amount for voucher in self.voucher_batch.all()])

    def payment_bank_total(self):
        return sum([payment.amount for payment in UmrahPayment.objects.filter(applicant__batch=self, mode="BANK")])

    def payment_cash_total(self):
        return sum([payment.amount for payment in UmrahPayment.objects.filter(applicant__batch=self, mode="CASH")])

    def get_absolute_url(self):
        return reverse_lazy("umrah:batch_detail", kwargs={"slug": self.slug})

    @staticmethod
    def get_list_url():
        return reverse_lazy("umrah:batch_list")

    @staticmethod
    def get_create_url():
        return reverse_lazy("umrah:batch_create")

    def get_update_url(self):
        return reverse_lazy("umrah:batch_update", kwargs={"slug": self.slug})

    def get_delete_url(self):
        return reverse_lazy("umrah:batch_delete", kwargs={"slug": self.slug})

    def __str__(self):
        return f"{self.year} - {self.name}"


class Applicant(BaseModel):
    photo_help_text = mark_safe("""Required photo size: 4.5cm in height and 3.5cm in width, Colored picture, Must not be older than 6 months, Background: white.""")

    batch = models.ForeignKey(Batch, limit_choices_to={"is_active": True}, on_delete=models.PROTECT, related_name="applicant_batch")
    agency = models.ForeignKey(Agency, limit_choices_to={"is_active": True}, on_delete=models.PROTECT, blank=True, null=True, related_name="applicant_agency")
    sl_no = models.PositiveIntegerField(blank=True, null=True)
    first_name = models.CharField(max_length=128)
    last_name = models.CharField(max_length=128, blank=True, null=True)
    address = models.TextField("Address", blank=True, null=True)
    mobile = models.CharField(max_length=128, blank=True, null=True)
    whatsapp = models.CharField(max_length=128, blank=True, null=True)
    passport_number = models.CharField(max_length=128, blank=True, null=True)
    dob = models.DateField("Date of Birth", blank=True, null=True)
    passport_issue = models.DateField("Passport Issue Date", blank=True, null=True)
    passport_expiry = models.DateField("Passport Expiry Date", blank=True, null=True)
    place_of_issue = models.CharField(max_length=128, blank=True, null=True)
    gender = models.CharField(max_length=128, choices=GENDER_CHOICE)
    discount = models.DecimalField(default=0.00, decimal_places=2, max_digits=15, validators=[MinValueValidator(Decimal("0.00"))])
    mahram_name = models.CharField(max_length=128, blank=True, null=True)
    mahram_relation = models.CharField(max_length=128, blank=True, null=True, choices=MAHRAM_CHOICE)
    photo = models.ImageField(upload_to="images/umrah/applicants", help_text=photo_help_text)

    class Meta:
        verbose_name = "Umrah Applicant"
        verbose_name_plural = "Umrah Applicants"
        unique_together = ("batch", "passport_number")
        ordering = ("sl_no", "batch")

    def fullname(self):
        return f"{self.first_name} {self.last_name if self.last_name else ''}"

    def id_card(self):
        return mark_safe(f"<a href='/app/umrah/id_card/{self.pk}' target='_blank'><strong>Download</strong></a>")

    def whatsapp_link(self):
        return mark_safe(f"<a href='https://wa.me/91{self.whatsapp}' target='_blank'><strong>{self.whatsapp}</strong></a>") if self.whatsapp else "-"

    @property
    def age(self):
        today = date.today()
        if self.dob:
            value = today.year - self.dob.year - ((today.month, today.day) < (self.dob.month, self.dob.day))
            return value
        else:
            return 0

    def batch_name(self):
        return self.batch.name

    def total_amount(self):
        return self.batch.amount

    def amount_words(self):
        return num2words(self.total_amount(), lang="en_IN").upper()

    def payable_amount(self):
        return self.batch.amount - self.discount

    def paid_amount(self):
        amount = UmrahPayment.objects.filter(applicant=self).aggregate(Sum("amount"))["amount__sum"]
        paid = amount if amount else 0
        return round(paid, 2)

    def balance_amount(self):
        amount = UmrahPayment.objects.filter(applicant=self).aggregate(Sum("amount"))["amount__sum"]
        paid = amount if amount else 0
        return (self.batch.amount - self.discount) - paid

    def get_payments(self):
        return UmrahPayment.objects.filter(applicant=self, is_active=True)

    def expiry_validity(self):
        return (self.passport_expiry - date.today()).days if self.passport_expiry else 0

    def image_tag(self):
        return mark_safe(
            f"""
            <a href="{self.photo.url}" data-lg-size="1600-2400" class="lightgallery">
                <img src='{self.photo.url}' loading='lazy' style='width:24.5px;height:31.5px;'/>
            </a>
            """
        )

    def get_absolute_url(self):
        return reverse_lazy("umrah:applicant_detail", kwargs={"pk": self.pk})

    @staticmethod
    def get_list_url():
        return reverse_lazy("umrah:applicant_list")

    @staticmethod
    def get_create_url():
        return reverse_lazy("umrah:applicant_create")

    def get_update_url(self):
        return reverse_lazy("umrah:applicant_update", kwargs={"pk": self.pk})

    def get_delete_url(self):
        return reverse_lazy("umrah:applicant_delete", kwargs={"pk": self.pk})

    def __str__(self):
        return f"{self.batch.name}: {self.first_name} {self.last_name if self.last_name else ''} - {self.passport_number}"

    def get_name(self):
        return f"{self.first_name} {self.last_name if self.last_name else ''}"


class UmrahPayment(BaseModel):
    reciept_number = models.CharField(max_length=128, unique=True, blank=True, null=True)
    applicant = models.ForeignKey(Applicant, limit_choices_to={"is_active": True}, on_delete=models.PROTECT, related_name="payment_applicant")
    amount = models.DecimalField(default=0.00, decimal_places=2, max_digits=15, validators=[MinValueValidator(Decimal("0.00"))])
    roundoff = models.DecimalField(default=0.00, decimal_places=2, max_digits=15)
    date = models.DateField("Date of Payment")
    mode = models.CharField(max_length=128, choices=CASH_MODE_CHOICE, default="CASH")
    notes = models.TextField("Notes", blank=True, null=True)
    is_archived = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.applicant}: {self.amount}"

    def reciept(self):
        url = reverse_lazy("umrah:reciept", kwargs={"pk": self.pk})
        return mark_safe(f"<a href='{url}' class='btn btn-sm btn-light btn-outline-success' target='_blank'>Download</a>")

    def applicant_name(self):
        return self.applicant

    def batch_name(self):
        return self.applicant.batch.name

    def get_absolute_url(self):
        return reverse_lazy("umrah:payment_detail", kwargs={"pk": self.pk})

    def get_print_url(self):
        return reverse_lazy("umrah:reciept", kwargs={"pk": self.pk})

    @staticmethod
    def get_list_url():
        return reverse_lazy("umrah:payment_list")

    @staticmethod
    def get_create_url():
        return reverse_lazy("umrah:payment_create")

    def get_update_url(self):
        return reverse_lazy("umrah:payment_update", kwargs={"pk": self.pk})

    def get_delete_url(self):
        return reverse_lazy("umrah:payment_delete", kwargs={"pk": self.pk})

    class Meta:
        ordering = ("-created_at",)


class PaymentPurpose(BaseModel):
    name = models.CharField(max_length=128, unique=True)

    class Meta:
        ordering = ("name",)
        verbose_name = "Payment Purpose"
        verbose_name_plural = "Payment Purposes"

    def get_absolute_url(self):
        return reverse_lazy("umrah:payment_purpose_detail", kwargs={"pk": self.pk})

    @staticmethod
    def get_list_url():
        return reverse_lazy("umrah:payment_purpose_list")

    @staticmethod
    def get_create_url():
        return reverse_lazy("umrah:payment_purpose_create")

    def get_update_url(self):
        return reverse_lazy("umrah:payment_purpose_update", kwargs={"pk": self.pk})

    def get_delete_url(self):
        return reverse_lazy("umrah:payment_purpose_delete", kwargs={"pk": self.pk})

    def __str__(self):
        return self.name


class Voucher(BaseModel):
    voucher_number = models.CharField(max_length=128, unique=True, blank=True, null=True)
    batch = models.ForeignKey(Batch, limit_choices_to={"is_active": True}, on_delete=models.PROTECT, related_name="voucher_batch")
    agency = models.ForeignKey(Agency, limit_choices_to={"is_active": True}, blank=True, null=True, on_delete=models.PROTECT, related_name="voucher_agency")
    amount = models.DecimalField(default=0.00, decimal_places=2, max_digits=15, validators=[MinValueValidator(Decimal("0.00"))])
    date = models.DateField("Date of Payment")
    purpose = models.ForeignKey(PaymentPurpose, limit_choices_to={"is_active": True}, on_delete=models.PROTECT, related_name="voucher_purpose")
    notes = models.TextField("Notes", blank=True, null=True)
    mode = models.CharField(max_length=128, choices=CASH_MODE_CHOICE, default="CASH")
    is_archived = models.BooleanField(default=False)

    class Meta:
        ordering = ("-voucher_number",)
        verbose_name = "Voucher"
        verbose_name_plural = "Vouchers"

    def purpose_name(self):
        return self.purpose.name

    def voucher(self):
        url = reverse_lazy("umrah:voucher", kwargs={"pk": self.pk})
        return mark_safe(f"<a href='{url}' class='btn btn-sm btn-light btn-outline-success' target='_blank'>Download</a>")

    def get_absolute_url(self):
        return reverse_lazy("umrah:voucher_detail", kwargs={"pk": self.pk})

    @staticmethod
    def get_list_url():
        return reverse_lazy("umrah:voucher_list")

    @staticmethod
    def get_create_url():
        return reverse_lazy("umrah:voucher_create")

    def get_update_url(self):
        return reverse_lazy("umrah:voucher_update", kwargs={"pk": self.pk})

    def get_delete_url(self):
        return reverse_lazy("umrah:voucher_delete", kwargs={"pk": self.pk})

    def __str__(self):
        return f"{self.voucher_number}: {self.amount}"
