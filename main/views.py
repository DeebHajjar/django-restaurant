from django.shortcuts import render
from .models import Category, MenuItem, HomePage

def home(request):
    menu_items = MenuItem.objects.filter(is_available=True)[:6]  # Show only 6 items on homepage
    categories = Category.objects.all()
    home_page = HomePage.objects.first()  # Assuming you have a HomePage model for static content

    context = {
        'menu_items': menu_items,
        'categories': categories,
        'home_page': home_page,
    }
    return render(request, 'index.html', context)
