from decimal import Decimal

from django.core.validators import MinValueValidator
from django.db import models
from versatileimagefield.fields import VersatileImageField

from accounts.models import User
from core.base import BaseModel
from core.models import State


class ProductCategory(BaseModel):
    title = models.CharField(max_length=128)
    slug = models.SlugField(unique=True)

    class Meta:
        verbose_name = "Product Category"
        verbose_name_plural = "Product Categories"

    def __str__(self):
        return str(self.title)


class Product(BaseModel):
    title = models.CharField(max_length=128)
    subtitle = models.CharField(max_length=128, blank=True, null=True)
    slug = models.SlugField()
    photo = VersatileImageField(upload_to="shopping/products/images")
    category = models.ForeignKey(ProductCategory, on_delete=models.CASCADE)
    description = models.TextField()
    price = models.DecimalField(default=0.0, decimal_places=2, max_digits=15, validators=[MinValueValidator(Decimal("0.00"))])
    mrp = models.DecimalField(
        default=0.0,
        decimal_places=2,
        max_digits=15,
        validators=[MinValueValidator(Decimal("0.00"))],
        verbose_name="MRP",
    )

    class Meta:
        ordering = ("title",)

    def __str__(self):
        return str(self.title)

    @property
    def disc_percent(self):
        if self.mrp != 0:
            return round(((self.mrp - self.price) / self.mrp) * 100)
        else:
            return 0


class Review(BaseModel):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    date = models.DateField(auto_now=True)
    name = models.CharField(max_length=120)
    email = models.EmailField(blank=True, null=True)
    message = models.TextField()
    approved = models.BooleanField(default=False)

    def __str__(self):
        return str(self.name)


class OrderItem(BaseModel):
    user_session = models.CharField(max_length=100)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.DecimalField(default=1, decimal_places=0, max_digits=15)
    placed = models.BooleanField(default=False)

    def __str__(self):
        subtotal = self.quantity * self.product.price
        return f"{self.quantity} of ({self.product.title}) with total {subtotal}"

    @property
    def product_price(self):
        return self.product.price

    @property
    def subtotal(self):
        return self.quantity * self.product.price


class Order(BaseModel):
    ORDER_STATUS = (
        ("not_yet_shipped", "Not Yet Shipped"),
        ("shipped", "Shipped"),
        ("cancelled", "Cancelled"),
        ("refunded", "Refunded"),
        ("delivered", "Delivered"),
    )

    user_session = models.CharField(max_length=100)
    order_by = models.ForeignKey(
        User,
        blank=True,
        null=True,
        limit_choices_to={"is_active": True},
        on_delete=models.PROTECT,
        related_name="order_by",
    )
    order_id = models.CharField(max_length=100)
    items = models.ManyToManyField(OrderItem)
    name = models.CharField(max_length=100)
    phone = models.CharField("Delivery Phone", max_length=100)
    address = models.TextField("Delivery Address")
    pincode = models.CharField(max_length=10)
    state = models.ForeignKey(State, limit_choices_to={"is_active": True}, on_delete=models.PROTECT)
    notes = models.TextField("Delivery Address", blank=True, null=True)
    order_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=100, choices=ORDER_STATUS, default="not_yet_shipped")

    class Meta:
        ordering = ("-order_date", "status")

    def __str__(self):
        return self.order_id
