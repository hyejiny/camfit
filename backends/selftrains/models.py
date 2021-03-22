from django.db import models

# Create your models here.
class SelfTrain(moels.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    yt_address = models.TextField()
    category = models.IntegerField()
