hwtest.channel={
	fakeActive : {"id": "","parent":"","itemTags":"a","type":"fakelist"},
	curTuner : "Tuner0",
	createDialog : function(tuner, signal)
	{
		var that = this;
		this.curTuner = tuner;
		
		$.extend(that,{
			$hwtest_control : $('#hwtest_control'),
			$dialog : $('<dialog>',{
				'id' : signal,
				'class' : "hwtest-input-dialog channel"
			}),
			$dialogTitle : $('<h1>',{
			}),
			$masterTable : $('<table>',{
				'id' : signal + '_table'
			}),
			$masterTr0 : $('<tr>',{
			}),
			$controls : $('<tr>',{
			}),
			$masterTd0 : $('<td>',{
				'valign' : 'top'
			}),
			$masterTd1 : $('<td>',{
				'valign' : 'top'
			}),
			$table0 : $('<table>',{
				'id' : signal + '_table0'
			}),
			$table1 : $('<table>',{
				'id' : signal + '_table1'
			}),
			$dvbMode : $('<tr>',{
				'id' : signal + '_dvbMode'
			}),
			$rfInput : $('<tr>',{
				'id' : signal + '_rfInput'
			}),
			$modulation : $('<tr>',{
				'id' : signal + '_modulation'
			}),
			$frequency : $('<tr>',{
				'id' : signal + '_frequency'
			}),
			$bandWidth : $('<tr>',{
				'id' : signal + '_bandWidth'
			}),
			$symbolRate : $('<tr>',{
				'id' : signal + '_symbolRate'
			}),
			$fec : $('<tr>',{
				'id' : signal + '_fec'
			}),
			$polarization : $('<tr>',{
				'id' : signal + '_polarization'
			}),
			$diseqc : $('<tr>',{
				'id' : signal + '_diseqc'
			}),
			$tone : $('<tr>',{
				'id' : signal + '_tone'
			}),
			$pilot : $('<tr>',{
				'id' : signal + '_pilot'
			}),
			$videoPid : $('<tr>',{
				'id' : signal + '_videoPid'
			}),
			$audioPid : $('<tr>',{
				'id' : signal + '_audioPid'
			}),
			$pcrPid : $('<tr>',{
				'id' : signal + '_pcrPid'
			}),
			$videoCodec : $('<tr>',{
				'id' : signal + '_videoCodec'
			}),
			$audioCodec : $('<tr>',{
				'id' : signal + '_audioCodec'
			}),
			$programNumber : $('<tr>',{
				'id' : signal + '_programNumber'
			})
		})
		
		if(signal === "Cable")
		{
			that.$hwtest_control.append(that.$hwtest_control);
			that.$hwtest_control.append(that.$dialog);
			that.$dialog.append(that.$dialogTitle);
			that.$dialog.append(that.$masterTable);
			that.$masterTable.append(that.$masterTr0);
			that.$masterTable.append(that.$controls);
			that.$masterTr0.append(that.$masterTd0);
			that.$masterTr0.append(that.$masterTd1);
			that.$masterTd0.append(that.$table0);
			that.$masterTd1.append(that.$table1);
			that.$table0.append(that.$frequency);
			that.$table0.append(that.$modulation);
			that.$table0.append(that.$symbolRate);
			//that.$table0.append(that.$videoPid);
			//that.$table0.append(that.$audioPid);
			//that.$table0.append(that.$pcrPid);
			//that.$table0.append(that.$videoCodec);
			//that.$table0.append(that.$audioCodec);
			that.$table0.append(that.$programNumber);
			
			this.createInputMenu(signal,"Frequency",that.$frequency);
			this.createSelectMenu(signal,"Modulation",that.$modulation);
			this.createInputMenu(signal,"SymbolRate",that.$symbolRate);
			//this.createInputMenu(signal,"VideoPid",that.$videoPid);
			//this.createInputMenu(signal,"AudioPid",that.$audioPid);
			//this.createInputMenu(signal,"PcrPid",that.$pcrPid);
			//this.createSelectMenu(signal,"VideoCodec",that.$videoCodec);
			//this.createSelectMenu(signal,"AudioCodec",that.$audioCodec);
			this.createInputMenu(signal,"ProgramNumber",that.$programNumber);
			this.createDialogControls(that.$controls);
		}
		else if(signal === "Satellite")
		{
			that.$hwtest_control.append(that.$hwtest_control);
			that.$hwtest_control.append(that.$dialog);
			that.$dialog.append(that.$dialogTitle);
			that.$dialog.append(that.$masterTable);
			that.$masterTable.append(that.$masterTr0);
			that.$masterTable.append(that.$controls);
			that.$masterTr0.append(that.$masterTd0);
			that.$masterTr0.append(that.$masterTd1);
			that.$masterTd0.append(that.$table0);
			that.$masterTd1.append(that.$table1);
			that.$table0.append(that.$dvbMode);
			that.$table0.append(that.$modulation);
			that.$table0.append(that.$frequency);
			that.$table0.append(that.$symbolRate);
			that.$table0.append(that.$programNumber);
			that.$table1.append(that.$fec);
			that.$table1.append(that.$polarization);
			//that.$table0.append(that.$videoPid);
			//that.$table0.append(that.$audioPid);
			//that.$table0.append(that.$pcrPid);
			//that.$table0.append(that.$videoCodec);
			//that.$table0.append(that.$audioCodec);
			//that.$table1.append(that.$rfInput);
			//that.$table1.append(that.$fec);
			//that.$table1.append(that.$polarization);
			that.$table1.append(that.$diseqc);
			that.$table1.append(that.$tone);
			//that.$table1.append(that.$pilot);
			
			
			this.createSelectMenu(signal,"DvbMode",that.$dvbMode);
			this.createSelectMenu(signal,"Modulation",that.$modulation);
//			that.createSelectMenu(signal,"RFInput",that.$rfInput);
			this.createInputMenu(signal,"Frequency",that.$frequency);
			this.createInputMenu(signal,"SymbolRate",that.$symbolRate);
			that.createSelectMenu(signal,"FEC",that.$fec);
			that.createSelectMenu(signal,"Polarization",that.$polarization);
			that.createSelectMenu(signal,"Diseqc",that.$diseqc);
			that.createSelectMenu(signal,"Tone",that.$tone);
//			that.createSelectMenu(signal,"Pilot",that.$pilot);
//			this.createInputMenu(signal,"VideoPid",that.$videoPid);
			this.createInputMenu(signal,"ProgramNumber",that.$programNumber);
//			this.createInputMenu(signal,"AudioPid",that.$audioPid);
//			this.createInputMenu(signal,"PcrPid",that.$pcrPid);
//			this.createSelectMenu(signal,"VideoCodec",that.$videoCodec);
//			this.createSelectMenu(signal,"AudioCodec",that.$audioCodec);
			this.createDialogControls(that.$controls);
		}
		else if(signal === "Terrestrial")
		{
			that.$hwtest_control.append(that.$hwtest_control);
			that.$hwtest_control.append(that.$dialog);
			that.$dialog.append(that.$dialogTitle);
			that.$dialog.append(that.$masterTable);
			that.$masterTable.append(that.$masterTr0);
			that.$masterTable.append(that.$controls);
			that.$masterTr0.append(that.$masterTd0);
			that.$masterTr0.append(that.$masterTd1);
			that.$masterTd0.append(that.$table0);
			that.$masterTd1.append(that.$table1);
			that.$table0.append(that.$dvbMode);
			that.$table0.append(that.$modulation);
			that.$table0.append(that.$frequency);
			that.$table0.append(that.$bandWidth);
			that.$table0.append(that.$videoPid);
			that.$table0.append(that.$audioPid);
			that.$table0.append(that.$pcrPid);
			that.$table0.append(that.$videoCodec);
			that.$table0.append(that.$audioCodec);
			
			this.createSelectMenu(signal,"DvbMode",that.$dvbMode);
			this.createSelectMenu(signal,"Modulation",that.$modulation);
			this.createInputMenu(signal,"Frequency",that.$frequency);
			this.createSelectMenu(signal,"BandWidth",that.$bandWidth);
			this.createInputMenu(signal,"VideoPid",that.$videoPid);
			this.createInputMenu(signal,"AudioPid",that.$audioPid);
			this.createInputMenu(signal,"PcrPid",that.$pcrPid);
			this.createSelectMenu(signal,"VideoCodec",that.$videoCodec);
			this.createSelectMenu(signal,"AudioCodec",that.$audioCodec);
			this.createDialogControls(that.$controls);
		}
		else
		{
			return;
		}

		that.$dialogTitle.text(tuner + " " + signal );
	},
	getClassName : function(signal)
	{
		var className = "unknown";
		
		if(signal === 'Cable')
		{
			className = 'cable';
		}
		else if(signal === 'Satellite')
		{
			className = 'satellite';
		}
		else if(signal === 'Terrestrial')
		{
			className = 'terrestrial';
		}
		
		return className;
	},
	createSelectMenu : function(signal,menuId,obj)
	{		
		var that = this;
		var className = this.getClassName(signal);

		$.extend(that,{
			$td0 : $('<td>',{
			}),
			$title : $('<p>',{
				'class' : 'channel-select-title'
			}),
			$td1 : $('<td>',{
			}),
			$inputGroupButton : $('<div>',{
				'id' : signal + "_"+ menuId +"_select",
				'class' : 'input-group'
			}),
			$dropdown : $('<input>',{
				'id' : signal + "_"+ menuId +"_select_input",
				'type' : 'button',
				'class' : 'form-control channel',
				'value' : hwtest.channel.tunerInfo.getAttr(this.curTuner,menuId),
				'readonly':'',
				'onclick' : 'hwtest.channel.'+ className +'.view' + menuId + '()'
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
	createSelectList : function(signal, menuId, array )
	{
		var obj = $('#' + signal + '_' + menuId +'_select');
		var that = this;

		$.extend(that,{
			$dropdownMenu : $('<ul>',{
				'id' : signal + '_'+ menuId +'_select_list',
				'class' : 'dropdown-menu',
				'role' : 'menu'
			})
		});

		for(var i = 0 ; i < array.length; i++)
		{
			this.createSelectItem( signal, menuId, array[i] ,that.$dropdownMenu);
		}

		obj.append(that.$dropdownMenu);
	},
	createSelectItem : function (signal, menuId, name, obj)
	{
		var that = this;

		$.extend(that,{
			$li : $('<li>',{
			}),
			$a : $('<a>',{
				'href' : "javascript:;",
				'onclick' : 'hwtest.channel.selectListItem("' + signal + '","' + menuId + '","' + name + '")'
			})
		});
		obj.append(that.$li);
		that.$li.append(that.$a);

		that.$a.text(name);
	},
	selectListFocus : function (signal, menuId)
	{
		var selectListId = signal +"_"+ menuId +"_select_list";
		var selectListParent = signal +"_"+ menuId +"_select_input";
		
		$("#"+ selectListId).css("display","block");
		
		this.fakeActive.id = selectListId;
		this.fakeActive.parent = selectListParent;
		
		hwtest.utils.stack.push(hwtest.activeEntity);

		hwtest.activeEntity.id       = this.fakeActive.id;
		hwtest.activeEntity.title    = this.fakeActive.title;
		hwtest.activeEntity.parent   = this.fakeActive.parent;
		hwtest.activeEntity.itemTags = this.fakeActive.itemTags;
		hwtest.activeEntity.type     = this.fakeActive.type;
		hwtest.activeEntity.index    = 0;

		hwtest.utils.initFocus(hwtest.activeEntity.id,hwtest.activeEntity.itemTags);
	},
	selectListItem : function(signal, menuId, value)
	{
		var selectListId = signal +"_"+ menuId +"_select_list";
		var selectListParent = signal +"_"+ menuId +"_select_input";
		
		var valueTag = $("#" + selectListParent);
		var valueList = $("#" + selectListId);

		valueTag.attr("value",value);
		valueList.css("display","none");
		
		hwtest.channel.deleteSelectList(this.signal,menuId);

		hwtest.activeEntity = hwtest.utils.stack.pop();
		hwtest.utils.initFocus(hwtest.activeEntity.id,hwtest.activeEntity.itemTags);
		
		hwtest.channel.tunerInfo.setAttr(this.curTuner, menuId, value);

		// send list attribute value
		var send = hwtest.websocket.parser.makeDialogMsg(menuId,value);
		hwtest.websocket.sendMessage(send);
	},
	createInputMenu : function(signal,menuId,obj)
	{
		var that = this;
		var className = this.getClassName(signal);
		var inputTagId = signal + "_" + menuId + "_select_input";

		$.extend(that,{
			$td0 : $('<td>',{
			}),
			$title : $('<p>',{
				'class' : 'channel-select-title'
			}),
			$td1 : $('<td>',{
			}),
			$inputGroupButton : $('<div>',{
				'id' : signal + "_" + menuId +"_select",
				'class' : 'input-group'
			}),
			$dropdown : $('<input>',{
				'id' : inputTagId,
				'type' : 'text',
				'class' : 'form-control channel',
				'readonly':'',
				'value' : hwtest.channel.tunerInfo.getAttr(this.curTuner,menuId)
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
		
		if(menuId === "Frequency")
		{
			that.$title.text(menuId + " (MHz)");
		}
		else if(menuId === "SymbolRate")
		{
			that.$title.text(menuId + " (Kb/s)");
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
			hwtest.websocket.sendMessage(send);
			hwtest.channel.tunerInfo.setAttr(hwtest.channel.curTuner,menuId,value);
		});

	},
	deleteSelectList : function(signal,menuId)
	{
		var selectListId = signal +"_"+ menuId +"_select_list";
		$("#" + selectListId).remove();
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
				'class' : 'btn btn-lg btn-primary channel',
				'readonly':'',
				'value':'START',
				'onclick' : 'hwtest.channel.start()'
			}),
			$cancleButton : $('<input>',{
				'id' : 'cancle',
				'type' : 'button',
				'class' : 'btn btn-lg btn-primary channel',
				'readonly':'',
				'value':'CANCEL',
				'onclick' : 'hwtest.channel.cancle()'
			})
		});

		obj.append(that.$td);
		that.$td.append(that.$startButton);
		that.$td.append(that.$cancleButton);
	},
	start : function()
	{
		var send = hwtest.websocket.parser.makeDialogMsg('start','');
		hwtest.websocket.sendMessage(send);
	},
	cancle : function()
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
};

hwtest.channel.satellite={
	tuner : "Tuner0",
	signal : "Satellite",
	dvbMode : ['DVB-S','DVB-S2'],
	rfInput : ['Source0'],
	fec : ['Auto','1/2','2/3','3/4','5/6','7/8','3/5','4/5','8/9','9/10','5/11','6/7'],
	polarization : ['HOR','VER'],
	diseqc : ['A','B','C','D','TB-A','TB-B','SCD-A','SCD-B'],
	tone : ['Off','A','B'],
	pilot : ['Auto','Off','On'],
	modulation : ['Auto','QPSK','8PSK'],
	videoCodec : ['MPEG','H.264'],
	audioCodec : ['MPEG','MP3','AAC','AACPlus','AC3','AC3Plus','PCM'],
	
	createDialog : function(tuner)
	{
		hwtest.channel.createDialog(tuner, this.signal);
		this.tuner = tuner;
	},
	start : function()
	{
		var video = document.getElementById("hwtest_avtest_video");

		video.src = "http://localhost:8080/mediafac/stream/tuner.qpsk?dvb_locator=dvb://0x9D";
		$("#"+this.menuId + "_src_name").attr("value",video.src);
		
		video.play();
	},
	viewDvbMode : function()
	{
		var menuId = "DvbMode";
		
		hwtest.channel.createSelectList(this.signal, menuId , this.dvbMode);
		hwtest.channel.selectListFocus(this.signal, menuId);
	},
	viewModulation : function()
	{
		var menuId = "Modulation";
		
		hwtest.channel.createSelectList(this.signal, menuId , this.modulation);
		hwtest.channel.selectListFocus(this.signal, menuId);
	},
	viewVideoCodec : function()
	{
		var menuId = "VideoCodec";
		
		hwtest.channel.createSelectList(this.signal, menuId , this.videoCodec);
		hwtest.channel.selectListFocus(this.signal, menuId);
	},
	viewAudioCodec : function()
	{
		var menuId = "AudioCodec";

		hwtest.channel.createSelectList(this.signal, menuId, this.audioCodec);
		hwtest.channel.selectListFocus(this.signal, menuId);
	},
	viewRFInput : function()
	{
		var menuId = "RFInput";
		
		hwtest.channel.createSelectList(this.signal, menuId , this.rfInput);
		hwtest.channel.selectListFocus(this.signal, menuId);
	},
	viewFEC : function()
	{
		var menuId = "FEC";
		
		hwtest.channel.createSelectList(this.signal, menuId , this.fec);
		hwtest.channel.selectListFocus(this.signal, menuId);
	},
	viewPolarization : function()
	{
		var menuId = "Polarization";
		
		hwtest.channel.createSelectList(this.signal, menuId , this.polarization);
		hwtest.channel.selectListFocus(this.signal, menuId);
	},
	viewDiseqc : function()
	{
		var menuId = "Diseqc";
		
		hwtest.channel.createSelectList(this.signal, menuId , this.diseqc);
		hwtest.channel.selectListFocus(this.signal, menuId);
	},
	viewTone : function()
	{
		var menuId = "Tone";
		
		hwtest.channel.createSelectList(this.signal, menuId , this.tone);
		hwtest.channel.selectListFocus(this.signal, menuId);
	},
	viewPilot : function()
	{
		var menuId = "Pilot";
		
		hwtest.channel.createSelectList(this.signal, menuId , this.pilot);
		hwtest.channel.selectListFocus(this.signal, menuId);
	}
};

hwtest.channel.cable={
	tuner : "Tuner0",
	signal : "Cable",
	modulation : ['16QAM','32QAM','64QAM','128QAM','256QAM'],
	videoCodec : ['MPEG','H.264'],
	audioCodec : ['MPEG','MP3','AAC','AACPlus','AC3','AC3Plus','PCM'],

	createDialog : function(tuner)
	{
		hwtest.channel.createDialog(tuner, this.signal);
		this.tuner = tuner;
	},
	start : function()
	{
		var video = document.getElementById("hwtest_avtest_video");

		var val_frequency = hwtest.channel.tunerInfo.getAttr(this.tuner,'Frequency');
		var val_modulation = hwtest.channel.tunerInfo.getAttr(this.tuner,'Modulation');
		var val_pgmno = hwtest.channel.tunerInfo.getAttr(this.tuner,'ProgramNumber');
		var val_symbolRate = hwtest.channel.tunerInfo.getAttr(this.tuner,'SymbolRate');

		val_frequency = val_frequency * 1000000; // make MHz -> Hz
		val_symbolRate = val_symbolRate * 1000;

		if(val_modulation === '16QAM') { val_modulation = 6; }
		else if(val_modulation === '32QAM') { val_modulation = 7; }
		else if(val_modulation === '64QAM') { val_modulation = 8; }
		else if(val_modulation === '128QAM') { val_modulation = 12; }
		else if(val_modulation === '256QAM') { val_modulation = 16; }

		//video.src = "http://localhost:8081/vldms/tuner?ocap_locator=ocap://0x9E";
		video.src = "http://localhost:8081/vldms/tuner?ocap_locator=tune://frequency="+val_frequency+"&modulation="+val_modulation+"&pgmno="+val_pgmno+"&symbol_rate="+val_symbolRate;
		$("#"+this.menuId + "_src_name").attr("value",video.src);
		
		video.play();
	},
	viewModulation : function()
	{
		var menuId = "Modulation";
		
		hwtest.channel.createSelectList(this.signal, menuId , this.modulation);
		hwtest.channel.selectListFocus(this.signal, menuId);
	},
	viewVideoCodec : function()
	{
		var menuId = "VideoCodec";
		
		hwtest.channel.createSelectList(this.signal, menuId , this.videoCodec);
		hwtest.channel.selectListFocus(this.signal, menuId);
	},
	viewAudioCodec : function()
	{
		var menuId = "AudioCodec";

		hwtest.channel.createSelectList(this.signal, menuId, this.audioCodec);
		hwtest.channel.selectListFocus(this.signal, menuId);
	}
};

hwtest.channel.terrestrial={
	tuner : "Tuner0",
	signal : "Terrestrial",
	dvbMode : ['DVB-T','DVB-T2'],
	modulation : ['Auto','QPSK','16QAM','64QAM'],
	bandWidth : ["6Mhz","7Mhz","8Mhz"],
	videoCodec : ['MPEG','H.264'],
	audioCodec : ['MPEG','MP3','AAC','AACPlus','AC3','AC3Plus','PCM'],
	createDialog : function(tuner)
	{
		hwtest.channel.createDialog(tuner, this.signal);
		this.tuner = tuner;
	},
	viewDvbMode : function()
	{
		var menuId = "DvbMode";
		
		hwtest.channel.createSelectList(this.signal, menuId , this.dvbMode);
		hwtest.channel.selectListFocus(this.signal, menuId);
	},
	viewModulation : function()
	{
		var menuId = "Modulation";
		
		hwtest.channel.createSelectList(this.signal, menuId , this.modulation);
		hwtest.channel.selectListFocus(this.signal, menuId);
	},
	viewBandWidth : function()
	{
		var menuId = "BandWidth";
		
		hwtest.channel.createSelectList(this.signal, menuId , this.bandWidth);
		hwtest.channel.selectListFocus(this.signal, menuId);
	},
	viewVideoCodec : function()
	{
		var menuId = "VideoCodec";
		
		hwtest.channel.createSelectList(this.signal, menuId , this.videoCodec);
		hwtest.channel.selectListFocus(this.signal, menuId);
	},
	viewAudioCodec : function()
	{
		var menuId = "AudioCodec";

		hwtest.channel.createSelectList(this.signal, menuId, this.audioCodec);
		hwtest.channel.selectListFocus(this.signal, menuId);
	}
};

hwtest.channel.tunerInfo={
	tuners : [
	          {'id':'Tuner0','signal':'','DvbMode':'','Modulation':'','Frequency':'975','ProgramNumber':'1','BandWidth':'','SymbolRate':'30000','VideoPid':'','AudioPid':'','PcrPid':'','VideoCodec':'','AudioCodec':'','RFInput':'','FEC':'3/4','Polarization':'HOR','Diseqc':'A','Tone':'A','Pilot':''},
	          {'id':'Tuner1','signal':'','DvbMode':'','Modulation':'','Frequency':'975','ProgramNumber':'1','BandWidth':'','SymbolRate':'30000','VideoPid':'','AudioPid':'','PcrPid':'','VideoCodec':'','AudioCodec':'','RFInput':'','FEC':'3/4','Polarization':'HOR','Diseqc':'A','Tone':'A','Pilot':''},
	          {'id':'Tuner2','signal':'','DvbMode':'','Modulation':'','Frequency':'975','ProgramNumber':'1','BandWidth':'','SymbolRate':'30000','VideoPid':'','AudioPid':'','PcrPid':'','VideoCodec':'','AudioCodec':'','RFInput':'','FEC':'3/4','Polarization':'HOR','Diseqc':'A','Tone':'A','Pilot':''},
	          {'id':'Tuner3','signal':'','DvbMode':'','Modulation':'','Frequency':'975','ProgramNumber':'1','BandWidth':'','SymbolRate':'30000','VideoPid':'','AudioPid':'','PcrPid':'','VideoCodec':'','AudioCodec':'','RFInput':'','FEC':'3/4','Polarization':'HOR','Diseqc':'A','Tone':'A','Pilot':''}
	          ],
	length : function()
	{
		return this.tuners.length;
	},
	at : function(i)
	{
		return hwtest.menuEntityStack[i];
	},
	findTuner : function(id)
	{
		for( i = 0; i < this.tuners.length ; i++ )
		{
			if ( this.tuners[i].id === id )
			{
				return i;
			}
		}
		
		return -1;
	},
	getAttr : function(id, menuId)
	{
		var index = this.findTuner(id);
		
		if ( this.tuners[index].hasOwnProperty(menuId) )
		{
			return this.tuners[index][menuId];
		}
		
		return "Unknown";
	},
	setAttr : function(id,menuId,value)
	{
		var index = this.findTuner(id);
		
		if(this.tuners[index].hasOwnProperty(menuId) )
		{
			this.tuners[index][menuId] = value;
		}
	}
}

hwtest.channel.auto={
	channel_list:[],
	index:0,
	enable:false,
	readSidb : function()
	{
		this.channel_list = [];
		var contentType = "application/x-www-form-urlencoded;charset=utf-8";
		var xmlfilePath = "channelDB/sidb.xml";

		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET",xmlfilePath,false);
		xmlhttp.setRequestHeader('Content-type', contentType);
		xmlhttp.send();
		var xmlDoc = xmlhttp.responseXML;	

		var x = xmlDoc.documentElement.childNodes;

		for( i=0 ; i<x.length ; i++ )
		{
			var channel_element = new Array();
			if (x.item(i).nodeType == 1)
			{
				channel_element["program"] = x.item(i).childNodes[0].nodeValue;
				channel_element["sourceid"] = x.item(i).getAttribute('sourceid');
				channel_element["carrier_frequency"] = x.item(i).getAttribute('carrier_frequency');
				channel_element["modulation_mode"] = x.item(i).getAttribute('modulation_mode');
				channel_element["fec_rate"] = x.item(i).getAttribute('fec_rate');
				channel_element["polarization"] = x.item(i).getAttribute('polarization');
				channel_element["antenna"] = x.item(i).getAttribute('antenna');
				channel_element["program_number"] = x.item(i).getAttribute('program_number');
				channel_element["virtual_channel_number"] = x.item(i).getAttribute('virtual_channel_number');
				channel_element["symbolrate"] = x.item(i).getAttribute('symbolrate');
				channel_element["vod_src"] = "http://localhost:8080/mediafac/stream/tuner.qpsk?dvb_locator=dvb://0x" + parseInt(channel_element["sourceid"]).toString(16).toUpperCase();
			}
			else
			{
				continue;
			}

			this.channel_list[this.channel_list.length] = channel_element;
		}
		this.enable = true;
	},
	nextChannel : function()
	{
		this.index++;
		if(channel_list.length <= this.index)
		{
			index = 0;
		}

		return this.channel_list[this.index]["vod_src"];
	},
	prevChannel : function()
	{
		this.index--;
		if(this.index < 0)
		{
			this.index = channel_list.length -1;
		}

		return this.channel_list[this.index]["vod_src"];
	},
	curChannel : function()
	{
		return this.channel_list[this.index]["vod_src"];
	}
}
