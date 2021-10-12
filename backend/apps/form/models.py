from django.db import models


class FormEmail(models.Model):
    fullname = models.CharField(
        verbose_name="ФИО", max_length=255, db_index=True, blank=True, null=True
    )
    number = models.CharField(
        verbose_name="Номер телефона", max_length=14, blank=True, null=True
    )
    email = models.EmailField(
        verbose_name="Почта", max_length=255, blank=True, null=True
    )
    comment = models.TextField(
        blank=True, null=True,
        verbose_name='Сообщение (комментарий)'
    )

    def __str__(self):
        return f"{self.fullname}, {self.number}"

    class Meta:
        ordering = ('-id',)
    