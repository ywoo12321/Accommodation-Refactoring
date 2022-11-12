from django.http.response import JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny

from .serializers import AccountSerializer, PreferSerializer
from .models import Account, Prefer
from lodgings.models import Like
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

from lodgings.views import cal, norm_cal, lodging_xlsx, type_theme
import pandas as pd
import numpy as np
import random

@api_view(['GET'])
@permission_classes([AllowAny])
def check_id(request, user_id):
    try:
        return JsonResponse({"isUnique": not Account.objects.filter(user_id=user_id).exists()})
    except Account.DoesNotExist:
        # 존재하지 않는 경우에도 unique 이기 때문
        return JsonResponse({"isUnique": True})

login_params = openapi.Schema(
    type=openapi.TYPE_OBJECT, 
    properties={
        'userid': openapi.Schema(type=openapi.TYPE_STRING, description='아이디'),
        'password': openapi.Schema(type=openapi.TYPE_STRING, description='비밀번호'),
    }
)   
@swagger_auto_schema(method='POST', request_body=login_params)
@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    if request.method=='POST':
        try:
            user_id = request.data['userid']
            check = Account.objects.filter(user_id=user_id)
            if len(check) == 0:
                return JsonResponse({"message":"Fail, 존재하지 않는 아이디"}, json_dumps_params={'ensure_ascii': False}, status=200)
            elif check[0].password == request.data['password']:
                return JsonResponse({"message":"Success 로그인 성공"}, json_dumps_params={'ensure_ascii': False}, status=200)
            else:
                return JsonResponse({"message":"Fail, 비밀번호 불일치"}, json_dumps_params={'ensure_ascii': False}, status=200)
        except :
            return JsonResponse({"message":"Fail, 존재하지 않는 아이디"}, json_dumps_params={'ensure_ascii': False}, status=200)
    else:
        return JsonResponse({"message":"Fail, 잘못된 요청"}, json_dumps_params={'ensure_ascii': False}, status=200)
join_params = openapi.Schema(
    type=openapi.TYPE_OBJECT, 
    properties={
        'userid': openapi.Schema(type=openapi.TYPE_STRING, description='아이디'),
        'password': openapi.Schema(type=openapi.TYPE_STRING, description='비밀번호'),
        'address': openapi.Schema(type=openapi.TYPE_STRING, description='주소'),
        'nickname': openapi.Schema(type=openapi.TYPE_STRING, description='닉네임'),
        'prefer' : openapi.Schema(type=openapi.TYPE_STRING, description='취향'),
    }
)   
@swagger_auto_schema(method='POST', request_body=join_params)
@api_view(['POST'])
@permission_classes([AllowAny])
def join(request):
    if request.method=='POST':
        try:
            data = request.data
            data['user_id'] = data['userid']
            pf = {"user_id": data['user_id'],
            "prefer_modern" : int(data['prefer'][0]),
            "prefer_natural" : int(data['prefer'][1]),
            "prefer_classic" : int(data['prefer'][2]),
            "prefer_industry" : int(data['prefer'][3]),
            "prefer_asia" : int(data['prefer'][4]),
            "prefer_provence" : int(data['prefer'][5]),
            "prefer_unique" : int(data['prefer'][6]),
                }
            del data['userid']
            del data['prefer']
            acSerializer= AccountSerializer(data=data)
            if acSerializer.is_valid(raise_exception=True):
                acSerializer.save()
                pfSerializer = PreferSerializer(data=pf)
                if pfSerializer.is_valid(raise_exception=True):
                    pfSerializer.save()
            return JsonResponse({"message":"Success 회원가입 성공"}, json_dumps_params={'ensure_ascii': False}, status=200)
        except Exception:
            return JsonResponse({"message":"Fail 유효하지 않습니다."}, json_dumps_params={'ensure_ascii': False}, status=200)
    else:
        return JsonResponse({"message":"Fail 올바르지 않은 요청입니다."}, json_dumps_params={'ensure_ascii': False}, status=200)

@swagger_auto_schema(method='PUT', request_body=join_params)
@api_view(['PUT'])
@permission_classes([AllowAny])
def update_user_info(request):
    if request.method=='PUT':
        try:
            data = request.data
            user_id = data['user_id'] = data['userid']
            del data['userid']
            ac_object = Account.objects.filter(user_id=user_id)[0]
            acSerializer= AccountSerializer(ac_object, data=data)
            if acSerializer.is_valid(raise_exception=True):
                acSerializer.save()
            return JsonResponse({"message":"Success, 수정 성공"}, json_dumps_params={'ensure_ascii': False}, status=200)
        except Exception:
            return JsonResponse({"message":"Fail, 수정 실패"}, json_dumps_params={'ensure_ascii': False}, status=200)
    else:
        return JsonResponse({"message":"Fail, 잘못된 요청"}, json_dumps_params={'ensure_ascii': False}, status=200)

def prefer_to_df():
    temp = ['user_id_id']
    temp.extend(type_theme)
    prefer = pd.DataFrame(list(Prefer.objects.all().values()))
    prefer.columns = temp
    for i in range(len(prefer.index)):
        df_temp = likesum_to_df(str(prefer.iloc[i, 0]))
        for k in type_theme:
            prefer.loc[i,k] += int(df_temp[k])
    return prefer.copy()

def likesum_to_df(user_id):
    try:
        user_df = pd.DataFrame(list(Like.objects.filter(user_id=user_id).values()))
        lodging_df = lodging_xlsx()
        join_df = pd.DataFrame(lodging_df.merge(user_df, left_on='Unnamed: 0', right_on='lodging_id')[type_theme].sum())
        return join_df.T
    except:
        return pd.DataFrame(data=[[0]*7], columns=type_theme)

def user_cal(user_id):
    df = prefer_to_df()
    temp = df[df['user_id_id']==user_id]
    prefer = [int(temp[i]) for i in type_theme]
    df = df[df['user_id_id']!=user_id]
    df['cosine'] = df[type_theme].apply(lambda x:norm_cal(prefer, x), axis=1)
    df = df.sort_values(by='cosine', ascending=False)
    return df

def like_list(user_id):
    try:
        temp = list(Like.objects.filter(user_id_id=user_id).values_list('lodging_id'))
        like_list = [x[0] for x in temp]
        return like_list
    except:
        return []

@api_view(['GET'])
@permission_classes([AllowAny])
def user_recom(request, user_id):
    try:
        like_user = list(user_cal(user_id)['user_id_id'].iloc[:3].values)
        df_lodging = lodging_xlsx()
        result = {}
        for i, v in enumerate(like_user):
            temp = {}
            temp['user_nickname'] = Account.objects.get(user_id=v).nickname
            ran = temp['lodging_id'] = random.choice(like_list(v))
            temp['lodging_name'] = df_lodging.loc[ran, 'lodging_name']
            # temp['img'] = df_lodging.iloc[ran, :]['img1']
            temp['img'] = request.build_absolute_uri().replace('accounts', 'lodgings').replace('recommendation','image2').split(user_id)[0] + str(ran)
            result[i] = temp
        return JsonResponse([result] ,safe=False, json_dumps_params={'ensure_ascii': False},  status=200)
    except Account.DoesNotExist:
        # 존재하지 않는 경우에도 unique 이기 때문
        return JsonResponse([] ,safe=False, json_dumps_params={'ensure_ascii': False},  status=200)