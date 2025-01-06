from rest_framework import serializers
from .models import Course, Subject, Chapter, LectureVideo, Exam, Question,UserCourseData

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class CourseUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields =['id']

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = '__all__'

class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chapter
        fields = '__all__'

class LectureVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = LectureVideo
        fields = '__all__'

class ExamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exam
        fields = '__all__'

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'

class UserCourseDataSerializer(serializers.ModelSerializer):
    course = serializers.PrimaryKeyRelatedField(queryset=Course.objects.all())
    course_details = CourseUserSerializer(source='course', read_only=True)

    class Meta:
        model = UserCourseData
        fields = '__all__'  
