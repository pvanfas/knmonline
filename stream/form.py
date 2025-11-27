from django import forms

from .models import Playlist, Video


class PlaylistForm(forms.ModelForm):
    class Meta:
        model = Playlist
        fields = ("name", "price", "category")

    def __init__(self, channel, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["videos"].queryset = Video.objects.filter(channel=channel)
