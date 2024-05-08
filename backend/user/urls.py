from django.urls import path;
from . import views;

urlpatterns = [
    path("users/",views.UserListCreate.as_view(),name="user-view-create"),
    path("login",views.Login.as_view(),name="user-login"),
    path("register",views.Register.as_view(),name="user-register")
]

