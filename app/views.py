from django.shortcuts import render
from django.http import JsonResponse,HttpResponse
from app.models import Category_income,Category_spend,Income,Spending
# Create your views here.

def api_response(request):
    spends = list(Category_spend.objects.values())
    income = list(Category_income.objects.values())
    return JsonResponse({"Spends":spends,"Income":income})