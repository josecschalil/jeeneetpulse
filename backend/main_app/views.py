from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserRegistrationSerializer
from django.core.mail import send_mail
from django.urls import reverse
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import render_to_string
from django.contrib.auth.tokens import default_token_generator
from django.utils.encoding import force_str
User = get_user_model()

class SignupView(APIView):
    """Handles user registration."""
    permission_classes = [AllowAny]
    def post(self, request):
        """Handle POST request for user registration."""
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()  # Save the user
            # Send the verification email
            self.send_verification_email(user, request)

            return Response(
                {'message': 'User registered successfully! Please check your email to verify your account.'},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def send_verification_email(self, user, request):
        """Send account verification email to the user."""
        token = default_token_generator.make_token(user)
        uid = urlsafe_base64_encode(str(user.pk).encode('utf-8'))

        # Construct verification URL
        current_site = get_current_site(request)
        relative_link = reverse('verify-email', kwargs={'uidb64': uid, 'token': token})
        full_url = f'http://{current_site.domain}{relative_link}'
        print("Relative Link:", relative_link)
        print("Full URL:", full_url)
        # Render the email template
        email_subject = "Activate your account"
        email_message = render_to_string(
            'registration/activation_email.html',  # The email template
            {'user': user, 'activation_url': full_url}
        )

        # Send the email
        send_mail(
            email_subject,
            email_message,
            'no-reply@yourdomain.com',  # Your no-reply email
            [user.email],
            fail_silently=False,
            html_message=email_message
        )
class VerifyEmailView(APIView):
    permission_classes = [AllowAny]  # Allow unauthenticated access

    def get(self, request, uidb64, token):
        try:
            uid = force_str(urlsafe_base64_decode(uidb64))  # Use force_str here
            user = User.objects.get(pk=uid)
            if default_token_generator.check_token(user, token):
                user.is_active = True
                user.save()
                return Response({'message': 'Email verified successfully!'}, status=status.HTTP_200_OK)
            else:
                return Response({'message': 'Invalid token!'}, status=status.HTTP_400_BAD_REQUEST)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            return Response({'message': 'Invalid token!'}, status=status.HTTP_400_BAD_REQUEST)
class LoginView(APIView):
    """Handles user authentication and token generation."""
    permission_classes = [AllowAny]

    def post(self, request):
        """Handle POST request for user authentication."""
        serializer = UserAuthenticationSerializer(data=request.data)
        if serializer.is_valid():
            return Response(serializer.validated_data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
