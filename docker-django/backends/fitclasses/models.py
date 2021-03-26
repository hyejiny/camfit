from django.db import models
from django.conf import settings

# Create your models here.
class Fitclass(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    image = models.ImageField(blank=True)
    start_day = models.CharField(max_length=50)
    end_day = models.CharField(max_length=50)
    user_limit = models.IntegerField()
    price = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)