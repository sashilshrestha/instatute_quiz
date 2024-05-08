import datetime
from mongoengine import Document, StringField,IntField, ReferenceField,ListField,DateTimeField
from user.models import User

class Subject(Document):
    _id = StringField(required=False)
    name = StringField(required = True)
    createdAt = DateTimeField(default=datetime.datetime.now)
    updatedAt = DateTimeField(default=datetime.datetime.now)
    
    def __str__(self):
        return self.name
    
class QuestionSet(Document):
    setNumber = IntField()
    subjectId = ReferenceField(Subject, required=True)
    passMarks = IntField(required=True)
    totalRetries = IntField(default=2)
    marksPerQuestion = IntField(default=2)
    createdAt = DateTimeField(default=datetime.datetime.now)
    updatedAt = DateTimeField(default=datetime.datetime.now)
    
    def __str__(self):
        return self.setNumber
       
class QuestionBank(Document):
    questionSetId = ReferenceField(QuestionSet,required = True)  
    question = StringField()
    options =  ListField(StringField(),required=True)
    answers= ListField(StringField(),required=True)
    createdAt = DateTimeField(default=datetime.datetime.now)
    updatedAt = DateTimeField(default=datetime.datetime.now)
    
    def __str__(self):
        return self.question
    
class UserQuiz(Document):
    userId = ReferenceField(User,required=True)
    questionSetId = ReferenceField(QuestionSet,required=True)
    totalScores = IntField(required=True)
    retriesCount = IntField(required=True)
    totalAttempts = IntField(required=True)
    createdAt = DateTimeField(default=datetime.datetime.now)
    updatedAt = DateTimeField(default=datetime.datetime.now)
    
    def __str__(self):
        return self.userId  
