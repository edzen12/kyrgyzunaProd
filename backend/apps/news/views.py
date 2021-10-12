from rest_framework import viewsets, mixins
from . import serializers
from .models import News


class NewsListView(mixins.ListModelMixin,
                   mixins.RetrieveModelMixin,
                   viewsets.GenericViewSet,
                   ):
    queryset = News.objects.all()
    serializer_class = serializers.NewsListSerializer
