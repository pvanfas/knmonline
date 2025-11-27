from core.mixins import HybridCreateView, HybridDeleteView, HybridDetailView, HybridListView, HybridUpdateView

from .models import Member
from .tables import MemberTable


class MemberListView(HybridListView):
    model = Member
    filterset_fields = ("state", "district", "zone", "unit", "profession")
    table_class = MemberTable
    search_fields = ("first_name", "last_name", "mobile")


class MemberCreateView(HybridCreateView):
    model = Member


class MemberDetailView(HybridDetailView):
    model = Member


class MemberUpdateView(HybridUpdateView):
    model = Member


class MemberDeleteView(HybridDeleteView):
    model = Member
