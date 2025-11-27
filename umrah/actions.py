from django.contrib import messages
from django.utils.translation import ngettext


def download_id_card(self, request, queryset):
    download = queryset.update(is_active=True)
    self.message_user(
        request,
        ngettext("%d ID Card was successfully Downloaded", "%d ID Cards were successfully Downloaded.", download) % download,
        messages.SUCCESS,
    )


def archive_selected(self, request, queryset):
    updated = queryset.update(is_archived=True)
    self.message_user(
        request,
        ngettext("%d item is archived.", "%d items are archived", updated) % updated,
        messages.SUCCESS,
    )


def unarchive_selected(self, request, queryset):
    updated = queryset.update(is_archived=False)
    self.message_user(
        request,
        ngettext("%d item is unarchived.", "%d items are unarchived", updated) % updated,
        messages.SUCCESS,
    )
