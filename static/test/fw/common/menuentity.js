hwtest.menuEntity={"title":"Main",	"id":"MAIN",	"parent":"HWTEST",	"itemTags":"a",	"enable":false,	"type":"dropdown",	"items":[
						{"title":"Channel",	"id":"Channel"     , "parent":"MAIN"     ,"itemTags":"a", "enable":false,"type":"direction", "items":[
							{"title":"Tuner"+' '+"0",	"id":"Tuner0",	"parent":"Channel",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
								{"title":"SAT",					"id":"Satellite",	"parent":"Tuner0",	"itemTags":"input",	"enable":false,	"type":"dialog"},
								{"title":"CAB",					"id":"Cable",		"parent":"Tuner0",	"itemTags":"input",	"enable":false,	"type":"dialog"},
								{"title":"TER",					"id":"Terrestrial",	"parent":"Tuner0",	"itemTags":"input",	"enable":false,	"type":"dialog"},
							]},
							{"title":"Status"+' '+"View",		"id":"Status",		"parent":"Channel",	"itemTags":"a",		"enable":false,	"type":"info"},
							{"title":"Auto",	"id":"Auto",		"parent":"Channel","itemTags":"a","enable":false,"type":"action"}
						]},
						{"title":"Audio/Video",	"id":"AV",	"parent":"MAIN",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
							{"title":"HDMI",	"id":"HDMI",	"parent":"AV",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
								{"title":"Resolution",	"id":"Resolution",	"parent":"HDMI",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
									{"title":"480i",	"id":"480i",	"parent":"Resolution",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"480p",	"id":"480p",	"parent":"Resolution",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"576i",	"id":"576i",	"parent":"Resolution",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"576p",	"id":"576p",	"parent":"Resolution",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"720p",	"id":"720p",	"parent":"Resolution",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"1080i",	"id":"1080i",	"parent":"Resolution",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"1080p",	"id":"1080p",	"parent":"Resolution",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"2160p",	"id":"2160p",	"parent":"Resolution",	"itemTags":"a",	"enable":false,	"type":"action"},
								]},
								{"title":"Framerate",	"id":"Framerate",	"parent":"HDMI",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
									{"title":"24Hz",	"id":"24",	"parent":"Framerate",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"30Hz",	"id":"30",	"parent":"Framerate",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"50Hz",	"id":"50",	"parent":"Framerate",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"60Hz",	"id":"60",	"parent":"Framerate",	"itemTags":"a",	"enable":false,	"type":"action"},
								]},
								{"title":"Aspect"+' '+"Ratio",	"id":"AspectRatio",	"parent":"HDMI",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
									{"title":"4:3",		"id":"4x3",		"parent":"AspectRatio",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"16:9",	"id":"16x9",	"parent":"AspectRatio",	"itemTags":"a",	"enable":false,	"type":"action"}
								]},
								{"title":"EDID",	"id":"EDID",	"parent":"HDMI",	"itemTags":"a",	"enable":false,	"type":"direction", "items":[
									{"title":"Strict",		"id":"Strict",		"parent":"EDID",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"Non-Strict",	"id":"Nonstrict",	"parent":"EDID",	"itemTags":"a",	"enable":false,	"type":"action"}
								]},
								{"title":"HDCP",	"id":"HDCP",	"parent":"HDMI",	"itemTags":"a",	"enable":false,	"type":"direction",	"items" :[
									{"title":"Enable",	"id":"On",	"parent":"HDCP",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"Disable",	"id":"Off",	"parent":"HDCP",	"itemTags":"a",	"enable":false,	"type":"action"}
								]},
								{"title":"Zoom",	"id":"Zoom",	"parent":"HDMI",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
									{"title":"None",			"id":"None",		"parent":"Zoom",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"Full",			"id":"Full",		"parent":"Zoom",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"Pan"+' '+"Scan",	"id":"PanScan",		"parent":"Zoom",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"Platform",		"id":"Platform",	"parent":"Zoom",	"itemTags":"a",	"enable":false,	"type":"action"}
								]},
								{"title":"Color"+' '+"Chroma",	"id":"ColorChroma",	"parent":"HDMI",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
									{"title":"RGB",			"id":"RGB",			"parent":"ColorChroma",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"YCbCr4:2:2",	"id":"YCbCr422",	"parent":"ColorChroma",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"YCbCr4:4:4",	"id":"YCbCr444",	"parent":"ColorChroma",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"YCbCr4:2:0",	"id":"YCbCr420",	"parent":"ColorChroma",	"itemTags":"a",	"enable":false,	"type":"action"},
								]},
								{"title":"Color"+' '+"Depth",	"id":"ColorDepth",	"parent":"HDMI",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
									{"title":"8bit",	"id":"8bit",	"parent":"ColorDepth",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"10bit",	"id":"10bit",	"parent":"ColorDepth",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"12bit",	"id":"12bit",	"parent":"ColorDepth",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"16bit",	"id":"16bit",	"parent":"ColorDepth",	"itemTags":"a",	"enable":false,	"type":"action"},
								]},
								{"title":"CEC",	"id":"CEC",	"parent":"HDMI",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
									{"title":"Ext-Dev"+' '+"On",	"id":"On",	"parent":"CEC",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"Ext-Dev"+' '+"Off",	"id":"Off",	"parent":"CEC",	"itemTags":"a",	"enable":false,	"type":"action"},
								]},
								{"title":"Audio",	"id":"Audio",	"parent":"HDMI",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
									{"title":"PCM",				"id":"PCM",				"parent":"Audio",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"Multi-Channel",	"id":"MULTICHANNEL",	"parent":"Audio",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"Bypass-AAC",		"id":"BYPASSAAC",		"parent":"Audio",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"Bypass-AC3",		"id":"BYPASSAC3",		"parent":"Audio",	"itemTags":"a",	"enable":false,	"type":"action"},
								]},
								{"title":"Status"+' '+"View",	"id":"Status",	"parent":"HDMI",	"itemTags":"a",	"enable":false,	"type":"info"},
							]},
							{"title":"SCART",	"id":"SCART",	"parent":"AV",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
								{"title":"Fast"+' '+"Blanking",	"id":"FastBlanking",	"parent":"SCART",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
									{"title":"RGB(3.5V)",	"id":"RGB",		"parent":"FastBlanking",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"CVBS(0V)",	"id":"CVBS",	"parent":"FastBlanking",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"S-Video",		"id":"SVideo",	"parent":"FastBlanking",	"itemTags":"a",	"enable":false,	"type":"action"}
								]},
								{"title":"Slow"+' '+"Blanking",	"id":"SlowBlanking",	"parent":"SCART",	"itemTags":"a",	"enable":false,	"type":"direction", "items":[
									{"title":"Standby",	"id":"StandBy",	"parent":"SlowBlanking",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"16:9",	"id":"16x9",	"parent":"SlowBlanking",	"itemTags":"a", "enable":false,	"type":"action"},
									{"title":"4:3",		"id":"4x3", 	"parent":"SlowBlanking", 	"itemTags":"a", "enable":false,	"type":"action"}
								]},
								{"title":"Bypass",	"id":"Bypass",	"parent":"SCART",	"itemTags":"a",	"enable":false,	"type":"action"},
							]},
							{"title":"Content"+' '+"Protection",	"id":"ContentProtect",	"parent":"AV",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
								{"title":"CGMS",	"id":"CGMS",	"parent":"ContentProtect",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
									{"title":"Copy"+' '+"Free",	"id":"CopyFree",	"parent":"CGMS",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"Copy"+' '+"One",	"id":"CopyOne",		"parent":"CGMS",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"Copy"+' '+"No",	"id":"CopyNo",		"parent":"CGMS",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"Off",				"id":"Off",			"parent":"CGMS",	"itemTags":"a",	"enable":false,	"type":"action"},
								]},
								{"title":"MacroVision",	"id":"MacroVision",	"parent":"ContentProtect",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
									{"title":"Agc"+' '+"Only",				"id":"AgcOnly",		"parent":"MacroVision",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"Agc"+' '+"2"+' '+"Lines",		"id":"Agc2Lines",	"parent":"MacroVision",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"Agc"+' '+"4"+' '+"Lines",		"id":"Agc4Lines",	"parent":"MacroVision",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"STD"+' '+"PAL",				"id":"STDPAL",		"parent":"MacroVision",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"STD"+' '+"NTSC",				"id":"STDNTSC",		"parent":"MacroVision",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"Agc"+' '+"Only"+' '+"RGB",	"id":"AgcOnlyRgb",	"parent":"MacroVision",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"Off",							"id":"Off",			"parent":"MacroVision",	"itemTags":"a",	"enable":false,	"type":"action"},
								]},
							]},
							{"title":"HW"+' '+"Mute",	"id":"HWMute",			"parent":"AV",	"itemTags":"a",	"enable":false,	"type":"action"},
						]},
						{"title":"Memory",	"id":"Memory",	"parent":"MAIN",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
							{"title":"DDR",	"id":"DDR",	"parent":"Memory",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
								{"title":"Stress"+' '+"Test",	"id":"StressTest",	"parent":"DDR",	"itemTags":"input",	"enable":false,	"type":"dialog"}
							]},
							{"title":"Serial"+' '+"Flash",	"id":"SPI",	"parent":"Memory",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
								{"title":"Write"+' '+"Test",	"id":"WriteTest",	"parent":"SPI",	"enable":false,	"itemTags":"a",	"type":"action"},
								{"title":"Read"+' '+"Test",		"id":"ReadTest",	"parent":"SPI", "enable":false,	"itemTags":"a",	"type":"action"},
								{"title":"Verify"+' '+"Test",	"id":"VerifyTest",	"parent":"SPI", "enable":false,	"itemTags":"a",	"type":"action"},
								{"title":"Stress"+' '+"Test",	"id":"StressTest",	"parent":"SPI", "enable":false, "itemTags":"a", "type":"direction", "items":[
									{"title":"On",	"id":"On",	"parent":"StressTest",	"enable":false,	"itemTags":"a",	"type":"action"},
									{"title":"Off",	"id":"Off",	"parent":"StressTest",	"enable":false,	"itemTags":"a",	"type":"action"}
								]}
							]},
							{"title":"Nand"+' '+"Flash",	"id":"NAND",	"parent":"Memory",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
								{"title":"Write"+' '+"Test",	"id":"WriteTest",	"parent":"NAND",	"itemTags":"a",	"enable":false,	"type":"action"},
								{"title":"Read"+' '+"Test",		"id":"ReadTest",	"parent":"NAND",	"itemTags":"a",	"enable":false,	"type":"action"},
								{"title":"Verify"+' '+"Test",	"id":"VerifyTest",	"parent":"NAND",	"itemTags":"a",	"enable":false,	"type":"action"},
								{"title":"Stress"+' '+"Test",	"id":"StressTest",	"parent":"NAND",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
									{"title":"On",	"id":"On",	"parent":"StressTest",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"Off",	"id":"Off",	"parent":"StressTest",	"itemTags":"a",	"enable":false,	"type":"action"}
								]},
								{"title":"Life-Cycle"+' '+"Test",	"id":"LifeTimeTest",	"parent":"NAND",	"itemTags":"a",	"enable":false,	"type":"action"}
							]},
							{"title":"EMMC",	"id":"eMMC",	"parent":"Memory",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
								{"title":"Write"+' '+"Test",	"id":"WriteTest",	"parent":"eMMC",	"enable":false,	"itemTags":"a",	"type":"action"},
								{"title":"Read"+' '+"Test",		"id":"ReadTest",	"parent":"eMMC",	"enable":false,	"itemTags":"a",	"type":"action"},
								{"title":"Verify"+' '+"Test",	"id":"VerifyTest",	"parent":"eMMC",	"enable":false,	"itemTags":"a",	"type":"action"},
								{"title":"Stress"+' '+"Test",	"id":"StressTest",	"parent":"eMMC",	"enable":false,	"itemTags":"a",	"type":"direction",	"items":[
									{"title":"On",	"id":"On",	"parent":"StressTest",	"enable":false,	"itemTags":"a",	"type":"action"},
									{"title":"Off",	"id":"Off",	"parent":"StressTest",	"enable":false,	"itemTags":"a",	"type":"action"}
								]}
							]},
							{"title":"HDD",	"id":"HDD",	"parent":"Memory",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
								{"title":"HDD"+' '+"0",	"id":"HDD0",	"parent":"HDD",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
									{"title":"Format",					"id":"Format",					"parent":"HDD0",	"itemTags":"a",		"enable":false,	"type":"action"},
									{"title":"Performance"+' '+"Test",	"id":"PerformanceTest",			"parent":"HDD0",	"itemTags":"a",		"enable":false,	"type":"action"},
									{"title":"Long"+' '+"DST",			"id":"DiagnosticTestLongTerm",	"parent":"HDD0",	"itemTags":"a",		"enable":false,	"type":"action"},
									{"title":"Short"+' '+"DST",			"id":"DiagnosticTestShortTerm",	"parent":"HDD0",	"itemTags":"a",		"enable":false,	"type":"action"},
									{"title":"Pattern"+' '+"Test",		"id":"PatternTest",				"parent":"HDD0",	"itemTags":"input",	"enable":false,	"type":"dialog"}
								]},
								{"title":"HDD"+' '+"1",	"id":"HDD1",	"parent":"HDD",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
									{"title":"Format",					"id":"Format",					"parent":"HDD1",	"itemTags":"a",		"enable":false,	"type":"action"},
									{"title":"Performance"+' '+"Test",	"id":"PerformanceTest",			"parent":"HDD1",	"itemTags":"a",		"enable":false,	"type":"action"},
									{"title":"Long"+' '+"DST",			"id":"DiagnosticTestLongTerm",	"parent":"HDD1",	"itemTags":"a",		"enable":false,	"type":"action"},
									{"title":"Short"+' '+"DST",			"id":"DiagnosticTestShortTerm",	"parent":"HDD1",	"itemTags":"a",		"enable":false,	"type":"action"},
									{"title":"Pattern"+' '+"Test",		"id":"PatternTest",				"parent":"HDD1",	"itemTags":"input",	"enable":false,	"type":"dialog"}
								]},
								{"title":"HDD"+' '+"2",	"id":"HDD2",	"parent":"HDD",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
									{"title":"Format",					"id":"Format",					"parent":"HDD2",	"itemTags":"a",		"enable":false,	"type":"action"},
									{"title":"Performance"+' '+"Test",	"id":"PerformanceTest",			"parent":"HDD2",	"itemTags":"a",		"enable":false,	"type":"action"},
									{"title":"Long"+' '+"DST",			"id":"DiagnosticTestLongTerm",	"parent":"HDD2",	"itemTags":"a",		"enable":false,	"type":"action"},
									{"title":"Short"+' '+"DST",			"id":"DiagnosticTestShortTerm",	"parent":"HDD2",	"itemTags":"a",		"enable":false,	"type":"action"},
									{"title":"Pattern"+' '+"Test",		"id":"PatternTest",				"parent":"HDD2",	"itemTags":"input",	"enable":false,	"type":"dialog"}
								]},
								{"title":"HDD"+' '+"3",	"id":"HDD3",	"parent":"HDD",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
									{"title":"Format",					"id":"Format",					"parent":"HDD3",	"itemTags":"a",		"enable":false,	"type":"action"},
									{"title":"Performance"+' '+"Test",	"id":"PerformanceTest",			"parent":"HDD3",	"itemTags":"a",		"enable":false,	"type":"action"},
									{"title":"Long"+' '+"DST",			"id":"DiagnosticTestLongTerm",	"parent":"HDD3",	"itemTags":"a",		"enable":false,	"type":"action"},
									{"title":"Short"+' '+"DST",			"id":"DiagnosticTestShortTerm",	"parent":"HDD3",	"itemTags":"a",		"enable":false,	"type":"action"},
									{"title":"Pattern"+' '+"Test",		"id":"PatternTest",				"parent":"HDD3",	"itemTags":"input",	"enable":false,	"type":"dialog"}
								]},
							]},
						]},
						{"title":"Peripheral",	"id":"Peripheral",	"parent":"MAIN",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
							{"title":"Ethernet",	"id":"Ethernet",	"parent":"Peripheral",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
								{"title":"info",				"id":"info",		"parent":"Ethernet",	"itemTags":"a",		"enable":false,	"type":"info"},
								{"title":"IP"+' '+"Setting",	"id":"IpSetting",	"parent":"Ethernet",	"itemTags":"input",	"enable":false,	"type":"dialog"},
								{"title":"Ping"+' '+"Test",		"id":"PingTest",	"parent":"Ethernet",	"itemTags":"input",	"enable":false,	"type":"dialog"},
							]},
							{"title":"SmartCard",	"id":"SmartCard",	"parent":"Peripheral",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
								{"title":"Detect"+' '+"Test",	"id":"Detect",	"parent":"SmartCard",	"itemTags":"a",	"enable":false,	"type":"action"},
								{"title":"ATR"+' '+"T0",		"id":"ATRT0",	"parent":"SmartCard",	"itemTags":"a",	"enable":false,	"type":"action"},
								{"title":"ATR"+' '+"T14",		"id":"ATRT14",	"parent":"SmartCard",	"itemTags":"a",	"enable":false,	"type":"action"},
							]},
							{"title":"Cable"+' '+"Modem",	"id":"CM",	"parent":"Peripheral",	"itemTags":"a",	"enable":false,	"type":"action"},
							{"title":"WiFi",	"id":"WIFI",	"parent":"Peripheral",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
								{"title":"Ping"+' '+"Test",		"id":"PingTest",	"parent":"WIFI",	"itemTags":"a",	"enable":false,	"type":"action"},
								{"title":"iPerf"+' '+"Test",	"id":"iPerfTest",	"parent":"WIFI",	"itemTags":"a",	"enable":false,	"type":"action"},
								{"title":"Stress"+' '+"Test",	"id":"StressTest",	"parent":"WIFI",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
									{"title":"On",	"id":"On",	"parent":"StressTest",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"Off",	"id":"Off",	"parent":"StressTest",	"itemTags":"a",	"enable":false,	"type":"action"},
								]},
							]},
							{"title":"FAN",	"id":"FAN",	"parent":"Peripheral",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
								{"title":"Fan"+' '+"Scenario",	"id":"FanScenario",	"parent":"FAN",	"itemTags":"a",	"enable":false,	"type":"direction", "items":[
									{"title":"On",	"id":"On",	"parent":"FanScenario",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"Off",	"id":"Off",	"parent":"FanScenario",	"itemTags":"a",	"enable":false,	"type":"action"},
								]},
								{"title":"Voltage"+' '+"Ctrl",	"id":"Voltage",	"parent":"FAN",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
									{"title":"11.5V",	"id":"11500mV",	"parent":"Voltage",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"10.5V",	"id":"10500mV",	"parent":"Voltage",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"9.5V",	"id":"9500mV",	"parent":"Voltage",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"8.5V",	"id":"8500mV",	"parent":"Voltage",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"7.6V",	"id":"7600mV",	"parent":"Voltage",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"0V",		"id":"0V",		"parent":"Voltage",	"itemTags":"a",	"enable":false,	"type":"action"},
								]},
							]},
							{"title":"IR",	"id":"IR",	"parent":"Peripheral",	"itemTags":"a",	"enable":false,	"type":"action"},
							{"title":"RF4CE",	"id":"RF4CE",	"parent":"Peripheral",	"itemTags":"a",	"enable":false,	"type":"action"},
							{"title":"I2C",	"id":"I2C",	"parent":"Peripheral",	"itemTags":"a",	"enable":false,	"type":"action"},
							{"title":"7-Segment",	"id":"7Segment",	"parent":"Peripheral",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
								{"title":"All"+' '+"On",	"id":"AllOn",	"parent":"7Segment", "itemTags":"a",	"enable":false, "type":"action"},
								{"title":"All"+' '+"Off",	"id":"AllOff",	"parent":"7Segment", "itemTags":"a",	"enable":false, "type":"action"},
							]},
							{"title":"LED",	"id":"LED",	"parent":"Peripheral",	"itemTags":"a",	"enable":false,	"type":"direction",	"items" :[
								{"title":"LED"+' '+"0",	"id":"LED0",	"parent":"LED",	"itemTags":"a",	"enable":false,	"type":"direction",	"items" :[
									{"title":"On",	"id":"On",	"parent":"LED0",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"Off",	"id":"Off",	"parent":"LED0",	"itemTags":"a",	"enable":false,	"type":"action"},
								]},
								{"title":"LED"+' '+"1",	"id":"LED1",	"parent":"LED",	"itemTags":"a",	"enable":false,	"type":"direction",	"items" :[
									{"title":"On",	"id":"On",	"parent":"LED1",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"Off",	"id":"Off",	"parent":"LED1",	"itemTags":"a",	"enable":false,	"type":"action"},
								]},
								{"title":"LED"+' '+"2",	"id":"LED2",	"parent":"LED",	"itemTags":"a",	"enable":false,	"type":"direction",	"items" :[
									{"title":"On",	"id":"On",	"parent":"LED2",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"Off",	"id":"Off",	"parent":"LED2",	"itemTags":"a",	"enable":false,	"type":"action"},
								]},
								{"title":"LED"+' '+"3",	"id":"LED3",	"parent":"LED",	"itemTags":"a",	"enable":false,	"type":"direction",	"items" :[
									{"title":"On",	"id":"On",	"parent":"LED3",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"Off",	"id":"Off",	"parent":"LED3",	"itemTags":"a",	"enable":false,	"type":"action"},
								]},
								{"title":"Stress"+' '+"Test",	"id":"StressTest",	"parent":"LED",	"itemTags":"a",	"enable":false,	"type":"direction",	"items" :[
									{"title":"On",	"id":"On",	"parent":"StressTest",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"Off",	"id":"Off",	"parent":"StressTest",	"itemTags":"a",	"enable":false,	"type":"action"},
								]},
							]},
							{"title":"USB",	"id":"USB",	"parent":"Peripheral",	"itemTags":"a",	"enable":false,	"type":"direction",	"items" :[
								{"title":"ECHI"+' '+"Pattern"+' '+"Test",	"id":"EHCI",	"parent":"USB",	"itemTags":"a",	"enable":false,	"type":"action"},
								{"title":"Stress"+' '+"Test",	"id":"StressTest",	"parent":"USB",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
									{"title":"On",	"id":"On",	"parent":"StressTest",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"Off",	"id":"Off",	"parent":"StressTest",	"itemTags":"a",	"enable":false,	"type":"action"},
								]},
							]}
						]},
						{"title":"Functions",	"id":"Functions",	"parent":"MAIN",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
							{"title":"Record",	"id":"REC",	"parent":"Functions",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
								{"title":"slot"+' '+"0",	"id":"slot0",	"parent":"REC",	"itemTags":"a",	"enable":false,	"type":"action"},
								{"title":"slot"+' '+"1",	"id":"slot1",	"parent":"REC",	"itemTags":"a",	"enable":false,	"type":"action"},
								{"title":"slot"+' '+"2",	"id":"slot2",	"parent":"REC",	"itemTags":"a",	"enable":false,	"type":"action"},
								{"title":"slot"+' '+"3",	"id":"slot3",	"parent":"REC",	"itemTags":"a",	"enable":false,	"type":"action"},
								{"title":"On",				"id":"On",		"parent":"REC",	"itemTags":"a",	"enable":false,	"type":"action"},
								{"title":"Off",				"id":"Off",		"parent":"REC",	"itemTags":"a",	"enable":false,	"type":"action"},
							]},
							{"title":"File"+' '+"Play",	"id":"Playback",	"parent":"Functions",	"itemTags":"button",	"enable":false,	"type":"dialog"},
							{"title":"IP"+' '+"Play",	"id":"IpPlayback",	"parent":"Functions",	"itemTags":"button",	"enable":false,	"type":"dialog"},
							{"title":"Power",			"id":"Power",		"parent":"Functions",	"itemTags":"a",			"enable":false,	"type":"direction",	"items" :[
								{"title":"Sleep"+' '+"Mode",	"id":"SleepMode",	"parent":"Power",	"itemTags":"a",	"enable":false,	"type":"direction",	"items" :[
									{"title":"Light"+' '+"Sleep",	"id":"LightSleep",	"parent":"SleepMode",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"Deep"+' '+"Sleep",	"id":"DeepSleep",	"parent":"SleepMode",	"itemTags":"a",	"enable":false,	"type":"action"},
								]},
								{"title":"StandBy"+' '+"Mode",	"id":"StandbyMode",	"parent":"Power",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
									{"title":"Active"+' '+"StandBy",				"id":"S1",	"parent":"StandbyMode",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"Passive"+' '+"StandBy",				"id":"S2",	"parent":"StandbyMode",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"Deep"+' '+"StandBy(Warm"+' '+"Boot)",	"id":"S3",	"parent":"StandbyMode",	"itemTags":"a",	"enable":false,	"type":"action"},
									{"title":"Deep"+' '+"StandBy(Cold"+' '+"Boot)",	"id":"S5",	"parent":"StandbyMode",	"itemTags":"a",	"enable":false,	"type":"action"},
								]},
								{"title":"Stress"+' '+"Test",	"id":"StressTest",	"parent":"Power",	"itemTags":"input",	"enable":false,	"type":"dialog"},
							]},
							{"title":"CPU"+' '+"Stress",	"id":"CPUStress",	"parent":"Functions",	"itemTags":"a",	"enable":false,	"type":"direction",	"items" :[
								{"title":"On",	"id":"On",	"parent":"CPUStress",	"itemTags":"a",	"enable":false,	"type":"action"},
								{"title":"Off",	"id":"Off",	"parent":"CPUStress",	"itemTags":"a",	"enable":false,	"type":"action"},
							]},
							{"title":"Transcoder",	"id":"Transcoder",	"parent":"Functions",	"itemTags":"a",	"enable":false,	"type":"action"},
							{"title":"PIP",	"id":"PIP",	"parent":"Functions",	"itemTags":"a",	"enable":false,	"type":"action"},
							{"title":"PIG",	"id":"PIG",	"parent":"Functions",	"itemTags":"a",	"enable":false,	"type":"action"},
							{"title":"Watchdog",	"id":"Watchdog",	"parent":"Functions",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
								{"title":"Enable",	"id":"Enable",	"parent":"Watchdog",	"itemTags":"a",	"enable":false,	"type":"action"},
								{"title":"Disable",	"id":"Disable",	"parent":"Watchdog",	"itemTags":"a",	"enable":false,	"type":"action"},
							]},
							{"title":"Thermal Protection",	"id":"Thermal",	"parent":"Functions",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
								{"title":"Enable",	"id":"Enable",	"parent":"Thermal",	"itemTags":"a",	"enable":false,	"type":"action"},
								{"title":"Disable",	"id":"Disable",	"parent":"Thermal",	"itemTags":"a",	"enable":false,	"type":"action"},
							]},
						]},
						{"title":"Information",	"id":"Information",	"parent":"MAIN",	"itemTags":"a",	"enable":false,	"type":"direction",	"items":[
							{"title":"Status"+' '+"Window",		"id":"StatusWindow",	"parent":"Information",	"itemTags":"a",	"enable":false,	"type":"info"},
							{"title":"Message"+' '+"Window",	"id":"MessageWindow",	"parent":"Information",	"itemTags":"a",	"enable":false,	"type":"info"},
							{"title":"Keycode"+' '+"Window",	"id":"KeycodeWindow",	"parent":"Information",	"itemTags":"a",	"enable":false,	"type":"info"},
							{"title":"Version",					"id":"Version",			"parent":"Information",	"itemTags":"a",	"enable":false,	"type":"action"},
						]}
					]};
