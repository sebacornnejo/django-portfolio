# Generated by Django 4.2.7 on 2023-11-07 19:22

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("portfolio", "0006_delete_skill"),
    ]

    operations = [
        migrations.AlterField(
            model_name="project",
            name="title",
            field=models.CharField(max_length=250),
        ),
    ]