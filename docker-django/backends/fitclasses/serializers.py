from rest_framework import serializers
from .models import Fitclass

class FitclassListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Fitclass
        fields = ('title', 'image', 'start_day', 'end_day', )