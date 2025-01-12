from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CourseViewSet, SubjectViewSet, ChapterViewSet, LectureVideoViewSet, ExamViewSet, QuestionViewSet, CourseAddViewSet, bulk_create_chapters,QuizStateView, StartExamView, GetAttemptsView

router = DefaultRouter()
router.register(r'courses', CourseViewSet)
router.register(r'subjects', SubjectViewSet)
router.register(r'chapters', ChapterViewSet)
router.register(r'lecture-videos', LectureVideoViewSet)
router.register(r'exams', ExamViewSet)
router.register(r'questions', QuestionViewSet)
router.register(r'userCourses', CourseAddViewSet)

urlpatterns = [
    path('chapters/bulk/', bulk_create_chapters, name='bulk-create-chapters'),
    path('quiz-states/<int:pk>/', QuizStateView.as_view(), name='quiz_state_detail'),
    path('start-exam/', StartExamView.as_view(), name='start_exam'),
    path('exam-attempts/<str:exam_id>/', GetAttemptsView.as_view(), name='get_attempts'),
]


urlpatterns += router.urls
