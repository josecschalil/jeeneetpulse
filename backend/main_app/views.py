from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.contrib.auth.models import update_last_login
from .models import CustomUser
from .serializers import UserRegistrationSerializer, UserAuthenticationSerializer

class SignupView(APIView):
    """Handles user registration."""
    permission_classes = [AllowAny]  # Allow unauthenticated users to access

    def post(self, request):
        """Handle POST request for user registration."""
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    """Handles user authentication and token generation."""
    permission_classes = [AllowAny]

    def post(self, request):
        """Handle POST request for user authentication."""
        serializer = UserAuthenticationSerializer(data=request.data)
        if serializer.is_valid():
            return Response(serializer.validated_data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
