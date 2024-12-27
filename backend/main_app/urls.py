from django.urls import path,include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import *
urlpatterns = [
    path('auth/', include('djoser.urls')),  # Djoser URLs for authentication
    path('auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # JWT obtain token
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # JWT refresh token
    path('register/', SignupView.as_view(), name='user-register'),
    path('login/', LoginView.as_view(), name='user-login'),
]
