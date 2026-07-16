from django.shortcuts import render
from django.http import JsonResponse,HttpResponse
from app.models import Category_income,Category_spend,Income,Spending
# Create your views here.

def api_response(request):
    catagorys = list(Category_spend.objects.all())
    return HttpResponse(catagorys)
