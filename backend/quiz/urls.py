from django.urls import path;
from . import views

urlpatterns = [
    path("subjects/",views.SubjectController.as_view(),name="subject"),
    path("questionBanks/",views.QuestionBankController.as_view(),name="questionBank"),
    path("distributeQuestions/<subjectId>/",views.QuestionDistributorController.as_view(),name="questionDistributor"),
    path("userQuiz/", views.UserQuizController.as_view(), name="userQuiz"),
    path("userQuiz/<user_id>/", views.UserQuizController.as_view(), name="userQuizDetailByUser"),
    path("userQuiz/dashboard/<userId>/",views.UserDashboardController.as_view(),name="userDashboard")
   ] 