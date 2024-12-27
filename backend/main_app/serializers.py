from rest_framework import serializers
from django.contrib.auth import authenticate
from django.contrib.auth.models import update_last_login
from rest_framework_simplejwt.tokens import RefreshToken
from .models import CustomUser


class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)  # Ensure password is not exposed in responses

    class Meta:
        model = CustomUser
        fields = ['name', 'email', 'password', 'preference']

    def create(self, validated_data):
        # Create a user with hashed password
        user = CustomUser.objects.create_user(
            username=validated_data['email'],  # Use email as username
            name=validated_data['name'],
            email=validated_data['email'],
            password=validated_data['password'],
            preference=validated_data.get('preference', ''),
        )
        return user

class UserAuthenticationSerializer(serializers.Serializer):
    """Serializer for user login and token generation."""

    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        # Authenticate using email and password
        user = authenticate(request=self.context.get('request'), username=email, password=password)
        if user is None:
            raise serializers.ValidationError("Invalid email or password.")
        if not user.is_active:
            raise serializers.ValidationError("User account is deactivated.")

        # Generate tokens
        refresh = RefreshToken.for_user(user)
        update_last_login(None, user)

        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }
