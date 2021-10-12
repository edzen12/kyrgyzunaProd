from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.i18n import i18n_patterns

from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from .views import api_root


schema_view = get_schema_view(
   openapi.Info(
      title="Kurulush Auto API",
      default_version='v1',
      description="Description for API",
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

api_patterns = [
    path('', api_root, name='api-root'),
    path('news/', include('apps.news.urls')),
    path('gallery/', include('apps.gallery.urls')),
    path('product/', include('apps.product.urls')),
    path('form/', include('apps.form.urls')),
]


urlpatterns = [
    path('admin/', admin.site.urls),
    path('i18n/', include('django.conf.urls.i18n')),

    path('api/', include(api_patterns)),

    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),

]

urlpatterns += i18n_patterns(
    path('news/', include('apps.news.urls')),
    path('gallery/', include('apps.gallery.urls')),
    path('product/', include('apps.product.urls')),
)

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    

