from django.shortcuts import render
from django.http import JsonResponse,HttpResponse
from app.models import Category_income,Category_spend,Income,Spending
from django.utils import timezone
from datetime import timedelta
# Create your views here.

def api_response(request):
    spends = list(Category_spend.objects.values())
    income = list(Category_income.objects.values())
    return JsonResponse({"Spends":spends,"Income":income})

def fetch_income(request):
    month_ago = timezone.now() - timedelta(days=30)
    income = list(Income.objects.filter(created_at__gte=month_ago).values())
    return JsonResponse({"message":income})

def fetch_spendings(request):
    month_ago = timezone.now() - timedelta(days=30)
    spendings = list(Spending.objects.filter(created_at__gte=month_ago).values())
    return JsonResponse({"message":spendings})

