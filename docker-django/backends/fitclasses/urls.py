from django.urls import path
from . import views

app_name = 'fitclasses'

urlpatterns = [
    path('', views.fitclass_list_create, name='fitclass_list_create'),
]


