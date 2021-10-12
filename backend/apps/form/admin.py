from django.contrib import admin
from apps.form.models import FormEmail


class FormEmailAdmin(admin.ModelAdmin):
    list_display = ('fullname', 'number', 'email')
    list_filter = ('fullname', 'number')
    search_fields = ('fullname',)


admin.site.register(FormEmail, FormEmailAdmin)
