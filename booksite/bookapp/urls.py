from django.urls import path

from . import views
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('', views.BooksList.as_view()),
    path('save/', csrf_exempt(views.CustomerDetails.as_view())),

    # path('book/', views.books_list),
]