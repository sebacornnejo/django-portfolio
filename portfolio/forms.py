# forms.py

from django import forms
from .models import ContactMessage

class ContactForm(forms.ModelForm):
    class Meta:
        model = ContactMessage
        fields = ['full_name', 'email_address', 'subject', 'message', 'phone', 'organization', 'website', 'country']