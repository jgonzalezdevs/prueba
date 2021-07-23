# django
from django.contrib.auth import get_user_model

# django rest
from rest_framework.viewsets import ModelViewSet

# others
from ..serializers.UserSerializers import UserGeneralSerializer

# views

from rest_framework import generics
class ArticleViewSet(generics.CreateAPIView):
    model = get_user_model()
    serializer_class = UserGeneralSerializer
    queryset = model.objects.all()

class UsersViewset(ModelViewSet):
    """
    A simple ViewSet for viewing and editing users.
    """
    model = get_user_model()
    lookup_field = 'id'
    queryset = model.objects.all()
    serializer_class = UserGeneralSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['user'] = self.request.user
        return context
