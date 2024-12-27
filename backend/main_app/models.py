from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    name = models.CharField(max_length=100)  # For user's name
    preference = models.CharField(max_length=100)  # For user preference
    
    def __str__(self):
        return self.username
