from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from django.utils.safestring import mark_safe

from .models import News


@admin.register(News)
class NewsAdmin(TranslationAdmin):
    list_display = ("id", "title","created")
    list_display_links = ("title",)
    readonly_fields = ("get_image",)

    def get_image(self, obj):
        return mark_safe(f'<img src={obj.image.url} width="140" height="120"')

    get_image.short_description = "На данный момент"    