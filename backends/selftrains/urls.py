from django.urls import path
from . import views

app_name = 'selftrains'
urlpatterns = [
    path('', train_list_create, name= 'train_list_create'),
    path('<int:selftrain_pk>/detail/', views.selftrain_detail, name='selftrain_detail'),
    path('<int:selftrain_pk>/', views.selftrain_update_delete, name='selftrain_update_delete'),
] 