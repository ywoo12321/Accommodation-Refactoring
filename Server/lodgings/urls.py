from django.urls import path
from . import views

app_name = 'lodgings'
urlpatterns = [
    path('recommendation/<user_id>/', views.person_recom),
    path('recommendation/', views.basic_recom),
    path('<int:lodging_id>/', views.lodging_detail),
    path('<int:lodging_id>/<user_id>', views.lodging_detail_user),
    path('search/<keyword>/', views.search_lodging),
    path('random/', views.random_maker),
    path('image/<theme>/<keyword>', views.image_response),
    path('image2/<int:lodging_id>', views.image_response2),
    path('like/<user_id>/<int:lodging_id>', views.like),
]