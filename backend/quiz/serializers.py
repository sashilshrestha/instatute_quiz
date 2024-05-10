from rest_framework_mongoengine import serializers
from rest_framework import serializers as s
from .models import Subject,QuestionSet,QuestionBank,UserQuiz

class SubjectSerializers(serializers.DocumentSerializer):
    class Meta:
        model = Subject
        fields = ["name","_id"]
    
class QuestionSetSerializers(serializers.DocumentSerializer):
    subjectId = SubjectSerializers()
    
    class Meta:
        model = QuestionSet
        fields = ["_id","setNumber","subjectId","passMarks","totalRetries","marksPerQuestion"]
        
class QuestionBankSerializers(serializers.DocumentSerializer):
    questionSetId = QuestionSetSerializers()
    
    class Meta:
        model = QuestionBank
        fields = ["_id","questionSetId","question","options","answers"]
        
class UserQuizSerializers(serializers.DocumentSerializer):
    questionSetId = QuestionSetSerializers()
     
    class Meta:
        model = UserQuiz
        fields = ["_id","userId","questionSetId","totalScores","totalAttempts"]
         