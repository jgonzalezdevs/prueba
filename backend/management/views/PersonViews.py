# django

# django rest
from rest_framework.viewsets import ModelViewSet

# models
from ..models import Person

# serializers

from ..serializers.PersonSerializers import PersonSerializer


class PersonsViewSet(ModelViewSet):
    """
    A simple ViewSet for viewing and editing persons.
    """
    model = Person
    lookup_field = 'id'
    queryset = model.objects.all()
    serializer_class = PersonSerializer
    authentication_classes = ''
