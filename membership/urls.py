from django.urls import path

from . import views

app_name = "membership"

urlpatterns = [
    path("members/", views.MemberListView.as_view(), name="member_list"),
    path("members/create/", views.MemberCreateView.as_view(), name="member_create"),
    path("members/detail/<str:pk>/", views.MemberDetailView.as_view(), name="member_detail"),
    path("members/update/<str:pk>/", views.MemberUpdateView.as_view(), name="member_update"),
    path("members/delete/<str:pk>/", views.MemberDeleteView.as_view(), name="member_delete"),
]
