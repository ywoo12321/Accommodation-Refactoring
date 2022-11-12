from django.urls import path
from . import views

app_name = 'mypage'

urlpatterns = [
    path('chart/<user_id>', views.like_chart),
    path('like/<user_id>', views.like_list),

]