from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse


@api_view(['GET'])
def api_root(request, format=None):
    response = Response({
        'product': reverse('products-list', request=request, format=format),
        'gallery': reverse('gallery-list', request=request, format=format),
        'news': reverse('news-list', request=request, format=format),
        'form': reverse('form-list', request=request, format=format),
        'category': reverse('category-list', request=request, format=format),
        'technical': reverse('technical-list', request=request, format=format),
    })
    return response
