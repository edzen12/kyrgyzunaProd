# from django.contrib import admin
# from django.utils.safestring import mark_safe
# from modeltranslation.admin import TranslationAdmin

# from .models import Gallery


# @admin.register(Gallery)
# class GalleryAdmin(TranslationAdmin):
#     list_display = ("id", "title")
#     list_display_links = ("title",)
#     readonly_fields = ("get_image",)


#     def get_image(self, obj):
#         return mark_safe(f'<img src={obj.image.url} width="100" height="80"')

#     get_image.short_description = "Изображение"



