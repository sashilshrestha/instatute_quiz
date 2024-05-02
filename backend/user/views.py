from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializers import UserSerializers
from passlib.hash import pbkdf2_sha256
from .utils import createAccessToken
from quiz_project.consts import GENERIC_MESSAGES
from errrorUtils import CustomError

class UserListCreate(generics.ListCreateAPIView):
    def post(self,request):
        return
    
    def get(self,request):
        userRecords = User.objects()
        
        serializedRecords = UserSerializers(userRecords,many=True)
        
        return Response(status=status.HTTP_200_OK,data=serializedRecords.data)
  
    
class UserModification(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects()
    serializer_class = UserSerializers
    lookup_field = ["pk"]
    
class Login(APIView):
    def post(self,request):
        payloadData = request.data
        
        email = payloadData.get("email") or None
        password = payloadData.get("password") or None
        
        user = User.objects.get(email=email)
        serializedUser = UserSerializers(user)
        
        if user == None:
            return Response({'message':'Incorrect credentials'},status=status.HTTP_401_UNAUTHORIZED)
        
        
        isPasswordCorrect = pbkdf2_sha256.verify(password,serializedUser.data['password'])
        
        if(isPasswordCorrect == False):
            return Response({'message':'Incorrect credentials'},status=status.HTTP_401_UNAUTHORIZED)
        
        
        accessToken = createAccessToken(serializedUser.data)
        
              
        return Response({'message': GENERIC_MESSAGES['SUCCESS'],'data': accessToken}, status=status.HTTP_200_OK)
    
class Register(APIView):
    def post(self,request):
        try:
           payloadData = request.data
           
        
           # Payloads
           email = payloadData.get("email") or None
           password = payloadData.get("password") or None
           fullName = payloadData.get("fullName") or None
           
           userExec = User(email=email,fullname=fullName)
           
           userExec.setPassword(password)
           userExec.save()
           
           print(userExec)
           
           accessToken = createAccessToken({"email":email})
           
           return Response({'message': GENERIC_MESSAGES['SUCCESS'],'data': accessToken}, status=status.HTTP_200_OK)
          
        except Exception as e:  
            return Response({'message':e.message},status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        
        