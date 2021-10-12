from django.contrib import admin
from modeltranslation.admin import TranslationAdmin

from .models import Product, Category, TechnicalData


@admin.register(Category)
class CategoryAdmin(TranslationAdmin):
    list_display = ['name']


class TechnicalDataInline(admin.TabularInline):
    model = TechnicalData
    extra = 1


@admin.register(Product)
class ProductAdmin(TranslationAdmin):
    list_display = ['title', 'category', 'product_state']
    inlines = [TechnicalDataInline,]
    list_filter = ("category", 'product_state')
    search_fields = ("title", "category__name")


@admin.register(TechnicalData)
class TechnicalDataAdmin(TranslationAdmin):
    list_display = ['key', 'value']


admin.site.site_title = "Kyrgyz Unaa Kurulush"
admin.site.site_header = "Kyrgyz Unaa Kurulush"
