from djangoql.admin import DjangoQLSearchMixin
from import_export.admin import ImportExportModelAdmin

from .actions import mark_active, mark_inactive


class CustomAdmin(DjangoQLSearchMixin, ImportExportModelAdmin):
    exclude = ["creator"]
    list_display = ("__str__", "created_at", "updated_at", "is_active")
    list_filter = ("is_active",)
    actions = [mark_active, mark_inactive]
    djangoql_completion_enabled_by_default = False

    def save_model(self, request, obj, form, change):
        obj.creator = request.user
        super().save_model(request, obj, form, change)
