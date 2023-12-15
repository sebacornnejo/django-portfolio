from django.utils.safestring import mark_safe
from django.shortcuts import render, get_object_or_404
from .models import Post
import random
from django.template.defaultfilters import striptags
from django.core.paginator import Paginator

# Create your views here.
def render_posts(request):
    # Posts = reversed(Post.objects.all())
    all_posts = list(Post.objects.all())
    random.shuffle(all_posts)
    for index, post in enumerate(all_posts):
        post.semidescription = striptags(post.description)  # Sin escapar
        post.description = mark_safe(post.description)  # Escapada
        post.index = index  # Agregar el índice al post
    context = {
        'Posts': all_posts,
        'pageTitle': 'Blog | S. Cornejo-Guzmán',
        'post_index': post.index
    }
    return render(request, 'posts.html',context)

def post_detail(request, post_index):
    all_posts = list(Post.objects.all())
    post_index = int(post_index)
    
    # Obtener el post actual
    post = get_object_or_404(Post, pk=post_index)

    context = {
        'post': post,
        'pageTitle': f'Post | {post.title}',
    }
    return render(request, 'post_detail.html', context)

# def post_detail(request, post_index):
#     all_posts = list(Post.objects.all())
#     random.shuffle(all_posts)

#     # Encontrar el índice del post actual
#     current_post_id = int(post_index)

#     # Obtener los posts anterior y siguiente
#     prev_post = None
#     next_post = None

#     for index, post in enumerate(all_posts):
#         if post.id == current_post_id:
#             if index > 0:
#                 prev_post = all_posts[index - 1]
#             if index < len(all_posts) - 1:
#                 next_post = all_posts[index + 1]
#             break

#     post = get_object_or_404(Post, pk=post_index)
#     context = {
#         'post': post,
#         'prev_post': prev_post,
#         'next_post': next_post,
#         'pageTitle': f'Post | {post.title}'
#     }
#     return render(request, 'post_detail.html', context)