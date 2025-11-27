from decimal import Decimal

from django.core.validators import MinValueValidator
from django.db import models
from versatileimagefield.fields import VersatileImageField

from accounts.models import User
from core.base import BaseModel
from core.models import Country, Language


class Publisher(BaseModel):
    user = models.ForeignKey(User, limit_choices_to={"is_active": True}, on_delete=models.PROTECT, related_name="publisher_user")
    pen_name = models.CharField(max_length=128)
    about = models.TextField(blank=True, null=True)
    website = models.URLField(blank=True, null=True)

    def __str__(self):
        return str(self.pen_name)


class MagazineCategory(BaseModel):
    name = models.CharField(max_length=128)
    slug = models.SlugField(unique=True)
    image = VersatileImageField(blank=True, null=True, upload_to="images/publications/categories")
    description = models.TextField(blank=True, null=True)

    class Meta:
        verbose_name = "Magazine Category"
        verbose_name_plural = "Magazine Categories"

    def __str__(self):
        return str(self.name)


class Magazine(BaseModel):
    name = models.CharField("Magazine Name", max_length=128)
    about = models.TextField(blank=True, null=True)
    website = models.URLField("Website Address", blank=True, null=True)
    category = models.ForeignKey(
        MagazineCategory,
        limit_choices_to={"is_active": True},
        on_delete=models.PROTECT,
        related_name="magazine_category",
    )
    text_direction = models.CharField(max_length=128, choices=(("rtl", "Right to Left"), ("ltl", "Left to Right")))
    country = models.ForeignKey(
        Country,
        limit_choices_to={"is_active": True},
        on_delete=models.PROTECT,
        related_name="magazine_country",
        verbose_name="Publishing Country",
    )
    language = models.ForeignKey(
        Language,
        limit_choices_to={"is_active": True},
        on_delete=models.PROTECT,
        related_name="magazine_language",
        verbose_name="Magazine Language",
    )

    def __str__(self):
        return str(self.name)


class Issue(BaseModel):
    magazine = models.ForeignKey(Magazine, limit_choices_to={"is_active": True}, on_delete=models.PROTECT, related_name="issue_magazine")
    title = models.CharField("Book Title", max_length=128)
    description = models.TextField(blank=True, null=True)
    number = models.PositiveIntegerField("Issue Number")
    price = models.DecimalField(default=0.00, decimal_places=2, max_digits=15, validators=[MinValueValidator(Decimal("0.00"))])
    cover_image = VersatileImageField("Cover Image", upload_to="images/publications/books")
    date = models.DateField("Publishing Date")
    file = models.FileField(upload_to="books")
    is_free = models.BooleanField(default=False)
    is_special_issue = models.BooleanField(
        default=False,
        help_text="Special issue will not be come under subscription. User has to purchase single issue to read it",
    )

    class Meta:
        ordering = ("-number", "-date")
        verbose_name = "Magazine Issue"
        verbose_name_plural = "Magazine Issues"

    def __str__(self):
        return str(self.title)
