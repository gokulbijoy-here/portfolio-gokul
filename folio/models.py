from django.db import models


class Skill(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    github_link = models.URLField()
    tech_stack = models.ManyToManyField(Skill)

    def __str__(self):
        return self.title
