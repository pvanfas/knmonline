from django.contrib import admin

from core.custom_admin import CustomAdmin

from .models import Order, OrderItem, Product, ProductCategory, Review


@admin.register(ProductCategory)
class ProductCategoryAdmin(CustomAdmin):
    pass


@admin.register(Product)
class ProductAdmin(CustomAdmin):
    pass


@admin.register(Review)
class ReviewAdmin(CustomAdmin):
    pass


@admin.register(OrderItem)
class OrderItemAdmin(CustomAdmin):
    pass


@admin.register(Order)
class OrderAdmin(CustomAdmin):
    pass
