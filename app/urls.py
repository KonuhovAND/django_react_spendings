from django.urls import path
from app.views import api_response
urlpatterns = [
    path('app/api',view=api_response)
]
