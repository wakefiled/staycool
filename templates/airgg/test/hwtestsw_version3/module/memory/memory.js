hwtest.memory={
};

hwtest.memory.hdd={
};

hwtest.memory.hdd.patternTest={
	fakeActive : {'id':'','parent':'','itemTags':'a','type':'fakelist'},
	hddId : "HDD0",
	menuId : "PatternTest",
	pattern : [	"ALIGN(n)(D10.2),10b",
				"HFTP(D10.2),10b",
				"LFTP(D30.3),10b",
				"MFTP(D24.3),10b",
				"LBP(n)(SATAV2.6)10b",
				"LBP(p)(SATAV2.6),10b",
				"SSOP(n),10b",
				"SSOP(p),10b"],
	speed : ["GEN1", "GEN2"],
	ssc : ["Disable","Enable"],
	createDialog : function(id)
	{
		var that = this;
		this.hddId = id;

		$.extend(that,{
			$hwtest_control : $('#hwtest_control'),
			$dialog : $('<dialog>',{
				'id' : this.menuId,
				'class' : "hwtest-input-dialog hdd"
			}),
			$dialogTitle : $('<h1>',{
			}),
			$table : $('<table>',{
			}),
			$pattern : $('<tr>',{
				'id' : this.hddId + '_pattern'
			}),
			$speed : $('<tr>',{
				'id' : this.hddId + '_speed'
			}),
			$ssc : $('<tr>',{
				'id' : this.hddId + '_ssc'
			}),
			$controls : $('<tr>',{
			})
		});

		that.$hwtest_control.append(that.$hwtest_control);
		that.$hwtest_control.append(that.$dialog);
		that.$dialog.append(that.$dialogTitle);
		that.$dialog.append(that.$table);
		that.$table.append(that.$pattern);
		that.$table.append(that.$speed);
		that.$table.append(that.$ssc);
		that.$table.append(that.$controls);

		this.createSelectMenu("Pattern",that.$pattern);
		this.createSelectMenu("Speed",that.$speed);
		this.createSelectMenu("Ssc",that.$ssc);
		this.createDialogControls(that.$controls);

		that.$dialogTitle.text(this.menuId);
	},
	createSelectMenu : function(menuId,obj)
	{		
		var that = this;

		$.extend(that,{
			$td0 : $('<td>',{
			}),
			$title : $('<p>',{
				'class' : 'channel-select-title'
			}),
			$td1 : $('<td>',{
			}),
			$inputGroupButton : $('<div>',{
				'id' : this.hddId + "_"+ menuId +"_select",
				'class' : 'input-group'
			}),
			$dropdown : $('<input>',{
				'id' : this.hddId + "_"+ menuId +"_select_input",
				'type' : 'button',
				'class' : 'form-control channel',
				'readonly':'',
				'onclick' : 'hwtest.memory.hdd.patternTest.set' + menuId + '()'
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
	createSelectList : function(menuId, array)
	{
		var obj = $('#' + this.hddId + '_' + menuId +'_select');
		var that = this;

		$.extend(that,{
			$dropdownMenu : $('<ul>',{
				'id' : this.hddId + '_'+ menuId +'_select_list',
				'class' : 'dropdown-menu',
				'role' : 'menu'
			})
		});

		for(var i = 0 ; i < array.length; i++)
		{
			this.createSelectItem(menuId, array[i] ,that.$dropdownMenu);
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
				'onclick' : 'hwtest.memory.hdd.patternTest.selectListItem("' + menuId + '","' + name + '")'
			})
		});
		obj.append(that.$li);
		that.$li.append(that.$a);

		that.$a.text(name);
	},
	selectListFocus : function (menuId)
	{
		var selectListId = this.hddId +"_"+ menuId +"_select_list";
		var selectListParent = this.hddId +"_"+ menuId +"_select_input";
		
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
	selectListItem : function(menuId, value)
	{
		var selectListId = this.hddId +"_"+ menuId +"_select_list";
		var selectListParent = this.hddId +"_"+ menuId +"_select_input";
		
		var valueTag = $("#" + selectListParent);
		var valueList = $("#" + selectListId);

		valueTag.attr("value",value);
		valueList.css("display","none");
		
		this.deleteSelectList(this.hddId,menuId);

		hwtest.activeEntity = hwtest.utils.stack.pop();
		hwtest.utils.initFocus(hwtest.activeEntity.id,hwtest.activeEntity.itemTags);
		
		//hwtest.channel.tunerInfo.setAttr(this.curTuner, menuId, value);

		// send list attribute value
		var send = hwtest.websocket.parser.makeDialogMsg(menuId,value);
		hwtest.websocket.sendMessage(send);
	},
	deleteSelectList : function(menuId)
	{
		var selectListId = this.hddId +"_"+ menuId +"_select_list";
		$("#" + selectListId).remove();
	},
	createDialogControls : function(obj)
	{
		var that = this;

		$.extend(that,{
			$td0 : $('<td>',{
			}),
			$td1 : $('<td>',{

			}),
			$startButton : $('<input>',{
				'id' : 'Start',
				'type' : 'button',
				'class' : 'btn btn-lg btn-primary hdd',
				'readonly':'',
				'value':'START',
				'onclick' : 'hwtest.memory.hdd.patternTest.start()'
			}),
			$stopButton : $('<input>',{
				'id' : 'Stop',
				'type' : 'button',
				'class' : 'btn btn-lg btn-primary hdd',
				'readonly':'',
				'value':'STOP',
				'onclick' : 'hwtest.memory.hdd.patternTest.stop()'
			}),
			$cancleButton : $('<input>',{
				'id' : 'cancle',
				'type' : 'button',
				'class' : 'btn btn-lg btn-primary hdd',
				'readonly':'',
				'value':'CANCEL',
				'onclick' : 'hwtest.memory.hdd.patternTest.cancle()'
			})
		});

		obj.append(that.$td0);
		obj.append(that.$td1);
		that.$td1.append(that.$startButton);
		that.$td1.append(that.$stopButton);
		that.$td1.append(that.$cancleButton);
	},
	start : function()
	{
		var msg = "Memory HDD "+ this.hddId +" PatternTest Start";
		hwtest.websocket.sendMessage(msg);
	},
	stop : function()
	{
		var msg = "Memory HDD " + this.hddId + " PatternTest Stop";
		hwtest.websocket.sendMessage(msg);
	},
	cancle : function()
	{
		if(hwtest.utils.stack.isEmpty() === false)
        {
            hwtest.memory.ddr.deleteDialog();
        
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
	setPattern : function()
	{
		var menuId = "Pattern";
		
		this.createSelectList(menuId , this.pattern);
		this.selectListFocus(menuId);
	},
	setSpeed : function()
	{
		var menuId = "Speed";
		
		this.createSelectList(menuId , this.speed);
		this.selectListFocus(menuId);
	},
	setSsc : function()
	{
		var menuId = "Ssc";
		
		this.createSelectList(menuId , this.ssc);
		this.selectListFocus(menuId);
	}
};

hwtest.memory.ddr={
	menuId : "StressTest",
	testSize : "1",
	createDialog : function()
	{
		var that = this;

		$.extend(that,{
			$hwtest_control : $('#hwtest_control'),
			$dialog : $('<dialog>',{
				'id' : this.menuId,
				'class' : "hwtest-input-dialog ddr"
			}),
			$dialogTitle : $('<h1>',{
			}),
			$table : $('<table>',{
			}),
			$input : $('<tr>',{
			}),
			$controls : $('<tr>',{
			})
		});

		that.$hwtest_control.append(that.$hwtest_control);
		that.$hwtest_control.append(that.$dialog);
		that.$dialog.append(that.$dialogTitle);
		that.$dialog.append(that.$table);
		that.$table.append(that.$input);
		that.$table.append(that.$controls);

		this.createDialogInput(that.$input);
		this.createDialogControls(that.$controls);

		that.$dialogTitle.text(this.menuId);
	},
	createDialogInput : function(obj)
	{
		var that = this;

		$.extend(that,{
			$td: $('<td>',{
			}),
			$inputGroupButton : $('<div>',{
				'id' : this.menuId +"_select",
				'class' : 'input-group'
			}),
			$dropdown : $('<input>',{
				'id' : this.menuId + "_select_input",
				'type' : 'text',
				'class' : 'form-control',
				'readonly' : '',
				'value' : this.testSize
			}),
			$dropdownSpan : $('<span>',{
				'class' : 'input-group-addon hwtest-primary-color'
			})
		});

		obj.append(that.$td);
		that.$td.append(that.$inputGroupButton);
		that.$inputGroupButton.append(that.$dropdownSpan);
		that.$inputGroupButton.append(that.$dropdown);
		that.$dropdownSpan.text("Test Size(MB) :");
	},
	createDialogControls : function(obj)
	{
		var that = this;

		$.extend(that,{
			$td : $('<td>',{
			}),
			$startButton : $('<input>',{
				'id' : 'start',
				'type' : 'button',
				'class' : 'btn btn-lg btn-primary ddr',
				'readonly':'',
				'value':'START',
				'onclick' : 'hwtest.memory.ddr.start()'
			}),
			$stopButton : $('<input>',{
				'id' : 'stop',
				'type' : 'button',
				'class' : 'btn btn-lg btn-primary ddr',
				'readonly':'',
				'value':'STOP',
				'onclick' : 'hwtest.memory.ddr.stop()'
			}),
			$cancleButton : $('<input>',{
				'id' : 'cancle',
				'type' : 'button',
				'class' : 'btn btn-lg btn-primary ddr',
				'readonly':'',
				'value':'CANCEL',
				'onclick' : 'hwtest.memory.ddr.cancle()'
			})
		});

		obj.append(that.$td);
		that.$td.append(that.$startButton);
		that.$td.append(that.$stopButton);
		that.$td.append(that.$cancleButton);
	},
	deleteDialog : function()
	{
		$("#"+this.menuId).remove();
	},
	cancle : function()
	{
		if(hwtest.utils.stack.isEmpty() === false)
        {
            hwtest.memory.ddr.deleteDialog();
        
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
	start : function()
	{
		var msg = "Memory DDR StressTest start ";
		var obj = $("#"+this.menuId+"_select_input");
		this.testSize = obj.val();

		hwtest.log(this.testSize);

		if(isNaN(this.testSize))
		{
			this.testSize = "1";
			obj.val("1");
		}
		else if(this.testSize === "")
		{
			this.testSize = "1";
			obj.val("1");
		}

		hwtest.websocket.sendMessage(msg + this.testSize);
	},
	stop : function()
	{
		var msg = "Memory DDR StressTest stop";
		hwtest.websocket.sendMessage(msg);
	}

};
