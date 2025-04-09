from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    city = models.CharField(max_length=100)
    address = models.TextField()

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'

    def __str__(self):
        return f'{self.id}: {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city':self.city,
            'address':self.address
        }

class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(
        to=Company,
        on_delete=models.CASCADE,
        related_name='companies'
    )

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'

    def __str__(self):
        return f'{self.id}: {self.name}'
        # , {self.salary}, {self.company}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description':self.description,
            'salary': self.salary,
            'company': self.company.name
        }


