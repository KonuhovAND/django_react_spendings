from django.urls import path
import students.views as views


urlpatterns = [
    path('api/hello/',views.hello_api),
]
