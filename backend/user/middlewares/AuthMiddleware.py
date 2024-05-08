from user.utils import decodeToken
from rest_framework import status
from rest_framework.response import Response
from user.models import User

class AuthMiddleware():
    def __init__(self,get_response):
        self.get_response = get_response

    def __call__(self, request):
        token = request.headers.get('Authorization')
        
        if not token:
            return self.get_response(request)
             
        user = self.authenticateUser(token)
        
        request.user = user
        
        response = self.get_response(request)
        
        return response;    
    
    def authenticateUser(self,token):
        decodedToken = decodeToken(token)
        
        if not decodedToken:
            return None
            
        
        tokenEmail = decodedToken['email']
        
        if not tokenEmail:
            return None
            
        
        userRecord = User.objects.get(email=tokenEmail)
        
        if not userRecord:
            return None
        
        return userRecord
            
        
