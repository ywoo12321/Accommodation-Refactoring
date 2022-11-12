from django.db import models
from accounts.models import Account

# Create your models here.
# class Lodging(models.Model):
#     lodging_name = models.CharField(help_text="숙소명",max_length=10, blank=False, null=False)
#     lodging_address = models.TextField(help_text="숙소 주소")
#     tag = models.IntegerField(help_text="태그")
#     lodging_img1 = models.TextField(help_text="숙소 이미지1")
#     lodging_img2 = models.TextField(help_text="숙소 이미지2")
#     lodging_img3 = models.TextField(help_text="숙소 이미지3")

class Like(models.Model):
    user_id = models.ForeignKey(Account, on_delete=models.CharField)
    lodging_id = models.IntegerField(help_text="lodging의 index")
    like_date = models.DateField(auto_now_add=True, help_text="숙소 좋아요 누른 시점")