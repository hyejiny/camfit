from rest_framework import serializers
from .models import SelfTrain

from django.contrib.auth import get_user_model

class TrainListSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=SelfTrain
        fields= ('title','thumbnail','category')

class TrainDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model=SelfTrain
        fields= '__all__'



