from rest_framework import viewsets, mixins

from apps.form.models import FormEmail
from apps.form.serializers import FormEmailSerializer


class FormEmailViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = FormEmail.objects.all()
    serializer_class = FormEmailSerializer
