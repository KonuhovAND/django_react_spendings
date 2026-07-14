from django.urls import path
from students.views import hello_api


urlpatterns = [
    path('api/hello',view=hello_api),
]
