from django.db import models
# Create your models here.

# AbstractUser에 기본적으로 id와 password가 있음
class Account(models.Model):
    # id(PK, index), username(로그인 id), pw(로그인 pw)
    user_id = models.CharField(help_text = "유저 id",max_length=10, primary_key = True, unique=True, blank=False, null=False, default = 'Nodata')
    password = models.CharField(help_text='유저 비밀번호',max_length=10, blank=False, null=False, default = 'Nodata')
    address = models.CharField(help_text='유저 주소',max_length=10, blank=False, null=False, default = 'Nodata')
    nickname = models.CharField(help_text='유저 닉네임',max_length=10, unique=True, blank=False, null=False, default = 'Nodata')
    def create(self, validated_data):
        return Account.objects.create(**validated_data)
    def update(self, instance, validated_data):
        instance.password = validated_data('password', instance.password)
        instance.address = validated_data('address', instance.address)
        instance.nickname = validated_data('nickname', instance.nickname)
        instance.save()
        return instance
class Prefer(models.Model):
    # unique가 keyword라서 앞에 prefer를 붙였습니다.
    # 1:N이 아니라 1:1모델이라 OneToOneField로 변경
    user_id = models.OneToOneField(Account, related_name="account", on_delete=models.CASCADE, db_column='user_id', primary_key = True)
    prefer_modern = models.IntegerField(help_text='모던 가중치',default=0)
    prefer_natural = models.IntegerField(help_text='네츄럴 가중치',default=0)
    prefer_classic = models.IntegerField(help_text='클래식 가중치',default=0)
    prefer_industry = models.IntegerField(help_text='인더스트리 가중치',default=0)
    prefer_asia = models.IntegerField(help_text='아시아 가중치',default=0)
    prefer_provence = models.IntegerField(help_text='프로방스 가중치',default=0)
    prefer_unique = models.IntegerField(help_text='유니크 가중치',default=0)
    def create(self, validated_data):
        return Prefer.objects.create(**validated_data)
    def update(self, instance, validated_data):
        instance.prefer_modern = validated_data('prefer_modern', instance.prefer_modern)
        instance.prefer_natural = validated_data('prefer_natural', instance.prefer_natural)
        instance.prefer_classic = validated_data('prefer_classic', instance.prefer_classic)
        instance.prefer_industry = validated_data('prefer_industry', instance.prefer_industry)
        instance.prefer_asia = validated_data('prefer_asia', instance.prefer_asia)
        instance.prefer_provence = validated_data('prefer_provence', instance.prefer_provence)
        instance.prefer_unique = validated_data('prefer_unique', instance.prefer_unique)
        instance.save()
        return instance