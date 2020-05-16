hwtest.utils = {
	systemStatus : "start",
	loadJsonEntity : function(jsonFile)
	{
		$.ajax({
			url : jsonFile,
			success : function(result){
				hwtest.log(result);
			}
		});
	},
	initFocus : function(id,tag)
	{
		var tagList = document.getElementById(id).getElementsByTagName(tag);

		if(tagList)
		{
			tagList[hwtest.activeEntity.index].focus();
		}
	},
	findEntity : function (obj)
	{
		if((obj.id===hwtest.activeEntity.id)&&(obj.parent===hwtest.activeEntity.parent))
		{
			return obj;
		}

		if( (obj.type==="dropdown") || (obj.type==="direction") )
		{
			for(var i=0; i<obj.items.length; i++)
			{
				var that = hwtest.utils.findEntity(obj.items[i]);

				if( that !== false)
				{
					return that;
				}
			}
		}
		else
		{
			return false;
		}

		return false;
	},
	getChildName : function(id)
	{
		var split_temp  = id.split("_");
		var childName = split_temp[1];

		return childName;
	},
	getParentName : function(id)
	{
		var split_temp  = id.split("_");
		var parent = split_temp[0];

		return parent;
	},
	findChildEntity : function(childId,obj)
	{
		if((obj.id===childId)&&(obj.parent===hwtest.activeEntity.id))
		{
			return obj;
		}
		
		if( (obj.type==="dropdown") || (obj.type==="direction") )
		{
			for(var i=0; i<obj.items.length; i++)
			{
				var that = hwtest.utils.findChildEntity(childId,obj.items[i]);

				if( that !== false)
				{
					return that;
				}
			}
		}

		return false;
	},
	findParentEntity : function(parentId,obj)
	{
		if((obj.type==="dropdown") ||(obj.type==="direction"))
		{
			if((obj.id===hwtest.activeEntity.parent))
			{
				return obj;
			}

			for(var i=0; i<obj.items.length; i++)
			{
				var that = hwtest.utils.findParentEntity(parentId,obj.items[i]);

				if( that !== false)
				{
					return that;
				}
			}
		}

		return false;
	},
	swpause : function()
	{
		this.systemStatus = "pause";
	},
	swstart : function()
	{
		this.systemStatus = "start";
	}
};

hwtest.utils.stack={
	push : function(obj)
	{
		var pushValue = new Object();

        pushValue.id       = obj.id;
		pushValue.title    = obj.title;
        pushValue.parent   = obj.parent;
        pushValue.itemTags = obj.itemTags;
        pushValue.type     = obj.type;
        pushValue.index    = obj.index;

		hwtest.menuEntityStack.push(pushValue);
	},
	pop : function()
	{
		return hwtest.menuEntityStack.pop();
	},
	isEmpty : function()
	{
		if(hwtest.menuEntityStack.length === 0)
		{
			return true;
		}
		return false;
	},
	length : function()
	{
		return hwtest.menuEntityStack.length;
	},
	at : function(i)
	{
		return hwtest.menuEntityStack[i];
	}
}
