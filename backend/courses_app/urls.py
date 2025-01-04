from rest_framework.routers import DefaultRouter
from .views import CourseViewSet, SubjectViewSet, ChapterViewSet, LectureVideoViewSet, ExamViewSet, QuestionViewSet

router = DefaultRouter()
router.register(r'', CourseViewSet)
router.register(r'subjects', SubjectViewSet)
router.register(r'chapters', ChapterViewSet)
router.register(r'lecture-videos', LectureVideoViewSet)
router.register(r'exams', ExamViewSet)
router.register(r'questions', QuestionViewSet)

urlpatterns = router.urls
