# django
import os
from django.conf import settings
# django rest
from rest_framework import serializers
from rest_framework.exceptions import ValidationError, bad_request
from rest_framework.serializers import ModelSerializer
from rest_framework.serializers import raise_errors_on_nested_writes

# others
from django.contrib.auth.models import User

# serializers

class UserGeneralSerializer(serializers.ModelSerializer):
    """ Serializer for user creation, update, list and retrieve """

    username = serializers.EmailField()
    password = serializers.CharField(max_length=128, required=False, write_only=True)
    confirm = serializers.CharField(max_length=128, required=False, write_only=True)

    class Meta:
        model = User
        fields = '__all__'
        read_only_fields = ('id',)

    def create(self, validated_data):
        confirm = validated_data.pop('confirm')
        
        if self.initial_data['password'] == confirm:
            user = super().create(validated_data)
            user.set_password(validated_data['password'])
            user.is_active = True
            user.save()
            return user

        return ValidationError
        
