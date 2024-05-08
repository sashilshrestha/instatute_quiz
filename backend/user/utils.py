from rest_framework_simplejwt.tokens import AccessToken
from datetime import timedelta
from django.utils import timezone

def createAccessToken(user):
    token = AccessToken()
    
    token['email'] = user['email']
    token['exp'] = timezone.now() + timedelta(days=1)  # Customize token expiration time
    
    return str(token)

def decodeToken(token):
    try:
        # Decode the token using jwt_decode_handler
        token_payload = AccessToken(token.split(' ')[1])
        
        return token_payload
    except Exception as e:
        # Handle decoding errors
        print(f"Error decoding token: {e}")
        return None

    
    