from django.db import models
from django.db.models.fields import CharField, URLField
from django.db.models.fields.files import ImageField


class Project(models.Model):
    title = CharField(max_length=250)
    description = CharField(max_length=250)
    image = ImageField(upload_to="portfolio/imges/")
    url = URLField(blank=True)
    
class GrayLiterature(models.Model):
    title = CharField(max_length=250)
    description = models.TextField()
    image = ImageField(upload_to="portfolio/imges/GrayLiterature/")
    url = URLField(blank=True)
    
class GeneralPortfolio(models.Model):
    title = CharField(max_length=250)
    description = models.TextField()
    image = ImageField(upload_to="portfolio/imges/GeneralPortfolio/")
    url = URLField(blank=True)
    
class InProgress(models.Model):
    title = CharField(max_length=250)
    description = models.TextField()
    image = ImageField(upload_to="portfolio/imges/InProgress/")
    url = URLField(blank=True)
class Skills(models.Model):
    title = CharField(max_length=100)
    description = CharField(max_length=250)
    image = ImageField(upload_to="portfolio/imges/")  
class Benefits(models.Model):
    title = CharField(max_length=100)
    description = models.TextField()

class ContactMessage(models.Model):
    full_name = models.CharField(max_length=100)
    email_address = models.EmailField()
    subject = models.CharField(max_length=255)
    message = models.TextField()
    phone = models.CharField(max_length=20, blank=True, null=True)
    organization = models.CharField(max_length=100, blank=True, null=True)
    website = models.URLField(blank=True, null=True)
    country = models.CharField(max_length=100, blank=True, null=True)