from rest_framework import serializers

from apps.form.models import FormEmail
from apps.form.tasks import send_info


class FormEmailSerializer(serializers.ModelSerializer):

    class Meta:
        model = FormEmail
        fields = "__all__"

    def create(self, validated_data):
        form_email = super().create(validated_data)
        form_email.save()
        send_info(
            form_email.fullname,
            form_email.email,
            form_email.number,
            form_email.comment,
        )
        return form_email