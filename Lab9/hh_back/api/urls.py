
from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.CompanyListView.as_view(), name='company_list'),
    path('companies/<int:id>/', views.CompanyDetailView.as_view(), name='company_detail'),
    path('companies/<int:id>/vacancies/', views.CompanyVacanciesView.as_view(), name='company_vacancies'),
    path('vacancies/', views.VacancyListView.as_view(), name='vacancy_list'),
    path('vacancies/<int:id>/', views.VacancyDetailView.as_view(), name='vacancy_detail'),
    path('vacancies/top_ten/', views.TopTenVacanciesView.as_view(), name='top_ten_vacancies'),
    path('applications/', views.ApplicationListView.as_view(), name='application_list'),
    path('applications/create/', views.ApplicationCreateView.as_view(), name='application_create'),
]