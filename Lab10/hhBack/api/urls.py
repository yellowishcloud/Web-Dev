from django.urls import path
from .views import *
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    path('login/',TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('companies/', get_companies),
    path('companies/<int:company_id>/', get_company),
    path('companies/<int:company_id>/vacancies/', get_company_vacancies),
    path('vacancies/', VacanciesAPIView.as_view()),
    path('vacancies/<int:pk>/', VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten/', top_ten_vacancies),
]