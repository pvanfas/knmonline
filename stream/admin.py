from django import forms
from django.contrib import admin
from django.db import models

from core.custom_admin import CustomAdmin

from .models import Channel, Playlist, Video, VideoCategory


@admin.register(Playlist)
class PlaylistAdmin(CustomAdmin):
    formfield_overrides = {models.ManyToManyField: {"widget": forms.CheckboxSelectMultiple}}


@admin.register(VideoCategory)
class VideoCategoryAdmin(CustomAdmin):
    prepopulated_fields = {"slug": ("name",)}


@admin.register(Channel)
class ChannelAdmin(CustomAdmin):
    pass


@admin.register(Video)
class VideoAdmin(CustomAdmin):
    pass
