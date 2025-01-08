from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CourseViewSet, SubjectViewSet, ChapterViewSet, LectureVideoViewSet, ExamViewSet, QuestionViewSet, CourseAddViewSet, bulk_create_chapters

# DefaultRouter to register viewsets
router = DefaultRouter()
router.register(r'courses', CourseViewSet)
router.register(r'subjects', SubjectViewSet)
router.register(r'chapters', ChapterViewSet)
router.register(r'lecture-videos', LectureVideoViewSet)
router.register(r'exams', ExamViewSet)
router.register(r'questions', QuestionViewSet)
router.register(r'userCourses', CourseAddViewSet)

# Custom route for bulk creating chapters
urlpatterns = [
    path('chapters/bulk/', bulk_create_chapters, name='bulk-create-chapters'),
]

# Include the router URLs
urlpatterns += router.urls
