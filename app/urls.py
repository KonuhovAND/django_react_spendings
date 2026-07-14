from django.urls import path
import app.views as views


urlpatterns = [
    path('api/hello/',views.hello_api),
]
