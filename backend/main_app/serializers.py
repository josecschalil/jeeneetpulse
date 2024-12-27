from rest_framework import serializers
from django.contrib.auth import authenticate
from django.contrib.auth.models import update_last_login
from rest_framework_simplejwt.tokens import RefreshToken
from .models import CustomUser
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from .views import *
class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)  # Ensure password is not exposed in responses

    class Meta:
        model = CustomUser
        fields = ['name', 'email', 'password']

    def create(self, validated_data):
        """
        Create a user but only save it if the verification email is successfully sent.
        """
        # Prepare user data without saving to the database yet
        user = CustomUser(
            name=validated_data['name'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.is_active = False  # Make user inactive until email verification is done

        user.save()
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
