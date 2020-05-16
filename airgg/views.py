from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import GameSerializer
from .serializers import UsersSerializer
from .serializers import ChampionSerializer
from .serializers import LineSerializer
from .serializers import BanSerializer
from .serializers import UserGameDataSerializer
from .models import Game
from .models import Users
from .models import Champion
from .models import Line
from .models import Ban
from .models import UserGameData

from .forms import BanForm
from .forms import GameForm
from .forms import UserGameDataForm

from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpResponseBadRequest
from django.core import serializers
from django.db.models import Q

from datetime import datetime

try:
	from django.utils import simplejson as json
except ImportError:
	import json

class GameViewSet(viewsets.ModelViewSet):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

class UsersViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer

class ChampionViewSet(viewsets.ModelViewSet):
    queryset = Champion.objects.all()
    serializer_class = ChampionSerializer

class ChampionViewSet(viewsets.ModelViewSet):
    queryset = Line.objects.all()
    serializer_class = LineSerializer

class BanViewSet(viewsets.ModelViewSet):
    queryset = Ban.objects.all()
    serializer_class = BanSerializer

class UserGameDataViewSet(viewsets.ModelViewSet):
    queryset = UserGameData.objects.all()
    serializer_class = UserGameDataSerializer

def home(request):
	return render(request, "airgg/home.html")

def member(request):
	return render(request, "airgg/member.html")

def ranking(request):
	return render(request, "airgg/ranking.html")

def ranking_new(request):
	return render(request, "airgg/ranking_new.html")

def position(request):
	return render(request, "airgg/position.html")

def stats(request):
	return render(request, "airgg/stats.html")

def profile(request):
	return render(request, "airgg/profile.html")

def dev(request):
	#return render(request, "airgg/test/hwtestsw_version3/index.html")
	return render(request, "airgg/test_input.html")

def input(request):
	return render(request, "airgg/input.html")

def filter_members(request):
	queryset = Users.objects.all()
	qs_json = serializers.serialize('json',queryset)
	
	return HttpResponse(qs_json, content_type='application/json')

def filter_user_profile(request):
	qUserName = request.GET.get('userName','')
	qSeason = request.GET.get('season','')
	season_user_data = []

	if qSeason.isdigit() and 0 < int(qSeason) :
		seasonVal = int(qSeason)
		game_qs = Game.objects.filter(season = seasonVal).values()
	else:
		game_qs = Game.objects.filter().values()

	for obj in game_qs:
		season_user_data += UserGameData.objects.filter(game_num = obj['game_num'] , user_id = qUserName)
		
	qs_json = serializers.serialize('json',season_user_data)

	return HttpResponse(qs_json, content_type='application/json')

def filter_users(request):
	q = request.GET.get('season','')
	season_user_data = []

	if q.isdigit() and 0 < int(q) :
		seasonVal = int(q)
		game_qs = Game.objects.filter(season = seasonVal).values()
	else:
		game_qs = Game.objects.filter().values()

	for obj in game_qs:
		season_user_data += UserGameData.objects.filter(game_num = obj['game_num'])
		
	qs_json = serializers.serialize('json',season_user_data)

	return HttpResponse(qs_json, content_type='application/json')

def filter_month_best(request):
	year = 2018
	month = 9
	month_user_data = []

	q_year = request.GET.get('year','')
	q_month = request.GET.get('month','')
	if q_year.isdigit():
		year = int(q_year)

	if q_month.isdigit():
		month = int(q_month)

	game_qs = Game.objects.filter(date__year=year, date__month=month).values()
	for obj in game_qs:
		month_user_data += UserGameData.objects.filter(game_num = obj['game_num'])

	qs_json = serializers.serialize('json',month_user_data)

	return HttpResponse(qs_json, content_type='application/json')

def filter_pick_ban(request):
	season_user_data = []
	season_ban_data = []
	q = request.GET.get('season','')
	
	season_pick_ban = dict()
	
	if q.isdigit() and 0 < int(q) :
		seasonVal = int(q)
		game_qs = Game.objects.filter(season = seasonVal).values()
	else:
		game_qs = Game.objects.filter().values()

	for obj in game_qs:
		season_user_data += UserGameData.objects.filter(game_num = obj['game_num']).values()
		season_ban_data += Ban.objects.filter(game_num = obj['game_num']).values()

	for obj in season_user_data:
		if obj['champion_id'] in season_pick_ban:
			season_pick_ban[obj['champion_id']]['pick'] = season_pick_ban[obj['champion_id']]['pick'] + 1
			if obj['win'] == 1:
				season_pick_ban[obj['champion_id']]['win'] = season_pick_ban[obj['champion_id']]['win'] + 1
		else:
			season_pick_ban[obj['champion_id']] = dict();
			season_pick_ban[obj['champion_id']]['pick'] = 1;
			season_pick_ban[obj['champion_id']]['ban'] = 0;
			season_pick_ban[obj['champion_id']]['win'] = obj['win'];
		
	for obj in season_ban_data:
		if obj['champion_id'] in season_pick_ban:
			season_pick_ban[obj['champion_id']]['ban'] = season_pick_ban[obj['champion_id']]['ban'] + 1
		else:
			season_pick_ban[obj['champion_id']] = dict();
			season_pick_ban[obj['champion_id']]['pick'] = 0;
			season_pick_ban[obj['champion_id']]['ban'] = 1;
			season_pick_ban[obj['champion_id']]['win'] = 0;

	return HttpResponse(json.dumps(season_pick_ban), content_type='application/json')

def filter_game_win(request):
	game_win_data = {'win1':0,'win2':0}
	q = request.GET.get('season','')
	game_qs = [];

	if q.isdigit() and 0 < int(q) :
		seasonVal = int(q)
		game_qs = Game.objects.filter(season = seasonVal).values()
	else:
		seasonVal = 0
		game_qs = Game.objects.all().values()


	for obj in game_qs:
		if obj['team1'] == 1:
			game_win_data['win1'] = game_win_data['win1']+1;
		elif obj['team2'] == 1:
			game_win_data['win2'] = game_win_data['win2']+1;

	return HttpResponse(json.dumps(game_win_data), content_type='application/json')

def filter_duo_win(request):
	duo_datas = dict()
	q = request.GET.get('season','')
	
	if q.isdigit() and 0 < int(q) :
		seasonVal = int(q)
		game_qs = Game.objects.filter(season = seasonVal).values()
	else:
		seasonVal = 0
		game_qs = Game.objects.all().values()

	for obj in game_qs:
		win_liner = UserGameData.objects.filter(Q(game_num = obj['game_num'], line = 'BOT', win = True)|Q(game_num = obj['game_num'], line = 'SUP', win = True)).values()
		lose_liner = UserGameData.objects.filter(Q(game_num = obj['game_num'], line = 'BOT', win = False)|Q(game_num = obj['game_num'], line = 'SUP', win = False)).values()

		if win_liner.count() == 2 :
			temp = dict();
			temp[win_liner[0]['line_id']] = win_liner[0]['user_id_id']
			temp[win_liner[1]['line_id']] = win_liner[1]['user_id_id']

			if 'SUP' in temp and 'BOT' in temp:
				key = temp['BOT'] + temp['SUP']
			else:
				continue

			if key in duo_datas:
				duo_datas[key]['win'] = duo_datas[key]['win'] + 1
				duo_datas[key]['play'] = duo_datas[key]['play'] + 1
			else:
				duo_datas[key] = dict()
				duo_datas[key]['win'] = 1
				duo_datas[key]['play'] = 1
				duo_datas[key]['BOT'] = temp['BOT']
				duo_datas[key]['SUP'] = temp['SUP']

		if lose_liner.count() == 2 :
			temp = dict();
			temp[lose_liner[0]['line_id']] = lose_liner[0]['user_id_id']
			temp[lose_liner[1]['line_id']] = lose_liner[1]['user_id_id']

			if 'SUP' in temp and 'BOT' in temp:
				key = temp['BOT'] + temp['SUP']
			else:
				continue

			if key in duo_datas:
				duo_datas[key]['play'] = duo_datas[key]['play'] + 1
			else:
				duo_datas[key] = dict()
				duo_datas[key]['win'] = 0
				duo_datas[key]['play'] = 1
				duo_datas[key]['BOT'] = temp['BOT']
				duo_datas[key]['SUP'] = temp['SUP']


	return HttpResponse(json.dumps(duo_datas), content_type='application/json')

def filter_team(request):
	getMembers = request.GET
	teamInfos = dict()
	queryset = [];

	for index in getMembers:
		queryset = UserGameData.objects.filter(user_id = getMembers[index])
		qs_json = serializers.serialize('json',queryset)

		teamInfos[getMembers[index]] = json.loads(qs_json)


	return HttpResponse(json.dumps(teamInfos), content_type='application/json')

def filter_update_date(request):
	updateDate = dict()
	queryset = Game.objects.order_by('-date')[0]
	updateDate['date'] = queryset.date.strftime("%Y-%m-%d")

	return HttpResponse(json.dumps(updateDate), content_type='application/json')

import ast
def update_game(request):
	if request.method == "POST":
		data = request.POST.get('updateData')
		season = request.POST.get('season')
		nowdate = datetime.now()
	
		updateDataDict = ast.literal_eval(data)
		newGame = Game.objects.create(season=season, date=nowdate)
		print(newGame.game_num)

		for userGameData in updateDataDict['userGameData']:
			userGameDataModel = UserGameData.objects.create(
                                user_id = Users.objects.get(user_id = userGameData['user']),
                                game_num = Game.objects.get(game_num = newGame.game_num),
                                champion = Champion.objects.get(champion = userGameData['champion']),
                                line = Line.objects.get(line = userGameData['line']),
                                kill = userGameData['kill'],
                                death = userGameData['death'],
                                asist = userGameData['asist'],
                                win = userGameData['win'])

		for banData in updateDataDict['banList']:
			banDataModel = Ban.objects.create(
				champion = Champion.objects.get(champion = banData['champion']),
				game_num = Game.objects.get(game_num = newGame.game_num))
		return HttpResponse(newGame.game_num)
	else:
		return HttpResponse("Fail")

