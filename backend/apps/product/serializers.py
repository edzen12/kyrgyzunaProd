from rest_framework import serializers

from .models import (
    Product, 
    Category,
    TechnicalData
)


class CategoryListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = "__all__"


class TechnicalDataSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)

    class Meta:
        model = TechnicalData
        fields = "__all__"


class ProductListSerializer(serializers.ModelSerializer):
    category = CategoryListSerializer()
    technical_data = TechnicalDataSerializer(many=True, required=False)
    
    class Meta:
        model = Product
        fields = "__all__"

