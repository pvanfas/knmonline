from django.db import models
from taggit.managers import TaggableManager
from versatileimagefield.fields import VersatileImageField

from accounts.models import User
from core.base import BaseModel
from core.models import Language


class Channel(BaseModel):
    is_verified = models.BooleanField(default=False)
    name = models.CharField(max_length=128)
    administrator = models.ForeignKey(User, limit_choices_to={"is_active": True}, on_delete=models.PROTECT, related_name="channel_administrator")
    logo = VersatileImageField(upload_to="images/stream/logos")
    cover = VersatileImageField(blank=True, null=True, upload_to="images/stream/covers")
    facebook_url = models.URLField(blank=True, null=True)
    twitter_url = models.URLField(blank=True, null=True)
    instagram_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return str(self.name)


class VideoCategory(BaseModel):
    name = models.CharField(max_length=128)
    slug = models.SlugField(unique=True)
    image = VersatileImageField(blank=True, null=True, upload_to="images/stream/categories")
    description = models.TextField(blank=True, null=True)

    class Meta:
        verbose_name = "Video Category"
        verbose_name_plural = "Video Categories"

    def __str__(self):
        return str(self.name)


class Video(BaseModel):
    channel = models.ForeignKey(Channel, limit_choices_to={"is_active": True}, on_delete=models.PROTECT, related_name="video_channel")
    category = models.ForeignKey(VideoCategory, limit_choices_to={"is_active": True}, on_delete=models.PROTECT, related_name="video_category")
    title = models.CharField(max_length=128)
    video_id = models.CharField(max_length=11, unique=True)
    language = models.ForeignKey(Language, limit_choices_to={"is_active": True}, on_delete=models.PROTECT, related_name="video_language")
    description = models.TextField(blank=True, null=True)
    cast = models.TextField(blank=True, null=True)
    tags = TaggableManager(blank=True)

    def __str__(self):
        return str(self.title)


class Playlist(BaseModel):
    channel = models.ForeignKey(Channel, limit_choices_to={"is_active": True}, on_delete=models.PROTECT, related_name="playlists")
    name = models.CharField(max_length=128)
    videos = models.ManyToManyField(Video)

    class Meta:
        verbose_name = "Video Playlist"
        verbose_name_plural = "Video Playlists"

    def __str__(self):
        return str(f"{self.name} - {self.channel.name} - {self.videos.count()} videos")
