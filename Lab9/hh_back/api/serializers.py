from rest_framework import serializers
from .models import Company, Vacancy, Application

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['id', 'name', 'description', 'city', 'address']

class VacancySerializer(serializers.ModelSerializer):
    company = CompanySerializer(read_only=True)
    
    class Meta:
        model = Vacancy
        fields = ['id', 'name', 'description', 'salary', 'company']

class ApplicationSerializer(serializers.ModelSerializer):
    vacancy = VacancySerializer(read_only=True)
    vacancy_id = serializers.IntegerField(write_only=True)
    
    class Meta:
        model = Application
        fields = ['id', 'full_name', 'email', 'text', 'created_at', 'vacancy', 'vacancy_id']