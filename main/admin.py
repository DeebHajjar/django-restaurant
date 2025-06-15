from django.contrib import admin
from .models import Category, MenuItem, HomePage

@admin.register(HomePage)
class HomePageAdmin(admin.ModelAdmin):
    list_display = ('title', 'subtitle', 'location', 'phone', 'email')
    search_fields = ('title', 'subtitle', 'location', 'phone', 'email')
    fieldsets = (
        (None, {
            'fields': ('title', 'subtitle', 'description', 'image')
        }),
        ('About Us', {
            'fields': ('aboute_title', 'about_description')
        }),
        ('Contact Information', {
            'fields': ('location', 'phone', 'email', 'opening_hours', 'facbook_link', 'instagram_link')
        }),
    )

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')
    search_fields = ('name',)

@admin.register(MenuItem)
class MenuItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'price', 'is_available')
    list_filter = ('category', 'is_available')
    search_fields = ('name', 'description')
