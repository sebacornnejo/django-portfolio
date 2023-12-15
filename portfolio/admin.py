from django.contrib import admin
from .models import Project, Skills, Benefits, GrayLiterature, GeneralPortfolio, InProgress
# Register your models here.
admin.site.register(Project)
admin.site.register(Skills)
admin.site.register(Benefits)
admin.site.register(GrayLiterature)
admin.site.register(GeneralPortfolio)
admin.site.register(InProgress)