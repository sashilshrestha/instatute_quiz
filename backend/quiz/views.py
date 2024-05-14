from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from quiz.models import Subject,QuestionSet,QuestionBank,UserQuiz
from quiz.serializers import SubjectSerializers,QuestionBankSerializers,QuestionSetSerializers,UserQuizSerializers
from bson import ObjectId
from user.models import User
from user.middlewares.AuthMiddleware import verifyUser

class SubjectController(APIView):
    def post(self,request):
        payloadData = request.data
        
        subjectRecords = Subject.objects.filter(name=payloadData['name'])
        
        isSubjectRecordsAvailable = len(subjectRecords) > 0
        
        if isSubjectRecordsAvailable:
            return Response({'message':'Subject already exists!'},status=status.HTTP_409_CONFLICT)
        
        subjectInsertion = Subject(name = payloadData['name'])
        
        subjectInsertion.save()
        
        return Response({'message':"Success"},status=status.HTTP_200_OK)
    
    def get(self,request):
        subjectRecords = Subject.objects()
        serializedSubjectRecords = SubjectSerializers(subjectRecords,many=True)
        
        return Response({'message':'Success','data':serializedSubjectRecords.data},status=status.HTTP_200_OK)
        
class QuestionSetController(APIView):
    def post(self,request):
        payloadData = request.data
        
        subjectRecords = Subject.objects(__raw__={'name':payloadData['name']})
        
        isSubjectAvailable = len(subjectRecords) > 0
        
        if isSubjectAvailable == False:
            return Response({'message':'Subject not found!'},status=status.HTTP_404_NOT_FOUND)
             
        questionSetRecords = QuestionSet.objects(setNumber=payloadData['setNumber'])
        
        isSetAvailable = len(questionSetRecords) > 0
        
        if(isSetAvailable):
            return Response({'message':'Question set already exists!'},status=status.HTTP_409_CONFLICT)
        
        questionSetInstance = QuestionSet(setNumber=payloadData['setNumber'],subjectId=subjectRecords[0]['_id'],passMarks=payloadData['passMarks'])
        
        questionSetInstance.save()
        
        return Response({'message':"Success"},status=status.HTTP_200_OK)
    
    def get(self,request):
        questionSets = QuestionSet.objects()
        questionsSetSerializer = QuestionSetSerializers(questionSets,many=True)
        
        return Response({'message':"Success",'data':questionsSetSerializer.data},status=status.HTTP_200_OK)
        
class QuestionBankController(APIView):
    def post(self,request):
        payloadData = request.data
        
        questionRecords = QuestionBank.objects(subjectId=payloadData['subjectId'],question=payloadData['question'])
        
        isQuestionAvailable = len(questionRecords) > 0
        
        if isQuestionAvailable:
            return Response({'message':'Question already exists!'},status=status.HTTP_409_CONFLICT)
        
        isApplicableOptions = payloadData['options'] and len(payloadData['options']) == 4
        
        if isApplicableOptions == False:
            return Response({'message':'Invalid options!'},status=status.HTTP_400_BAD_REQUEST)
        
        questionBankInstance = QuestionBank(question=payloadData['question'],subjectId=payloadData['subjectId'],options=payloadData['options'],answer=payloadData['answer'])
        
        questionBankInstance.save()

        
        return Response({'message':"Success"},status=status.HTTP_200_OK)

class QuestionDistributorController(APIView):
    def get(self,request,subjectId):  
        parsedSubjectId = ObjectId(subjectId)
        
        quizQuestions = QuestionBank.objects.exclude('subjectId')(subjectId=parsedSubjectId)  
        
        isQuestionsAvailable = len(quizQuestions) > 0
        
        if isQuestionsAvailable == False:
            return Response({'message':'Empty question sets!'},status=status.HTTP_404_NOT_FOUND)
        
        parsedSubjectId = ObjectId(subjectId)
        
        subjectRecord = Subject.objects.get(_id=parsedSubjectId)
        
        subjectSerializers = SubjectSerializers(subjectRecord)
        quizQuestionsSerializers = QuestionBankSerializers(quizQuestions,many=True)
        
        data = {
            'subject' : subjectSerializers.data,
            'questions': quizQuestionsSerializers.data
        }
        
        return Response({'message':'Success','data':data},status=status.HTTP_200_OK)


class UserQuizController(APIView):
    # def post(self, request):
    #     payloadData = request.data
    #     # Ensure the userId is present in the payloadData
    #     user_id = payloadData.get('userId')
    #     if not user_id:
    #         return Response({'message': 'User ID is required'}, status=status.HTTP_400_BAD_REQUEST)
        
    #     try:
    #         # Query the User model from the user app to find the user
    #         user = User.objects.get(_id=user_id)
    #     except User.DoesNotExist:
    #         # If user is not found, return appropriate response
    #         return Response({'message': f'User with ID {user_id} not found'}, status=status.HTTP_404_NOT_FOUND)
        
    #     # Create UserQuiz instance with the found user
    #     score = UserQuiz(
    #         userId=user,
    #         subjectId=payloadData['subjectId'],
    #         questionBankId=payloadData['questionBankId'],
    #         totalScores=payloadData['totalScores'],
    #         totalQuestions=payloadData['totalQuestions']
    #     )
    #     score.save()
        
    #     return Response({'message': "Successfully saved score"}, status=status.HTTP_200_OK)
    def post(self, request):
        payload_data = request.data
        
        # Extract data from payload
        user_id = payload_data.get('userId')
        subject_id = payload_data.get('subjectId')
        total_scores = payload_data.get('totalScores')
        total_questions = payload_data.get('totalQuestions')
        
        # Check if all required fields are present
        if not all([user_id, subject_id, total_scores, total_questions]):
            return Response({'message': 'Missing required fields'}, status=status.HTTP_400_BAD_REQUEST)
        
        # user = User.objects.get(_id=user_id)
        # try:
        #     # Check if the user exists
        #     user = User.objects.get(_id=user_id)
        # except User.DoesNotExist:
        #     return Response({'message': f'User with ID {user_id} not found'}, status=status.HTTP_404_NOT_FOUND)
        
        try:
            # Save the user quiz data
            user_quiz = UserQuiz(
                userId=user_id,
                subjectId=subject_id,
                totalScores=total_scores,
                totalQuestions=total_questions
            )
            user_quiz.save()
            return Response({'message': 'User quiz data saved successfully'}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'message': f'Error saving user quiz data: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    def get(self, request, user_id):
        try:
            user_quizzes = UserQuiz.objects.filter(userId=ObjectId(user_id))
            
            if user_quizzes:
                sorted_user_quizzes = []
                for user_quiz in user_quizzes:                  
                    subject_name = user_quiz.subjectId.name
                    sorted_user_quizzes.append({
                        '_id': str(user_quiz._id),
                        'totalScores': user_quiz.totalScores,
                        'subject_name': subject_name
                    })
                
                # Sort user quizzes by totalScores
                sorted_user_quizzes = sorted(sorted_user_quizzes, key=lambda x: x['totalScores'], reverse=True)
                
                return Response({'sorted_user_quizzes': sorted_user_quizzes}, status=status.HTTP_200_OK)
            else:
                return Response({'message': f'No UserQuiz objects found for user with ID {user_id}'}, status=status.HTTP_404_NOT_FOUND)
            
        except UserQuiz.DoesNotExist:
            return Response({'message': 'User quizzes not found'}, status=status.HTTP_404_NOT_FOUND)

class DashboardController(APIView):
    @verifyUser
    def get(self,request):
        user = request.user
        
        Response({'message':"Success"},status=status.HTTP_200_OK)
        