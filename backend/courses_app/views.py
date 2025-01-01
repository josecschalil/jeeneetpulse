from rest_framework import viewsets
from .models import Course, Subject, Chapter, LectureVideo, Exam, Question
from .serializers import CourseSerializer, SubjectSerializer, ChapterSerializer, LectureVideoSerializer, ExamSerializer, QuestionSerializer

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class SubjectViewSet(viewsets.ModelViewSet):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer

class ChapterViewSet(viewsets.ModelViewSet):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer

class LectureVideoViewSet(viewsets.ModelViewSet):
    queryset = LectureVideo.objects.all()
    serializer_class = LectureVideoSerializer

class ExamViewSet(viewsets.ModelViewSet):
    queryset = Exam.objects.all()
    serializer_class = ExamSerializer

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
