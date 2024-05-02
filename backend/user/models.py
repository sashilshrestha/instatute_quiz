import datetime
from mongoengine import Document, StringField, BooleanField,DateTimeField
from passlib.hash import pbkdf2_sha256

class User(Document):
    _id = StringField(required=False)
    email = StringField(unique=True, max_length=255)
    fullname = StringField(max_length=255, required=True)
    password = StringField(required=True)
    is_staff = BooleanField(default=False)
    is_superuser = BooleanField(default=False)
    createdAt = DateTimeField(default=datetime.datetime.now)
    updatedAt = DateTimeField(default=datetime.datetime.now)

    def __str__(self):
        return self.fullname

    def setPassword(self,password):
        self.password = pbkdf2_sha256.hash(password)
