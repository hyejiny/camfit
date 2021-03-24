from django.db import models
from django.conf import settings

# Create your models here.
class Schedule(models.Model):
    date = models.models.DateField(auto_now_add=True)


class Grass(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='grasses')
    Schedule = models.ForeignKey(Schedule, on_delete=models.CASCADE, related_name='grasses')
    