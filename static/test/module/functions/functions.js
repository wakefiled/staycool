hwtest.functions={
};

hwtest.functions.ipPlayback={
	menuId : "IpPlayback",
	playSrc : "http://www.staycool.co.kr/static/test/media/test.mp4",
	createDialog : function()
	{
		var that= this;
		var video = document.getElementById("hwtest_avtest_video");
		
		$.extend(that,{
			$hwtest_control : $('#hwtest_control'),
			$dialog : $('<dialog>',{
				'id' : this.menuId,
				'class' : "hwtest-input-dialog playback"
			}),
			$dialogTitle : $('<h1>',{
			}),
			$table : $('<table>',{
			}),
			$path : $('<tr>',{
			}),
			$current : $('<tr>',{
			}),
			$controls : $('<tr>',{
			})
		})
		
		that.$hwtest_control.append(that.$hwtest_control);
		that.$hwtest_control.append(that.$dialog);
		that.$dialog.append(that.$dialogTitle);
		that.$dialog.append(that.$table);
		that.$table.append(that.$path);
		that.$table.append(that.$current);
		that.$table.append(that.$controls);

		this.createDialogPath(that.$path);
		this.createDialogCurrent(that.$current);
		this.createDialogControls(that.$controls);

		that.$dialogTitle.text(this.menuId);
		
		$("#"+this.menuId + "_src_name").attr("value",video.src);
	},
	createDialogPath : function(obj)
	{
		var that = this;

		$.extend(that,{
			$td : $('<td>',{
			})
		});

		obj.append(that.$td);

		that.$td.text("Source URL : " + this.playSrc);
	},
	createDialogCurrent : function(obj)
	{
		var that = this;

		$.extend(that,{
			$td : $('<td>',{
			}),
			$inputGroup : $('<div>',{
				'class' : 'input-group'
			}),
			$span : $('<span>',{
				'class' : 'input-group-addon'
			}),
			$displaySrcName : $('<input>',{
				'id' : this.menuId + '_src_name',
				'type' : 'text',
				'value' : '',
				'readonly' : '',
				'class' : 'form-control playback',
				'placeholder' : 'Empty'
			})
		});

		obj.append(that.$td);
		that.$td.append(that.$inputGroup);
		that.$inputGroup.append(that.$span);
		that.$inputGroup.append(that.$displaySrcName);
		
		that.$span.text("Video Src");
	},
	createDialogControls : function(obj)
	{
		var that = this;

		$.extend(that,{
			$td : $('<td>',{
			}),
			$playButton : $('<button>',{
				'id' : this.menuId + '_play',
				'class' : 'btn btn-lg btn-primary playback',
				'onclick' : 'hwtest.functions.ipPlayback.play()'
			}),
			$pauseButton : $('<button>',{
				'id' : this.menuId + '_pause',
				'class' : 'btn btn-lg btn-primary playback',
				'onclick' : 'hwtest.functions.ipPlayback.pause()'
			}),
			$cancleButton : $('<button>',{
				'id' : this.menuId + '_cancle',
				'class' : 'btn btn-lg btn-primary playback',
				'onclick' : 'hwtest.functions.ipPlayback.cancle()'
			})
		});

		obj.append(that.$td);
		that.$td.append(that.$playButton);
		that.$td.append(that.$pauseButton);
		that.$td.append(that.$cancleButton);

		that.$playButton.text("PLAY");
		that.$pauseButton.text("PAUSE");
		that.$cancleButton.text("CANCEL");
	},
	deleteDialog : function()
	{
		$("#"+this.menuId).remove();
	},
	restartVideo : function(){
		var video = document.getElementById("hwtest_avtest_video");

		video.currentTime = 0.1; //setting to zero breaks iOS 3.2, the value won't update, values smaller than 0.1 was causing bug as well.
		video.src = video.src;
		video.play();
	},
	play : function()
	{
		var video = document.getElementById("hwtest_avtest_video");

		if(video.src !==  this.playSrc)
		{
			video.src = this.playSrc;
			$("#"+this.menuId + "_src_name").attr("value",video.src);
		}

		if(video.paused)
		{
			video.play();
		}

                //if you can't use loop tag, you delete annotation this it.
		//video.addEventListener('ended',this.restartVideo, false);
	},
	pause : function()
	{
		var video = document.getElementById("hwtest_avtest_video");

		if(!video.paused)
		{
			video.pause();
		}
	},
	cancle : function()
	{
		if(hwtest.utils.stack.isEmpty() === false)
        {
            hwtest.functions.ipPlayback.deleteDialog();
        
            hwtest.activeEntity = hwtest.utils.stack.pop();

            if(hwtest.utils.stack.isEmpty() === false)
            {
                var curEntity = hwtest.utils.findEntity(hwtest.menuEntity);
                if( curEntity !== false )
                {
                    hwtest.navigation.createList(curEntity);
                }
            }
            hwtest.utils.initFocus(hwtest.activeEntity.id,hwtest.activeEntity.itemTags);
        }
	}
}

hwtest.functions.playback={
	menuId : "Playback",
	setPath : "media/",
	storage : "Local",
	storageList : ["Unknown"],
	playSrc : "big_buck_bunny.mp4",
	mediaList : ["big_buck_bunny.mp4"],
	fakeActive : {"id": "Playback_select_list","parent":"Playback_select_button","itemTags":"a","type":"fakelist"},
	createDialog : function()
	{
		var that = this;

		$.extend(that,{
			$hwtest_control : $('#hwtest_control'),
			$dialog : $('<dialog>',{
				'id' : this.menuId,
				'class' : "hwtest-input-dialog playback"
			}),
			$dialogTitle : $('<h1>',{
			}),
			$table : $('<table>',{
			}),
			$path : $('<tr>',{
			}),
			$storage : $('<tr>',{
			}),
			$select : $('<tr>',{
			}),
			$controls : $('<tr>',{
			})
		});

		that.$hwtest_control.append(that.$hwtest_control);
		that.$hwtest_control.append(that.$dialog);
		that.$dialog.append(that.$dialogTitle);
		that.$dialog.append(that.$table);
		that.$table.append(that.$path);
		that.$table.append(that.$storage);
		that.$table.append(that.$select);
		that.$table.append(that.$controls);

		this.createDialogPath(that.$path);
		this.createDialogStorageSelect(that.$storage);
		this.createDialogMediaSelect(that.$select);
		this.createDialogControls(that.$controls);

		that.$dialogTitle.text(this.menuId);
	},
	createDialogPath : function(obj)
	{
		var that = this;

		$.extend(that,{
			$td : $('<td>',{
				'id':this.menuId + '_mediapath'
			})
		});

		obj.append(that.$td);

		that.$td.text("Media DIR : " + this.setPath);
	},
	createDialogStorageSelect : function(obj)
	{	
		var that = this;

		$.extend(that,{
			$td : $('<td>',{
			}),
			$inputGroup : $('<div>',{
				'class' : 'input-group'
			}),
			$inputGroupButton : $('<div>',{
				'id' : this.menuId + "_select",
				'class' : 'input-group-btn'
			}),
			$dropdown : $('<button>',{
				'id' : this.menuId + "_select_button",
				'type' : 'button',
				'class' : 'btn btn-default', //dropdown-toggle',
				//'data-toggle' : 'dropdown',
				'onclick' : 'hwtest.functions.playback.reqStorageList()'
			}),
			$dropdownSpan : $('<span>',{
				'class' : 'caret'
			}),
			$displayFileName : $('<input>',{
				'id' : this.menuId + '_storage_name',
				'type' : 'text',
				'value' : this.storage,
				'readonly' : '',
				'class' : 'form-control playback'
			})
		});

		obj.append(that.$td);
		that.$td.append(that.$inputGroup);
		that.$inputGroup.append(that.$inputGroupButton);
		that.$inputGroupButton.append(that.$dropdown);
//		that.$inputGroupButton.append(that.$dropdownMenu);
		that.$inputGroup.append(that.$displayFileName);
		that.$dropdown.text("Storage");
		that.$dropdown.append(that.$dropdownSpan);
	},
	createDialogStorageSelectList : function()
	{
		var obj = $('#' + this.menuId + '_select');
		var that = this;

		$.extend(that,{
			$dropdownMenu : $('<ul>',{
				'id' : this.menuId + '_select_list',
				'class' : 'dropdown-menu',
				'role' : 'menu'
			})
		});

		for(var i = 0 ; i < this.storageList.length; i++)
		{
			this.createDialogStorageSelectItem( this.storageList[i]["model"],that.$dropdownMenu);
		}
		obj.append(that.$dropdownMenu);
	},
	createDialogStorageSelectItem : function (name, obj)
	{
		var that = this;

		$.extend(that,{
			$li : $('<li>',{
			}),
			$a : $('<a>',{
				'id' : this.menuId + '_list_item',
				'href' : "javascript:;",
				'onclick' : 'hwtest.functions.playback.setStorage("' + name + '")'
			})
		});
		obj.append(that.$li);
		that.$li.append(that.$a);

		that.$a.text(name);
	},
	createDialogMediaSelect : function(obj)
	{	
		var that = this;

		$.extend(that,{
			$td : $('<td>',{
			}),
			$inputGroup : $('<div>',{
				'class' : 'input-group'
			}),
			$inputGroupButton : $('<div>',{
				'id' : this.menuId + "_select",
				'class' : 'input-group-btn'
			}),
			$dropdown : $('<button>',{
				'id' : this.menuId + "_select_button",
				'type' : 'button',
				'class' : 'btn btn-default', //dropdown-toggle',
				//'data-toggle' : 'dropdown',
				'onclick' : 'hwtest.functions.playback.reqMediaList()'
			}),
			$dropdownSpan : $('<span>',{
				'class' : 'caret'
			}),
			$displayFileName : $('<input>',{
				'id' : this.menuId + '_file_name',
				'type' : 'text',
				'value' : this.playSrc,
				'readonly' : '',
				'class' : 'form-control playback'
			})
		});

		obj.append(that.$td);
		that.$td.append(that.$inputGroup);
		that.$inputGroup.append(that.$inputGroupButton);
		that.$inputGroupButton.append(that.$dropdown);
//		that.$inputGroupButton.append(that.$dropdownMenu);
		that.$inputGroup.append(that.$displayFileName);
		that.$dropdown.text("MediaFile");
		that.$dropdown.append(that.$dropdownSpan);
	},
	createDialogMediaSelectList : function()
	{
		var obj = $('#' + this.menuId + '_select');
		var that = this;

		$.extend(that,{
			$dropdownMenu : $('<ul>',{
				'id' : this.menuId + '_select_list',
				'class' : 'dropdown-menu',
				'role' : 'menu'
			})
		});

		for(var i = 0 ; i < this.mediaList.length; i++)
		{
			this.createDialogMediaSelectItem( this.mediaList[i] ,that.$dropdownMenu);
		}

		obj.append(that.$dropdownMenu);
	},
	createDialogMediaSelectItem : function (name, obj)
	{
		var that = this;

		$.extend(that,{
			$li : $('<li>',{
			}),
			$a : $('<a>',{
				'id' : this.menuId + '_list_item',
				'href' : "javascript:;",
				'onclick' : 'hwtest.functions.playback.setSrc("' + name + '")'
			})
		});
		obj.append(that.$li);
		that.$li.append(that.$a);

		that.$a.text(name);
	},
	createDialogControls : function(obj)
	{
		var that = this;

		$.extend(that,{
			$td : $('<td>',{
			}),
			$playButton : $('<button>',{
				'id' : this.menuId + '_play',
				'class' : 'btn btn-lg btn-primary playback',
				'onclick' : 'hwtest.functions.playback.play()'
			}),
			$pauseButton : $('<button>',{
				'id' : this.menuId + '_pause',
				'class' : 'btn btn-lg btn-primary playback',
				'onclick' : 'hwtest.functions.playback.pause()'
			}),
			$cancleButton : $('<button>',{
				'id' : this.menuId + '_cancle',
				'class' : 'btn btn-lg btn-primary playback',
				'onclick' : 'hwtest.functions.playback.cancle()'
			})
		});

		obj.append(that.$td);
		that.$td.append(that.$playButton);
		that.$td.append(that.$pauseButton);
		that.$td.append(that.$cancleButton);

		that.$playButton.text("PLAY");
		that.$pauseButton.text("PAUSE");
		that.$cancleButton.text("CANCEL");
	},
	deleteDialog : function()
	{
		$("#"+this.menuId).remove();
	},
	deleteSelectList : function()
	{
		$("#" + this.menuId + "_select_list").remove();
	},
	reqMediaList : function()
	{
		var message = hwtest.websocket.parser.makeDialogMsg('reqMediaList',this.setPath);

		hwtest.websocket.sendMessage(message);
	},
	reqStorageList : function()
	{
		var message = hwtest.websocket.parser.makeDialogMsg('reqStorageList',"");

		hwtest.websocket.sendMessage(message);
	},
	viewStorageList : function()
	{
		this.setStorageList();
		this.createDialogStorageSelectList();

		$("#"+this.menuId +"_select_list").css("display","block");

		hwtest.utils.stack.push(hwtest.activeEntity);

		hwtest.activeEntity.id       = this.fakeActive.id;
		hwtest.activeEntity.parent   = this.fakeActive.parent;
		hwtest.activeEntity.itemTags = this.fakeActive.itemTags;
		hwtest.activeEntity.type     = this.fakeActive.type;
		hwtest.activeEntity.index    = 0;

		hwtest.utils.initFocus(hwtest.activeEntity.id,hwtest.activeEntity.itemTags);
	},
	viewMediaList : function()
	{
		this.setMediaList();
		this.createDialogMediaSelectList();

		$("#"+this.menuId +"_select_list").css("display","block");

		hwtest.utils.stack.push(hwtest.activeEntity);

		hwtest.activeEntity.id       = this.fakeActive.id;
		hwtest.activeEntity.parent   = this.fakeActive.parent;
		hwtest.activeEntity.itemTags = this.fakeActive.itemTags;
		hwtest.activeEntity.type     = this.fakeActive.type;
		hwtest.activeEntity.index    = 0;

		hwtest.utils.initFocus(hwtest.activeEntity.id,hwtest.activeEntity.itemTags);
	},
	setSrc : function(src)
	{
		var video = document.getElementById("hwtest_avtest_video");

		this.playSrc = src;
		$("#"+this.menuId+"_file_name").attr("value",this.playSrc);

		var split_temp = this.playSrc.split(".");
		var extension = split_temp[1];

		video.src = this.setPath + this.playSrc;
/*
		if( extension === "mp4" )
		{
			video.src = this.setPath + this.playSrc;
		}
		else
		{
			video.src = "http://localhost:9998/mediafac/" + this.playSrc;
		}
*/
		$("#"+this.menuId +"_select_list").css("display","none");
		this.deleteSelectList();

		hwtest.activeEntity = hwtest.utils.stack.pop();
		hwtest.utils.initFocus(hwtest.activeEntity.id,hwtest.activeEntity.itemTags);
	},
	setStorage : function(str)
	{
		var mountDev;
		this.storage = str;
		$("#"+this.menuId+"_storage_name").attr("value",this.storage);

		$("#"+this.menuId +"_select_list").css("display","none");
		this.deleteSelectList();

		hwtest.activeEntity = hwtest.utils.stack.pop();
		hwtest.utils.initFocus(hwtest.activeEntity.id,hwtest.activeEntity.itemTags);

		for(var i = 0 ; i < this.storageList.length; i++)
		{
			if( this.storageList[i]['model'] === this.storage )
			{
				if (this.storage === "local" )
				{
					this.setPath = "media/";
				}
				else
				{
					this.setPath = "mnt_media/";
				}
				mountDev = this.storageList[i]['dev'] + this.storageList[i]['partition'];
			}
		}

		$("#" + this.menuId + '_mediapath').text("Media DIR : " + this.setPath);

		var send = hwtest.websocket.parser.makeDialogMsg('setStorage',mountDev + ' ' + this.setPath);
		hwtest.websocket.sendMessage(send);
	},
	restartVideo : function(){
		var video = document.getElementById("hwtest_avtest_video");

		video.currentTime = 0.1;
		video.src = video.src;
		video.play();
	},
	play : function()
	{
		var video = document.getElementById("hwtest_avtest_video");

		if(video.paused)
		{
			video.play();
		}

		video.addEventListener('ended',this.restartVideo, false);
	},
	pause : function()
	{
		var video = document.getElementById("hwtest_avtest_video");

		if(!video.paused)
		{
			video.pause();
		}
	},
	cancle : function()
	{
		if(hwtest.utils.stack.isEmpty() === false)
        {
            hwtest.functions.playback.deleteDialog();
        
            hwtest.activeEntity = hwtest.utils.stack.pop();

            if(hwtest.utils.stack.isEmpty() === false)
            {
                var curEntity = hwtest.utils.findEntity(hwtest.menuEntity);
                if( curEntity !== false )
                {
                    hwtest.navigation.createList(curEntity);
                }
            }
            hwtest.utils.initFocus(hwtest.activeEntity.id,hwtest.activeEntity.itemTags);
        }
	},
	setStorageList : function(data)
	{
		var contentType = "application/x-www-form-urlencoded;charset=utf-8";
		var xmlfilePath = "fw/service/xml/storageList.xml";

		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET",xmlfilePath,false);
		xmlhttp.setRequestHeader('Content-type', contentType);
		xmlhttp.send();
		var xmlDoc = xmlhttp.responseXML;	

		var devices = xmlDoc.documentElement.childNodes;

		this.storageList = [];

		for( var i=0 ; i < devices.length ; i++ )
		{
			if (devices.item(i).nodeType != 3)
			{
				var storageItem = new Array();

				storageItem["model"] = devices.item(i).getAttribute('model');
				storageItem["vendor"] = devices.item(i).getAttribute('vendor');
				storageItem["dev"] = devices.item(i).getAttribute('dev');
				storageItem["partition"] = devices.item(i).getAttribute('partition');

				this.storageList.push(storageItem);
			}
			else
			{
				continue;
			}	
		}
	},
	setMediaList : function(data)
	{
		var contentType = "application/x-www-form-urlencoded;charset=utf-8";
		var xmlfilePath = "fw/service/xml/mediaList.xml";

		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET",xmlfilePath,false);
		xmlhttp.setRequestHeader('Content-type', contentType);
		xmlhttp.send();
		var xmlDoc = xmlhttp.responseXML;	

		this.setPath = xmlDoc.documentElement.getAttribute('directory');
		var mediaFiles = xmlDoc.documentElement.childNodes;

		this.mediaList = [];

		for( var i=0 ; i<mediaFiles.length ; i++ )
		{
			if (mediaFiles.item(i).nodeType == 1)
			{
				this.mediaList.push( mediaFiles.item(i).textContent );
			}
			else
			{
				continue;
			}
		}
	}
}

hwtest.functions.power={
	menuId : "StressTest",
	mode : ['LightSleep','DeepSleep'],
	fakeActive : {"id": "StressTest_select_list","parent":"StressTest_select_button","itemTags":"a","type":"fakelist"},
	createDialog : function()
	{
		var that = this;

		$.extend(that,{
			$hwtest_control : $('#hwtest_control'),
			$dialog : $('<dialog>',{
				'id' : this.menuId,
				'class' : "hwtest-input-dialog power"
			}),
			$dialogTitle : $('<h1>',{
			}),
			$table : $('<table>',{
			}),
			$sleepMode : $('<tr>',{
			}),
			$onTime : $('<tr>',{
			}),
			$offTime : $('<tr>',{
			}),
			$controls : $('<tr>',{
			})
		});

		that.$hwtest_control.append(that.$hwtest_control);
		that.$hwtest_control.append(that.$dialog);
		that.$dialog.append(that.$dialogTitle);
		that.$dialog.append(that.$table);
		that.$table.append(that.$sleepMode);
		that.$table.append(that.$onTime);
		that.$table.append(that.$offTime);
		that.$table.append(that.$controls);

		this.createSelectMenu("Mode" ,that.$sleepMode);
		this.createInputMenu("On", that.$onTime);
		this.createInputMenu("Off", that.$offTime);
		this.createDialogControls(that.$controls);

		that.$dialogTitle.text("Power " + this.menuId);
	},
	createSelectMenu : function(menuId,obj)
	{
		var that = this;

		$.extend(that,{
			$td0 : $('<td>',{
			}),
			$title : $('<p>',{
				'class' : 'power-select-title'
			}),
			$td1 : $('<td>',{
			}),
			$inputGroupButton : $('<div>',{
				'id' : menuId +"_select",
				'class' : 'input-group'
			}),
			$dropdown : $('<input>',{
				'id' : menuId +"_select_input",
				'type' : 'button',
				'class' : 'form-control power',
				'value' : hwtest.functions.powerInfo.getAttr(menuId),
				'readonly':'',
				'onclick' : 'hwtest.functions.power.view' + menuId + '()'
			}),
			$dropdownSpan : $('<span>',{
				'class' : 'input-group-addon hwtest-primary-color'
			})
		});

		obj.append(that.$td0);
		obj.append(that.$td1);
		that.$td0.append(that.$title);
		that.$td1.append(that.$inputGroupButton);
		that.$inputGroupButton.append(that.$dropdownSpan);
		that.$inputGroupButton.append(that.$dropdown);
		that.$title.text(menuId);
		that.$dropdownSpan.text("click ");
	},
	createInputMenu : function(menuId,obj)
	{
		var that = this;
		var inputTagId = menuId + "_select_input";

		$.extend(that,{
			$td0 : $('<td>',{
			}),
			$title : $('<p>',{
				'class' : 'power-select-title'
			}),
			$td1 : $('<td>',{
			}),
			$inputGroupButton : $('<div>',{
				'id' : menuId +"_select",
				'class' : 'input-group'
			}),
			$dropdown : $('<input>',{
				'id' : inputTagId,
				'type' : 'text',
				'class' : 'form-control power',
				'readonly':'',
				'value' : hwtest.functions.powerInfo.getAttr(menuId)
			}),
			$dropdownSpan : $('<span>',{
				'class' : 'input-group-addon hwtest-primary-color'
			})
		});

		obj.append(that.$td0);
		obj.append(that.$td1);
		that.$td0.append(that.$title);
		that.$td1.append(that.$inputGroupButton);
		that.$inputGroupButton.append(that.$dropdownSpan);
		that.$inputGroupButton.append(that.$dropdown);
		
		if(menuId === "On")
		{
			that.$title.text(menuId + " (sec)");
		}
		else if(menuId === "Off")
		{
			that.$title.text(menuId + " (sec)");
		}
		else
		{
			that.$title.text(menuId);
		}
		that.$dropdownSpan.text("input :");
		
		$('#'+ inputTagId).blur(function(){
			// send list attribute value
			var value = $('#'+inputTagId).val();
			var send = hwtest.websocket.parser.makeDialogMsg(menuId,value);
			hwtest.functions.powerInfo.setAttr(menuId, value);
			hwtest.websocket.sendMessage(send);
		});

	},
	createSelectList : function(menuId, array )
	{
		var obj = $('#' + menuId +'_select');
		var that = this;

		$.extend(that,{
			$dropdownMenu : $('<ul>',{
				'id' : menuId +'_select_list',
				'class' : 'dropdown-menu',
				'role' : 'menu'
			})
		});

		for(var i = 0 ; i < array.length; i++)
		{
			this.createSelectItem( menuId, array[i] ,that.$dropdownMenu);
		}

		obj.append(that.$dropdownMenu);
	},
	createSelectItem : function (menuId, name, obj)
	{
		var that = this;

		$.extend(that,{
			$li : $('<li>',{
			}),
			$a : $('<a>',{
				'href' : "javascript:;",
				'onclick' : 'hwtest.functions.power.selectListItem("' + menuId + '","' + name + '")'
			})
		});
		obj.append(that.$li);
		that.$li.append(that.$a);

		that.$a.text(name);
	},
	selectListItem : function(menuId, value)
	{
		var selectListId = menuId +"_select_list";
		var selectListParent = menuId +"_select_input";
		
		var valueTag = $("#" + selectListParent);
		var valueList = $("#" + selectListId);

		valueTag.attr("value",value);
		valueList.css("display","none");
		
		hwtest.functions.power.deleteSelectList(menuId);

		hwtest.activeEntity = hwtest.utils.stack.pop();
		hwtest.utils.initFocus(hwtest.activeEntity.id,hwtest.activeEntity.itemTags);
		
		hwtest.functions.powerInfo.setAttr(menuId, value);

		// send list attribute value
		var send = hwtest.websocket.parser.makeDialogMsg(menuId,value);
		hwtest.websocket.sendMessage(send);
	},
	selectListFocus : function (menuId)
	{
		var selectListId = menuId +"_select_list";
		var selectListParent = menuId +"_select_input";
		
		$("#"+ selectListId).css("display","block");
		
		this.fakeActive.id = selectListId;
		this.fakeActive.parent = selectListParent;
		
		hwtest.utils.stack.push(hwtest.activeEntity);

		hwtest.activeEntity.id       = this.fakeActive.id;
		hwtest.activeEntity.parent   = this.fakeActive.parent;
		hwtest.activeEntity.itemTags = this.fakeActive.itemTags;
		hwtest.activeEntity.type     = this.fakeActive.type;
		hwtest.activeEntity.index    = 0;

		hwtest.utils.initFocus(hwtest.activeEntity.id,hwtest.activeEntity.itemTags);
	},
	createDialogControls : function(obj)
	{
		var that = this;

		$.extend(that,{
			$td : $('<td>',{
				'colspan':'2'
			}),
			$startButton : $('<input>',{
				'id' : 'start',
				'type' : 'button',
				'class' : 'btn btn-lg btn-primary power',
				'readonly':'',
				'value':'START',
				'onclick' : 'hwtest.functions.power.start()'
			}),
			$stopButton : $('<input>',{
				'id' : 'stop',
				'type' : 'button',
				'class' : 'btn btn-lg btn-primary power',
				'readonly':'',
				'value':'STOP',
				'onclick' : 'hwtest.functions.power.stop()'
			}),
			$cancelButton : $('<input>',{
				'id' : 'cancel',
				'type' : 'button',
				'class' : 'btn btn-lg btn-primary power',
				'readonly':'',
				'value':'CANCEL',
				'onclick' : 'hwtest.functions.power.cancel()'
			})
		});

		obj.append(that.$td);
		that.$td.append(that.$startButton);
		that.$td.append(that.$stopButton);
		that.$td.append(that.$cancelButton);
	},
	deleteSelectList : function(menuId)
	{
		var selectListId = menuId +"_select_list";
		$("#" + selectListId).remove();
	},
	viewMode : function()
	{
		var menuId = "Mode";

		hwtest.functions.power.createSelectList(menuId , this.mode);
		hwtest.functions.power.selectListFocus(menuId);
	},
	start : function(obj)
	{
		var message = hwtest.websocket.parser.makeDialogMsg('START','');

		hwtest.websocket.sendMessage(message);
	},
	stop : function(obj)
	{
		var message = hwtest.websocket.parser.makeDialogMsg('STOP','');

		hwtest.websocket.sendMessage(message);
	},
	cancel : function(obj)
	{
		hwtest.navigation.deleteDialog(hwtest.activeEntity.id);
        hwtest.activeEntity = hwtest.utils.stack.pop();

        if(hwtest.utils.stack.isEmpty() === false)
        {
            var curEntity = hwtest.utils.findEntity(hwtest.menuEntity);
            if( curEntity !== false )
            {
                hwtest.navigation.createList(curEntity);
            }
        }
        hwtest.utils.initFocus(hwtest.activeEntity.id,hwtest.activeEntity.itemTags);
	}
}

hwtest.functions.powerInfo={
	power : {'id':'StressTest','Mode':'LightSleep','On':'120','Off':'60'},
	getAttr : function(menuId)
	{	
		if ( this.power.hasOwnProperty(menuId) )
		{
			return this.power[menuId];
		}
		
		return "Unknown";
	},
	setAttr : function(menuId,value)
	{	
		if(this.power.hasOwnProperty(menuId) )
		{
			this.power[menuId] = value;
		}
	},
}
hwtest.functions.pingTest={
	menuId : "PingTest",
	createDialog : function()
	{
		
		$.ajax({
		            url:'dialogs/pingTest.html',
		            success:function(data){
		                $('#hwtest_state').append(data);
		            }
		})
		

/*

		var that= this;
		
		$.extend(that,{
			$hwtest_control : $('#hwtest_control'),
			$dialog : $('<dialog>',{
				'id' : this.menuId,
				'class' : "hwtest-input-dialog pingtest"
			}),
			$dialogTitle : $('<h1>',{
			}),
			$table : $('<table>',{
			}),
			$hint : $('<tr>',{
			}),
			$input : $('<tr>',{
			}),
			$controls : $('<tr>',{
			})
		})
		
		that.$hwtest_control.append(that.$hwtest_control);
		that.$hwtest_control.append(that.$dialog);
		that.$dialog.append(that.$dialogTitle);
		that.$dialog.append(that.$table);
		that.$table.append(that.$hint);
		that.$table.append(that.$input);
		that.$table.append(that.$controls);

		this.createDialogHint(that.$hint);
		this.createDialogInput(that.$input);
		this.createDialogControls(that.$controls);

		that.$dialogTitle.text(this.menuId);
		*/
	},
	createDialogHint : function(obj)
	{
		var that = this;

		$.extend(that,{
			$td : $('<td>',{
			})
		});

		obj.append(that.$td);
		that.$td.text("E.g. 192.168.1.6");
	},
	createDialogInput : function(obj)
	{
		var that = this;

		$.extend(that,{
			$td : $('<td>',{
			}),
			$inputGroup : $('<div>',{
				'class' : 'input-group'
			}),
			$span : $('<span>',{
				'class' : 'input-group-addon'
			}),
			$spandot1 : $('<span>',{
				'class' : 'input-group-addon'
			}),
			$spandot2 : $('<span>',{
				'class' : 'input-group-addon'
			}),
			$spandot3 : $('<span>',{
				'class' : 'input-group-addon'
			}),
			$inputIP1 : $('<input>',{
				'id' : this.menuId + '_ipaddress1',
				'type' : 'text',
				'value' : '192',
				'readonly':'',
				'class' : 'form-control pingtest'
			}),
			$inputIP2 : $('<input>',{
				'id' : this.menuId + '_ipaddress2',
				'type' : 'text',
				'value' : '168',
				'readonly':'',
				'class' : 'form-control pingtest'
			}),
			$inputIP3 : $('<input>',{
				'id' : this.menuId + '_ipaddress3',
				'type' : 'text',
				'value' : '1',
				'readonly':'',
				'class' : 'form-control pingtest'
			}),
			$inputIP4 : $('<input>',{
				'id' : this.menuId + '_ipaddress4',
				'type' : 'text',
				'value' : '6',
				'readonly':'',
				'class' : 'form-control pingtest'
			})
		});

		obj.append(that.$td);
		that.$td.append(that.$inputGroup);
		that.$inputGroup.append(that.$span);
		that.$inputGroup.append(that.$inputIP1);
		that.$inputGroup.append(that.$spandot1);
		that.$inputGroup.append(that.$inputIP2);
		that.$inputGroup.append(that.$spandot2);
		that.$inputGroup.append(that.$inputIP3);
		that.$inputGroup.append(that.$spandot3);
		that.$inputGroup.append(that.$inputIP4);
		
		that.$span.text("IP Address");
		that.$spandot1.text(".");
		that.$spandot2.text(".");
		that.$spandot3.text(".");
	},
	createDialogControls : function(obj)
	{
		var that = this;

		$.extend(that,{
			$td : $('<td>',{
			}),
			$pingButton : $('<input>',{
				'id' : this.menuId + '_ping',
				'class' : 'btn btn-lg btn-primary pingtest',
				'type' : 'button',
				'value': 'Ping',
				'onclick' : 'hwtest.functions.pingTest.ping()'
			}),
			$closeButton : $('<input>',{
				'id' : this.menuId + '_close',
				'class' : 'btn btn-lg btn-primary pingtest',
				'type' : 'button',
				'value': 'Close',
				'onclick' : 'hwtest.functions.pingTest.close()'
			})
		});

		obj.append(that.$td);
		that.$td.append(that.$pingButton);
		that.$td.append(that.$closeButton);

	},
	deleteDialog : function()
	{
		$("#"+this.menuId).remove();
	},
	ping : function()
	{
		var ipaddr = $("#"+this.menuId + "_ipaddress1").val() + "." + 
					$("#"+this.menuId + "_ipaddress2").val() + "." + 
					$("#"+this.menuId + "_ipaddress3").val() + "." +
					$("#"+this.menuId + "_ipaddress4").val(); 
		hwtest.websocket.sendMessage("Peripheral Ethernet PingTest " + ipaddr);
		hwtest.functions.pingTest.close();
	},
	close : function()
	{
		if(hwtest.utils.stack.isEmpty() === false)
        {
            hwtest.functions.pingTest.deleteDialog();
        
            hwtest.activeEntity = hwtest.utils.stack.pop();

            if(hwtest.utils.stack.isEmpty() === false)
            {
                var curEntity = hwtest.utils.findEntity(hwtest.menuEntity);
                if( curEntity !== false )
                {
                    hwtest.navigation.createList(curEntity);
                }
            }
            hwtest.utils.initFocus(hwtest.activeEntity.id,hwtest.activeEntity.itemTags);
        }
	}
}
