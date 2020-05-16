
var input = {};

input.item = {};

input.init = function(){
	var objHome = $('#alrHome');
	var objMenu = $('#alrMenu');
	var getParams = common.getRequest();
	var season = common.season.getSeason(getParams.season);

	common.createHomeBanner(objHome);
	common.createMenubar(objMenu);

	input.createInputTable();

	common.version();
};

input.clearPage = function()
{
}

input.createInputTable = function()
{
	var objTable = $('#alrInputTable');
	var champList = Object.keys(common.champion_kr_to_eng)
	var userList = common.userNames

	champList.sort(function(a,b){
		return a < b ? -1 : a > b ? 1:0 ; // 오름차순
	});
	userList.sort(function(a,b){
		return a < b ? -1 : a > b ? 1:0 ; // 오름차순
	});

	objTable.append("<H3>승리팀</H3>");
	for( var i = 0; i < 5 ; i++ )
	{
		input.item.userGameData(objTable,i,champList,userList);
	}

	objTable.append("<H3> 승리팀 Ban</H3>");
	for( var i = 0; i < 5 ; i++ )
	{
		input.item.ban(objTable,i,champList);
	}

	objTable.append("<H3>패배팀</H3>");
	for( var i = 5 ; i < 10; i++ )
	{
		input.item.userGameData(objTable,i,champList,userList);
	}

	objTable.append("<H3>패배팀 Ban</H3>");
	for( var i = 5 ; i < 10; i++ )
	{
		input.item.ban(objTable,i,champList);
	}
}

input.item.userGameData = function(obj,i,champList,userList)
{
	var $objUserGameDataDiv = $('<div>',{'id':'airUserGameData'+i,'class':'row input-group ml-2 mt-1 mb-2 mr-1 input-group-sm'});
	var $objUserSelect = $('<select>',{'id':'airUserGameDataUser'+i, 'class':'input-sm-2', 'onchange':''});
	var $objChampInput = $('<input>',{'id':'airUserGameDataChamp'+i, 'class':'input-sm-2', 'onchange':'input.getUserChampImg('+i+')'});
	var $objDiv = $('<div>',{'class':'ui-widget'});
	var $objChampImgDiv = $('<div>',{'id':'airUserGameDataChampImg'+i});
	var $objLineSelect = $('<select>',{'id':'airUserGameDataLine'+i, 'class':'input-sm-2', 'onchange':''});
	var $objKillInput = $('<input>',{id:'airUserGameDataKill'+i,placeholder:'Kill', type:'number'});
	var $objDeathInput = $('<input>',{id:'airUserGameDataDeath'+i,placeholder:'Death', type:'number'});
	var $objAsistInput = $('<input>',{id:'airUserGameDataAsist'+i,placeholder:'Asist', type:'number'});
	var imgOption = {'src':'sprite','version':'10.8.1','wrap':2,'skin':1,'gray':false,'size':'normal','classes':'input-champTable_img'};


       	$objUserSelect.append($('<option>').text("None"));
	for( var i = 0; i < userList.length; i++ )
	{
                var $item = $('<option>').text(userList[i]);
        	$objUserSelect.append($item);
        }

	for( var line in common.lineImg )
	{
                var $item = $('<option>').text(line);
        	$objLineSelect.append($item);
        }

	$objUserGameDataDiv.append($objUserSelect);
	$objUserGameDataDiv.append($objDiv);
	$objDiv.append($objChampInput);
	$objUserGameDataDiv.append($objChampImgDiv);
	common.champion.getImg($objChampImgDiv,$objChampInput.val(),imgOption);
	$objUserGameDataDiv.append($objLineSelect);
	$objUserGameDataDiv.append($objKillInput);
	$objUserGameDataDiv.append("<H3>/</H3>");
	$objUserGameDataDiv.append($objDeathInput);
	$objUserGameDataDiv.append("<H3>/</H3>");
	$objUserGameDataDiv.append($objAsistInput);
	obj.append($objUserGameDataDiv);
}

input.item.ban = function(obj,i,champList)
{
	var $objBanDiv = $('<div>',{'id':'airBanData'+i,'class':'row input-group ml-2 mt-1 mb-2 mr-1 input-group-sm'});
	var $objChampInput = $('<input>',{'id':'airBanChamp'+i, 'class':'input-sm-2', 'onchange':'input.getBanChampImg('+i+')'});
	var $objChampImgDiv = $('<div>',{'id':'airBanChampImg'+i});
	var imgOption = {'src':'sprite','version':'10.8.1','wrap':2,'skin':1,'gray':false,'size':'normal','classes':'input-champTable_img'};

	$objBanDiv.append($objChampInput);
	$objBanDiv.append($objChampImgDiv);
	common.champion.getImg($objChampImgDiv,$objChampInput.val(),imgOption);

	obj.append($objBanDiv);
}

input.getUserChampImg = function(i)
{
	var champName = $('#airUserGameDataChamp'+i).val();
	var obj = $('#airUserGameDataChampImg'+i);
	var imgOption = {'src':'sprite','version':'10.8.1','wrap':2,'skin':1,'gray':false,'size':'normal','classes':'input-champTable_img'};

	obj.empty();
	common.champion.getImg(obj,champName,imgOption);
}

input.getBanChampImg = function(i)
{
	var champName = $('#airBanChamp'+i).val();
	var obj = $('#airBanChampImg'+i);
	var imgOption = {'src':'sprite','version':'10.8.1','wrap':2,'skin':1,'gray':false,'size':'normal','classes':'input-champTable_img'};

	obj.empty();
	common.champion.getImg(obj,champName,imgOption);
}

input.updateInfo = function()
{
	var userGameDataList = [];
	var banList = [];

	for( var i = 0; i < 10 ; i++ )
	{
		var user = $("#airUserGameDataUser"+i).val();
		var champ = $("#airUserGameDataChamp"+i).val();
		var line = $("#airUserGameDataLine"+i).val();
		var kill = $("#airUserGameDataKill"+i).val();
		var death = $("#airUserGameDataDeath"+i).val();
		var asist = $("#airUserGameDataAsist"+i).val();
		var win = (i<5)? 1:0;

		if( user === "None" ) continue;
		if( champ === "None" ) continue;
		if( kill === "" ) continue;
		if( death === "" ) continue;
		if( asist === "" ) continue;

		var userGameData = {'user':user,'champion': champ,'line':line, 'kill':kill,'death':death,'asist':asist,'win':win};
		userGameDataList.push(userGameData);
	}

	for( var i = 0; i < 10 ; i++ )
	{
		var champ = $("#airBanChamp"+i).val();

		if( champ === "None" ) continue;
		if( champ === "" ) continue;

		var ban = {'champion': champ};
		banList.push(ban);
	}

	var updateData = {'userGameData':userGameDataList, 'banList':banList};

        $.ajax ({
                type: "POST",
                url: "/f/update_game/",
		dataType:"text",
		data: {
			'updateData': JSON.stringify(updateData),
			'season':common.season.getSeason()
		},
		beforeSend: function(xhr){
			xhr.setRequestHeader('X-CSRFToken',csrftoken)
		},
                success: function(game_num)
                {
			if(confirm("Game No." + game_num + " 저장 완료하였습니다."))
			{
				location.reload()
			}
                },
                error: function(e)
                {
                        console.log(e.responseText);
                }
        });
}
