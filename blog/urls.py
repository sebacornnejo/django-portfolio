from django.urls import path
from .views import render_posts, post_detail

app_name = 'blog'

urlpatterns = [
    path('', render_posts, name='posts'), 
    #ID para las pestañas blog
    path('<int:post_index>',post_detail,name='post_detail'),
]
