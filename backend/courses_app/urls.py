from rest_framework.routers import DefaultRouter
from .views import CourseViewSet, SubjectViewSet, ChapterViewSet, LectureVideoViewSet, ExamViewSet, QuestionViewSet,CourseAddViewSet

router = DefaultRouter()
router.register(r'add-course', CourseViewSet)
router.register(r'subjects', SubjectViewSet)
router.register(r'chapters', ChapterViewSet)
router.register(r'lecture-videos', LectureVideoViewSet)
router.register(r'exams', ExamViewSet)
router.register(r'questions', QuestionViewSet)
router.register(r'register-course', CourseAddViewSet)

urlpatterns = router.urls
    