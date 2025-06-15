from django.shortcuts import render
from django.db.models import Count
from .models import Category, MenuItem, HomePage

def home(request):
    # Get categories that have items
    categories = Category.objects.annotate(
        items_count=Count('items')
    ).filter(items_count__gt=0)
    
    # Get all available menu items
    menu_items = MenuItem.objects.filter(is_available=True)
    home_page = HomePage.objects.first()  # Assuming you have a HomePage model for static content

    context = {
        'menu_items': menu_items,
        'categories': categories,
        'home_page': home_page,
    }
    return render(request, 'index.html', context)
