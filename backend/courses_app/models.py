from django.db import models
import uuid
from django.conf import settings
from django.core.exceptions import ValidationError

class Course(models.Model):
    course_type = models.CharField(max_length=100)
    title = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)  
    current_price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)  
    id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True,primary_key=True)
    portions = models.TextField() 
    watch_hours = models.CharField(max_length=50)  
    classes = models.CharField(max_length=50) 
    chapters = models.CharField(max_length=50) 
    tests = models.CharField(max_length=50)
    studymaterials= models.CharField(max_length=50)
    validity = models.IntegerField(default=365)  
   
    content_left_1 = models.TextField(blank=True, null=True)
    content_left_2 = models.TextField(blank=True, null=True)
    content_left_3 = models.TextField(blank=True, null=True)
    content_left_4 = models.TextField(blank=True, null=True)
    content_right_1 = models.TextField(blank=True, null=True)
    content_right_2 = models.TextField(blank=True, null=True)
    content_right_3 = models.TextField(blank=True, null=True)
    content_right_4 = models.TextField(blank=True, null=True)
    img = models.ImageField(upload_to='course_images/', blank=True, null=True)
    
    def __str__(self):
        return f"{self.title}"

class Subject(models.Model):
    id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True,primary_key=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='subjects')
    name = models.CharField(max_length=255)
    type = models.CharField(max_length=255,default="JEE")
    def __str__(self):
        return f"{self.name} - {self.course.title}"

class Chapter(models.Model):
    id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True,primary_key=True)
    name = models.CharField(max_length=255)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    questions = models.ManyToManyField('Question', through='ChapterQuestion', related_name='chapters_related')  
    #you cant name it chapters here - error will come. since its being there in questions MODEL as well.


    def __str__(self):
        return f"{self.name} - {self.subject.name} - {self.subject.course.title}"

class LectureVideo(models.Model):
    thumbnail = models.ImageField(upload_to='video_images/', blank=True, null=True)
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE, related_name='lecture_videos')
    video_title = models.CharField(max_length=255)
    video_path = models.CharField(max_length=500)

class Exam(models.Model):
    exam_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True, primary_key=True)
    exam_title = models.CharField(max_length=255)

    is_fullCourseExam = models.BooleanField(default=False)
    is_fullSubjectExam = models.BooleanField(default=False)
    is_fullChapterExam = models.BooleanField(default=False)

    course = models.ForeignKey('Course', null=True, blank=True, on_delete=models.SET_NULL)
    subject = models.ForeignKey('Subject', null=True, blank=True, on_delete=models.SET_NULL)
    chapter = models.ForeignKey('Chapter', null=True, blank=True, on_delete=models.SET_NULL)


    #new field to see all questions associated to an exam.
    questions = models.ManyToManyField('Question', through='ExamQuestion', related_name='exams_related')


    #code for validation-additionall
    def clean(self):
        booleans = [self.is_fullCourseExam, self.is_fullSubjectExam, self.is_fullChapterExam]
        
        # Ensure only one of the flags is True
        if sum(booleans) > 1:
            raise ValidationError("Only one of 'is_fullCourseExam', 'is_fullSubjectExam', or 'is_fullChapterExam' can be True.")
        

    def save(self, *args, **kwargs):
        self.clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.exam_title}"

class Question(models.Model):
    LEVEL_CHOICES = [
        (1, 'Level 1'),
        (2, 'Level 2'),
        (3, 'Level 3'),
    ]
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    chapters = models.ManyToManyField('Chapter', through='ChapterQuestion', related_name='chapters')
    exams = models.ManyToManyField('Exam', through='ExamQuestion', related_name='exams')

    # since error courses_app.Chapter.questions: (fields.E302) Reverse accessor 'Question.chapters' for 'courses_app.Chapter.questions' clashes with field name 'courses_app.Question.chapters'.
    #we modified name of chater MODEL's method question


    #not reuqired now since there is a many one relation table initated?
    #old code only associates single chapter and exam.

    # exam = models.ForeignKey(
    #     'Exam', 
    #     on_delete=models.CASCADE, 
    #     related_name='exam_questions', 
    #     db_index=True, 
    #     blank=True, 
    #     null=True
    # )
    # chapter = models.ForeignKey(
    #     'Chapter', 
    #     on_delete=models.CASCADE, 
    #     related_name='chapter_questions', 
    #     db_index=True, 
    #     blank=True, 
    #     null=True
    # )

    question_text = models.TextField(blank=True, null=True)
    question_image = models.ImageField(upload_to='question_images/', blank=True, null=True)
    option_a_text = models.TextField(blank=True, null=True)
    option_a_image = models.ImageField(upload_to='option_images/', blank=True, null=True)
    option_b_text = models.TextField(blank=True, null=True)
    option_b_image = models.ImageField(upload_to='option_images/', blank=True, null=True)
    option_c_text = models.TextField(blank=True, null=True)
    option_c_image = models.ImageField(upload_to='option_images/', blank=True, null=True)
    option_d_text = models.TextField(blank=True, null=True)
    option_d_image = models.ImageField(upload_to='option_images/', blank=True, null=True)
    correct_answer = models.CharField(
        max_length=1, 
        choices=[('A', 'Option A'), ('B', 'Option B'), ('C', 'Option C'), ('D', 'Option D')]
    )
    concept_involved = models.CharField(max_length=255, blank=True, null=True)
    solution_text = models.TextField(blank=True, null=True)
    diagram_image = models.ImageField(upload_to='question_diagrams/', blank=True, null=True)
    level = models.IntegerField(choices=LEVEL_CHOICES, default=1)

    class Meta:
        ordering = ['id']

    def __str__(self):
        # return f"Question {self.id} - Exam {self.exam.name}" i dont know why it was written like this here.
        return f"{self.question_text}"

class UserCourseData(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='purchases')
    course = models.ForeignKey('Course', on_delete=models.CASCADE, related_name='purchased_courses')
    progress = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.user.username} - {self.course.code} - {self.progress}%"

    class Meta:
        
        constraints = [
            models.UniqueConstraint(fields=['user', 'course'], name='unique_user_course_purchase')
        ]

class UserExamData(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='exam_attempts')
    exam_id = models.CharField(max_length=255)
    current_question_index = models.IntegerField()
    answers = models.JSONField()
    visited = models.JSONField()
    marked_for_review = models.JSONField()
    time_remaining = models.IntegerField()
    is_timer_running = models.BooleanField()
    is_submitted = models.BooleanField()
    is_active = models.BooleanField()
    attempt_number = models.IntegerField()

    def __str__(self):
        return f"ExamAttempt (User: {self.user.username}, Exam: {self.exam_id}, Attempt: {self.attempt_number})"

class ChapterQuestion(models.Model):
    chapter = models.ForeignKey(
        Chapter,
        on_delete=models.CASCADE,
        related_name='chapter_questions_relation',  
    )
    question = models.ForeignKey(
        Question,
        on_delete=models.CASCADE,
        related_name='chapter_questions_relation',  
    )

    class Meta:
        unique_together = ('chapter', 'question')

    def __str__(self):
        return f"Chapter: {self.chapter.name}, Question: {self.question.id}"


class ExamQuestion(models.Model):
    exam = models.ForeignKey(
        Exam,
        on_delete=models.CASCADE,
        related_name='exam_questions_relation', 
    )
    question = models.ForeignKey(
        Question,
        on_delete=models.CASCADE,
        related_name='exam_questions_relation',  
    )

    class Meta:
        unique_together = ('exam', 'question')

    def __str__(self):
        return f"Exam: {self.exam.exam_title}, Question: {self.question.id}"

