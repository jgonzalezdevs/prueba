# django rest
from rest_framework import serializers

# models
from ..models import Person

# serializers


class PersonSerializer(serializers.ModelSerializer):
    """ Serializer for person creation, update, list and retrieve """

    # phone = serializers.CharField(max_length=100, required=True)

    class Meta:

        model = Person
        fields = '__all__'
        read_only_fields = ('id',)