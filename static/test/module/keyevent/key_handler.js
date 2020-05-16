hwtest.key={
    init : function() {
       //document.addEventListener("keydown", this.keydownTest, false);        
       document.addEventListener("keydown", this.keydown, false);
    },
    keydownTest : function(e){
        if(!e)
            e = event;

        var keyString = 'Key is ';

        switch(e.keyCode)
        {
            case hwtest_key.KEY_CHANNEL_UP:
                keyString = keyString + 'CHANNEL_UP';
                break;
            case hwtest_key.KEY_CHANNEL_DOWN:
                keyString = keyString + 'CHANNEL_DOWN';
                break;
            case hwtest_key.KEY_OK:
                keyString = keyString + 'OK';
                break;
            case hwtest_key.KEY_HOME:
                keyString = keyString + 'HOME';
                break;
            default:
                keyString = keyString + e.keyCode;
                break;
        }
        
        hwtest.log(keyString);
    },
    keydown : function(e){
        
        if(!e)
        {
            e = event;
        }

        hwtest.information.keycodeWindow.printKeycode(e.keyCode);

        if( hwtest.utils.systemStatus !== "start" )
        {
            return;
        }

        switch(e.keyCode)
        {
            case hwtest_key.KEY_ENTER:
            //case hwtest_key.KEY_OK:		// OK Key is handled by rdkbrowser.
                hwtest.key.clickOk(e);
                break;
            case hwtest_key.KEY_ESCAPE:
            case hwtest_key.KEY_EXIT:
                if(hwtest.activeEntity.type === 'dialog')
                {
                    hwtest.key.exitDialog(e);
                }
                else if(hwtest.activeEntity.type === 'fakelist') 
                {
                    hwtest.key.exitFakeList(e);
                }
                break;
            case hwtest_key.KEY_CHANNEL_UP:
				hwtest.key.volumeUp();
				break;
            case hwtest_key.KEY_CHANNEL_DOWN:
				hwtest.key.volumeDown();
                break;

            case hwtest_key.KEY_MUTE:
                hwtest.key.volumeMute();
                break;

            case hwtest_key.KEY_VOLUME_UP:
                hwtest.key.volumeUp();
                break;
            case hwtest_key.KEY_VOLUME_DOWN:
                hwtest.key.volumeDown();
                break;
            case hwtest_key.KEY_UP:
            case hwtest_key.KEY_RIGHT:
            case hwtest_key.KEY_DOWN:
            case hwtest_key.KEY_LEFT:
                if(hwtest.activeEntity.type === 'dropdown')
                {
                    hwtest.key.moveDropdown(e);
                }
                else if(hwtest.activeEntity.type === 'direction')
                {
                    hwtest.key.moveDirection(e);
                }
                else if(hwtest.activeEntity.type === 'dialog')
                {
                    hwtest.key.moveDialog(e);
                }
                else if(hwtest.activeEntity.type === 'fakelist')
                {
                    hwtest.key.moveFakeList(e);
                }
                break;
            case hwtest_key.KEY_0:
            case hwtest_key.KEY_1:
            case hwtest_key.KEY_2:
            case hwtest_key.KEY_3:
            case hwtest_key.KEY_4:
            case hwtest_key.KEY_5:
            case hwtest_key.KEY_6:
            case hwtest_key.KEY_7:
            case hwtest_key.KEY_8:
            case hwtest_key.KEY_9:
            	if( (hwtest.activeEntity.type === 'dialog') && (hwtest.activeEntity.itemTags === 'input') )
                {
                    hwtest.key.inputNum(e);
                }
                break;
            
            case hwtest_key.KEY_BACK:
                if( (hwtest.activeEntity.type === 'dialog') && (hwtest.activeEntity.itemTags === 'input') )
                {
                    hwtest.key.deleteNum(e);
                }
                break;
            case hwtest_key.KEY_HOME:
                hwtest.navigation.toggleHwtestControl();
                break;
            default:
                break;
        }
    },
    // input Direction key event list
    moveDropdown : function(e)
    {
        if(!e)
        {
            e = event;
        }

        var curMenu = document.getElementById(hwtest.activeEntity.id);
        var tagList = curMenu.getElementsByTagName(hwtest.activeEntity.itemTags);

        switch(e.keyCode)
        {
            case hwtest_key.KEY_DOWN:
                break;
            case hwtest_key.KEY_UP:
                break;
            case hwtest_key.KEY_RIGHT:
                hwtest.activeEntity.index++;
                if(hwtest.activeEntity.index > tagList.length -1)
                {
                    hwtest.activeEntity.index = 0;
                }
                break;
            case hwtest_key.KEY_LEFT:
                hwtest.activeEntity.index--;
                if(hwtest.activeEntity.index < 0)
                {
                    hwtest.activeEntity.index = tagList.length -1;
                }
                break;
            default:
                break;
        }
        tagList[hwtest.activeEntity.index].focus();
    },
    // input Direction key event list
    moveDirection : function(e)
    {
        if(!e)
        {
            e = event;
        }

        var curMenu = document.getElementById(hwtest.activeEntity.id);
        var tagList = curMenu.getElementsByTagName(hwtest.activeEntity.itemTags);

        switch(e.keyCode)
        {
            case hwtest_key.KEY_DOWN:
                hwtest.activeEntity.index++;
                if(hwtest.activeEntity.index > tagList.length -1)
                {
                    hwtest.activeEntity.index = 0;
                }
                hwtest.utils.initFocus(hwtest.activeEntity.id,hwtest.activeEntity.itemTags);
                break;
            case hwtest_key.KEY_UP:
                hwtest.activeEntity.index--;
                if(hwtest.activeEntity.index < 0)
                {
                    hwtest.activeEntity.index = tagList.length -1;
                }
                hwtest.utils.initFocus(hwtest.activeEntity.id,hwtest.activeEntity.itemTags);
                break;
            case hwtest_key.KEY_RIGHT:
                var childName = hwtest.utils.getChildName(tagList[hwtest.activeEntity.index].id);
                var childEntity = hwtest.utils.findChildEntity(childName,hwtest.menuEntity);
                if( (childEntity !== false) && ( childEntity.type ==='direction') )
                {
                    hwtest.navigation.deleteList(hwtest.activeEntity.id);
                    hwtest.utils.stack.push(hwtest.activeEntity);

                    hwtest.activeEntity.id       = childEntity.id;
                    hwtest.activeEntity.title    = childEntity.title;
                    hwtest.activeEntity.parent   = childEntity.parent;
                    hwtest.activeEntity.itemTags = childEntity.itemTags;
                    hwtest.activeEntity.type     = childEntity.type;
                    hwtest.activeEntity.index    = 0;

                    hwtest.navigation.createList(childEntity);
                    hwtest.utils.initFocus(hwtest.activeEntity.id,hwtest.activeEntity.itemTags);
                }
                break;
            case hwtest_key.KEY_LEFT:
                if(hwtest.utils.stack.isEmpty() === false)
                {
                    hwtest.navigation.deleteList(hwtest.activeEntity.id);
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
                break;
            default:
                break;
        }
    },
    // input Direction key event list
    moveDialog : function(e)
    {
         if(!e)
        {
            e = event;
        }

        var curMenu = document.getElementById(hwtest.activeEntity.id);
        var tagList = curMenu.getElementsByTagName(hwtest.activeEntity.itemTags);

        switch(e.keyCode)
        {
            case hwtest_key.KEY_UP:
            case hwtest_key.KEY_LEFT:
                hwtest.activeEntity.index--;
                if(hwtest.activeEntity.index < 0)
                {
                    hwtest.activeEntity.index = tagList.length -1;
                }
                hwtest.utils.initFocus(hwtest.activeEntity.id,hwtest.activeEntity.itemTags);
                break;
            case hwtest_key.KEY_RIGHT:
            case hwtest_key.KEY_DOWN:
                hwtest.activeEntity.index++;
                if(hwtest.activeEntity.index > tagList.length -1)
                {
                    hwtest.activeEntity.index = 0;
                }
                hwtest.utils.initFocus(hwtest.activeEntity.id,hwtest.activeEntity.itemTags);
                break;
            default:
                break;
        }
    },
    moveFakeList : function(e)
    {
        if(!e)
        {
            e = event;
        }

        var curMenu = document.getElementById(hwtest.activeEntity.id);
        var tagList = curMenu.getElementsByTagName(hwtest.activeEntity.itemTags);

        switch(e.keyCode)
        {
            case hwtest_key.KEY_UP:
                hwtest.activeEntity.index--;
                if(hwtest.activeEntity.index < 0)
                {
                    hwtest.activeEntity.index = tagList.length -1;
                }
                hwtest.utils.initFocus(hwtest.activeEntity.id,hwtest.activeEntity.itemTags);
                break;
            case hwtest_key.KEY_DOWN:
                hwtest.activeEntity.index++;
                if(hwtest.activeEntity.index > tagList.length -1)
                {
                    hwtest.activeEntity.index = 0;
                }
                hwtest.utils.initFocus(hwtest.activeEntity.id,hwtest.activeEntity.itemTags);
                break;
            default:
                break;
        }
    },
    // input OK key event list
    clickOk : function(e)
    {
        if(!e)
        {
            e = event;
        }

        var curMenu   = document.getElementById(hwtest.activeEntity.id);
        var tagList   = curMenu.getElementsByTagName(hwtest.activeEntity.itemTags);
        var actionTag = tagList[hwtest.activeEntity.index];

        if( typeof actionTag.onclick == "function" ){
            actionTag.onclick.apply(actionTag);
        }
        else
        {
            hwtest.log("clickOk undefined error!!");
        }
    },
    // input EXIT key event list
    exitDialog : function(e)
    {
        if(!e)
        {
            e = event;
        }

        if(hwtest.utils.stack.isEmpty() === false)
        {
            if( (hwtest.activeEntity.parent === "Functions") && (hwtest.activeEntity.id === "PlayBack") )
            {
                hwtest.functions.playback.cancle();
            }
            else
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
    },
    // input EXIT key event list
    exitFakeList : function(e)
    {
        if(!e)
        {
            e = event;
        }

        if(hwtest.utils.stack.isEmpty() === false)
        {
            hwtest.navigation.deleteList(hwtest.activeEntity.id);
            hwtest.activeEntity = hwtest.utils.stack.pop();

            if(hwtest.utils.stack.isEmpty() === false)
            {
                var curEntity = hwtest.utils.findEntity(hwtest.menuEntity);
            }
            hwtest.utils.initFocus(hwtest.activeEntity.id,hwtest.activeEntity.itemTags);
        }
    },
    // input Number data
    inputNum : function(e)
    {
    	 if(!e)
         {
             e = event;
         }
    	 
    	 var curMenu   = document.getElementById(hwtest.activeEntity.id);
         var tagList   = curMenu.getElementsByTagName(hwtest.activeEntity.itemTags);
         var actionTag = tagList[hwtest.activeEntity.index];
         
         //hubro style.
         var numValue = 0;

         if( (hwtest_key.KEY_0 <= e.keyCode) && (e.keyCode <=hwtest_key.KEY_9) )
         {
             numValue=e.keyCode - hwtest_key.KEY_0;

             var curValue = actionTag.value;
             actionTag.value = curValue + numValue;
         }
    },
    deleteNum : function(e)
    {
         if(!e)
         {
             e = event;
         }
         
         var curMenu   = document.getElementById(hwtest.activeEntity.id);
         var tagList   = curMenu.getElementsByTagName(hwtest.activeEntity.itemTags);
         var actionTag = tagList[hwtest.activeEntity.index];
         
         //hubro style.

         var curValue = actionTag.value;

         if( curValue.length != 0 )
         {
            actionTag.value = curValue.substring(0,curValue.length-1);
         }
    },
    volumeMute : function()
    {
        var video = document.getElementById("hwtest_avtest_video");

        video.muted = !(video.muted);

		var avelement = document.getElementById("hwmute_status");
		if (video.muted)
		{
			avelement.innerHTML = "HW Mute: ON"; 
		}
		else
		{
			avelement.innerHTML = "HW Mute: OFF"; 
		}
        hwtest.log("set audio mute: " + video.muted);
    },
    volumeUp : function()
    {
        var video = document.getElementById("hwtest_avtest_video");

        if( video.volume < 0.95 )
        {
            video.volume = video.volume + 0.05;
        }
        else
        {
            video.volume = 1;
        }

		var volumeInt = (video.volume * 100 + 0.5) | 0;
		var avelement = document.getElementById("volume_status");
		avelement.innerHTML = "Volume: " + volumeInt;

        hwtest.log("Up : " + video.volume);
    },
    volumeDown : function()
    {
        var video = document.getElementById("hwtest_avtest_video");

		var fade_out = function() {
			document.getElementById('mydiv').innerHTML = '';
		}

        if( video.volume > 0.05 )
        {
            video.volume = video.volume - 0.05;
        }
        else
        {
            video.volume = 0;
        }

		var volumeInt = (video.volume * 100 + 0.5) | 0;
		var avelement = document.getElementById("volume_status");
		avelement.innerHTML = "Volume: " + volumeInt;

        hwtest.log("Down : " + video.volume);
    }
};
