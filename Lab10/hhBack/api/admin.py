from django.contrib import admin

from . import models

# admin.site.register(models.Vacancy)
# admin.site.register(models.Company)

@admin.register(models.Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'description', 'city', 'address', ]


@admin.register(models.Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'salary', 'company', ]
