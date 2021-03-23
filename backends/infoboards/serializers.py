from rest_framework import serializers
from .models import Movie, Comment

from django.contrib.auth import get_user_model

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = get_user_model()
        fields=('username','password')


# class InfoArticleListSerializer(serializers.ModelSerializer):
#     user = UserSerializer(required=False)

#     class Meta:
#         model= InfoArticle
#         fields= '__all__'
#         read_only_fields = ('user')


class InfoArticleDetailSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=False)
    
    class Meta:
        model = InfoArticle
        fields = '__all__'


class InfoArticleSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=False)

    class Meta:
        model = InfoArticle
        fields = '__all__'
