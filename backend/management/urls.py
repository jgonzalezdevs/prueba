# django
from django.urls import path

# django rest

# views
from .views.PersonViews import PersonsViewSet
from .views.UserViews import UsersViewset, ArticleViewSet

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .simple_jwt.tokenPairs import UserTokenObtainPairView

# models

# others

app_name = 'management'

user_list = UsersViewset.as_view({
    'post': 'create'
})

person_list = PersonsViewSet.as_view({
    'get': 'list',
    'post': 'create'
})
person_detail = PersonsViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
})

urlpatterns = [
    path('api/user/registration/', ArticleViewSet.as_view(), name='user_creation'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/person/', person_list, name='person_creation'),
    path('api/person/<int:id>/', person_detail, name='person_update'),
]