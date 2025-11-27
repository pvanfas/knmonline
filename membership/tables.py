from django_tables2 import columns

from core.base import BaseTable

from .models import Member


class MemberTable(BaseTable):
    full_name = columns.Column(verbose_name="Full Name", accessor="full_name")

    class Meta:
        model = Member
        fields = ("full_name", "mobile", "district", "zone", "unit")
        attrs = {"class": "table key-buttons border-bottom table-hover"}  # noqa: RUF012
