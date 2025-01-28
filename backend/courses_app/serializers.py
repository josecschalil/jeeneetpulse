from rest_framework import serializers
from .models import ( 
    Course, Subject, Chapter, LectureVideo,
    Exam, Question,UserCourseData,UserExamData,
    ExamQuestion,ChapterQuestion,LectureNote )

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

class ChapterQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChapterQuestion
        fields = '__all__'

class ExamQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExamQuestion
        fields ='__all__'


class ChapterListSerializer(serializers.ListSerializer):
    child = ChapterSerializer()

class LectureVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = LectureVideo
        fields = '__all__'

class LectureNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = LectureNote
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

class UserExamDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserExamData
        fields = '__all__'  



from .models import ExamQuestion

class ExamQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExamQuestion
        fields = ['exam', 'question']

    def validate(self, data):
        return data


class ChapterQuestionUploadSerializer(serializers.Serializer):
    chapter_id = serializers.UUIDField()
    questions = QuestionSerializer(many=True)

    def validate_chapter_id(self, value):
        if not Chapter.objects.filter(id=value).exists():
            raise serializers.ValidationError("Invalid Chapter ID.")
        return value

    def create(self, validated_data):
        chapter_id = validated_data['chapter_id']
        chapter = Chapter.objects.get(id=chapter_id)
        questions_data = validated_data['questions']

        for question_data in questions_data:
            question = Question.objects.create(**question_data)
            question.chapters.add(chapter)

        return validated_data