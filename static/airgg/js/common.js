
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
	'master':'/static/airgg/img/tier/Master_Emblem.png',
	'challenger':'/static/airgg/img/tier/Challenger_Emblem.png',
};

common.lineImg = {
	'TOP':'/static/airgg/img/Top_icon.png',
	'JUG':'/static/airgg/img/Jungle_icon.png',
	'MID':'/static/airgg/img/Mid_icon.png',
	'BOT':'/static/airgg/img/Bot_icon.png',
	'SUP':'/static/airgg/img/Support_icon.png',
};

common.homeBanner = "/static/airgg/img/alr_spring.jpg";

common.menuList = [
	{title:'멤버', 		href:'/member'},
	{title:'랭킹', 		href:'/ranking'},
	{title:'통계', 		href:'/stats'},
	{title:'포지션 예측', 	href:'/position'},
	{title:'커뮤니티', 	href:'https://cafe.naver.com/alightrest'},
	{title:'하나튜브', 	href:'https://www.youtube.com/channel/UCGNbhTiN8xMGOKtiQbMxmkQ'},
];

common.nowSeason = 5;

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
	var $objHomeBanner = $('<img>',{src:common.homeBanner, width:'1060px', onclick:'common.moveHome()'});

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
		var $input = $('<input>',{id:'airSearchInput', type:'text', placeholder:'Search..'});
		var $searchBtn = $('<button>',{id:'airSearchBtn',onclick:'common.onSearch()'});
		var $searchBtnImg = $('<img>',{src:'/static/airgg/img/search.png'});

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

	if ( (option === undefined) || (option == null) )
	{
		imgOption.src='full';
		imgOption.version='9.2.1';
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
		url: "/static/airgg/riot_api/9.2.1/data/ko_KR/champion/" + champion + ".json" ,
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
		return 4;
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
	var $stampObj = $('<p>').text("Produced by 'AlR 펌프'");

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
