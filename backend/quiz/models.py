import datetime
from mongoengine import Document, StringField,IntField, ReferenceField,ListField,DateTimeField
from user.models import User

class Subject(Document):
    _id = StringField(required=False)
    name = StringField(required = True)
    createdAt = DateTimeField(default=datetime.datetime.now)
    updatedAt = DateTimeField(default=datetime.datetime.now)

    
class QuestionSet(Document):
    _id = StringField(required=False)
    setNumber = IntField()
    subjectId = ReferenceField(Subject, required=True)
    passMarks = IntField(required=True)
    totalRetries = IntField(default=2)
    marksPerQuestion = IntField(default=2)
    createdAt = DateTimeField(default=datetime.datetime.now)
    updatedAt = DateTimeField(default=datetime.datetime.now)

       
class QuestionBank(Document):
    _id = StringField(required=False)
    subjectId = ReferenceField(Subject,required = True)  
    question = StringField()
    options =  ListField(StringField(),required=True)
    answer= IntField(required=True)
    createdAt = DateTimeField(default=datetime.datetime.now)
    updatedAt = DateTimeField(default=datetime.datetime.now)

    
class UserQuiz(Document):
    _id = StringField(required=False)
    # userId = ReferenceField(User,required=True)
    subjectId = ReferenceField(Subject,required = True)
    questionBankId = ReferenceField(QuestionBank,required=True)
    totalScores = IntField(required=True)
    totalQuestions = IntField(required=True)
    createdAt = DateTimeField(default=datetime.datetime.now)
    updatedAt = DateTimeField(default=datetime.datetime.now)
 
