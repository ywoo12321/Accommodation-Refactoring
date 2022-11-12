from django.urls import path
from . import views
app_name = 'accounts'
urlpatterns = [
    # 회원가입
    path('join', views.join),
    # 로그인
    # path('api-token-auth/', obtain_jwt_token),
     path('login/', views.login),
    # 아이디 중복 확인
    path('is_unique/<str:user_id>/', views.check_id),
    # 회원정보 업데이트
    path('update', views.update_user_info),
    # 유사 회원 추천
    path('recommendation/<str:user_id>', views.user_recom),

]