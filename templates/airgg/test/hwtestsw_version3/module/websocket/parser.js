hwtest.websocket.parser={
	makeActionMsg : function(id)
	{
		var sendMsg = "";

		if(hwtest.utils.stack.length() > 1 )
		{
			for(var i=1; i<hwtest.utils.stack.length(); i++)
			{
				sendMsg += hwtest.utils.stack.at(i).id + " ";
			}
		}
		sendMsg += hwtest.activeEntity.id + " ";
		sendMsg += id;

		if(sendMsg === "")
		{
			return false;
		}

		return sendMsg;
	},
	makeDialogMsg : function(id,msg)
	{
		var sendMsg = "";

		if(hwtest.utils.stack.length() > 1 )
		{
			for(var i=1; i<hwtest.utils.stack.length(); i++)
			{
				sendMsg += hwtest.utils.stack.at(i).id + " ";
			}
		}
		sendMsg += hwtest.activeEntity.id + " ";
		sendMsg += id + " ";
		sendMsg += msg;

		if(sendMsg === "")
		{
			return false;
		}

		return sendMsg;
	},
	recvMsg : function( data )
	{
		var pushValue = "";

		for( var i = 0 ; i < data.length; i++ )
		{
			pushValue += data[i] + " ";
		}

		hwtest.information.messageWindowQueue.push(pushValue);
		hwtest.information.messageWindow.printMsg();
	},
	recvStatus : function( data )
	{
		var cpuInfo = $("#StatusWindow_CPU");
		var hddInfo = $("#StatusWindow_HDD");
		var tunerInfo = $("#StatusWindow_Tuner");

		cpuInfo.text("[CPU Temp]  : " + data[1]);
		hddInfo.text("[HDD Temp]  : " + data[3]);
		//tunerInfo.text("[Tuner Temp]: " + data[5]);
		tunerInfo.text("[Tuner Temp]: Unknown");
	},
	recvChannelStatus : function( data )
	{
		var tunerID;
		if (data[0] === "Tuner0")
			tunerID = $("#Status_Tuner0");
		else if (data[0] === "Tuner1")
			tunerID = $("#Status_Tuner1");
		else if (data[0] === "Tuner2")
			tunerID = $("#Status_Tuner2");
		else if (data[0] === "Tuner3")
			tunerID = $("#Status_Tuner3");
		else 
			tunerID = $("#Status_No");

		var tunerInfo = "";

		for( var i = 0; i < data.length; i++ )
		{
			tunerInfo += data[i] + " ";
		}

		tunerID.text(tunerInfo);
	},
	recvEthernetInfo : function( data )
	{
		var address = $("#info_Address");
		var mask = $("#info_Mask");
		var broadcast = $("#info_Broadcast");
		var mac = $("#info_MAC");

		address.text("IP Address  : " + data[0]);
		mask.text("Mask  : " + data[1]);
		broadcast.text("Broadcast  : " + data[2]);
		mac.text("MAC  : " + data[3]);
	},
	recvAction : function( data )
	{
		var actionValue = "";
		var thermal = document.getElementById("thermal_status");


		if( data[0] !== "SUCCESS" )
		{
			return;
		}

		for( var i = 1 ; i < data.length; i++ )
		{
			actionValue += data[i] + " ";
		}

		if(actionValue === "Functions Playback reqMediaList ")
		{
			hwtest.functions.playback.viewMediaList();
		}
		else if(actionValue === "Functions Playback reqStorageList ")
		{
			hwtest.functions.playback.viewStorageList();
		}
		else if(actionValue === "Channel Tuner0 Satellite start ")
		{
			hwtest.channel.satellite.start();
		}
		else if(actionValue === "Channel Tuner1 Satellite start ")
		{
			hwtest.channel.satellite.start();
		}
		else if(actionValue === "Channel Tuner2 Satellite start ")
		{
			hwtest.channel.satellite.start();
		}
		else if(actionValue === "Channel Tuner3 Satellite start ")
		{
			hwtest.channel.satellite.start();
		}
		else if(actionValue === "Channel Tuner0 Cable start ")
		{
			hwtest.channel.cable.start();
		}
		else if(actionValue === "Channel Tuner1 Cable start ")
		{
			hwtest.channel.cable.start();
		}
		else if(actionValue === "Channel Tuner2 Cable start ")
		{
			hwtest.channel.cable.start();
		}
		else if(actionValue === "Channel Tuner3 Cable start ")
		{
			hwtest.channel.cable.start();
		}
		else if(actionValue === "SWPAUSE ")
		{
			hwtest.utils.swpause();
		}
		else if(actionValue === "SWSTART ")
		{
			hwtest.utils.swstart();
		}
		else if (actionValue.search("CPU Temperature") != -1)
		{
			thermal.innerHTML = actionValue;
		}
		else if (actionValue === "Thermal Protection Stop ")
		{
			thermal.innerHTML = "";
		}
	}
}