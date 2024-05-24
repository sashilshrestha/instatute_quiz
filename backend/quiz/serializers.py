from rest_framework_mongoengine import serializers
from rest_framework import serializers as s
from .models import Subject,QuestionSet,QuestionBank,UserQuiz

class SubjectSerializers(serializers.DocumentSerializer):
    class Meta:
        model = Subject
        fields = ["name","_id"]              
class UserQuizSerializers(serializers.DocumentSerializer):
    questionBankId = QuestionBankSerializers()
     
    class Meta:
        model = UserQuiz
        # fields = ["_id","userId","questionBankId","totalScores","totalQuestions"]
        fields = ["_id","userId","subjectId","totalScores","totalQuestions"]
class QuestionSetSerializers(serializers.DocumentSerializer):
    subjectId = SubjectSerializers()
    
    class Meta:
        model = QuestionSet
        fields = ["_id","setNumber","subjectId","passMarks","totalRetries","marksPerQuestion"]
class QuestionBankSerializers(serializers.DocumentSerializer):
    subjectId = SubjectSerializers()
    
    class Meta:
        model = QuestionBank
        fields = ["_id","subjectId","question","options","answer"]