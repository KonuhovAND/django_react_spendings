from django.urls import path
import app.views
urlpatterns = [
    path('app/api',view=app.views.api_response),
    path('app/api/income',view=app.views.fetch_income),
]
