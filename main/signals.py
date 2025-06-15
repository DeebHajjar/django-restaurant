from django.db.models.signals import pre_delete, pre_save
from django.dispatch import receiver
from django.db import models
import os
from .models import HomePage, MenuItem

def delete_old_file(model, instance):
    """
    Delete the old file when updating the image field.
    """
    if not instance.pk:
        return False

    try:
        old_instance = model.objects.get(pk=instance.pk)
    except model.DoesNotExist:
        return False

    for field in model._meta.fields:
        if isinstance(field, models.ImageField):
            old_file = getattr(old_instance, field.name)
            new_file = getattr(instance, field.name)
            if old_file and old_file != new_file:
                if os.path.isfile(old_file.path):
                    os.remove(old_file.path)

@receiver(pre_save, sender=HomePage)
def homepage_pre_save(sender, instance, **kwargs):
    delete_old_file(HomePage, instance)

@receiver(pre_save, sender=MenuItem)
def menuitem_pre_save(sender, instance, **kwargs):
    delete_old_file(MenuItem, instance)

@receiver(pre_delete, sender=HomePage)
def homepage_pre_delete(sender, instance, **kwargs):
    """Delete image files on model instance deletion"""
    for field in instance._meta.fields:
        if isinstance(field, models.ImageField):
            file = getattr(instance, field.name)
            if file:
                if os.path.isfile(file.path):
                    os.remove(file.path)

@receiver(pre_delete, sender=MenuItem)
def menuitem_pre_delete(sender, instance, **kwargs):
    """Delete image file on model instance deletion"""
    if instance.image:
        if os.path.isfile(instance.image.path):
            os.remove(instance.image.path)
