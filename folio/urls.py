from django.urls import path
from folio.views import get_projects, get_skills


urlpatterns = [
    path('projects/', get_projects),
    path('skills/', get_skills),
]
