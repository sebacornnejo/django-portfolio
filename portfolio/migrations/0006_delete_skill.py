# Generated by Django 4.2.6 on 2023-10-24 15:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("portfolio", "0005_skill"),
    ]

    operations = [
        migrations.DeleteModel(
            name="Skill",
        ),
    ]