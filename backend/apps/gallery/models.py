from django.db import models


class Gallery(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='gallery')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name="Галерея"
        verbose_name_plural="Галереи"
        ordering = ["-id"]
    

