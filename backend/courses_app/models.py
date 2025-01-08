from django.db import models
import uuid
from django.conf import settings

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
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)


    def __str__(self):
        return f"{self.name} - {self.subject.name} - {self.subject.course.title}"
    

class LectureVideo(models.Model):
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE, related_name='lecture_videos')
    video_title = models.CharField(max_length=255)
    video_path = models.CharField(max_length=500)

class Exam(models.Model):
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE, related_name='exams')
    exam_title = models.CharField(max_length=255)
    def __str__(self):
        return f"{self.exam_title}"
    

class Question(models.Model):
    exam = models.ForeignKey(Exam, on_delete=models.CASCADE, related_name='questions')
    question_text = models.TextField()
    option_a = models.CharField(max_length=255)
    option_b = models.CharField(max_length=255)
    option_c = models.CharField(max_length=255)
    option_d = models.CharField(max_length=255)
    correct_answer = models.CharField(max_length=1)


class UserCourseData(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='purchases')
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='purchased_courses')
    progress = models.IntegerField(default=0) #for progress showing in front

    def __str__(self):
        return f"{self.user.username} - {self.course.code} - {self.progress}%"



