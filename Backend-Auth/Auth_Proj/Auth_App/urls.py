from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import RegisterViewset, LoginViewset

routers = DefaultRouter()
routers.register('register', RegisterViewset, basename='register')
routers.register('login', LoginViewset, basename='login')
urlpatterns = routers.urls