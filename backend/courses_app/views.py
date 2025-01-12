from rest_framework import viewsets,status
from .models import Course, Subject, Chapter, LectureVideo, Exam, Question,UserCourseData,QuizState
from .serializers import CourseSerializer, SubjectSerializer, ChapterSerializer, LectureVideoSerializer, ExamSerializer, QuestionSerializer,UserCourseDataSerializer,QuizStateSerializer
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action,api_view
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter, SearchFilter
from rest_framework.views import APIView

class SubjectViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['course_id']  
    search_fields = ['name', 'type']
    ordering_fields = ['name', 'type']

@api_view(['POST'])
def bulk_create_chapters(request):
    if request.method == 'POST':
        serializer = ChapterSerializer(data=request.data, many=True)
        if serializer.is_valid():
          
            chapters = serializer.save()
            return Response(ChapterSerializer(chapters, many=True).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    



class CourseViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Course.objects.all()
    serializer_class = CourseSerializer



class ChapterViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer
    @action(detail=False, methods=['get'], url_path='(?P<subject_id>[^/.]+)')
    def get_chapters_by_course(self, request, subject_id=None):
        chapters = Chapter.objects.filter(subject_id=subject_id)
        if chapters.exists():
            serializer = self.get_serializer(chapters, many=True)
            return Response(serializer.data, status=200)
        return Response({"detail": "No chapters found for this subject."}, status=404)

class LectureVideoViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = LectureVideo.objects.all()
    serializer_class = LectureVideoSerializer

class ExamViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Exam.objects.all()
    serializer_class = ExamSerializer

    @action(detail=False, methods=['get'], url_path='(?P<chapter_id>[^/.]+)')
    def get_exams_by_chapter(self, request, chapter_id=None):
        try:
 
            exams = Exam.objects.filter(chapter_id=chapter_id)

          
            if exams.exists():
                serializer = self.get_serializer(exams, many=True)
                return Response(serializer.data, status=200)

            return Response({"detail": "No exams found for this chapter."}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

class QuestionViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    @action(detail=False, methods=['get'], url_path='(?P<chapter_id>[^/.]+)')
    def get_questions_by_chapter(self, request, chapter_id=None):
        questions = Question.objects.filter(chapter_id=chapter_id)
        if questions.exists():
            serializer = ExamSerializer(questions, many=True)
            return Response(serializer.data, status=200)
        return Response({"detail": "No questions found for this chapter."}, status=404)

    

class CourseAddViewSet(viewsets.ModelViewSet):
    
    permission_classes = [AllowAny]
    queryset = UserCourseData.objects.all()
    serializer_class = UserCourseDataSerializer

    @action(detail=False, methods=['get'], url_path='(?P<user_id>[^/.]+)')
    def get_courses_by_user(self, request, user_id=None):

        if not user_id:
            return Response(
                {"error": "User ID is required."},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        purchases = UserCourseData.objects.filter(user_id=user_id).select_related('course')

        course_data = [
            {
                "course_id": purchase.course.id,
                "progress": purchase.progress,
            }
            for purchase in purchases
        ]

        return Response(
            {
                "user_id": user_id,
                "courses": course_data,
            },
            status=status.HTTP_200_OK
        )

    @action(detail=False, methods=['put'], url_path='(?P<user_id>[^/.]+)/(?P<course_id>[^/.]+)/update-progress')
    def update_course_progress(self, request, user_id=None, course_id=None):
    
        try:
            if not user_id or not course_id:
                return Response(
                    {"error": "Both user_id and course_id are required in the URL."},
                    status=status.HTTP_400_BAD_REQUEST
                )


            user_course_data = UserCourseData.objects.filter(user_id=user_id, course_id=course_id).first()

            if not user_course_data:
                return Response(
                    {"error": "No matching record found for the provided user_id and course_id."},
                    status=status.HTTP_404_NOT_FOUND
                )

         
            serializer = self.get_serializer(user_course_data, data=request.data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save()

            return Response(serializer.data, status=status.HTTP_200_OK)

        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_400_BAD_REQUEST
            )

    @action(detail=False, methods=['post'], url_path='purchase-course')
    def purchase_course(self, request):
       
        user_id = request.data.get('user_id')
        course_id = request.data.get('course_id')

        if not user_id or not course_id:
            return Response(
                {"error": "Both user_id and course_id are required."},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
    
            data = {
                'user': user_id,
                'course': course_id,
                'progress': 0 
            }

            serializer = UserCourseDataSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)

            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        except IntegrityError:
            return Response(
                {"error": "This course has already been purchased by the user."},
                status=status.HTTP_400_BAD_REQUEST
            )


class QuizStateView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, pk=None):
        user = request.user

        if pk:
            try:
                quiz_state = QuizState.objects.get(pk=pk, user=user)
                serializer = QuizStateSerializer(quiz_state)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except QuizState.DoesNotExist:
                return Response({"error": "QuizState not found or not accessible"}, status=status.HTTP_404_NOT_FOUND)

        return Response({"error": "QuizState ID is required"}, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk=None):
        user = request.user

        if pk:
            try:
                quiz_state = QuizState.objects.get(pk=pk, user=user)
                serializer = QuizStateSerializer(quiz_state, data=request.data, context={'request': request})
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data, status=status.HTTP_200_OK)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except QuizState.DoesNotExist:
                return Response({"error": "QuizState not found or not accessible"}, status=status.HTTP_404_NOT_FOUND)

        return Response({"error": "QuizState ID is required"}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None):
        user = request.user

        if pk:
            try:
                quiz_state = QuizState.objects.get(pk=pk, user=user)
                quiz_state.delete()
                return Response({"message": "QuizState deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
            except QuizState.DoesNotExist:
                return Response({"error": "QuizState not found or not accessible"}, status=status.HTTP_404_NOT_FOUND)

        return Response({"error": "QuizState ID is required"}, status=status.HTTP_400_BAD_REQUEST)

class StartExamView(APIView):
    permission_classes =[AllowAny]

    def post(self, request):
        user = request.user
        exam_id = request.data.get('exam_id')

        if not exam_id:
            return Response({"error": "Exam ID is required"}, status=status.HTTP_400_BAD_REQUEST)

        # Get the latest attempt number for this user and exam
        latest_attempt = QuizState.objects.filter(user=user, exam_id=exam_id).order_by('-attempt_number').first()
        attempt_number = latest_attempt.attempt_number + 1 if latest_attempt else 1

        # Create a new attempt row
        quiz_state = QuizState.objects.create(
            user=user,
            exam_id=exam_id,
            current_question_index=0,
            answers={},
            visited=[],
            marked_for_review=[],
            time_remaining=600,  # Example: 10 minutes
            is_timer_running=True,
            is_submitted=False,
            attempt_number=attempt_number,
        )

        serializer = QuizStateSerializer(quiz_state)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class GetAttemptsView(APIView):
    permission_classes =[AllowAny]

    def get(self, request, exam_id):
        user = request.user
        quiz_states = QuizState.objects.filter(user=user, exam_id=exam_id).order_by('attempt_number')

        if not quiz_states.exists():
            return Response({"error": "No attempts found for this exam"}, status=status.HTTP_404_NOT_FOUND)

        serializer = QuizStateSerializer(quiz_states, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)