from django.urls import path;
from . import views

urlpatterns = [
    path("subjects/",views.SubjectController.as_view(),name="subject"),
    path("questionSets/",views.QuestionSetController.as_view(),name="questionSet"),
    path("questionBanks/",views.QuestionBankController.as_view(),name="questionBank"),
    path("distributeQuestions/<subjectId>/<questionSetId>/",views.QuestionDistributorController.as_view(),name="questionDistributor")
]