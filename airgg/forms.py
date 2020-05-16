from django import forms
from airgg.models import Ban
from airgg.models import Game
from airgg.models import UserGameData

class BanForm(forms.ModelForm):
	class Meta:
		model = Ban
		fields = ('champion','game_num')

class UserGameDataForm(forms.ModelForm):
	class Meta:
		model = UserGameData
		fields = ('user_id','game_num','champion','line','kill','death','asist','win')

class GameForm(forms.ModelForm):
	class Meta:
		model = Game
		fields = ('season','date','duration')
