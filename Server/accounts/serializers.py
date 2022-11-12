from rest_framework import serializers
from .models import Account, Prefer

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = '__all__'

class PreferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prefer
        fields = '__all__'
