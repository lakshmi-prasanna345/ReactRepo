from django.db import models

class Recipe(models.Model):
    Name = models.CharField(max_length=255)
    Description = models.TextField()
    Type = models.CharField(max_length=15, choices=[('vegetarian', 'Vegetarian'), ('non-vegetarian', 'Non-Vegetarian'),('sweets',"Sweets"),("deserts","Deserts"),("chocolates","Chocolates"),("cookies","Cookies"),('Cakes','cakes')])
    ImageUrl = models.URLField()
    def __str__(self):
        return self.Name
    
# loginpage and signup page model
class Signup(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField( max_length=100)
    password=models.CharField(max_length=50)
     