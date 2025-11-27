from django.urls import path

from . import views

app_name = "web"

urlpatterns = [path("", views.Index.as_view(), name="index")]
