from rest_framework_mongoengine import serializers
from .models import User

class UserSerializers(serializers.DocumentSerializer):
    class Meta:
        model = User
        fields = ["email","fullname","createdAt","updatedAt","password","_id","is_superuser"]
    