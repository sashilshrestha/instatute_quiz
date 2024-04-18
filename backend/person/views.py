from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import person_collection
import json

def index(request):
    return HttpResponse('<h1>App is running.</h1>')

@csrf_exempt
def add_person(request):
    if request.method == 'POST':
        # Extract data from the request body
        data = json.loads(request.body)
        
        # Extract first_name and last_name from the data
        first_name = data.get('first_name', '')
        last_name = data.get('last_name', '')
        
        # Insert new person into the collection
        records = {
            "first_name": first_name,
            "last_name": last_name
        }
        person_collection.insert_one(records)
        
        return JsonResponse({'message': 'New person is added'})
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'})

def get_all_person(request):
    people = list(person_collection.find())
    
    # Convert ObjectId to string for each person document
    for person in people:
        person['_id'] = str(person['_id'])
    
    return JsonResponse({'people': people})
