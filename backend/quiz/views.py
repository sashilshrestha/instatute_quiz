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
        
        try:
            # Check if there is an existing UserQuiz object for the specified user and subject
            existing_quiz = UserQuiz.objects.filter(userId=user_id, subjectId=subject_id).first()
            
            # If an existing quiz is found and the new score is higher, update the existing record
            if existing_quiz and int(total_scores) > existing_quiz.totalScores:
                existing_quiz.totalScores = total_scores
                existing_quiz.totalQuestions = total_questions
                # existing_quiz.save()
                user_quiz = UserQuiz(
                    userId=user_id,
                    subjectId=subject_id,
                    totalScores=total_scores,
                    totalQuestions=total_questions
                )
                user_quiz.save()
                return Response({'message': 'User quiz data updated successfully'}, status=status.HTTP_200_OK)
            
            # If no existing quiz is found or the new score is not higher, create a new UserQuiz object
            user_quiz = UserQuiz(
                userId=user_id,
                subjectId=subject_id,
                totalScores=total_scores,
                totalQuestions=total_questions
            )
            user_quiz.save()
            
            return Response({'message': 'User quiz data saved successfully'}, status=status.HTTP_201_CREATED)
        
        except Exception as e:
            return Response({'message': f'Error saving/updating user quiz data: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)