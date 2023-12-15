from django.shortcuts import render, redirect
from .models import Project, Skills, Benefits, GrayLiterature, GeneralPortfolio, InProgress
from django.core.mail import send_mail
from django.utils.safestring import mark_safe
from django.template.defaultfilters import striptags
from .forms import ContactForm
from django.template.loader import render_to_string
from django.core.mail import EmailMessage
from blog.models import Post
# Create your views here.
def home(request):
    Projects = Project.objects.all()
    Skill = Skills.objects.all()
    Benefit = Benefits.objects.all()
    context = {
        'Projects':Projects,'Skill':Skill,'Benefit':Benefit,
        'pageTitle': 'S. Cornejo-Guzmán'
    }
    return render(request,'home.html',context)
#Poder ir con elnavedador a aboutme.html
def aboutme(request):
    context = {
        'pageTitle': 'About Me | S. Cornejo-Guzmán'
    }
    return render(request,'aboutme.html',context)

def skills(request):
    all_posts = list(reversed(Post.objects.all()))
    selected_indices = [4, 3, 2, 9]
    selected_posts = [post for index, post in enumerate(all_posts) if index in selected_indices]
    for index, post in enumerate(selected_posts):
        post.semidescription = striptags(post.description)  # Sin escapar
        post.description = mark_safe(post.description)  # Escapada
        post.index = index 
        context = {
            'Posts':selected_posts,
            'pageTitle': 'Skills | S. Cornejo-Guzmán',
            'post_index': post.index
        }
    return render(request,'skills.html',context)

def portfoliog(request):
    GeneralPortfolios = list(reversed(GeneralPortfolio.objects.all()))
    context = {
        'GeneralPortfolios':GeneralPortfolios,
        'pageTitle': 'Portfolio (G) | S. Cornejo-Guzmán'
    }
    return render(request,'portfoliog.html',context)

def portfolioa(request):
    Papers = list(reversed(Project.objects.all()))
    GrayLiteratures = list(reversed(GrayLiterature.objects.all()))
    InProgresses = list(reversed(InProgress.objects.all()))
    context = {
        'Papers':Papers,'GrayLiteratures':GrayLiteratures,'InProgresses':InProgresses,
        'pageTitle': 'Portfolio (A) | S. Cornejo-Guzmán'
    }
    return render(request,'portfolioa.html',context)

def portfolio(request):
    Papers = list(reversed(Project.objects.all()))
    GrayLiteratures = list(reversed(GrayLiterature.objects.all()))
    GeneralPortfolios = list(reversed(GeneralPortfolio.objects.all()))
    InProgresses = list(reversed(InProgress.objects.all()))
    context = {
        'Papers':Papers,'GrayLiteratures':GrayLiteratures,'GeneralPortfolios':GeneralPortfolios,'InProgresses':InProgresses,
        'pageTitle': 'Portfolio | S. Cornejo-Guzmán'
    }
    return render(request,'portfolio.html',context)

# def portfolio_details(request):
#     Papers = list(reversed(Project.objects.all()))
#     GrayLiteratures = list(reversed(GrayLiterature.objects.all()))
#     GeneralPortfolios = list(reversed(GeneralPortfolio.objects.all()))
#     InProgresses = list(reversed(InProgress.objects.all()))
#     context = {
#         'Papers':Papers,'GrayLiteratures':GrayLiteratures,'GeneralPortfolios':GeneralPortfolios,'InProgresses':InProgresses,
#         'pageTitle': 'Portfolio | S. Cornejo-Guzmán'
#     }
#     return render(request,'portfolio_details.html',context)

def portfolio_details(request, category=None):
    if category == 'Papers':
        category_title = 'Papers'
        items = list(reversed(Project.objects.all()))
    elif category == 'GrayLiteratures':
        category_title = 'Gray Literature'
        items = list(reversed(GrayLiterature.objects.all()))
    elif category == 'GeneralPortfolios':
        category_title = 'General Portfolio'
        items = list(reversed(GeneralPortfolio.objects.all()))
    elif category == 'InProgresses':
        category_title = 'In Progress'
        items = list(reversed(InProgress.objects.all()))
    else:
        category_title = 'Papers'
        items = list(reversed(Project.objects.all()))

    context = {
        'items': items,
        'category': category,
        'category_title': category_title,
        'pageTitle': f'{category_title} | S. Cornejo-Guzmán' if category else 'Papers | S. Cornejo-Guzmán'
    }
    return render(request, 'portfolio_details.html', context)

# def contactme(request):
#     context = {
#         'pageTitle': 'Contact Me | S. Cornejo-Guzmán'
#     }
#     return render(request,'contactme.html',context)

def contactme(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Guardar en la base de datos
            message = form.save()

            # Enviar correo al destinatario
            send_mail(
                f"I contact you by: {message.subject}",
                message.message,
                'scornejoguz@gmail.com',
                ['scornejoguz@gmail.com'],
            )

            # Enviar correo automático al remitente
            thank_you_subject = 'Thank You for Reaching Out! 🐈‍⬛🏴'
            thank_you_message = render_to_string('thank_you_email_template.txt', {'full_name': message.full_name})
            email = EmailMessage(thank_you_subject, thank_you_message, to=[message.email_address])
            email.send()

            return redirect('thankyou')  # Redirigir a la página de agradecimiento

    else:
        form = ContactForm()
        
    context = {
        'pageTitle': 'Contact Me | S. Cornejo-Guzmán',
        'form': form
    }
        
    return render(request, 'contactme.html', context)

def fquestions(request):
    context = {
        'pageTitle': 'Frequent Questions  | S. Cornejo-Guzmán'
    }
    return render(request, 'fquestions.html',context)

def thankyou(request):
    context = {
        'pageTitle': 'Thank You  | S. Cornejo-Guzmán'
    }
    return render(request, 'thankyou.html',context)