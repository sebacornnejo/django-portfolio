# Generated by Django 4.2.7 on 2023-11-13 19:36

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("portfolio", "0012_generalportfolio_grayliterature_inprogress"),
    ]

    operations = [
        migrations.AlterField(
            model_name="generalportfolio",
            name="image",
            field=models.ImageField(upload_to="portfolio/imges/GeneralPortfolio/"),
        ),
        migrations.AlterField(
            model_name="grayliterature",
            name="image",
            field=models.ImageField(upload_to="portfolio/imges/GrayLiterature/"),
        ),
        migrations.AlterField(
            model_name="inprogress",
            name="image",
            field=models.ImageField(upload_to="portfolio/imges/InProgress/"),
        ),
    ]
