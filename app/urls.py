from django.urls import path
import app.views
urlpatterns = [
    path('app/api/catagories',view=app.views.fetch_catagories),
    path('app/api/income',view=app.views.fetch_income),
    path('app/api/spending',view=app.views.fetch_spending),
    path('app/api/recieve_data',view=app.views.receive_data),
]
