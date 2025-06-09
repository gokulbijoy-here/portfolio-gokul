
# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Project, Skill
from .serializers import ProjectSerializer, SkillSerializer

@api_view(['GET'])
def get_projects(request):
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_skills(request):
    skills = Skill.objects.all()
    serializer = SkillSerializer(skills, many=True)
    return Response(serializer.data)
