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
    def get_exams_by_chapter(self, request, chapter_id=None):
        exams = Exam.objects.filter(chapter_id=chapter_id)
        if exams.exists():
            serializer = ExamSerializer(exams, many=True)
            return Response(serializer.data, status=200)
        return Response({"detail": "No exams found for this chapter."}, status=404)

    

class CourseAddViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset =UserCourseData.objects.all()
    serializer_class = UserCourseDataSerializer
    @action(detail=False, methods=['get'], url_path='(?P<user_id>[^/.]+)')
    def get_courses_by_user(self, request, user_id=None):

        purchases = UserCourseData.objects.filter(user_id=user_id).select_related('course')
        course_codes = [purchase.course.id for purchase in purchases]
        return Response({'user_id': user_id, 'course_codes': course_codes})
