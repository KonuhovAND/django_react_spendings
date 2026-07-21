from django.http import JsonResponse
from app.models import Category_income,Category_spend,Income,Spending
from django.utils import timezone
from datetime import timedelta
# Create your views here.

def fetch_catagories(request):
    spend = list(Category_spend.objects.values())
    income = list(Category_income.objects.values())
    return JsonResponse({"catagory_spend":spend,"catagory_income":income})

def fetch_income(request):
    month_ago = timezone.now() - timedelta(days=30)
    income = list(Income.objects.filter(created_at__gte=month_ago).values())
    return JsonResponse({"data":income})

def fetch_spending(request):
    month_ago = timezone.now() - timedelta(days=30)
    spending = list(Spending.objects.filter(created_at__gte=month_ago).values())
    return JsonResponse({"data":spending})

def receive_data(request):
    pass  