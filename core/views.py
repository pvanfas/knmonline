from .mixins import HybridCreateView, HybridDeleteView, HybridDetailView, HybridListView, HybridTemplateView, HybridUpdateView
from .models import Country, Department, Designation, District, Language, State, Unit, Year, Zone
from .tables import CountryTable, DepartmentTable, DesignationTable, DistrictTable, LanguageTable, StateTable, UnitTable, YearTable, ZoneTable


class DashboardView(HybridTemplateView):
    template_name = "app/main/home.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context


class MastersDashboardView(HybridTemplateView):
    template_name = "app/masters_dashboard.html"
    title = "Masters"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["cards"] = [
            {
                "title": "Countries",
                "url": "core:country_list",
                "icon": "feather-globe",
                "gradient": "linear-gradient(135deg, rgba(99, 102, 241, 0.8) 0%, rgba(139, 92, 246, 0.8) 100%)",
            },
            {
                "title": "States",
                "url": "core:state_list",
                "icon": "feather-map-pin",
                "gradient": "linear-gradient(135deg, rgba(236, 72, 153, 0.8) 0%, rgba(219, 39, 119, 0.8) 100%)",
            },
            {
                "title": "Districts",
                "url": "core:district_list",
                "icon": "feather-map",
                "gradient": "linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(37, 99, 235, 0.8) 100%)",
            },
            {
                "title": "Zones",
                "url": "core:zone_list",
                "icon": "feather-layers",
                "gradient": "linear-gradient(135deg, rgba(34, 197, 94, 0.8) 0%, rgba(22, 163, 74, 0.8) 100%)",
            },
            {
                "title": "Units",
                "url": "core:unit_list",
                "icon": "feather-box",
                "gradient": "linear-gradient(135deg, rgba(251, 146, 60, 0.8) 0%, rgba(249, 115, 22, 0.8) 100%)",
            },
            {
                "title": "Departments",
                "url": "core:department_list",
                "icon": "feather-briefcase",
                "gradient": "linear-gradient(135deg, rgba(168, 85, 247, 0.8) 0%, rgba(147, 51, 234, 0.8) 100%)",
            },
            {
                "title": "Designations",
                "url": "core:designation_list",
                "icon": "feather-user",
                "gradient": "linear-gradient(135deg, rgba(239, 68, 68, 0.8) 0%, rgba(220, 38, 38, 0.8) 100%)",
            },
            {
                "title": "Years",
                "url": "core:year_list",
                "icon": "feather-calendar",
                "gradient": "linear-gradient(135deg, rgba(14, 165, 233, 0.8) 0%, rgba(2, 132, 199, 0.8) 100%)",
            },
            {
                "title": "Languages",
                "url": "core:language_list",
                "icon": "feather-message-circle",
                "gradient": "linear-gradient(135deg, rgba(20, 184, 166, 0.8) 0%, rgba(15, 118, 110, 0.8) 100%)",
            },
        ]
        return context


class CountryListView(HybridListView):
    model = Country
    filterset_fields = ("name",)
    table_class = CountryTable
    search_fields = ("name", "code")


class CountryCreateView(HybridCreateView):
    model = Country


class CountryDetailView(HybridDetailView):
    model = Country


class CountryUpdateView(HybridUpdateView):
    model = Country


class CountryDeleteView(HybridDeleteView):
    model = Country


class DepartmentListView(HybridListView):
    model = Department
    filterset_fields = ("name",)
    table_class = DepartmentTable
    search_fields = ("name",)


class DepartmentCreateView(HybridCreateView):
    model = Department


class DepartmentDetailView(HybridDetailView):
    model = Department


class DepartmentUpdateView(HybridUpdateView):
    model = Department


class DepartmentDeleteView(HybridDeleteView):
    model = Department


class DesignationListView(HybridListView):
    model = Designation
    filterset_fields = ("name",)
    table_class = DesignationTable
    search_fields = ("name",)


class DesignationCreateView(HybridCreateView):
    model = Designation


class DesignationDetailView(HybridDetailView):
    model = Designation


class DesignationUpdateView(HybridUpdateView):
    model = Designation


class DesignationDeleteView(HybridDeleteView):
    model = Designation


class YearListView(HybridListView):
    model = Year
    filterset_fields = ("name",)
    table_class = YearTable
    search_fields = ("name",)


class YearCreateView(HybridCreateView):
    model = Year


class YearDetailView(HybridDetailView):
    model = Year


class YearUpdateView(HybridUpdateView):
    model = Year


class YearDeleteView(HybridDeleteView):
    model = Year


class LanguageListView(HybridListView):
    model = Language
    filterset_fields = ("name",)
    table_class = LanguageTable
    search_fields = ("name", "family", "native_name", "lang_code")


class LanguageCreateView(HybridCreateView):
    model = Language


class LanguageDetailView(HybridDetailView):
    model = Language


class LanguageUpdateView(HybridUpdateView):
    model = Language


class LanguageDeleteView(HybridDeleteView):
    model = Language


class StateListView(HybridListView):
    model = State
    filterset_fields = ("name", "state_code", "tin_number")
    table_class = StateTable
    search_fields = ("name", "state_code", "tin_number")


class StateCreateView(HybridCreateView):
    model = State


class StateDetailView(HybridDetailView):
    model = State


class StateUpdateView(HybridUpdateView):
    model = State


class StateDeleteView(HybridDeleteView):
    model = State


class DistrictListView(HybridListView):
    model = District
    filterset_fields = ("name",)
    table_class = DistrictTable
    search_fields = ("name", "state")


class DistrictCreateView(HybridCreateView):
    model = District


class DistrictDetailView(HybridDetailView):
    model = District


class DistrictUpdateView(HybridUpdateView):
    model = District


class DistrictDeleteView(HybridDeleteView):
    model = District


class ZoneListView(HybridListView):
    model = Zone
    filterset_fields = ("name",)
    table_class = ZoneTable
    search_fields = ("name", "district")


class ZoneCreateView(HybridCreateView):
    model = Zone


class ZoneDetailView(HybridDetailView):
    model = Zone


class ZoneUpdateView(HybridUpdateView):
    model = Zone


class ZoneDeleteView(HybridDeleteView):
    model = Zone


class UnitListView(HybridListView):
    model = Unit
    table_class = UnitTable
    search_fields = ("zone",)
    filterset_fields = ("name",)


class UnitCreateView(HybridCreateView):
    model = Unit


class UnitDetailView(HybridDetailView):
    model = Unit


class UnitUpdateView(HybridUpdateView):
    model = Unit


class UnitDeleteView(HybridDeleteView):
    model = Unit
