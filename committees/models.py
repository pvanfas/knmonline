from django.db import models

from core.base import BaseModel
from core.models import District, State, Unit, Year, Zone


class Organization(BaseModel):
    code = models.CharField(unique=False, max_length=128)
    name = models.CharField(unique=True, max_length=128)

    def __str__(self):
        return str(f"{self.code} - {self.name}")


class Type(BaseModel):
    LEVEL_CHOICES = (("state", "State"), ("district", "District"), ("zone", "Zone"), ("unit", "Unit"))

    organization = models.ForeignKey(Organization, limit_choices_to={"is_active": True}, on_delete=models.PROTECT, related_name="type_organization")
    level = models.CharField(max_length=128, choices=LEVEL_CHOICES)

    class Meta:
        ordering = ("organization",)
        verbose_name = "Committee Type"
        verbose_name_plural = "Committee Types"

    def __str__(self):
        return str(f"{self.organization.code} - {self.level} Committee")


class Administration(BaseModel):
    type = models.ForeignKey(Type, limit_choices_to={"is_active": True}, on_delete=models.PROTECT, related_name="administration_type")
    year = models.ForeignKey(Year, limit_choices_to={"is_active": True}, on_delete=models.PROTECT, related_name="administration_year")
    name = models.CharField(unique=True, max_length=128)

    def __str__(self):
        return str(f"{self.name} {self.type}")


class StateCommittee(BaseModel):
    committee = models.ForeignKey(
        Administration,
        limit_choices_to={"is_active": True},
        on_delete=models.PROTECT,
        related_name="state_committee_administration",
    )
    state = models.ForeignKey(
        State,
        blank=True,
        null=True,
        limit_choices_to={"is_active": True},
        on_delete=models.PROTECT,
        related_name="state_committee_state",
    )
    president = models.ForeignKey(
        "accounts.User",
        blank=True,
        null=True,
        limit_choices_to={"is_active": True},
        on_delete=models.PROTECT,
        related_name="state_committee_president",
    )
    secretary = models.ForeignKey(
        "accounts.User",
        blank=True,
        null=True,
        limit_choices_to={"is_active": True},
        on_delete=models.PROTECT,
        related_name="state_committee_secretary",
    )
    treasurer = models.ForeignKey(
        "accounts.User",
        blank=True,
        null=True,
        limit_choices_to={"is_active": True},
        on_delete=models.PROTECT,
        related_name="state_committee_treasurer",
    )
    vice_presidents = models.ManyToManyField(
        "accounts.User",
        blank=True,
        limit_choices_to={"is_active": True},
        related_name="state_committee_vice_presidents",
    )
    joint_secretaries = models.ManyToManyField(
        "accounts.User",
        blank=True,
        limit_choices_to={"is_active": True},
        related_name="state_committee_joint_secretaries",
    )
    secretariat_members = models.ManyToManyField(
        "accounts.User",
        blank=True,
        limit_choices_to={"is_active": True},
        related_name="state_committee_secretariat_members",
    )
    executive_members = models.ManyToManyField(
        "accounts.User",
        blank=True,
        limit_choices_to={"is_active": True},
        related_name="state_committee_executive_members",
    )

    def __str__(self):
        return str(f"{self.committee} {self.committee.name}")


class DistrictCommittee(BaseModel):
    committee = models.ForeignKey(
        Administration,
        limit_choices_to={"is_active": True},
        on_delete=models.PROTECT,
        related_name="district_committee_committee",
    )
    district = models.ForeignKey(
        District,
        blank=True,
        null=True,
        limit_choices_to={"is_active": True},
        on_delete=models.PROTECT,
        related_name="district_committee_district",
    )
    president = models.ForeignKey(
        "accounts.User",
        blank=True,
        null=True,
        limit_choices_to={"is_active": True},
        on_delete=models.PROTECT,
        related_name="district_committee_president",
    )
    secretary = models.ForeignKey(
        "accounts.User",
        blank=True,
        null=True,
        limit_choices_to={"is_active": True},
        on_delete=models.PROTECT,
        related_name="district_committee_secretary",
    )
    treasurer = models.ForeignKey(
        "accounts.User",
        blank=True,
        null=True,
        limit_choices_to={"is_active": True},
        on_delete=models.PROTECT,
        related_name="district_committee_treasurer",
    )
    vice_presidents = models.ManyToManyField(
        "accounts.User",
        blank=True,
        limit_choices_to={"is_active": True},
        related_name="district_committee_vice_presidents",
    )
    joint_secretaries = models.ManyToManyField(
        "accounts.User",
        blank=True,
        limit_choices_to={"is_active": True},
        related_name="district_committee_joint_secretaries",
    )
    secretariat_members = models.ManyToManyField(
        "accounts.User",
        blank=True,
        limit_choices_to={"is_active": True},
        related_name="district_committee_secretariat_members",
    )
    executive_members = models.ManyToManyField(
        "accounts.User",
        blank=True,
        limit_choices_to={"is_active": True},
        related_name="district_committee_executive_members",
    )

    def __str__(self):
        return str(f"{self.committee} {self.committee.name}")


class ZoneCommittee(BaseModel):
    committee = models.ForeignKey(
        Administration,
        limit_choices_to={"is_active": True},
        on_delete=models.PROTECT,
        related_name="zone_committee_committee",
    )
    zone = models.ForeignKey(
        Zone,
        blank=True,
        null=True,
        limit_choices_to={"is_active": True},
        on_delete=models.PROTECT,
        related_name="zone_committee_zone",
    )
    president = models.ForeignKey(
        "accounts.User",
        blank=True,
        null=True,
        limit_choices_to={"is_active": True},
        on_delete=models.PROTECT,
        related_name="zone_committee_president",
    )
    secretary = models.ForeignKey(
        "accounts.User",
        blank=True,
        null=True,
        limit_choices_to={"is_active": True},
        on_delete=models.PROTECT,
        related_name="zone_committee_secretary",
    )
    treasurer = models.ForeignKey(
        "accounts.User",
        blank=True,
        null=True,
        limit_choices_to={"is_active": True},
        on_delete=models.PROTECT,
        related_name="zone_committee_treasurer",
    )
    vice_presidents = models.ManyToManyField("accounts.User", blank=True, limit_choices_to={"is_active": True}, related_name="zone_committee_vice_presidents")
    joint_secretaries = models.ManyToManyField(
        "accounts.User",
        blank=True,
        limit_choices_to={"is_active": True},
        related_name="zone_committee_joint_secretaries",
    )
    secretariat_members = models.ManyToManyField(
        "accounts.User",
        blank=True,
        limit_choices_to={"is_active": True},
        related_name="zone_committee_secretariat_members",
    )
    executive_members = models.ManyToManyField(
        "accounts.User",
        blank=True,
        limit_choices_to={"is_active": True},
        related_name="zone_committee_executive_members",
    )

    def __str__(self):
        return str(f"{self.committee} {self.committee.name}")


class UnitCommittee(BaseModel):
    committee = models.ForeignKey(
        Administration,
        limit_choices_to={"is_active": True},
        on_delete=models.PROTECT,
        related_name="unit_committee_committee",
    )
    unit = models.ForeignKey(
        Unit,
        blank=True,
        null=True,
        limit_choices_to={"is_active": True},
        on_delete=models.PROTECT,
        related_name="unit_committee_unit",
    )
    president = models.ForeignKey(
        "accounts.User",
        blank=True,
        null=True,
        limit_choices_to={"is_active": True},
        on_delete=models.PROTECT,
        related_name="unit_committee_president",
    )
    secretary = models.ForeignKey(
        "accounts.User",
        blank=True,
        null=True,
        limit_choices_to={"is_active": True},
        on_delete=models.PROTECT,
        related_name="unit_committee_secretary",
    )
    treasurer = models.ForeignKey(
        "accounts.User",
        blank=True,
        null=True,
        limit_choices_to={"is_active": True},
        on_delete=models.PROTECT,
        related_name="unit_committee_treasurer",
    )
    vice_presidents = models.ManyToManyField("accounts.User", blank=True, limit_choices_to={"is_active": True}, related_name="unit_committee_vice_presidents")
    joint_secretaries = models.ManyToManyField(
        "accounts.User",
        blank=True,
        limit_choices_to={"is_active": True},
        related_name="unit_committee_joint_secretaries",
    )
    secretariat_members = models.ManyToManyField(
        "accounts.User",
        blank=True,
        limit_choices_to={"is_active": True},
        related_name="unit_committee_secretariat_members",
    )
    executive_members = models.ManyToManyField(
        "accounts.User",
        blank=True,
        limit_choices_to={"is_active": True},
        related_name="unit_committee_executive_members",
    )

    def __str__(self):
        return str(f"{self.committee} {self.committee.name}")
