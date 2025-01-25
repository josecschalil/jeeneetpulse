from django.urls import path, include
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import SignupView, LoginView, VerifyEmailView,UserProfileView,ResetPasswordView,ContactUsView, ResetPasswordConfirmView

urlpatterns = [
  
    path('auth/', include('djoser.urls')),  
    path('auth/', include('djoser.urls.authtoken')),  
    path('api/auth/', include('djoser.urls.authtoken')), 
    path('auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'), 
    path('signup/', SignupView.as_view(), name='user-register'),  
    path('login/', LoginView.as_view(), name='user-login'), 
    path('verify-email/<uidb64>/<token>/', VerifyEmailView.as_view(), name='verify-email'),
    path('reset-password/', ResetPasswordView.as_view(), name='reset-password'),
    path('reset-password/<str:uidb64>/<str:token>/', ResetPasswordConfirmView.as_view(), name='reset-password-confirm'),
    path('api/user', UserProfileView.as_view(), name='user-profile'),
    path('contact-us/',ContactUsView.as_view(),name ='contact-us'),

]
