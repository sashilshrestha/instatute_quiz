from rest_framework import status

class CustomError(BaseException):
    def __init__(self,message,code = status.HTTP_500_INTERNAL_SERVER_ERROR):
        self.message = message
        self.code = code
        
        super().__init__(self.message)
        