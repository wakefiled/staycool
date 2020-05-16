hwtest.information={
}

hwtest.information.statusWindow={
	statusInterval : "",
	toggleWindow : function(id){
		var obj = $("#"+id).html();

		if(typeof obj==='undefined')
		{
			hwtest.information.statusWindow.createWindow(id);
		}
		else
		{
			hwtest.information.statusWindow.deleteWindow(id);
		}
	},
	createWindow : function(id){
		var that = this;

		$.extend(that,{
			$hwtest_state : $('#hwtest_state'),
			$p : $('<p>',{
				'id' : id
			}),
			$panel : $('<div>',{
				'class' : 'panel panel-primary pull-right'
			}),
			$panel_heading : $('<div>',{
				'class' : 'panel-heading hwtest-statuswindow'
			}),
			$panel_title : $('<h3>',{
				'class' : 'panel-title'
			}),
			$panel_body : $('<div>',{
				'class' : 'panel-body hwtest-statuswindow'
			})
		});

		that.$hwtest_state.append(that.$hwtest_state);
		that.$hwtest_state.append(that.$p);
		that.$p.append(that.$panel);
		that.$panel.append(that.$panel_heading);
		that.$panel_heading.append(that.$panel_title);
		that.$panel.append(that.$panel_body);
		
		this.createWindowItems(that.$panel_body, id, "CPU");
		this.createWindowItems(that.$panel_body, id, "HDD");
		this.createWindowItems(that.$panel_body, id, "Tuner");
		
		that.$panel_title.text("Status Window");

		hwtest.websocket.sendMessage("Information StatusWindow start");
	},
	createWindowItems : function(obj,id,dev){
		var that = this;

		$.extend(that,{
			$p : $('<p>',{
				'id' : id + "_" + dev
			})
		})

		obj.append(that.$p);
	},
	deleteWindow : function(id){
		hwtest.websocket.sendMessage("Information StatusWindow stop");
		$("#"+id).remove();
	}
}

hwtest.information.messageWindow={
	toggleWindow : function(id){
		var obj = $("#"+id).html();

		if(typeof obj==='undefined')
		{
			hwtest.information.messageWindow.createWindow(id);
			hwtest.information.messageWindow.printMsg();
		}
		else
		{
			hwtest.information.messageWindow.deleteWindow(id);
		}
	},
	createWindow : function(id){
		var that = this;

		$.extend(that,{
			$hwtest_state : $('#hwtest_state'),
			$p : $('<p>',{
				'id' : id
			}),
			$panel : $('<div>',{
				'class' : 'panel panel-primary pull-right'
			}),
			$panel_heading : $('<div>',{
				'class' : 'panel-heading hwtest-messagewindow'
			}),
			$panel_title : $('<h3>',{
				'class' : 'panel-title'
			}),
			$panel_body : $('<div>',{
				'class' : 'panel-body hwtest-messagewindow'
			})
		});

		that.$hwtest_state.append(that.$hwtest_state);
		that.$hwtest_state.append(that.$p);
		that.$p.append(that.$panel);
		that.$panel.append(that.$panel_heading);
		that.$panel_heading.append(that.$panel_title);
		that.$panel.append(that.$panel_body);

		for(var i=0 ; i<hwtest.information.messageWindowQueue.queueMax; i++)
		{
			hwtest.information.messageWindow.createWindowItems(that.$panel_body, id, i);
		}

		that.$panel_title.text("Message Window");
	},
	createWindowItems : function(obj,id,index)
	{
		var that = this;

		$.extend(that,{
			$p : $('<p>',{
				'id' : id + index
			}),
		})

		obj.append(that.$p);

	},
	deleteWindow : function(id){
		$("#"+id).remove();
	},
	printMsg : function()
	{
		var obj = $("#MessageWindow");

		if(typeof obj.html() !== 'undefined')
		{
			for(var i = 0; i < hwtest.information.messageWindowQueue.length(); i++)
			{
				$("#MessageWindow"+i).text( "* " + hwtest.information.messageWindowQueue.at(i));
			}
		}
	}
}

hwtest.information.keycodeWindow={
	keyWindow : false,
	pannelName : "KeycodeWindow_KEY",
	toggleWindow : function(id){
		var obj = $("#"+id).html();

		if(typeof obj==='undefined')
		{
			this.createWindow(id);
			this.keyWindow = true;
		}
		else
		{
			this.deleteWindow(id);
			this.keyWindow = false;
		}
	},
	createWindow : function(id){
		var that = this;

		$.extend(that,{
			$hwtest_state : $('#hwtest_state'),
			$p : $('<p>',{
				'id' : id
			}),
			$panel : $('<div>',{
				'class' : 'panel panel-primary pull-right'
			}),
			$panel_heading : $('<div>',{
				'class' : 'panel-heading hwtest-keycodewindow'
			}),
			$panel_title : $('<h3>',{
				'class' : 'panel-title'
			}),
			$panel_body : $('<div>',{
				'class' : 'panel-body hwtest-keycodewindow'
			})
		});

		that.$hwtest_state.append(that.$hwtest_state);
		that.$hwtest_state.append(that.$p);
		that.$p.append(that.$panel);
		that.$panel.append(that.$panel_heading);
		that.$panel_heading.append(that.$panel_title);
		that.$panel.append(that.$panel_body);
		
		this.createWindowItems(that.$panel_body, this.pannelName);
		
		that.$panel_title.text("Keycode Window");
	},
	createWindowItems : function(obj,id){
		var that = this;

		$.extend(that,{
			$p : $('<p>',{
				'id' : id
			})
		})

		obj.append(that.$p);
	},
	deleteWindow : function(id){
		$("#"+id).remove();
	},
	printKeycode : function(msg)
	{
		if(this.keyWindow)
		{
			$("#" + this.pannelName).text("Keycode is " + msg);
		}
	}
}


hwtest.information.channelStatusWindow={
	statusInterval : "",
	toggleWindow : function(id){
		var obj = $("#"+id).html();

		if(typeof obj==='undefined')
		{
			hwtest.information.channelStatusWindow.createWindow(id);
		}
		else
		{
			hwtest.information.channelStatusWindow.deleteWindow(id);
		}
	},
	createWindow : function(id){
		var that = this;

		$.extend(that,{
			$hwtest_state : $('#hwtest_state'),
			$p : $('<p>',{
				'id' : id
			}),
			$panel : $('<div>',{
				'class' : 'panel panel-primary pull-right'
			}),
			$panel_heading : $('<div>',{
				'class' : 'panel-heading hwtest-channelstatuswindow'
			}),
			$panel_title : $('<h3>',{
				'class' : 'panel-title'
			}),
			$panel_body : $('<div>',{
				'class' : 'panel-body hwtest-channelstatuswindow'
			})
		});

		that.$hwtest_state.append(that.$hwtest_state);
		that.$hwtest_state.append(that.$p);
		that.$p.append(that.$panel);
		that.$panel.append(that.$panel_heading);
		that.$panel_heading.append(that.$panel_title);
		that.$panel.append(that.$panel_body);
		
		this.createWindowItems(that.$panel_body, id, "Tuner0");
		this.createWindowItems(that.$panel_body, id, "Tuner1");
		this.createWindowItems(that.$panel_body, id, "Tuner2");
		this.createWindowItems(that.$panel_body, id, "Tuner3");
		this.createWindowItems(that.$panel_body, id, "No");
		
		that.$panel_title.text("Channel Status");

		hwtest.websocket.sendMessage("Channel Status Get");
	},
	createWindowItems : function(obj,id,dev){
		var that = this;

		$.extend(that,{
			$p : $('<p>',{
				'id' : id + "_" + dev
			})
		})

		obj.append(that.$p);
	},
	deleteWindow : function(id){
		$("#"+id).remove();
	}
}

hwtest.information.ethernetInfoWindow={
	statusInterval : "",
	toggleWindow : function(id){
		var obj = $("#"+id).html();

		if(typeof obj==='undefined')
		{
			hwtest.information.ethernetInfoWindow.createWindow(id);
		}
		else
		{
			hwtest.information.ethernetInfoWindow.deleteWindow(id);
		}
	},
	createWindow : function(id){
		var that = this;

		$.extend(that,{
			$hwtest_state : $('#hwtest_state'),
			$p : $('<p>',{
				'id' : id
			}),
			$panel : $('<div>',{
				'class' : 'panel panel-primary pull-right'
			}),
			$panel_heading : $('<div>',{
				'class' : 'panel-heading hwtest-statuswindow'
			}),
			$panel_title : $('<h3>',{
				'class' : 'panel-title'
			}),
			$panel_body : $('<div>',{
				'class' : 'panel-body hwtest-statuswindow'
			})
		});

		that.$hwtest_state.append(that.$hwtest_state);
		that.$hwtest_state.append(that.$p);
		that.$p.append(that.$panel);
		that.$panel.append(that.$panel_heading);
		that.$panel_heading.append(that.$panel_title);
		that.$panel.append(that.$panel_body);
		
		this.createWindowItems(that.$panel_body, id, "Address");
		this.createWindowItems(that.$panel_body, id, "Mask");
		this.createWindowItems(that.$panel_body, id, "Broadcast");
		this.createWindowItems(that.$panel_body, id, "MAC");
		
		that.$panel_title.text("Ethernet Information");

		hwtest.websocket.sendMessage("Peripheral Ethernet info");
	},
	createWindowItems : function(obj,id,dev){
		var that = this;

		$.extend(that,{
			$p : $('<p>',{
				'id' : id + "_" + dev
			})
		})

		obj.append(that.$p);
	},
	deleteWindow : function(id){
		$("#"+id).remove();
	}
}
hwtest.information.messageWindowQueue={
	queueMax : 5,
	rear : 0,
	push : function(obj)
	{
		var pushValue = new Object();

		pushValue = obj;

		if(this.isFull() === false)
		{
			hwtest.messageQueue[this.rear] = pushValue;
			this.rear++;
		}
		else
		{
			hwtest.messageQueue[this.rear] = pushValue;
			hwtest.messageQueue = hwtest.messageQueue.slice(1,this.queueMax+1);
		}
	},
	isFull : function()
	{
		if( this.rear === this.queueMax )
		{
			return true;
		}
		return false;
	},
	length : function()
	{
		if( this.queueMax < hwtest.messageQueue.length )
		{
			return this.queueMax;
		}
		else
		{
			return hwtest.messageQueue.length;
		}
	},
	at : function(i)
	{
		return hwtest.messageQueue[i];
	}
}
