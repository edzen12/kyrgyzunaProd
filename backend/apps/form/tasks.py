from django.conf import settings
from django.core.mail import EmailMessage

from kurulush.celery import app


@app.task
def send_info(
        fullname: str, email: str,
        number: str, comment: str
        ):
    message = f"""
    ФИО: {fullname}
    Телефон: {number}
    Почта: {email}
    Сообщение: {comment}
    """
    email = EmailMessage(
        "Добро пожаловать в Kurulush Una!",
        message, settings.EMAIL_HOST_USER,
        ['oichiev.edzen@gmail.com', 'megabmx4477@gmail.com'],
    )
    email.send(fail_silently=False)

    # send_mail(
    #     "Добро пожаловать в Kurulush Una!",
    #     message, settings.EMAIL_HOST_USER,
    #     ['oichiev.edzen@gmail.com', 'edznproger@gmail.com'],
    #     fail_silently=False
    # )
