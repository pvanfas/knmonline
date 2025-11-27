from django.urls import path

from . import views

app_name = "umrah"

urlpatterns = [
    path("", views.UmrahDashboardView.as_view(), name="umrah_dashboard"),
    path("id_card/<str:pk>/", views.IDCard.as_view(), name="id_card"),
    path("bulk_id_card/<str:pk>/", views.BulkIDCard.as_view(), name="bulk_id_card"),
    path("bulk_reciepts/<str:pk>/", views.BulkReciept.as_view(), name="bulk_reciepts"),
    path("print_selected_payments/", views.PrintSelectedPayments.as_view(), name="print_selected_payments"),
    path("bulk_vouchers/<str:pk>/", views.BulkVoucher.as_view(), name="bulk_vouchers"),
    path("print_selected_vouchers/", views.PrintSelectedVouchers.as_view(), name="print_selected_vouchers"),
    path("bulk_tags/<str:pk>/", views.BulkTags.as_view(), name="bulk_tags"),
    path("reciept/<str:pk>/", views.Reciept.as_view(), name="reciept"),
    path("voucher/<str:pk>/", views.VoucherView.as_view(), name="voucher"),
    # Reports
    path("cash-daybook/", views.CashDaybookView.as_view(), name="cash_daybook"),
    path("batch-report/", views.BatchReportView.as_view(), name="batch_report"),
    # Agency
    path("agencies/", views.AgencyListView.as_view(), name="agency_list"),
    path("agencies/create/", views.AgencyCreateView.as_view(), name="agency_create"),
    path("agencies/detail/<str:pk>/", views.AgencyDetailView.as_view(), name="agency_detail"),
    path("agencies/update/<str:pk>/", views.AgencyUpdateView.as_view(), name="agency_update"),
    path("agencies/delete/<str:pk>/", views.AgencyDeleteView.as_view(), name="agency_delete"),
    # Applicant
    path("applicants/", views.ApplicantListView.as_view(), name="applicant_list"),
    path("applicants/all/", views.AllApplicantListView.as_view(), name="all_applicant_list"),
    path("applicants/create/", views.ApplicantCreateView.as_view(), name="applicant_create"),
    path("applicants/detail/<str:pk>/", views.ApplicantDetailView.as_view(), name="applicant_detail"),
    path("applicants/update/<str:pk>/", views.ApplicantUpdateView.as_view(), name="applicant_update"),
    path("applicants/delete/<str:pk>/", views.ApplicantDeleteView.as_view(), name="applicant_delete"),
    # Batch
    path("batches/", views.BatchListView.as_view(), name="batch_list"),
    path("batches/create/", views.BatchCreateView.as_view(), name="batch_create"),
    path("batches/detail/<str:slug>/", views.BatchDetailView.as_view(), name="batch_detail"),
    path("batches/update/<str:slug>/", views.BatchUpdateView.as_view(), name="batch_update"),
    path("batches/delete/<str:slug>/", views.BatchDeleteView.as_view(), name="batch_delete"),
    # PaymentPurpose
    path("payment_purposes/", views.PaymentPurposeListView.as_view(), name="payment_purpose_list"),
    path("payment_purposes/create/", views.PaymentPurposeCreateView.as_view(), name="payment_purpose_create"),
    path("payment_purposes/detail/<str:pk>/", views.PaymentPurposeDetailView.as_view(), name="payment_purpose_detail"),
    path("payment_purposes/update/<str:pk>/", views.PaymentPurposeUpdateView.as_view(), name="payment_purpose_update"),
    path("payment_purposes/delete/<str:pk>/", views.PaymentPurposeDeleteView.as_view(), name="payment_purpose_delete"),
    # UmrahPayment
    path("umrah_payments/", views.UmrahPaymentListView.as_view(), name="payment_list"),
    path("umrah_payments/archived/", views.UmrahPaymentArchivedListView.as_view(), name="archived_payment_list"),
    path("umrah_payments/create/", views.UmrahPaymentCreateView.as_view(), name="payment_create"),
    path("umrah_payments/detail/<str:pk>/", views.UmrahPaymentDetailView.as_view(), name="payment_detail"),
    path("umrah_payments/update/<str:pk>/", views.UmrahPaymentUpdateView.as_view(), name="payment_update"),
    path("umrah_payments/delete/<str:pk>/", views.UmrahPaymentDeleteView.as_view(), name="payment_delete"),
    # Voucher
    path("vouchers/", views.VoucherListView.as_view(), name="voucher_list"),
    path("vouchers/archived/", views.VoucherArchivedListView.as_view(), name="archived_voucher_list"),
    path("vouchers/create/", views.VoucherCreateView.as_view(), name="voucher_create"),
    path("vouchers/detail/<str:pk>/", views.VoucherDetailView.as_view(), name="voucher_detail"),
    path("vouchers/update/<str:pk>/", views.VoucherUpdateView.as_view(), name="voucher_update"),
    path("vouchers/delete/<str:pk>/", views.VoucherDeleteView.as_view(), name="voucher_delete"),
]
