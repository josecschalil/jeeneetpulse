from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CourseViewSet, SubjectViewSet, ChapterViewSet, LectureVideoViewSet,ExamQuestionViewSet, ChapterQuestionViewSet, ExamViewSet, QuestionViewSet, CourseAddViewSet, bulk_create_chapters, bulk_create_questions,UserExamDataViewSet,ChapterQuestionsView,LectureNoteViewSet

router = DefaultRouter()
router.register(r'courses', CourseViewSet)
router.register(r'subjects', SubjectViewSet)
router.register(r'chapters', ChapterViewSet) #question array displayed from chapterquestions
router.register(r'lecture-videos', LectureVideoViewSet)
router.register(r'lecture-notes', LectureNoteViewSet)
router.register(r'exams', ExamViewSet)  #question array displayed from examquestions, also added 3bools and related bool field's id for figuring out what exam is.
router.register(r'questions', QuestionViewSet) #made display array of chapters and exams here linked to examquestions and chapterquestions
router.register(r'userCourses', CourseAddViewSet)
router.register(r'exam-data',UserExamDataViewSet)
router.register(r'examquestions', ExamQuestionViewSet) #its for viewing manymany relation b/w examquestions
router.register(r'chapterquestions', ChapterQuestionViewSet) #its for manymany seeing b/w chapter and questions.

urlpatterns = [
    path('chapters/bulk/', bulk_create_chapters, name='bulk-create-chapters'),  
    path('questions/bulk/', bulk_create_questions, name='bulk-create-questions'),  
    path('chapter-questions/', ChapterQuestionsView.as_view(), name='chapter-questions'),

]


urlpatterns += router.urls
