from typing import AbstractSet
from django.db import models

# Create your models here.

class Person(models.Model):
    name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=200)
    paternal_last_name = models.CharField(max_length=200)
    maternal_last_name = models.CharField(max_length=200)
    age = models.PositiveIntegerField()
    rfc = models.CharField(max_length=50)
    date_of_birth = models.DateField()

    class Meta:
        db_table = 'management_persons'

    def __str__(self):
        return self.name
