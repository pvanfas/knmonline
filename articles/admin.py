from django.contrib import admin

from core.custom_admin import CustomAdmin

from .models import ArticleCategory, Author, Comment, Faq, Post


@admin.register(Author)
class AuthorAdmin(CustomAdmin):
    pass


@admin.register(ArticleCategory)
class ArticleCategoryAdmin(CustomAdmin):
    pass


@admin.register(Post)
class PostAdmin(CustomAdmin):
    pass


@admin.register(Comment)
class CommentAdmin(CustomAdmin):
    pass


@admin.register(Faq)
class FaqAdmin(CustomAdmin):
    pass
