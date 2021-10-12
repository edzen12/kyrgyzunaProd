from django.db import models

# Create your models here.

class News(models.Model):
    title = models.CharField("Заголовок", max_length=255)
    image = models.ImageField("Фото", upload_to="uploads", blank=True, null=True)
    description = models.TextField("Описание")
    created = models.DateTimeField("Дата", auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Новость"
        verbose_name_plural = "Новости"
        ordering = ["-id"]

    