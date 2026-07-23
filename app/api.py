
from tastypie.resources import ModelResource
from app.models import Category_income,Category_spend,Income,Spending
class CategoriesApi(ModelResource):
    class Meta:
        queryset = Category_spend.objects.all()
        resource_name = 'categories'
        allowed_methods = ['get','post']

        
class DataApi(ModelResource):
    class Meta:
        queryset = Spending.objects.all()
        resourse_name = 'data'
        allowed_methods = ['post','get','delete']
        