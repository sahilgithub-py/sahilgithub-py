from django.db import models

# Create your models here.
class Books(models.Model):
    name = models.CharField('Book Name',max_length=100)
    author = models.CharField(max_length=100)
    publish_date = models.DateField(max_length=100)
    price = models.IntegerField()
    description = models.TextField(max_length=100)
    image_url = models.TextField(max_length=100)

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name_plural = "Books Name"

class Customer(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    address = models.TextField()
    order_details = models.TextField()
    