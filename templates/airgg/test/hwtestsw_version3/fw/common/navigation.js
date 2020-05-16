hwtest.navigation = {
	initMenu : function(obj)
	{
		// Make featureList pattern : PARENTNAME_CHILDNAME
		for(var i=0; i<hwtest.featureList.length; i++)
		{
			var temp = hwtest.featureList[i].split('_');

			if( 2 < temp.length )
			{
				hwtest.featureList[i] = temp[temp.length -2] + '_' + temp[temp.length -1];
			}
		}

		// Matching featureList & menuEntity
		for(var i=0; i<hwtest.featureList.length; i++)
		{
			this.findFeature(hwtest.featureList[i],obj);
		}
	},
	findFeature : function(feature,menu)
	{
		if( undefined === menu.items)
		{
			return;
		}

		for(var j=0; j<menu.items.length; j++)
		{
			var key = menu.items[j].parent + "_" + menu.items[j].id;

			if( feature === ( key.toUpperCase()) )
			{
				menu.items[j].enable = true;
				return;
			}
			else
			{
				this.findFeature(feature,menu.items[j]);
			}
		}
	},
	createMenuNav : function(obj)
	{
		var that = this;

		$.extend(that,{
			$hwtest_control : $('#hwtest_control'),
			$main_nav : $('<nav>',{
				'class' : 'navbar navbar-default navbar-fixed-top',
				'role' : 'navigation'
			}),
			$header_div : $('<div>',{
				'class' : 'navbar-header'
			}),
			$header_p : $('<p>',{
				'class' : 'navbar-brand hwtest-title',
			}),
			$body_div : $('<div>',{
				'class' : 'collapse navbar-collapse navbar-ex5-collapse'
			}),
			$body_ul : $('<ul>',{
				'id' : obj.id,
				'class' : 'nav navbar-nav'
			}),
			$footer_ul : $('<ul>',{
				'class' : 'nav navbar-nav navbar-right'
			}),
			$footer_p : $('<p>',{
				'class' : 'navbar-brand hwtest-logo'
			})
		});

		that.$hwtest_control.append(that.$hwtest_control);
		that.$hwtest_control.append(that.$main_nav);
		that.$main_nav.append(that.$header_div);
		that.$main_nav.append(that.$body_div);
		that.$header_div.append(that.$header_p);
		that.$body_div.append(that.$body_ul);
		that.$body_div.append(that.$footer_ul);
		that.$footer_ul.append(that.$footer_p);

		for(var i=0 ; i<obj.items.length; i++)
		{
			if ( true === obj.items[i].enable )
			{
				this.createMenuNavItems(that.$body_ul, obj.items[i], obj.id);
			}
		}

		that.$header_p.text("ICICLE");
		that.$footer_p.text("[" + hwtest.productInfo.model + "] HW TEST SW ver " + hwtest.productInfo.rev);
	},
	createMenuNavItems : function(obj,item,parent)
	{
		var that = this;
		var id = parent+'_'+item.id;
		var title = item.title;

		$.extend(that,{
			$li : $('<li>',{
				'id' : id +"_li"
			}),
			$a : $('<a>',{
				'id' : id,
				'href' : "javascript:;",
				'onclick' : 'hwtest.main.dropdownMenu("'+ id +'")'
			})
		})

		obj.append(that.$li);
		that.$li.append(that.$a);

		$('#'+id).focus(function(){
			$('#'+id+"_li").removeClass('active');
			$(this).css('font-weight','bold');
		});

		$('#'+id).blur(function(){
			$(this).css('font-weight','normal');
		});

        that.$a.text(title);
	},
	createList : function(obj)
	{
		var that = this;
		var listPosition;

		if(hwtest.utils.stack.length() > 1)
		{
			listPosition = 'hwtest-list-dialog-' +  hwtest.utils.stack.at(1).id;
		}
		else
		{
			listPosition = 'hwtest-list-dialog-' +  obj.id;
		}

		$.extend(that,{
			$hwtest_control : $('#hwtest_control'),
			$dialog : $('<dialog>',{
				'id' : obj.id,
				'class' : 'hwtest-list-dialog ' + listPosition
			}),
			$div : $('<div>',{
				'class' : 'list-group'
			})
		});

		that.$hwtest_control.append(that.$hwtest_control);
		that.$hwtest_control.append(that.$dialog);
		that.$dialog.append(that.$div);

		if(hwtest.utils.stack.length() > 1 )
		{
			for(var i=2; i<hwtest.utils.stack.length(); i++)
			{
				hwtest.navigation.createListPathItems(that.$div,hwtest.utils.stack.at(i));
			}

			hwtest.navigation.createListPathItems(that.$div,hwtest.activeEntity);
		}

		for(var i=0; i<obj.items.length;i++)
		{
			if( false === obj.items[i].enable)
			{
				continue;
			}

			if(obj.items[i].type==="direction")
			{
				hwtest.navigation.createListDirectionItems(that.$div, obj.items[i], obj.id);
			}
			else if(obj.items[i].type==="action")
			{
				hwtest.navigation.createListActionItems(that.$div, obj.items[i], obj.id);
			}
			else if(obj.items[i].type==="dialog")
			{
				hwtest.navigation.createListDialogItems(that.$div, obj.items[i], obj.id);
			}
			else if(obj.items[i].type==="info")
			{
				hwtest.navigation.createListInfoItems(that.$div, obj.items[i], obj.id);
			}
		}
	},
	deleteList : function(id)
	{
		$("#"+id).remove();
	},
	deleteDialog : function(id)
	{
		$("#"+id).remove();
	},
	createListPathItems : function(obj,item)
	{
		var that = this;

		$.extend(that,{
			$p : $('<p>',{
				'class' : 'list-group-item active',
			})
		})

		obj.append(that.$p);

		that.$p.text(item.title);
	},
	createListDirectionItems : function(obj,item,parent)
	{
		var that = this;
		var id = parent+'_'+item.id;
		var title = item.title;

		$.extend(that,{
			$a : $('<a>',{
				'id' : id,
				'href' : "javascript:;",
				'class' : 'list-group-item',
			}),
			$span : $('<span>',{
				'class' : 'glyphicon glyphicon-chevron-right pull-right'
			})
		})

		obj.append(that.$a);

		$('#'+id).focus(function(){
            $(this).css('font-weight','bold');
       });

        $('#'+id).blur(function(){
            $(this).css('font-weight','normal');
       });

		that.$a.text(title);
		that.$a.append(that.$span);
	},
	createListActionItems : function(obj,item,parent)
	{
		var that = this;
		var id = parent+'_'+item.id;
		var title = item.title;

		$.extend(that,{
			$a : $('<a>',{
				'id' : id,
				'href' : "javascript:;",
				'class' : 'list-group-item',
				'onclick' : 'hwtest.main.actionMenu("'+ id +'")'
			}),
		})
		obj.append(that.$a);

		$('#'+id).focus(function(){
            $(this).css('font-weight','bold');
       });

        $('#'+id).blur(function(){
            $(this).css('font-weight','normal');
       });

		that.$a.text(item.title);
	},
	createListDialogItems : function(obj,item,parent)
	{
		var that = this;
		var id = parent+'_'+item.id;
		var title = item.title

		$.extend(that,{
			$a : $('<a>',{
				'id' : id,
				'href' : "javascript:;",
				'class' : 'list-group-item',
				'onclick' : 'hwtest.main.dialogMenu("'+ id +'")'
			}),
		})

		obj.append(that.$a);

		$('#'+id).focus(function(){
            $(this).css('font-weight','bold');
       });

        $('#'+id).blur(function(){
            $(this).css('font-weight','normal');
       });

		that.$a.text(title);
	},
	createListInfoItems : function(obj,item,parent)
	{
		var that = this;
		var id = parent+'_'+item.id;
		var title = item.title;

		$.extend(that,{
			$a : $('<a>',{
				'id' : id,
				'href' : "javascript:;",
				'class' : 'list-group-item',
				'onclick' : 'hwtest.main.infoMenu("'+ id +'")'
			}),
		})

		obj.append(that.$a);

		$('#'+id).focus(function(){
            $(this).css('font-weight','bold');
       });

        $('#'+id).blur(function(){
            $(this).css('font-weight','normal');
       });

        that.$a.text(title);
	},
	toggleDialogDisplay : function(id)
	{
		var curDialog = $("#"+id);

		if(curDialog.css("display") === "none")
		{
			curDialog.css("display","block");
		}
		else
		{
			curDialog.css("display","none");
		}
	},
	toggleHwtestControl : function()
	{
		var controlMenu = $('#hwtest_control');
		var volumeStatus = $('#volume_status');
		var hwmuteStatus = $('#hwmute_status');

		if(controlMenu.css("display") === "none")
		{
			controlMenu.css("display","block");
			volumeStatus.css("display", "block");
			hwmuteStatus.css("display", "block");
		}
		else
		{
			controlMenu.css("display","none");
			volumeStatus.css("display", "none");
			hwmuteStatus.css("display", "none");
		}
	}
};
