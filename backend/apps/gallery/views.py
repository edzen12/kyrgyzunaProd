from rest_framework import mixins, viewsets

from . import serializers
from .models import Gallery


class GalleryView(mixins.ListModelMixin,
                  mixins.RetrieveModelMixin,
                  viewsets.GenericViewSet,):
    queryset = Gallery.objects.all()
    serializer_class = serializers.GallerySerializer
