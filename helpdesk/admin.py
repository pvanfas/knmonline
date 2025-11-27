from django.contrib import admin

from core.custom_admin import CustomAdmin

from .models import Ticket


@admin.register(Ticket)
class TicketAdmin(CustomAdmin):
    pass
