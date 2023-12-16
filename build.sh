#!/usr/bin/env bash
# exit on error
set -o errexit

# pip install -r requirements.txt
pip install gdown

gdown --id 1u_XDEjYqy39eFvaKE7gpa7ysdWg66WNa -O media.zip

unzip media.zip -d media

python manage.py collectstatic
python manage.py migrate