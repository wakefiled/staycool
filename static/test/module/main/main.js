// file name : module/main/main.js
/** ************************************
 *
 * main module
 *
 * *************************************/

$(document).ready(function(){
	hwtest.main.init();
	hwtest.key.init();
	hwtest.websocket.init();	
});

hwtest.main = {
	init : function(){
		hwtest.main.mainMenu();
	},
	mainMenu : function(){
		var obj = hwtest.menuEntity;

		hwtest.navigation.initMenu(obj);
		hwtest.navigation.createMenuNav(obj);
		hwtest.utils.initFocus(hwtest.activeEntity.id,hwtest.activeEntity.itemTags);
	},
	/*
		This is test function
	*/
	menuClick : function(tagId)
	{
		var split_temp = tagId.split("_");
		var parent = split_temp[0];
		var id = split_temp[1];

		hwtest.log("send");
		hwtest.websocket.sendMessage(tagId + "\r\n");
		hwtest.log("send2");
		
		switch(id){
			case "MAIN":
				hwtest.log(parent);
				break;
			default :
				hwtest.log("Unknown menu : " + parent + " " + id);
				break;
		}
	},
	dropdownMenu : function(id)
	{
		var split_temp = id.split("_");
		var parent = split_temp[0];
		var child  = split_temp[1];

		$('#'+id+"_li").addClass('active');

		var childEntity = hwtest.utils.findChildEntity(child,hwtest.menuEntity);

		if(childEntity !== false)
		{
			hwtest.utils.stack.push(hwtest.activeEntity);

			hwtest.activeEntity.id		 = childEntity.id;
			hwtest.activeEntity.title	 = childEntity.title;
	        hwtest.activeEntity.parent	 = childEntity.parent;
	        hwtest.activeEntity.itemTags = childEntity.itemTags;
	        hwtest.activeEntity.type     = childEntity.type;
	        hwtest.activeEntity.index    = 0;

			hwtest.navigation.createList(childEntity);
			hwtest.utils.initFocus(hwtest.activeEntity.id,hwtest.activeEntity.itemTags);
		}
	},
	actionMenu : function(id)
	{
		var split_temp = id.split("_");
		var parent = split_temp[0];
		var menu = split_temp[1];

		var sendMsg = hwtest.websocket.parser.makeActionMsg(menu);

		if(id === "Channel_Auto")
		{
			hwtest.channel.auto.readSidb();
			var video = document.getElementById("hwtest_avtest_video");

			video.src = hwtest.channel.auto.curChannel();
			$("#"+this.menuId + "_src_name").attr("value",video.src);
							
			video.play();
		}
		else if(sendMsg !== false)
		{
			hwtest.websocket.sendMessage(sendMsg);
		}
	},
	dialogMenu : function(id)
	{	
		var split_temp = id.split("_");
		var parent = split_temp[0];
		var menu = split_temp[1];

		var childEntity = hwtest.utils.findChildEntity(menu,hwtest.menuEntity);

		if( (childEntity !== false) && (childEntity.type ==='dialog') )
		{
			hwtest.navigation.deleteList(hwtest.activeEntity.id);
			hwtest.utils.stack.push(hwtest.activeEntity);

			hwtest.activeEntity.id       = childEntity.id;
			hwtest.activeEntity.title    = childEntity.title;
	        hwtest.activeEntity.parent   = childEntity.parent;
	        hwtest.activeEntity.itemTags = childEntity.itemTags;
	        hwtest.activeEntity.type     = childEntity.type;
	        hwtest.activeEntity.index    = 0;

	        if(id === "AV_Resolution")
	        {
	        	hwtest.av.resolution.createDialog(parent);
	        }
			else if(id === "Functions_Playback")
			{
				hwtest.functions.playback.createDialog();
			}
			else if(id === "Functions_IpPlayback")
			{
				hwtest.functions.ipPlayback.createDialog();
			}
			else if(id === "Tuner0_Satellite")
			{
				hwtest.channel.satellite.createDialog(parent);
			}
			else if(id === "Tuner1_Satellite")
			{
				hwtest.channel.satellite.createDialog(parent);
			}
			else if(id === "Tuner2_Satellite")
			{
				hwtest.channel.satellite.createDialog(parent);
			}
			else if(id === "Tuner3_Satellite")
			{
				hwtest.channel.satellite.createDialog(parent);
			}
			else if(id === "Tuner0_Cable")
			{
				hwtest.channel.cable.createDialog(parent);
			}
			else if(id === "Tuner1_Cable")
			{
				hwtest.channel.cable.createDialog(parent);
			}
			else if(id === "Tuner2_Cable")
			{
				hwtest.channel.cable.createDialog(parent);
			}
			else if(id === "Tuner3_Cable")
			{
				hwtest.channel.cable.createDialog(parent);
			}
			else if(id === "Tuner0_Terrestrial")
			{
				hwtest.channel.terrestrial.createDialog(parent);
			}
			else if(id === "Tuner1_Terrestrial")
			{
				hwtest.channel.terrestrial.createDialog(parent);
			}
			else if(id === "Tuner2_Terrestrial")
			{
				hwtest.channel.terrestrial.createDialog(parent);
			}
			else if(id === "Tuner3_Terrestrial")
			{
				hwtest.channel.terrestrial.createDialog(parent);
			}
			else if(id === "DDR_StressTest")
			{
				hwtest.memory.ddr.createDialog();
			}
			else if(id === "HDD0_PatternTest")
			{
				hwtest.memory.hdd.patternTest.createDialog("HDD0");
			}
			else if(id === "Power_StressTest")
			{
				hwtest.functions.power.createDialog();
			}
			else if(id === "Ethernet_PingTest")
			{
				hwtest.functions.pingTest.createDialog();
			}
			
			hwtest.utils.initFocus(hwtest.activeEntity.id,hwtest.activeEntity.itemTags);
		}
	},
	infoMenu : function(id)
	{
		var split_temp = id.split("_");
		var parent = split_temp[0];
		var menu = split_temp[1];

		switch(id){
			case "Information_StatusWindow":
				hwtest.information.statusWindow.toggleWindow(menu);
				break;
			case "Information_MessageWindow":
				hwtest.information.messageWindow.toggleWindow(menu);
				break;
			case "Information_KeycodeWindow":
				hwtest.information.keycodeWindow.toggleWindow(menu);
				break;
			case "Channel_Status":
				hwtest.information.channelStatusWindow.toggleWindow(menu);
				break;
			case "Ethernet_info":
				hwtest.information.ethernetInfoWindow.toggleWindow(menu);
				break;
			default :
				hwtest.log("info menu : " + parent + " " + menu);
				break;
		}
	}
}
