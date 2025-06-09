from rest_framework import serializers
from .models import Project, Skill

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    tech_stack = SkillSerializer(many=True)

    class Meta:
        model = Project
        fields = '__all__'
