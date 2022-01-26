from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.serializers import Serializer

# from booksite.bookapp import serializers
from .models import Books, Customer
# Create your views here.
from rest_framework.decorators import api_view
from django.http.response import JsonResponse
from .serializers import BooksSerializer

from django.views.generic import View


@api_view(['GET','POST'])
def books_list(request):
    if request.method == 'GET':
        response = Books.objects.get(id=1)
        serializer = BooksSerializer(response)
        return JsonResponse(serializer.data)
from django.views.generic.list import ListView

class BooksList(ListView):
    model = Books
    def books_home_view(request):
        qs = Books.objects.all()
        context = {
            "data":"Get all books at 250 INR.",
            "list":[1,2,3]
        }
        return qs

class CustomerDetails(ListView):
    model = Customer
    def post(self, *args, **kwargs):
        name_1 = self.request.POST.get('name')
        address = self.request.POST.get('address')
        phone = self.request.POST.get('phone')
        order_details = self.request.POST.get('order_details')

        data = Customer(name=name_1,address=address,phone=phone,order_details=order_details)
        data.save()
        return HttpResponse("Success")

