from django.contrib import admin

# admin.py

from django.contrib import admin
from .models import Course

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('title', 'course_type', 'price', 'img')  # Show img in list view
    search_fields = ('title', 'course_type')
