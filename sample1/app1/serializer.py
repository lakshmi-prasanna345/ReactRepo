from rest_framework import serializers
from .models import Recipe,Signup

class ServerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'
class Signupserializer(serializers.ModelSerializer):
    class Meta:
        model=Signup
        fields='__all__'