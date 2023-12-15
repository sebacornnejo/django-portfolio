# from django.db import models
# import datetime


# # Create your models here.
# class Post(models.Model):
#     title = models.CharField(max_length=100)
#     description = models.TextField()
#     image = models.ImageField(upload_to='blog/images')
#     date = models.DateField(datetime.date.today)
# from django.utils.safestring import mark_safe
from django.db import models
import datetime

class Post(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='blog/images')
    date = models.DateField(default=datetime.date.today)

    # def save(self, *args, **kwargs):
    #     self.description = mark_safe(self.description)
    #     super(Post, self).save(*args, **kwargs)

    def __str__(self):
        return self.title
