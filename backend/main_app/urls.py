from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import SignupView, LoginView, VerifyEmailView
urlpatterns = [
    path('auth/', include('djoser.urls')),  # Djoser URLs for authentication
    path('auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # JWT obtain token
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # JWT refresh token
    path('signup/', SignupView.as_view(), name='user-register'),  # User registration
    path('login/', LoginView.as_view(), name='user-login'),  # User login
    path('verify-email/<uidb64>/<token>/', VerifyEmailView.as_view(), name='verify-email'),

]
