from django.db import models
from django.utils.timezone import now
from tinymce.models import HTMLField
from versatileimagefield.fields import VersatileImageField

from accounts.models import User
from core.base import BaseModel


class Author(BaseModel):
    user = models.ForeignKey(User, limit_choices_to={"is_active": True}, on_delete=models.PROTECT, related_name="author_user")
    pen_name = models.CharField(max_length=128)
    email = models.EmailField(blank=True, null=True)
    photo = models.ImageField(blank=True, null=True, upload_to="images/articles/authors")
    about = models.TextField(blank=True, null=True)

    class Meta:
        verbose_name = "Article Author"
        verbose_name_plural = "Article Authors"

    def __str__(self):
        return str(self.pen_name)


class ArticleCategory(BaseModel):
    name = models.CharField(max_length=128)
    slug = models.SlugField(unique=True)
    image = VersatileImageField(blank=True, null=True, upload_to="images/articles/categories")
    description = models.TextField(blank=True, null=True)

    class Meta:
        verbose_name = "Article Category"
        verbose_name_plural = "Article Categories"

    @property
    def article_count(self):
        return Post.objects.filter(category=self, is_deleted=False).count()

    def __str__(self):
        return str(self.name)


class Post(BaseModel):
    COMMENT_CHOICES = (
        ("allow", "Allow"),
        ("show", "Do not allow, show existing"),
        ("hide", "Do not allow, hide existing"),
    )

    title = models.CharField(max_length=128)
    slug = models.SlugField(unique=True)
    author = models.ForeignKey(Author, limit_choices_to={"is_active": True}, on_delete=models.PROTECT, related_name="post_author")
    category = models.ForeignKey(ArticleCategory, limit_choices_to={"is_active": True}, on_delete=models.PROTECT, related_name="post_category")
    location = models.CharField(max_length=128, blank=True, null=True)
    display_time = models.DateTimeField(default=now)
    image = VersatileImageField(blank=True, null=True, upload_to="images/aticles/posts")
    content = HTMLField("Post Body")
    comment_option = models.CharField(max_length=128, choices=COMMENT_CHOICES, default="allow")

    class Meta:
        verbose_name = "Article Post"
        verbose_name_plural = "Article Posts"

    def __str__(self):
        return str(self.pk)


class Comment(BaseModel):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="comment_post")
    name = models.CharField(max_length=128)
    comment = models.TextField()
    is_approved = models.BooleanField(default=False)

    class Meta:
        ordering = ("-created_at",)

    def __str__(self):
        return str(self.name)


class Faq(BaseModel):
    question = models.CharField(max_length=128)
    answer = HTMLField("FAQ Answer")

    def __str__(self):
        return str(self.question)
