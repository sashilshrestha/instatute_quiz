from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializers import UserSerializers
from passlib.hash import pbkdf2_sha256
from .utils import createAccessToken
from quiz_project.consts import GENERIC_MESSAGES
from bson import ObjectId

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
              
        return Response({'message': GENERIC_MESSAGES['SUCCESS'],'data': {'accessToken':accessToken,'userId':user._id}, "isAdmin": serializedUser.data['is_superuser']}, status=status.HTTP_200_OK)
    
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
           
           
           accessToken = createAccessToken({"email":email})
           
           return Response({'message': GENERIC_MESSAGES['SUCCESS'],'data': accessToken}, status=status.HTTP_200_OK)
          
        except Exception as e:  
            return Response({'message':e.message},status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
class UserProfileController(APIView):
    def get(self,request,userId):
        payloadData = request.data
        
        user = User.objects(_id=ObjectId(payloadData['userId']))
        
        isUserAvailable = len(user) > 0
        
        if isUserAvailable == False:
            return Response({'message':'User not available!'},status=status.HTTP_404_NOT_FOUND)
        
        del user['password']
        
        return Response({'message':GENERIC_MESSAGES['SUCCESS'],'data':user},status=status.HTTP_200_OK)
    

class ChangePasswordController(APIView):
    def put(self,request):
        payloadData = request.data
        
        user = User.objects.get(_id=ObjectId(payloadData['userId']))

        isCorrectPassword = pbkdf2_sha256.verify(payloadData['currentPassword'],user.password)

        if isCorrectPassword == False:
            return Response({'message':'Invalid current password!'},status=status.HTTP_400_BAD_REQUEST)

        isNewPasswordMatched = payloadData['password'] == payloadData['confirmPassword']

        if isNewPasswordMatched == False:
            return Response({'message':'Password mismatched!'},status=status.HTTP_400_BAD_REQUEST)

        hashedPassword = pbkdf2_sha256.hash(payloadData['password'])

        User.objects(email=user['email']).update_one(password=hashedPassword)

        return Response({'message':'Password changed!'},status=status.HTTP_200_OK)

