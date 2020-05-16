// file name : fw/common/namespace.js
/** ************************************
 *
 * hwtest namespace
 *
 * *************************************/

var hwtest = {

	// this function use for development step debug.
	log : function(str){
	//	$("#hwtest_state").append("<p>"+ str +"</p>");
	//	$('#debug_demo').text("<p>"+ str + "</p>");
	}
};

/*ui trace stack*/
hwtest.menuEntityStack = [];

/*ui trace queue*/
hwtest.messageQueue = [];

/*ui active names*/
hwtest.activeEntity = {"title":"Main",	"id":"MAIN","parent":"HWTEST","itemTags":"a","type":"dropdown","index":0};

/*ui components names*/
hwtest.menuEntity = [];