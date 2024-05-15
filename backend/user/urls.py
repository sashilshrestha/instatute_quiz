from django.urls import path;
from . import views;

urlpatterns = [
    path("users/",views.UserListCreate.as_view(),name="user-view-create"),
    path("login",views.Login.as_view(),name="user-login"),
    path("register",views.Register.as_view(),name="user-register"),
    path("profile/",views.UserProfileController.as_view(),name="user-profile"),
    path("changePassword/",views.ChangePasswordController.as_view(),name="change-password")
    # path("logout",views.Logout.as_view(),name="user-logout"),
]

