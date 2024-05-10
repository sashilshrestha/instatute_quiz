from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from quiz.models import Subject,QuestionSet,QuestionBank
from quiz.serializers import SubjectSerializers,QuestionBankSerializers,QuestionSetSerializers
from bson import ObjectId

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
        
        questionRecords = QuestionBank.objects(questionSetId=payloadData['questionSetId'],question=payloadData['question'])
        
        isQuestionAvailable = len(questionRecords) > 0
        
        if isQuestionAvailable:
            return Response({'message':'Question already exists!'},status=status.HTTP_409_CONFLICT)
        
        isApplicableOptions = payloadData['options'] and len(payloadData['options']) == 4
        
        if isApplicableOptions == False:
            return Response({'message':'Invalid options!'},status=status.HTTP_400_BAD_REQUEST)
        
        questionBankInstance = QuestionBank(question=payloadData['question'],questionSetId=payloadData['questionSetId'],options=payloadData['options'],answers=payloadData['answers'])
        
        questionBankInstance.save()
        
        return Response({'message':"Success"},status=status.HTTP_200_OK)

class QuestionDistributorController(APIView):
    def get(self,request,subjectId,questionSetId):  
        parsedQuestionSetId = ObjectId(questionSetId)

        quizQuestions = QuestionBank.objects.exclude('questionSetId')(questionSetId=parsedQuestionSetId)  
        
        isQuestionsAvailable = len(quizQuestions) > 0
        
        if isQuestionsAvailable == False:
            return Response({'message':'Empty question sets!'},status=status.HTTP_404_NOT_FOUND)
        
        parsedSubjectId = ObjectId(subjectId)
        
        subjectRecord = Subject.objects.get(_id=parsedSubjectId)
        questionSetRecord = QuestionSet.objects.exclude('subjectId').get(_id=parsedQuestionSetId)
        
        subjectSerializers = SubjectSerializers(subjectRecord)
        questionSetSerializers = QuestionSetSerializers(questionSetRecord)
        quizQuestionsSerializers = QuestionBankSerializers(quizQuestions,many=True)
        
        data = {
            'subject' : subjectSerializers.data,
            'questionSet': questionSetSerializers.data,
            'questions': quizQuestionsSerializers.data
        }
        
        return Response({'message':'Success','data':data},status=status.HTTP_200_OK)
        
