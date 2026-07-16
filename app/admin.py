from django.contrib import admin
import app.models as apmd
# Register your models here.
admin.site.register(apmd.Category_spend)
admin.site.register(apmd.Category_income)
admin.site.register(apmd.Spending)
admin.site.register(apmd.Income)