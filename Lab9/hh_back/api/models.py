from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    city = models.CharField(max_length=100)
    address = models.TextField()

    def __str__(self):
        return self.name

class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='vacancies')

    def __str__(self):
        return f"{self.name} - {self.company.name}"

class Application(models.Model):
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    vacancy = models.ForeignKey(Vacancy, on_delete=models.CASCADE, related_name='applications')

    def __str__(self):
        return f"{self.full_name} - {self.vacancy.name}"