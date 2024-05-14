from django.urls import path;
from . import views

urlpatterns = [
    path("subjects/",views.SubjectController.as_view(),name="subject"),
    path("questionSets/",views.QuestionSetController.as_view(),name="questionSet"),
    path("questionBanks/",views.QuestionBankController.as_view(),name="questionBank"),
    path("distributeQuestions/<subjectId>/",views.QuestionDistributorController.as_view(),name="questionDistributor"),
    path("userQuiz/", views.UserQuizController.as_view(), name="userQuiz"),
    path("userQuiz/<user_id>/", views.UserQuizController.as_view(), name="userQuizDetailByUser"),
    path("userQuiz/dashboard/",views.DashboardController.as_view(),name="dashboard")
    # path("userQuiz/",views.UserQuizController.as_view(),name="userQuiz"),
    # # path("userScore/<questionBankId>/",views.UserScoreController.as_view(),name="userScore")
    # path("userQuiz/<user_quiz_id>/", views.UserQuizDetail.as_view(), name="userQuizDetail")
] 