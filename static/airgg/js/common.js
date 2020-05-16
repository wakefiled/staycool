

var common = {};
common.champion = {};
common.user = {};
common.season = {};
common.tier = {
	'unranked':'/static/airgg/img/tier/Iron_Emblem.png',
	'bronze':'/static/airgg/img/tier/Bronze_Emblem.png',
	'silver':'/static/airgg/img/tier/Silver_Emblem.png',
	'gold':'/static/airgg/img/tier/Gold_Emblem.png',
	'platinum':'/static/airgg/img/tier/Platinum_Emblem.png',
	'diamond':'/static/airgg/img/tier/Diamond_Emblem.png',
	'master':'/static/airgg/img/tier/Master_Ring.png',
	'grandmaster':'/static/airgg/img/tier/Grandmaster_Ring.png',
	'challenger':'/static/airgg/img/tier/Challenger_Emblem.png',
};

common.titleImg = {
	'master':'/static/airgg/img/master.jpg',
};
common.lineImg = {
	'TOP':'/static/airgg/img/Top_icon.png',
	'JUG':'/static/airgg/img/Jungle_icon.png',
	'MID':'/static/airgg/img/Mid_icon.png',
	'BOT':'/static/airgg/img/Bot_icon.png',
	'SUP':'/static/airgg/img/Support_icon.png',
};

common.homeBanner = "/static/airgg/img/alr_blue_pink.jpg";

common.menuList = [
	{title:'멤버', 		href:'/member'},
	{title:'랭킹', 		href:'/ranking'},
	{title:'통계', 		href:'/stats'},
	{title:'포지션 예측', 	href:'/position'},
	{title:'커뮤니티', 	href:'https://cafe.naver.com/alightrest'},
	{title:'뚜튜브', 	href:'https://www.youtube.com/channel/UC_KRwcsVVMOlPS1gx3_nVuA'},
];

common.userNames = [
    "AlR 고롸",
    "AlR 공기",
    "AlR 광민",
    "AlR 꾸물",
    "AlR 니프",
    "AlR 도밍",
    "AlR 드윈",
    "AlR 딜폿",
    "AlR 뚜유",
    "AlR 띠용",
    "AlR 루리",
    "AlR 루하",
    "AlR 리밋",
    "AlR 만성",
    "AlR 망신",
    "AlR 무디",
    "AlR 뭉관",
    "AlR 밍귀",
    "AlR 발사",
    "AlR 방신",
    "AlR 방짜",
    "AlR 불용",
    "AlR 성룡",
    "AlR 세라",
    "AlR 세진",
    "AlR 스고",
    "AlR 슬기",
    "AlR 알집",
    "AlR 에르",
    "AlR 여제",
    "AlR 영일",
    "AlR 우직",
    "AlR 우크",
    "AlR 원석",
    "AlR 위강",
    "AlR 재성",
    "AlR 재현",
    "AlR 지훈",
    "AlR 차전",
    "AlR 칠초",
    "AlR 킬먹",
    "AlR 통닭",
    "AlR 트윅",
    "AlR 티어",
    "AlR 퍼드",
    "AlR 현태",
]


common.champion_kr_to_eng = {
    '아트록스':'Aatrox',
    '아리':'Ahri',
    '아칼리':'Akali',
    '알리스타':'Alistar',
    '아무무':'Amumu',
    '애니비아':'Anivia',
    '애니':'Annie',
    '아펠리오스':'Aphelios',
    '애쉬':'Ashe',
    '아우렐리온솔':'AurelionSol',
    '아지르':'Azir',
    '바드':'Bard',
    '블리츠크랭크':'Blitzcrank',
    '브랜드':'Brand',
    '브라움':'Braum',
    '케이틀린':'Caitlyn',
    '카밀':'Camille',
    '카시오페아':'Cassiopeia',
    '초가스':'Chogath',
    '코르키':'Corki',
    '다리우스':'Darius',
    '다이애나':'Diana',
    '문도':'DrMundo',
    '드레이븐':'Draven',
    '에코':'Ekko',
    '엘리스':'Elise',
    '이블린':'Evelynn',
    '이즈리얼':'Ezreal',
    '피들스틱':'Fiddlesticks',
    '피오라':'Fiora',
    '피즈':'Fizz',
    '갈리오':'Galio',
    '갱플랭크':'Gangplank',
    '가렌':'Garen',
    '나르':'Gnar',
    '그라가스':'Gragas',
    '그레이브즈':'Graves',
    '헤카림':'Hecarim',
    '하이머딩거':'Heimerdinger',
    '일라오이':'Illaoi',
    '이렐리아':'Irelia',
    '아이번':'Ivern',
    '잔나':'Janna',
    '자르반4세':'JarvanIV',
    '잭스':'Jax',
    '제이스':'Jayce',
    '진':'Jhin',
    '징크스':'Jinx',
    '카이사':'Kaisa',
    '칼리스타':'Kalista',
    '카르마':'Karma',
    '카서스':'Karthus',
    '카사딘':'Kassadin',
    '카타리나':'Katarina',
    '케일':'Kayle',
    '케인':'Kayn',
    '케넨':'Kennen',
    '카직스':'Khazix',
    '킨드레드':'Kindred',
    '클레드':'Kled',
    '코그모':'KogMaw',
    '르블랑':'Leblanc',
    '리신':'LeeSin',
    '레오나':'Leona',
    '리산드라':'Lissandra',
    '루시안':'Lucian',
    '룰루':'Lulu',
    '럭스':'Lux',
    '말파이트':'Malphite',
    '말자하':'Malzahar',
    '마오카이':'Maokai',
    '마스터이':'MasterYi',
    '미스포츈':'MissFortune',
    '오공':'MonkeyKing',
    '모데카이저':'Mordekaiser',
    '모르가나':'Morgana',
    '나미':'Nami',
    '나서스':'Nasus',
    '노틸러스':'Nautilus',
    '니코':'Neeko',
    '니달리':'Nidalee',
    '녹턴':'Nocturne',
    '누누':'Nunu',
    '올라프':'Olaf',
    '오리아나':'Orianna',
    '오른':'Ornn',
    '판테온':'Pantheon',
    '뽀삐':'Poppy',
    '파이크':'Pyke',
    '퀸':'Quinn',
    '라칸':'Rakan',
    '람머스':'Rammus',
    '렉사이':'RekSai',
    '레넥톤':'Renekton',
    '렝가':'Rengar',
    '리븐':'Riven',
    '럼블':'Rumble',
    '라이즈':'Ryze',
    '세주아니':'Sejuani',
    '세나':'Senna',
    '세트':'Sett',
    '샤코':'Shaco',
    '쉔':'Shen',
    '쉬바나':'Shyvana',
    '신지드':'Singed',
    '사이온':'Sion',
    '시비르':'Sivir',
    '스카너':'Skarner',
    '소나':'Sona',
    '소라카':'Soraka',
    '스웨인':'Swain',
    '사일러스':'Sylas',
    '신드라':'Syndra',
    '탐켄치':'TahmKench',
    '탈리아':'Taliyah',
    '탈론':'Talon',
    '타릭':'Taric',
    '티모':'Teemo',
    '쓰레쉬':'Thresh',
    '트리스타나':'Tristana',
    '트런들':'Trundle',
    '트린다미어':'Tryndamere',
    '트위스티드페이트':'TwistedFate',
    '트위치':'Twitch',
    '우디르':'Udyr',
    '우르곳':'Urgot',
    '바루스':'Varus',
    '베인':'Vayne',
    '베이가':'Veigar',
    '벨코즈':'Velkoz',
    '바이':'Vi',
    '빅토르':'Viktor',
    '블라디미르':'Vladimir',
    '볼리베어':'Volibear',
    '워윅':'Warwick',
    '자야':'Xayah',
    '제라스':'Xerath',
    '신짜오':'XinZhao',
    '야스오':'Yasuo',
    '요릭':'Yorick',
    '유미':'Yuumi',
    '자크':'Zac',
    '제드':'Zed',
    '직스':'Ziggs',
    '질리언':'Zilean',
    '조이':'Zoe',
    '자이라':'Zyra',
    '키아나':'Qiyana',
}

common.nowSeason = 6;

common.onSearch = function() {
	var name = $('#airSearchInput').val();

	location.href = "/profile?userName=" + name;
}

common.moveHome = function() {
	location.href = "/";
}

common.changeSeason = function() {
	var season = $('#airSeason').val();

	common.season.update(season);
}

common.getRequest = function() {
	if ( window.location.search.length > 1 ) {
		var get = new Object();
		var ret = location.search.substr(1).split('&');
		for(var i = 0; i < ret.length; i++){
			var r = ret[i].split('=');
			get[r[0]] = decodeURIComponent(r[1]);
		}
		return get;
	}
	else
	{
		return false;
	}
}

common.createHomeBanner = function(obj) {
	var $objHomeBanner = $('<img>',{src:common.homeBanner, width:'1080px', borader:'0px', onclick:'common.moveHome()'});

	obj.append($objHomeBanner);
}

common.createMenubar = function(obj) {
	var $objMenuBar = $('<ul>',{'class':'alr-menubar'});

	for( i in common.menuList)
	{
		var $aItem = $('<a>',{'href':common.menuList[i].href}).text(common.menuList[i].title);
		var $liItem = $('<li>',{'class':'alr-menubar li-category'});
		
		$liItem.append($aItem);
		$objMenuBar.append($liItem);
	}

	{
		var $liItem = $('<li>',{'class':'alr-menubar li-search'});
		var $input = $('<input>',{id:'airSearchInput', type:'text', placeholder:'Search..', style:'height:37.9px'});
		var $searchBtn = $('<button>',{id:'airSearchBtn', class:'alr-search-btn',onclick:'common.onSearch()'});
		var $searchBtnImg = $('<img>',{src:'/static/airgg/img/search.jpg'});

		$searchBtn.append($searchBtnImg);

		$liItem.append($input);
		$liItem.append($searchBtn);
	
		$objMenuBar.append($liItem);
	}

	obj.append($objMenuBar);
}

common.createSeasonMonitor = function(obj) {
	var $objSeasonMonitor = $('<div>',{'class':'row input-group ml-2 mt-1 mb-2 mr-1 input-group-sm'});
	var $objInputDiv = $('<div>',{'class':'input-group-append'});
	var $objSpan = $('<span>',{'class':'input-group-text'}).text("Season");
	var $objSelect = $('<select>',{'id':'airSeason', 'class':'form-control input-sm-7', 'onchange':'common.changeSeason()'});
	var $objDummy = $('<div>',{'class':'sub-nav-div-dummy'});

	for( var i = common.nowSeason; i > 0; i-- )
	{
		var $item = $('<option>').text(i);
		$objSelect.append($item);
	}

	$objSelect.append($('<option>').text('ALL'));

	$objInputDiv.append($objSpan);
	$objSeasonMonitor.append($objInputDiv);
	$objSeasonMonitor.append($objSelect);
	$objSeasonMonitor.append($objDummy);

	obj.append($objSeasonMonitor);
}

common.champion.getImg = function(obj, champion, option) {
	var imgOption = {};

	if ( common.champion_kr_to_eng.hasOwnProperty(champion) === true )
	{
		champion = common.champion_kr_to_eng[champion];
	}

	if ( (option === undefined) || (option == null) )
	{
		imgOption.src='full';
		imgOption.version='10.8.1';
		imgOption.wrap=2;
		imgOption.skin=1;
		imgOption.gray=false;
		imgOption.size='normal';
	}
	else
	{
		imgOption = option;
	}

	$.ajax({
		type: "GET",
		dataType: "json",
		url: "/static/airgg/riot_api/10.8.1/data/ko_KR/champion/" + champion + ".json" ,
		success: function(data)
		{
			var championInfo = data.data[champion];
			obj.append(Riot.DDragon.fn.getImg(championInfo,imgOption));
			
		},
		error: function(e)
		{
			console.log(e.responseText);
		}
	});
}

common.user.summaryMostData = function(userGameData) {
	var summaryMostData = {"champion":"", "line":"", "winRatio":""};

	var championList = {};
	var lineList = {};
	var winCnt = 0;

	var maxChamp = 0;
	var maxLine = 0;

	for ( var data in userGameData )
	{
		var champ = userGameData[data].fields.champion;
		var line = userGameData[data].fields.line;

		if ( championList[champ] === undefined )
		{
			championList[champ] = 1;
		}
		else
		{
			championList[champ]++;
		}

		if ( lineList[line] === undefined )
		{
			lineList[line] = 1;
		}
		else
		{
			lineList[line]++;
		}

		if ( userGameData[data].fields.win == 1 )
		{
			winCnt ++;
		}

		if ( maxChamp < championList[champ] )
		{
			summaryMostData.champion = champ;
			maxChamp = championList[champ];
		}

		if ( maxLine < lineList[line] )
		{
			summaryMostData.line = line;
			maxLine = lineList[line];
		}
	}	

	summaryMostData.winRatio = ((winCnt/userGameData.length) * 100).toFixed(2);

	return summaryMostData;
}

common.user.summaryChampion = function(userGameData) {
	var summaryChampion = {};

	for ( var data in userGameData )
	{
		var champ = userGameData[data].fields.champion;
		var kill = userGameData[data].fields.kill;
		var death = userGameData[data].fields.death;
		var asist = userGameData[data].fields.asist;
		var cs = userGameData[data].fields.cs;
		var win = userGameData[data].fields.win;

		if( summaryChampion[champ] === undefined )
		{
			var obj = {'kill':'','death':'','asist':'','cs':'','win':'','play':''};

			obj.kill = kill;
			obj.death = death;
			obj.asist = asist;
			obj.cs = cs;
			if( win == 1 )
			{
				obj.win = 1;
			}
			else
			{
				obj.win = 0;
			}
			obj.play = 1;
			summaryChampion[champ] = obj;
		}
		else
		{
			summaryChampion[champ].kill = summaryChampion[champ].kill + kill;
			summaryChampion[champ].death = summaryChampion[champ].death + death;
			summaryChampion[champ].asist = summaryChampion[champ].asist + asist;
			summaryChampion[champ].cs = summaryChampion[champ].cs + cs;
			if( win == 1 )
			{
				summaryChampion[champ].win++;
			}
			summaryChampion[champ].play++;
		}
	}

	return summaryChampion;
}

common.user.summaryLine = function(userGameData) {
	var summaryLine = {'TOP':{'win':0,'games':0},
				'JUG':{'win':0,'games':0},
				'MID':{'win':0,'games':0},
				'BOT':{'win':0,'games':0},
				'SUP':{'win':0,'games':0}};

	for ( var data in userGameData )
	{
		var line = userGameData[data].fields.line;
		var win = userGameData[data].fields.win;

		if( summaryLine[line] === undefined )
		{
			continue;
		}
		else
		{
			if ( win == 1 )
			{
				summaryLine[line].win++;
			}
			summaryLine[line].games++;
		}
	}

	return summaryLine;
}

common.season.update = {};
common.season.setUpdateFunc = function(func)
{
	common.season.update = func;
}

common.season.getSeason = function(season) {
	if( season === undefined || season === null )
	{
		return 6;
	}

	return season;
}

common.season.summaryUsers = function(userSeasonData)
{
	var summaryUsers = {};

	for( var data in userSeasonData )
	{
		var userId = userSeasonData[data].fields.user_id;
		if ( summaryUsers[userId] === undefined )
		{
			summaryUsers[userId] = {};
			summaryUsers[userId].kill = userSeasonData[data].fields.kill;
			summaryUsers[userId].death = userSeasonData[data].fields.death;
			summaryUsers[userId].asist = userSeasonData[data].fields.asist;
			summaryUsers[userId].win = userSeasonData[data].fields.win;
			summaryUsers[userId].play = 1;
		}
		else
		{
			summaryUsers[userId].kill += userSeasonData[data].fields.kill;
			summaryUsers[userId].death += userSeasonData[data].fields.death;
			summaryUsers[userId].asist += userSeasonData[data].fields.asist;
			if ( userSeasonData[data].fields.win == 1 )
			{
				summaryUsers[userId].win++;
			}
			summaryUsers[userId].play++;
		}
	}

	for( var data in summaryUsers )
	{
		summaryUsers[data].winRatio = ((summaryUsers[data].win/summaryUsers[data].play) * 100).toFixed(2);
	}

	return summaryUsers;
}

common.season.summaryPositionUsers = function(userSeasonData)
{
	var summaryUsers = {};

	for( var data in userSeasonData )
	{
		var position = userSeasonData[data].fields.line;
		var userId = userSeasonData[data].fields.user_id;
	
		if ( summaryUsers[position] === undefined )
		{
			summaryUsers[position] = {};
		}

		if ( summaryUsers[position][userId] === undefined )
		{
			summaryUsers[position][userId] = {};
			summaryUsers[position][userId].kill = userSeasonData[data].fields.kill;
			summaryUsers[position][userId].death = userSeasonData[data].fields.death;
			summaryUsers[position][userId].asist = userSeasonData[data].fields.asist;
			summaryUsers[position][userId].win = userSeasonData[data].fields.win;
			summaryUsers[position][userId].play = 1;
		}
		else
		{
			summaryUsers[position][userId].kill += userSeasonData[data].fields.kill;
			summaryUsers[position][userId].death += userSeasonData[data].fields.death;
			summaryUsers[position][userId].asist += userSeasonData[data].fields.asist;
			if ( userSeasonData[data].fields.win == 1 )
			{
				summaryUsers[position][userId].win++;
			}
			summaryUsers[position][userId].play++;
		}
	}

	return summaryUsers;
}

common.season.summaryRelative = function(userSeasonData, player)
{
	var gameData = new Object;
	var gameNumArr = new Array;
	var relativeObj = new Object;

	for( var data in userSeasonData )
	{
		var obj  = userSeasonData[data].fields;

		if( obj.user_id === player )
		{
			gameNumArr.push(obj.game_num);
		}

		if ( gameData[obj.game_num] === undefined )
		{
			gameData[obj.game_num] = {};
		}

		if ( gameData[obj.game_num][obj.user_id] === undefined )
		{
			gameData[obj.game_num][obj.user_id] = {};
			gameData[obj.game_num][obj.user_id].win = obj.win;
			gameData[obj.game_num][obj.user_id].line = obj.line;
		}
	}

	for( var num of gameNumArr )
	{
		for( var userId in gameData[num])
		{
			if( gameData[num][player].win === true && gameData[num][userId].win === false )
			{
				if( relativeObj[userId] === undefined )
				{
					relativeObj[userId] = {};
					relativeObj[userId].win = 1;
					relativeObj[userId].play = 1;
					relativeObj[userId]['TOP'] = 0;
					relativeObj[userId]['JUG'] = 0;
					relativeObj[userId]['MID'] = 0;
					relativeObj[userId]['BOT'] = 0;
					relativeObj[userId]['SUP'] = 0;

					relativeObj[userId][gameData[num][userId].line]++;
				}
				else
				{
					relativeObj[userId].win++;
					relativeObj[userId].play++;
					relativeObj[userId][gameData[num][userId].line]++;
				}
			}
			if( gameData[num][player].win === false && gameData[num][userId].win === true )
			{
				if( relativeObj[userId] === undefined )
				{
					relativeObj[userId] = {};
					relativeObj[userId].win = 0;
					relativeObj[userId].play = 1;
					relativeObj[userId]['TOP'] = 0;
					relativeObj[userId]['JUG'] = 0;
					relativeObj[userId]['MID'] = 0;
					relativeObj[userId]['BOT'] = 0;
					relativeObj[userId]['SUP'] = 0;

					relativeObj[userId][gameData[num][userId].line]++;
				}
				else
				{
					relativeObj[userId].play++;
					relativeObj[userId][gameData[num][userId].line]++;
				}
			}
		}
	}

	return relativeObj;
}

common.version = function() {
	var $versionDivObj = $('#airVersion');
	var $stampObj = $('<p>').text("Produced by 'AlR 뚜유'");

	$versionDivObj.append($stampObj);

	$.ajax({
		type: "GET",
		dataType: "json",
		url: "/f/updatedate/" ,
		success: function(data)
		{
			var $versionObj = $('<p>').text("Updated by " + data.date);

			$versionDivObj.append($versionObj);
		},
		error: function(e)
		{
			console.log(e.responseText);
		}
	});
}
