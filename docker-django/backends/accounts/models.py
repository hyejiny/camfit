from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
    user_category = (
        (1, 'Common'), (2, 'Trainer'),
    )

    category = models.IntegerField(choices=user_category, default=1)