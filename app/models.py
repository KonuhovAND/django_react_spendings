from django.db import models
from django.utils import timezone

# Create your models here.
class Catagory(models.Model):
    text = models.TextField(max_length=20)
    income = models.BooleanField(default=False )

    
class Data(models.Model):
    text = models.TextField(max_length=20)
    amount = models.FloatField()
    catagory = models.ForeignKey(Catagory,on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=timezone.now)