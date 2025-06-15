from django.db import models

# Create your models here.

class HomePage(models.Model):
    name = models.CharField(max_length=200, blank=True, null=True)
    logo = models.ImageField(upload_to='home/', blank=True, null=True)
    title = models.CharField(max_length=200, blank=True)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='home/', blank=True, null=True)
    about_title = models.CharField(max_length=200, blank=True, null=True)
    about_description = models.TextField(blank=True)
    location = models.CharField(max_length=200, blank=True)
    phone = models.CharField(max_length=20, blank=True)
    email = models.EmailField(blank=True, null=True)
    opening_hours = models.CharField(max_length=100, blank=True)
    facbook_link = models.URLField(blank=True, null=True)
    instagram_link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title

class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Categories'

class MenuItem(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='items')
    image = models.ImageField(upload_to='menu/', blank=True, null=True)
    is_available = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

