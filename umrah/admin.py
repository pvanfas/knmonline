from django.contrib import admin
from django.utils.safestring import mark_safe
from import_export import fields, resources

from core.actions import mark_active, mark_inactive
from core.custom_admin import CustomAdmin

from .actions import archive_selected, download_id_card, unarchive_selected
from .models import Agency, Applicant, Batch, PaymentPurpose, UmrahPayment, Voucher


class UmrahPaymentInline(admin.StackedInline):
    model = UmrahPayment
    extra = 0


class VoucherInline(admin.TabularInline):
    model = Voucher
    extra = 0
    exclude = ("notes", "is_active")


class AgencyResource(resources.ModelResource):
    class Meta:
        model = Agency


class BatchResource(resources.ModelResource):
    applicants_count = fields.Field(attribute="applicants_count")
    payment_bank_total = fields.Field(attribute="payment_bank_total")
    payment_cash_total = fields.Field(attribute="payment_cash_total")
    voucher_total = fields.Field(attribute="voucher_total")

    class Meta:
        exclude = ("id", "slug", "color", "creator")
        model = Batch


class ApplicantResource(resources.ModelResource):
    batch_name = fields.Field(attribute="batch_name")
    total_amount = fields.Field(attribute="total_amount")
    payable_amount = fields.Field(attribute="payable_amount")
    paid_amount = fields.Field(attribute="paid_amount")
    balance_amount = fields.Field(attribute="balance_amount")
    expiry_validity = fields.Field(attribute="expiry_validity")

    class Meta:
        model = Applicant
        exclude = ("batch", "creator", "is_active")
        export_order = (
            "sl_no",
            "first_name",
            "last_name",
            "passport_number",
            "dob",
            "passport_issue",
            "place_of_issue",
            "passport_expiry",
            "gender",
            "total_amount",
            "discount",
            "payable_amount",
            "paid_amount",
            "balance_amount",
            "created_at",
        )


class UmrahPaymentResource(resources.ModelResource):
    applicant_name = fields.Field(attribute="applicant_name")

    class Meta:
        model = UmrahPayment


class VoucherResource(resources.ModelResource):
    purpose = fields.Field(attribute="purpose_name")
    batch = fields.Field(attribute="batch_name")

    class Meta:
        model = Voucher
        exclude = ("creator", "is_active")
        export_order = ("voucher_number", "purpose", "amount", "mode", "batch", "date", "notes", "created_at", "updated_at")


@admin.register(Agency)
class AgencyAdmin(CustomAdmin):
    def applicants_count(self):
        return mark_safe(f"<a href='/admin/umrah/applicant/?agency__id__exact={self.id}'><strong>{self.applicants_count()}</strong></a>")

    resource_class = AgencyResource
    list_display = ("name", applicants_count, "location", "mobile", "whatsapp")
    search_fields = ("name",)


@admin.register(Batch)
class BatchAdmin(CustomAdmin):
    resource_class = BatchResource
    inlines = (VoucherInline,)
    prepopulated_fields = {"slug": ("name",)}
    list_display = (
        "name",
        "year",
        "is_completed",
        "serial_no",
        "created_at",
        "bulk_id_card",
        "bulk_reciepts",
        "bulk_vouchers",
        "bulk_tags",
        "applicants_count",
        "amount",
        "subtotal",
        "payment_bank_total",
        "payment_cash_total",
        "voucher_total",
        "cash_balance",
    )
    list_filter = ("year", "is_completed", "created_at", "created_at")
    search_fields = ("name",)


@admin.register(Applicant)
class ApplicantAdmin(CustomAdmin):
    def image_tag(self):
        return mark_safe(
            f"""
                <img src='{self.photo.url}' loading='lazy' style='width:24.5px;height:31.5px;'
                    onmouseover="this.style.height=\'225px\'; this.style.width=\'175px\';this.style.position=\'absolute\';this.style.zIndex=\'5\'"
                    onmouseout="this.style.height=\'31.5px\'; this.style.width=\'24.5px\';this.style.position=\'initial\';this.style.zIndex=\'0\'"
                 />
            """
        )

    resource_class = ApplicantResource
    inlines = [UmrahPaymentInline]
    actions = (mark_active, mark_inactive, download_id_card)
    list_display = (
        "first_name",
        "last_name",
        "sl_no",
        "whatsapp_link",
        image_tag,
        "id_card",
        "passport_number",
        "expiry_validity",
        "balance_amount",
        "dob",
        "age",
        "gender",
        "total_amount",
        "discount",
        "payable_amount",
        "paid_amount",
    )
    list_filter = ("batch", "passport_expiry", "gender", "created_at", "agency", "batch__year")
    autocomplete_fields = ("batch",)
    search_fields = ("first_name", "last_name", "passport_number")
    date_hierarchy = "created_at"

    class Media:
        js = ("custom_admin/js/admin.js",)
        css = {"all": ("custom_admin/css/admin.css",)}


@admin.register(UmrahPayment)
class UmrahPaymentAdmin(CustomAdmin):
    list_display = ("applicant", "created_at", "reciept_number", "amount", "roundoff", "date", "mode", "reciept", "is_archived")
    autocomplete_fields = ("applicant",)
    resource_class = UmrahPaymentResource
    list_filter = ("applicant__batch", "mode", "is_archived")
    search_fields = ("applicant__first_name", "applicant__last_name", "applicant__passport_number", "reciept_number")
    date_hierarchy = "created_at"
    actions = (archive_selected, unarchive_selected)


@admin.register(PaymentPurpose)
class PaymentPurposeAdmin(CustomAdmin):
    list_display = ("name", "is_active")
    list_filter = ("is_active",)
    search_fields = ("name",)


@admin.register(Voucher)
class VoucherAdmin(CustomAdmin):
    list_display = ("voucher_number", "created_at", "purpose", "amount", "batch", "date", "voucher", "is_active", "is_archived")
    list_filter = ("is_active", "batch", "purpose", "is_archived")
    search_fields = ("voucher_number",)
    autocomplete_fields = ("batch", "purpose")
    # resource_class = VoucherResource
    date_hierarchy = "created_at"
    actions = (archive_selected, unarchive_selected)
