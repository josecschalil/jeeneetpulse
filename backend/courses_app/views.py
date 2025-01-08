from rest_framework import viewsets
from .models import Course, Subject, Chapter, LectureVideo, Exam, Question,UserCourseData
from .serializers import CourseSerializer, SubjectSerializer, ChapterSerializer, LectureVideoSerializer, ExamSerializer, QuestionSerializer,UserCourseDataSerializer
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response



class CourseViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class SubjectViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer

    @action(detail=False, methods=['get'], url_path='(?P<course_id>[^/.]+)')
    def get_subjects_by_course(self, request, course_id=None):
        subjects = Subject.objects.filter(course_id=course_id)
        if subjects.exists():
            serializer = self.get_serializer(subjects, many=True)
            return Response(serializer.data, status=200)
        return Response({"detail": "No subjects found for this course ID."}, status=404)


class ChapterViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer

class LectureVideoViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = LectureVideo.objects.all()
    serializer_class = LectureVideoSerializer

class ExamViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Exam.objects.all()
    serializer_class = ExamSerializer

class QuestionViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

class CourseAddViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = UserCourseData.objects.all()
    serializer_class = UserCourseDataSerializer
    
    @action(detail=False, methods=['get'], url_path='users/(?P<user_id>[^/.]+)')
    def get_courses_by_user(self, request, user_id=None):
        purchases = UserCourseData.objects.filter(user_id=user_id).select_related('course')
        
        course_data = [
            {
                "course_code": purchase.course.id,
                "progress": purchase.progress,
            }
            for purchase in purchases
        ]
        
        return Response({'user_id': user_id, 'courses': course_data})
