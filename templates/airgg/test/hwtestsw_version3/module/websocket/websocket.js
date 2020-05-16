hwtest.websocket = {
	clientSocket : "",
	init : function(){
		hwtest.websocket.createWebsocket();
	},
	createWebsocket : function()
	{
		if("WebSocket" in window)
		{
			this.clientSocket = new WebSocket("ws://localhost:8088/echo");
			this.clientSocket.onopen = function(evt){ hwtest.websocket.onOpen(evt) }
			this.clientSocket.onerror = function(evt){ hwtest.websocket.onError(evt) };
			this.clientSocket.onmessage = function(evt){ hwtest.websocket.onMessage(evt)};
			this.clientSocket.onclose = function(evt){hwtest.websocket.onClose(evt)};
		}
		else
		{
			hwtest.log("WebSocket not Create");
		}
	},
	onOpen : function(event)
	{
	},
	onError : function(event)
	{
	},
	onMessage : function(event)
	{
		var recvSplit = event.data.split(" ");

		var msgPath   = recvSplit[0];
		var msgData   = "";

		if( recvSplit.length >= 2)
		{
			msgData = recvSplit.slice( 1, recvSplit.length);
		}

		if( msgPath === "MessageWindow" )
		{
			hwtest.websocket.parser.recvMsg( msgData );
		}
		else if( msgPath === "StatusWindow" )
		{
			hwtest.websocket.parser.recvStatus( msgData );
		}
		else if( msgPath === "ChannelStatusWindow" )
		{
			hwtest.websocket.parser.recvChannelStatus( msgData );
		}
		else if( msgPath === "EthernetWindow" )
		{
			hwtest.websocket.parser.recvEthernetInfo( msgData );
		}
		else if( msgPath === "Action")
		{
			hwtest.websocket.parser.recvMsg( msgData );
			hwtest.websocket.parser.recvAction( msgData );
		}
	},
	onClose : function(event)
	{
	},
	sendMessage : function(message)
	{
		this.clientSocket.send(message);
	}
};