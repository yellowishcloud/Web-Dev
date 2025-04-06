from django.shortcuts import render

# Create your views here.
    

from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Company, Vacancy, Application
from .serializers import CompanySerializer, VacancySerializer, ApplicationSerializer

class CompanyListView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

class CompanyDetailView(APIView):
    def get(self, request, id):
        try:
            company = Company.objects.get(id=id)
            serializer = CompanySerializer(company)
            return Response(serializer.data)
        except Company.DoesNotExist:
            return Response({'error': 'Company not found'}, status=404)

class CompanyVacanciesView(APIView):
    def get(self, request, id):
        try:
            company = Company.objects.get(id=id)
            vacancies = company.vacancies.all()
            serializer = VacancySerializer(vacancies, many=True)
            return Response(serializer.data)
        except Company.DoesNotExist:
            return Response({'error': 'Company not found'}, status=404)

class VacancyListView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

class VacancyDetailView(APIView):
    def get(self, request, id):
        try:
            vacancy = Vacancy.objects.get(id=id)
            serializer = VacancySerializer(vacancy)
            return Response(serializer.data)
        except Vacancy.DoesNotExist:
            return Response({'error': 'Vacancy not found'}, status=404)

class TopTenVacanciesView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)


class ApplicationCreateView(APIView):
    def post(self, request):
        serializer = ApplicationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class ApplicationListView(APIView):
    def get(self, request):
        applications = Application.objects.all()
        serializer = ApplicationSerializer(applications, many=True)
        return Response(serializer.data)