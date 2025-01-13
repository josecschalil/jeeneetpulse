from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CourseViewSet, SubjectViewSet, ChapterViewSet, LectureVideoViewSet, ExamViewSet, QuestionViewSet, CourseAddViewSet, bulk_create_chapters, bulk_create_questions,UserExamDataViewSet

router = DefaultRouter()
router.register(r'courses', CourseViewSet)
router.register(r'subjects', SubjectViewSet)
router.register(r'chapters', ChapterViewSet)
router.register(r'lecture-videos', LectureVideoViewSet)
router.register(r'exams', ExamViewSet)
router.register(r'questions', QuestionViewSet)
router.register(r'userCourses', CourseAddViewSet)
router.register(r'exam-data',UserExamDataViewSet)

urlpatterns = [
    path('chapters/bulk/', bulk_create_chapters, name='bulk-create-chapters'),  
    path('questions/bulk/', bulk_create_questions, name='bulk-create-questions'),  
]


urlpatterns += router.urls
