from user.utils import decodeToken
from user.models import User
from user.serializers import UserSerializers
from functools import wraps
from rest_framework.response import Response

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
        
        userRecordSerializer = UserSerializers(userRecord)
        
        user = userRecordSerializer.data
        user['is_active'] = True
        
        return user
            
        
def verifyUser(viewFunc):
    @wraps(viewFunc)
    
    def wrapper(request, *args, **kwargs):
        drf_request = request.request
        print("Inside decorator (DRF):", drf_request.user)
        if drf_request.user:
            return viewFunc(request, *args, **kwargs)
        else:
            return Response({'message': 'Unauthorized'}, status=401)
    return wrapper