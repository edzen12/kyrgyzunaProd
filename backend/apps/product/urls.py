from rest_framework.routers import DefaultRouter

from . import views


router = DefaultRouter()
router.register(r'product', views.ProductListView, basename="products")
router.register(r'category', views.CategoryListView, basename="category")
router.register(r'technical', views.TechAPIViewSet, basename="technical")
urlpatterns = router.urls

