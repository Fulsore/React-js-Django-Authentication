from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class MyManager(BaseUserManager):
    def create_user(self, email, name, password=None):
        if not email:
            raise ValueError("Email Is Required")
        user = self.model(
            email=self.normalize_email(email),
            name=name,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, password=None):
        """
        Creates and saves a superuser with the given email, name, and password.
        """
        user = self.create_user(
            email,
            name=name,
            password=password,
        )
        user.is_staff = True
        user.is_superuser = True
        user.is_admin = True
        user.save(using=self._db)
        return user
    
class AuthModel(AbstractBaseUser):
    email = models.EmailField(max_length=225, unique=True)
    name = models.CharField(max_length=225)
    password = models.CharField(max_length=225)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']
    
    objects = MyManager()

    def __str__(self):
        return self.email
    
    def has_perm(self, perm, obj=None):
        # Always return True for superuser
        return self.is_superuser

    def has_module_perms(self, app_label):
        # Always return True for superuser
        return self.is_superuser

    def get_full_name(self):
        # Return the user's full name
        return self.name

    def get_short_name(self):
        # Return the user's short name
        return self.name
