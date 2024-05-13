from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from quiz.models import Subject,QuestionSet,QuestionBank,UserQuiz
from quiz.serializers import SubjectSerializers,QuestionBankSerializers,QuestionSetSerializers,UserQuizSerializers
from bson import ObjectId
from user.models import User

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
        question_bank_id = payload_data.get('questionBankId')
        total_scores = payload_data.get('totalScores')
        total_questions = payload_data.get('totalQuestions')
        
        # Check if all required fields are present
        if not all([user_id, subject_id, question_bank_id, total_scores, total_questions]):
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
                questionBankId=question_bank_id,
                totalScores=total_scores,
                totalQuestions=total_questions
            )
            user_quiz.save()
            return Response({'message': 'User quiz data saved successfully'}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'message': f'Error saving user quiz data: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    def get(self, request, user_id):
        try:
            # Retrieve the user
            # user = User.objects.get(_id=user_id)
            user = UserQuiz.objects.get(userId=user_id)
            
            # Aggregate top scores for each subject
            top_scores = UserQuiz.objects.filter(userId=user).values('subjectId').annotate(top_score=Max('totalScores'))
            
            # Retrieve subject names based on subject IDs
            subject_names = {}
            for score in top_scores:
                subject_id = score['subjectId']
                subject_name = Subject.objects.get(_id=subject_id).name
                subject_names[subject_id] = subject_name
            
            # Prepare response data
            response_data = []
            for score in top_scores:
                subject_id = score['subjectId']
                subject_name = subject_names[subject_id]
                top_score = score['top_score']
                response_data.append({'subjectId': subject_id, 'subjectName': subject_name, 'topScore': top_score})
            
            return Response({'message': 'Success', 'data': response_data}, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({'message': f'User with ID {user_id} not found'}, status=status.HTTP_404_NOT_FOUND)
    # def get(self, request, user_id):
    #     try:
    #         # Query the User model from the user app to find the user
    #         # user = User.objects.get(_id=user_id)
    #         user = UserQuiz.objects.get(userId=user_id)
    #         # Filter UserQuiz instances based on the found user
    #         user_quiz = UserQuiz.objects.filter(userId=user)
    #         user_quiz_serializer = UserQuizSerializers(user_quiz, many=True)
    #         return Response({'message': 'Success', 'data': user_quiz_serializer.data}, status=status.HTTP_200_OK)
    #     except User.DoesNotExist:
    #         # If user is not found, return appropriate response
    #         return Response({'message': f'User with ID {user_id} not found'}, status=status.HTTP_404_NOT_FOUND)