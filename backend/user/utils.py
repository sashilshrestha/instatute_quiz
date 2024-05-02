from rest_framework_simplejwt.tokens import AccessToken
from datetime import timedelta
from django.utils import timezone

def createAccessToken(user):
    token = AccessToken()
    
    token['email'] = user['email']
    token['exp'] = timezone.now() + timedelta(days=1)  # Customize token expiration time
    
    return str(token)
