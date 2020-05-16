hwtest.av={
}

hwtest.av.resolution={
	fakeActive : {'id':'','parent':'','itemTags':'a','type':'fakelist'},
	menuId : "Resolution",
	resolution : ["480",
				  "576",
				  "720",
				  "1080"],
	scanning : ["i","p"],
	hz : ["","50","59","60","23","24","25","29","30"],
	createDialog : function(id)
	{
		var that = this;

		$.extend(that,{
			$hwtest_control : $('#hwtest_control'),
			$dialog : $('<dialog>',{
				'id' : this.menuId,
				'class' : "hwtest-input-dialog av"
			}),
			$dialogTitle : $('<h1>',{
			}),
			$table : $('<table>',{
			}),
			$resolution : $('<tr>',{
				'id' : 'resolution'
			}),
			$scanning : $('<tr>',{
				'id' : 'scanning'
			}),
			$hz : $('<tr>',{
				'id' : 'hz'
			}),
			$controls : $('<tr>',{
			})
		});

		that.$hwtest_control.append(that.$hwtest_control);
		that.$hwtest_control.append(that.$dialog);
		that.$dialog.append(that.$dialogTitle);
		that.$dialog.append(that.$table);
		that.$table.append(that.$resolution);
		that.$table.append(that.$scanning);
		that.$table.append(that.$hz);
		that.$table.append(that.$controls);

		this.createSelectMenu("Resolution",that.$resolution);
		this.createSelectMenu("Scanning",that.$scanning);
		this.createSelectMenu("Hz",that.$hz);
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
				'id' : menuId +"_select",
				'class' : 'input-group'
			}),
			$dropdown : $('<input>',{
				'id' : menuId +"_select_input",
				'type' : 'button',
				'class' : 'form-control channel',
				'readonly':'',
				'onclick' : 'hwtest.av.resolution.set' + menuId + '()'
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
				'onclick' : 'hwtest.av.resolution.selectListItem("' + menuId + '","' + name + '")'
			})
		});
		obj.append(that.$li);
		that.$li.append(that.$a);

		that.$a.text(name);
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
	selectListItem : function(menuId, value)
	{
		var selectListId = menuId +"_select_list";
		var selectListParent = menuId +"_select_input";
		
		var valueTag = $("#" + selectListParent);
		var valueList = $("#" + selectListId);

		valueTag.attr("value",value);
		valueList.css("display","none");
		
		this.deleteSelectList(menuId);

		hwtest.activeEntity = hwtest.utils.stack.pop();
		hwtest.utils.initFocus(hwtest.activeEntity.id,hwtest.activeEntity.itemTags);
	},
	deleteSelectList : function(menuId)
	{
		var selectListId = menuId +"_select_list";
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
			$setButton : $('<input>',{
				'id' : 'Start',
				'type' : 'button',
				'class' : 'btn btn-lg btn-primary av',
				'readonly':'',
				'value':'SET',
				'onclick' : 'hwtest.av.resolution.set()'
			}),
			$cancleButton : $('<input>',{
				'id' : 'cancle',
				'type' : 'button',
				'class' : 'btn btn-lg btn-primary av',
				'readonly':'',
				'value':'CANCEL',
				'onclick' : 'hwtest.av.resolution.cancle()'
			})
		});

		obj.append(that.$td0);
		obj.append(that.$td1);
		that.$td1.append(that.$setButton);
		that.$td1.append(that.$cancleButton);
	},
	set : function()
	{
		var lResolution = this.getParam("Resolution");
		var lScanning = this.getParam("Scanning");
		var lHz = this.getParam("Hz");

		var msg = "AV Resolution "+ lResolution + lScanning + lHz;
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
	setResolution : function()
	{
		var menuId = "Resolution";
		
		this.createSelectList(menuId , this.resolution);
		this.selectListFocus(menuId);
	},
	setScanning : function()
	{
		var menuId = "Scanning";
		
		this.createSelectList(menuId , this.scanning);
		this.selectListFocus(menuId);
	},
	setHz : function()
	{
		var menuId = "Hz";
		
		this.createSelectList(menuId , this.hz);
		this.selectListFocus(menuId);
	},
	getParam : function(menuId)
	{
		return $("#" + menuId + "_select_input").val();
	}
};