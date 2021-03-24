from django.db import models
from django.conf import settings

# Create your models here.

class Grass(models.Model):
    user = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='Grass', blank=True)
    date = models.DateField(auto_now_add=True)
