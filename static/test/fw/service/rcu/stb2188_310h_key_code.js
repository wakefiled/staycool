hwtest_key = {};

var KeyEvent = {//CEA 2014 B Final 2011.pdf
        VK_EXIT : 261,
        VK_UNDEFINDED : 0,
        VK_CANCEL : 3,
        VK_BACK_SPACE : 8,
        VK_TAB : 9,
        VK_CLEAR : 12,
        VK_SHIFT : 16,
        VK_CONTROL : 17,
        VK_ALT : 18,
        VK_CAPS_LOCK : 20,
        VK_SPACE : 32,
        VK_END : 35,
        VK_LEFT : 37, //37,
        VK_0 : 48, //48,
        VK_1 : 49, //49,
        VK_2 : 50, //50,
        VK_3 : 51, //51,
        VK_4 : 52, //52,
        VK_5 : 53, //53,
        VK_6 : 54, //54,
        VK_7 : 55, //55,
        VK_8 : 56, //56,
        VK_9 : 57, //57,
        VK_OK : 41, //13,
        VK_ENTER : 13,
        VK_PAUSE : 19,
        VK_PAGE_UP : 33,
        VK_PAGE_DOWN : 34,
        VK_UP : 38, //38,
        VK_RIGHT : 39, //39,
        VK_DOWN : 40, //40,
        VK_POWER : 297,//RDK_PRISM 9001,
        VK_SUBTITLE : 9002,
        VK_TVRADIO_TOGGLE : 9003,
        VK_SETTING : 9004,
        VK_OPTION : 9005,
        VK_PLAYER : 9006,
        VK_WIDE : 445,
        VK_SEARCH : 9008,
        VK_RECORD : 9009,
        VK_RECORDINGS : 9010,
        VK_ESCAPE : 27, // temporarilly. VK_ESCAPE = 27.
        VK_RED : 57893, //403,
        VK_GREEN : 57894, //404,
        VK_BLUE : 57896, //406,
        VK_YELLOW : 57895, //502,
        VK_REWIND : 412,
        VK_STOP : 413,
        VK_PLAY : 415,
        VK_PLAY_PAUSE : 9011,
        VK_PLAY_SPEED_DOWN : 424,
        VK_TRACK_PREV : 9012,
        VK_TRACK_NEXT : 9013,
        VK_TELETEXT : 459,
        VK_PLAY_SPEED_UP : 425,
        VK_FAST_FWD : 473,
        VK_BACK : 8, //VK_BACK : 27, // temporarilly. VK_BACK = 461.
        VK_INFO : 262,//RDK_PRISM 57947, //455,
        VK_GUIDE : 62752, //260,//RDK_PRISM 71, // lsy // 458,
        VK_CHANNEL_UP : 268, //268,//RDK_PRISM 9014,
        VK_CHANNEL_DOWN : 269, //269,// RDK_PRISM 9015,
        VK_MENU : 77,// RDK_PRISM 77, // lsy // 122,
        VK_VOLUME_DOWN : 174, //448,
        VK_MUTE : 449,
        VK_VOLUME_UP : 175, //503,
        VK_TV_AD : 83,
        VK_TEXT : 9016,
        VK_REC : 416,
        VK_OPT : 82,
        VK_AD : 81,
        VK_STANDBY : 409,
        VK_HOME : 36, //36,
        VK_A : 65,
        VK_B : 66,
        VK_C : 67,
        VK_D : 68,
        VK_E : 69,
        VK_F : 70,
        VK_G : 458, // lsy // 71,
        VK_H : 72,
        VK_I : 73,
        VK_J : 74,
        VK_K : 75,
        VK_L : 76,
        VK_M : 122, // lsy // 77,
        VK_N : 78,
        VK_O : 79,
        VK_P : 80,
        VK_Q : 81,
        VK_R : 82,
        VK_S : 83,
        VK_T : 84,
        VK_U : 85,
        VK_V : 86,
        VK_W : 87,
        VK_X : 88,
        VK_Y : 89,
        VK_Z : 90,
        VK_NUMPAD0 : 96,
        VK_NUMPAD1 : 97,
        VK_NUMPAD2 : 98,
        VK_NUMPAD3 : 99,
        VK_NUMPAD4 : 100,
        VK_NUMPAD5 : 101,
        VK_NUMPAD6 : 102,
        VK_NUMPAD7 : 103,
        VK_NUMPAD8 : 104,
        VK_NUMPAD9 : 105,
        VK_MULTIPLE : 106,
        VK_ADD : 107,
        VK_SEPARATOR : 108,
        VK_SUBTRACT : 109,
        VK_DECIMAL : 110,
        VK_DIVIDE : 111,
        VK_F1 : 112,
        VK_F2 : 113,
        VK_F3 : 114,
        VK_F4 : 115,
        VK_F5 : 116,
        VK_F6 : 117,
        VK_F7 : 118,
        VK_F8 : 119,
        VK_F9 : 120,
        VK_F10 : 121,
        VK_F11 : 122,
        VK_F12 : 123,
        VK_NUM_LOCK : 144,
        VK_SCROLL_LOCK : 145,
        VK_BACK_QUOTE : 192,
        VK_QUOTE : 222,
        VK_LIST : 57955,
        VK_PMENU : 57891,
        VK_SCREEN_MODE_NEXT : 445,
        VK_SURROUND_MODE_NEXT : 450,
		VK_MULTI_CUSTOM : 122,
		VK_MULTI_CUSTOM_SUCCESS : 123,
		VK_MULTI_CUSTOM_FAIL : 124
};

hwtest_key = {
    KEY_UNDEFINDED : KeyEvent.VK_UNDEFINDED,
    KEY_CANCEL : KeyEvent.VK_CANCEL,
    KEY_BACK_SPACE : KeyEvent.VK_BACK_SPACE,
    KEY_TAB : KeyEvent.VK_TAB,
    KEY_CLEAR : KeyEvent.VK_CLEAR,
    KEY_SHIFT : KeyEvent.VK_SHIFT,
    KEY_CONTROL : KeyEvent.VK_CONTROL,
    KEY_ALT : KeyEvent.VK_ALT,
    KEY_CAPS_LOCK : KeyEvent.VK_CAPS_LOCK,
    KEY_SPACE : KeyEvent.VK_SPACE,
    KEY_END : KeyEvent.VK_END,
    KEY_EXIT : KeyEvent.VK_EXIT,
    KEY_LEFT : KeyEvent.VK_LEFT,
    KEY_0 : KeyEvent.VK_0,
    KEY_1 : KeyEvent.VK_1,
    KEY_2 : KeyEvent.VK_2,
    KEY_3 : KeyEvent.VK_3,
    KEY_4 : KeyEvent.VK_4,
    KEY_5 : KeyEvent.VK_5,
    KEY_6 : KeyEvent.VK_6,
    KEY_7 : KeyEvent.VK_7,
    KEY_8 : KeyEvent.VK_8,
    KEY_9 : KeyEvent.VK_9,
    KEY_OK : KeyEvent.VK_OK,
    KEY_ENTER : KeyEvent.VK_ENTER,
    KEY_PAUSE : KeyEvent.VK_PAUSE,
    KEY_PAGE_UP : KeyEvent.VK_PAGE_UP,
    KEY_PAGE_DOWN : KeyEvent.VK_PAGE_DOWN,
    KEY_UP : KeyEvent.VK_UP,
    KEY_RIGHT : KeyEvent.VK_RIGHT,
    KEY_DOWN : KeyEvent.VK_DOWN,
    KEY_LIST : KeyEvent.VK_LIST,
    KEY_POWER : KeyEvent.VK_POWER,
    KEY_SUBTITLE : KeyEvent.VK_SUBTITLE,
    KEY_TVRADIO_TOGGLE : KeyEvent.VK_TVRADIO_TOGGLE,
    KEY_SETTING : KeyEvent.VK_SETTING,
    KEY_OPTION : KeyEvent.VK_OPTION,
    KEY_PLAYER : KeyEvent.VK_PLAYER,
    KEY_WIDE : KeyEvent.VK_WIDE,
    KEY_SEARCH : KeyEvent.VK_SEARCH,
    KEY_RECORD : KeyEvent.VK_RECORD,
    KEY_RECORDINGS : KeyEvent.VK_RECORDINGS,
    KEY_ESCAPE : KeyEvent.VK_ESCAPE,
    KEY_RED : KeyEvent.VK_RED,
    KEY_GREEN : KeyEvent.VK_GREEN,
    KEY_BLUE : KeyEvent.VK_BLUE,
    KEY_YELLOW : KeyEvent.VK_YELLOW,
    KEY_REWIND : KeyEvent.VK_REWIND,
    KEY_STOP : KeyEvent.VK_STOP,
    KEY_PLAY : KeyEvent.VK_PLAY,
    KEY_PLAY_PAUSE : KeyEvent.VK_PLAY_PAUSE,
    KEY_PLAY_SPEED_DOWN : KeyEvent.VK_PLAY_SPEED_DOWN,
    KEY_TRACK_PREV : KeyEvent.VK_TRACK_PREV,
    KEY_TRACK_NEXT : KeyEvent.VK_TRACK_NEXT,
    KEY_TELETEXT : KeyEvent.VK_TELETEXT,
    KEY_PLAY_SPEED_UP : KeyEvent.VK_PLAY_SPEED_UP,
    KEY_FAST_FWD : KeyEvent.VK_FAST_FWD,
    KEY_BACK : KeyEvent.VK_BACK, //27, // VK_BACK
    KEY_INFO : KeyEvent.VK_INFO,
    KEY_GUIDE : KeyEvent.VK_GUIDE,
    KEY_CHANNEL_UP : KeyEvent.VK_CHANNEL_UP,
    KEY_CHANNEL_DOWN : KeyEvent.VK_CHANNEL_DOWN,
    KEY_MENU : KeyEvent.VK_MENU,
    KEY_VOLUME_DOWN : KeyEvent.VK_VOLUME_DOWN,
    KEY_MUTE : KeyEvent.VK_MUTE,
    KEY_VOLUME_UP : KeyEvent.VK_VOLUME_UP,
    KEY_SCREEN_MODE_NEXT : KeyEvent.VK_SCREEN_MODE_NEXT,
    KEY_SURROUND_MODE_NEXT : KeyEvent.VK_SURROUND_MODE_NEXT,
    KEY_TV_AD : KeyEvent.VK_TV_AD,
    KEY_TEXT : KeyEvent.VK_TEXT,
    KEY_REC : KeyEvent.VK_REC,
    KEY_OPT : KeyEvent.VK_OPT,
    KEY_AD : KeyEvent.VK_AD,
    KEY_HOME : KeyEvent.VK_HOME,
    KEY_A : KeyEvent.VK_A,
    KEY_B : KeyEvent.VK_B,
    KEY_C : KeyEvent.VK_C,
    KEY_D : KeyEvent.VK_D,
    KEY_E : KeyEvent.VK_E,
    KEY_F : KeyEvent.VK_F,
    KEY_G : KeyEvent.VK_G,
    KEY_H : KeyEvent.VK_H,
    KEY_I : KeyEvent.VK_I,
    KEY_J : KeyEvent.VK_J,
    KEY_K : KeyEvent.VK_K,
    KEY_L : KeyEvent.VK_L,
    KEY_M : KeyEvent.VK_M,
    KEY_N : KeyEvent.VK_N,
    KEY_O : KeyEvent.VK_O,
    KEY_P : KeyEvent.VK_P,
    KEY_Q : KeyEvent.VK_Q,
    KEY_R : KeyEvent.VK_R,
    KEY_S : KeyEvent.VK_S,
    KEY_T : KeyEvent.VK_T,
    KEY_U : KeyEvent.VK_U,
    KEY_V : KeyEvent.VK_V,
    KEY_W : KeyEvent.VK_W,
    KEY_X : KeyEvent.VK_X,
    KEY_Y : KeyEvent.VK_Y,
    KEY_Z : KeyEvent.VK_Z,
    KEY_NUMPAD0 : KeyEvent.VK_NUMPAD0,
    KEY_NUMPAD1 : KeyEvent.VK_NUMPAD1,
    KEY_NUMPAD2 : KeyEvent.VK_NUMPAD2,
    KEY_NUMPAD3 : KeyEvent.VK_NUMPAD3,
    KEY_NUMPAD4 : KeyEvent.VK_NUMPAD4,
    KEY_NUMPAD5 : KeyEvent.VK_NUMPAD5,
    KEY_NUMPAD6 : KeyEvent.VK_NUMPAD6,
    KEY_NUMPAD7 : KeyEvent.VK_NUMPAD7,
    KEY_NUMPAD8 : KeyEvent.VK_NUMPAD8,
    KEY_NUMPAD9 : KeyEvent.VK_NUMPAD9,
    KEY_MULTIPLE : KeyEvent.VK_MULTIPLE,
    KEY_ADD : KeyEvent.VK_ADD,
    KEY_SEPARATOR : KeyEvent.VK_SEPARATOR,
    KEY_SUBTRACT : KeyEvent.VK_SUBTRACT,
    KEY_DECIMAL : KeyEvent.VK_DECIMAL,
    KEY_DIVIDE : KeyEvent.VK_DIVIDE,
    KEY_F1 : KeyEvent.VK_F1,
    KEY_F2 : KeyEvent.VK_F2,
    KEY_F3 : KeyEvent.VK_F3,
    KEY_F4 : KeyEvent.VK_F4,
    KEY_F5 : KeyEvent.VK_F5,
    KEY_F6 : KeyEvent.VK_F6,
    KEY_F7 : KeyEvent.VK_F7,
    KEY_F8 : KeyEvent.VK_F8,
    KEY_F9 : KeyEvent.VK_F9,
    KEY_F10 : KeyEvent.VK_F10,
    KEY_F11 : KeyEvent.VK_F11,
    KEY_F12 : KeyEvent.VK_F12,
    KEY_NUM_LOCK : KeyEvent.VK_NUM_LOCK,
    KEY_SCROLL_LOCK : KeyEvent.VK_SCROLL_LOCK,
    KEY_BACK_QUOTE : KeyEvent.VK_BACK_QUOTE,
    KEY_QUOTE : KeyEvent.VK_QUOTE,
    KEY_PMENU : KeyEvent.VK_PMENU,
    KEY_MULTICUSTOM : KeyEvent.VK_MULTI_CUSTOM,
    KEY_MULTICUSTOM_SUCCESS : KeyEvent.VK_MULTI_CUSTOM_SUCCESS,
    KEY_MULTICUSTOM_FAIL : KeyEvent.VK_MULTI_CUSTOM_FAIL
};

