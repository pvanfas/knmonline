from django.urls import path

from . import views

app_name = "core"

urlpatterns = [
    path("", views.DashboardView.as_view(), name="dashboard_view"),
    path("masters/", views.MastersDashboardView.as_view(), name="masters_dashboard"),
    # Country
    path("countries/", views.CountryListView.as_view(), name="country_list"),
    path("countries/create/", views.CountryCreateView.as_view(), name="country_create"),
    path("countries/detail/<str:pk>/", views.CountryDetailView.as_view(), name="country_detail"),
    path("countries/update/<str:pk>/", views.CountryUpdateView.as_view(), name="country_update"),
    path("countries/delete/<str:pk>/", views.CountryDeleteView.as_view(), name="country_delete"),
    # Department
    path("departments/", views.DepartmentListView.as_view(), name="department_list"),
    path("departments/create/", views.DepartmentCreateView.as_view(), name="department_create"),
    path("departments/detail/<str:pk>/", views.DepartmentDetailView.as_view(), name="department_detail"),
    path("departments/update/<str:pk>/", views.DepartmentUpdateView.as_view(), name="department_update"),
    path("departments/delete/<str:pk>/", views.DepartmentDeleteView.as_view(), name="department_delete"),
    # Designation
    path("designations/", views.DesignationListView.as_view(), name="designation_list"),
    path("designations/create/", views.DesignationCreateView.as_view(), name="designation_create"),
    path("designations/detail/<str:pk>/", views.DesignationDetailView.as_view(), name="designation_detail"),
    path("designations/update/<str:pk>/", views.DesignationUpdateView.as_view(), name="designation_update"),
    path("designations/delete/<str:pk>/", views.DesignationDeleteView.as_view(), name="designation_delete"),
    # Year
    path("years/", views.YearListView.as_view(), name="year_list"),
    path("years/create/", views.YearCreateView.as_view(), name="year_create"),
    path("years/detail/<str:pk>/", views.YearDetailView.as_view(), name="year_detail"),
    path("years/update/<str:pk>/", views.YearUpdateView.as_view(), name="year_update"),
    path("years/delete/<str:pk>/", views.YearDeleteView.as_view(), name="year_delete"),
    # Language
    path("languages/", views.LanguageListView.as_view(), name="language_list"),
    path("languages/create/", views.LanguageCreateView.as_view(), name="language_create"),
    path("languages/detail/<str:pk>/", views.LanguageDetailView.as_view(), name="language_detail"),
    path("languages/update/<str:pk>/", views.LanguageUpdateView.as_view(), name="language_update"),
    path("languages/delete/<str:pk>/", views.LanguageDeleteView.as_view(), name="language_delete"),
    # State
    path("states/", views.StateListView.as_view(), name="state_list"),
    path("states/create/", views.StateCreateView.as_view(), name="state_create"),
    path("states/detail/<str:pk>/", views.StateDetailView.as_view(), name="state_detail"),
    path("states/update/<str:pk>/", views.StateUpdateView.as_view(), name="state_update"),
    path("states/delete/<str:pk>/", views.StateDeleteView.as_view(), name="state_delete"),
    # District
    path("districts/", views.DistrictListView.as_view(), name="district_list"),
    path("districts/create/", views.DistrictCreateView.as_view(), name="district_create"),
    path("districts/detail/<str:pk>/", views.DistrictDetailView.as_view(), name="district_detail"),
    path("districts/update/<str:pk>/", views.DistrictUpdateView.as_view(), name="district_update"),
    path("districts/delete/<str:pk>/", views.DistrictDeleteView.as_view(), name="district_delete"),
    # Zone
    path("zones/", views.ZoneListView.as_view(), name="zone_list"),
    path("zones/create/", views.ZoneCreateView.as_view(), name="zone_create"),
    path("zones/detail/<str:pk>/", views.ZoneDetailView.as_view(), name="zone_detail"),
    path("zones/update/<str:pk>/", views.ZoneUpdateView.as_view(), name="zone_update"),
    path("zones/delete/<str:pk>/", views.ZoneDeleteView.as_view(), name="zone_delete"),
    # Unit
    path("units/", views.UnitListView.as_view(), name="unit_list"),
    path("units/create/", views.UnitCreateView.as_view(), name="unit_create"),
    path("units/detail/<str:pk>/", views.UnitDetailView.as_view(), name="unit_detail"),
    path("units/update/<str:pk>/", views.UnitUpdateView.as_view(), name="unit_update"),
    path("units/delete/<str:pk>/", views.UnitDeleteView.as_view(), name="unit_delete"),
]
