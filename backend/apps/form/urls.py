from rest_framework.routers import DefaultRouter
from apps.form.views import FormEmailViewSet


router = DefaultRouter()
router.register(r"", FormEmailViewSet, basename='form')

urlpatterns = router.urls