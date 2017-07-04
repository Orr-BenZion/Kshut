(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"interctive_atlas_", frames: [[1796,2640,67,20],[0,2640,631,623],[1252,2767,428,27],[1994,2092,30,113],[1886,1538,107,127],[1886,1114,115,127],[1994,2207,30,113],[1144,2766,106,124],[1996,2436,30,112],[1886,2438,108,124],[1995,1533,32,111],[1036,2640,107,124],[935,2768,29,113],[1796,2691,106,124],[966,2768,28,116],[1472,2640,106,125],[0,0,941,878],[1996,1880,37,94],[1886,1667,107,127],[2012,1420,32,111],[1145,2640,107,124],[2012,2667,29,114],[1886,2051,106,127],[2003,1188,32,115],[1886,1923,107,126],[943,1760,941,878],[1996,1762,30,116],[1886,1796,108,125],[0,1760,941,878],[2003,1069,32,117],[1886,2564,107,125],[1547,2930,29,111],[1904,2691,106,124],[1972,1420,38,95],[633,2640,184,124],[943,0,941,878],[1020,2936,35,91],[1254,2640,107,124],[1994,397,46,165],[1995,201,50,194],[1994,564,48,152],[1886,957,96,155],[1886,0,152,199],[1886,1374,84,162],[1994,1305,32,113],[633,2766,106,124],[996,2768,29,112],[928,2640,106,126],[1994,832,33,115],[1580,2640,106,125],[1996,2550,29,115],[1886,2180,106,127],[1994,2322,30,112],[1886,390,106,187],[1994,718,34,112],[1886,201,107,187],[1517,2930,28,116],[1886,579,106,187],[1886,2309,106,127],[741,2768,192,42],[741,2812,192,42],[1820,2817,192,42],[1640,2905,192,41],[1252,2886,192,42],[1834,2905,192,41],[1129,2930,192,41],[1323,2930,192,41],[1834,2861,192,42],[633,2900,192,41],[1640,2861,192,42],[1252,2842,192,42],[1446,2842,192,42],[741,2856,192,42],[1446,2886,192,42],[935,2892,192,42],[827,2936,191,28],[1578,2930,29,111],[1363,2640,107,124],[1995,1646,31,114],[1886,768,106,187],[1609,2930,27,111],[1036,2766,106,124],[1886,1243,106,129],[943,880,941,878],[1995,1976,30,114],[1688,2640,106,125],[0,880,941,878],[1994,949,32,118],[819,2640,107,125],[1252,2796,127,14],[1129,2912,63,14],[1057,2936,63,14],[1252,2817,566,23],[877,2900,48,19],[827,2900,48,19],[1187,2892,56,18],[1129,2892,56,18],[1638,2948,49,14],[1682,2787,90,18],[1682,2767,90,18],[1381,2796,131,11],[1514,2796,100,14],[1640,2842,100,14],[1796,2662,56,19],[1616,2796,56,19],[633,2943,56,14],[1194,2912,56,14],[1742,2842,71,14],[691,2943,53,14],[746,2943,53,14]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.חוזק = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._8888psdcopy = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.איזובירההכימתאימהלי = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Alexander = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Alexander_1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bazelet = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Becks = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Becks_1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.becksblue = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Beksblue = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Budweiser = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Budweiser_1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Carlsberg = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Carlsberg_1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Corona = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Corona_1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CORONA = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Duvel = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Duvel_1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Ginness = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Ginness_1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Goldstar = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Goldstar_1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.GoldstarUNFILTERED = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.GoldstarUNFILTERED_1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.GUINNESS = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.heineken = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.heineken_1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.HOEGARRDEN = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hogaarden = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hogaarden_1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Jems88 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.Jems88_1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Kasteel = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.Kasteel_1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.KASTEEL = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.LaChouffe = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.LaChouffe_1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.Layer1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.Layer1_1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.Layer1_2 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.Layer2 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.Layer2_1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.Layer3 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.Leffe = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.Leffe_1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.liefmans = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.liefmans_1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.Maccabi = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.Maccabi_1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.MALCA = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.MALCA_1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.Negev = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.Negev_1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.NewcastleBrownAle = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.NewcastleBrownAle_1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.Paulaner = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.Paulaner_1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.Peroni_bottle = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.Rectangle1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.Rectangle1copy = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.Rectangle1copy2 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.Rectangle1copy29 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.Rectangle1copy30 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.Rectangle1copy31 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.Rectangle1copy32 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.Rectangle1copy33 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.Rectangle1copy34 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.Rectangle1copy35 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.Rectangle1copy36 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.Rectangle1copy5 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.Rectangle1copy5_1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.Rectangle1copy5_2 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.Rectangle1copy6 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.Rectangle1copy6_1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.Rectangle5 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.SamuelAdams = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.SamuelAdams_1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.SanMiguel = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.SanMiguel_1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.skol = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.skol_1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.Stella = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.STELLA = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.Tuborg = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.Tuborg_1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.UNFILTERED = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.Weihenstephan = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.Weihenstephan_1 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.איפוסתכונות = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.בינונית = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.בינוניתcopy4 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.העבראתהעכברעלהבקבוקיםאולחץעלהתכונותהרצויות = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.חזקה = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.חזקהcopy4 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.חלשה = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.חלשהcopy4 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.ייצור = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.לאמרירה = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.לאמרירהcopy4 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.לחץעלהבקבוקלמידענוסף = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.מאדמרירה = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.מאדמרירהcopy4 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.מקומי = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.מקומיcopy4 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.מרירה = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.מרירהcopy4 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.מרירות = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.מיובא = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.מיובאcopy4 = function() {
	this.spriteSheet = ss["interctive_atlas_"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.winshtefen1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Weihenstephan_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,125);


(lib.winshtef = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Weihenstephan();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,118);


(lib.tuborg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tuborg_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,125);


(lib.tuborg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tuborg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,114);


(lib.testbutton1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoWJ7IAAz1IQtAAIAAT1g");
	this.shape.setTransform(53.5,63.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.stella1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Stella();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,129);


(lib.ste6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.STELLA();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,941,878);


(lib.skol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.skol_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,124);


(lib.skol_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.skol();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27,111);


(lib.sanmigel1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SanMiguel_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,187);


(lib.sanmigel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SanMiguel();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31,114);


(lib.samueladams1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SamuelAdams_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,124);


(lib.peroni11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Peroni_bottle();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoRJ7IAAz1IQjAAIAAT1g");
	this.shape.setTransform(53,63.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,127);


(lib.peroni = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer1_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.763,0.763);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.7,116.1);


(lib.paulner1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Paulaner_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,187);


(lib.paulner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Paulaner();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28,116);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Paulaner_1();
	this.instance.parent = this;
	this.instance.setTransform(212,499);

	this.instance_1 = new lib.SanMiguel_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(106,499);

	this.instance_2 = new lib.NewcastleBrownAle_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(421,499);

	this.instance_3 = new lib.GoldstarUNFILTERED_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(316,499);

	this.instance_4 = new lib.Maccabi_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,127);

	this.instance_5 = new lib.Bazelet();
	this.instance_5.parent = this;
	this.instance_5.setTransform(521,0);

	this.instance_6 = new lib.Duvel_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(316,0);

	this.instance_7 = new lib.Alexander_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(421,0);

	this.instance_8 = new lib.MALCA_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(212,0);

	this.instance_9 = new lib.Negev_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1,499);

	this.instance_10 = new lib.liefmans_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(526,499);

	this.instance_11 = new lib.Budweiser_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(526,375);

	this.instance_12 = new lib.Peroni_bottle();
	this.instance_12.parent = this;
	this.instance_12.setTransform(106,0);

	this.instance_13 = new lib.SamuelAdams_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(421,375);

	this.instance_14 = new lib.skol_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(317,375);

	this.instance_15 = new lib.Kasteel_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(211,375);

	this.instance_16 = new lib.Beksblue();
	this.instance_16.parent = this;
	this.instance_16.setTransform(106,375);

	this.instance_17 = new lib.Jems88_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(0,375);

	this.instance_18 = new lib.Carlsberg_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(526,251);

	this.instance_19 = new lib.LaChouffe_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(421,251);

	this.instance_20 = new lib.Ginness_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(316,251);

	this.instance_21 = new lib.Stella();
	this.instance_21.parent = this;
	this.instance_21.setTransform(212,246);

	this.instance_22 = new lib.Leffe_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(106,251);

	this.instance_23 = new lib.Becks_1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(1,251);

	this.instance_24 = new lib.hogaarden_1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(526,127);

	this.instance_25 = new lib.Weihenstephan_1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(421,127);

	this.instance_26 = new lib.Corona_1();
	this.instance_26.parent = this;
	this.instance_26.setTransform(317,127);

	this.instance_27 = new lib.Tuborg_1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(211,127);

	this.instance_28 = new lib.heineken_1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(106,127);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,636,686);


(lib.newcastelbrownale1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.NewcastleBrownAle_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,187);


(lib.newcastelbrownale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.NewcastleBrownAle();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,112);


(lib.negev1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Negev_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,187);


(lib.negev = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Negev();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,112);


(lib.MEYUVE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.מיובא();
	this.instance.parent = this;
	this.instance.setTransform(71,15);

	this.instance_1 = new lib.Rectangle1copy6();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192,42);


(lib.MEODMAR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.מאדמרירה();
	this.instance.parent = this;
	this.instance.setTransform(45,16);

	this.instance_1 = new lib.Rectangle1copy5();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192,42);


(lib.MEKOMI = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.מקומי();
	this.instance.parent = this;
	this.instance.setTransform(69,17);

	this.instance_1 = new lib.Rectangle1copy6_1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192,42);


(lib.MAR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.מרירה();
	this.instance.parent = this;
	this.instance.setTransform(65,15);

	this.instance_1 = new lib.Rectangle1copy5_2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192,42);


(lib.malka1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.MALCA_1();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoRJ7IAAz1IQjAAIAAT1g");
	this.shape.setTransform(53,63.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,127);


(lib.malka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.MALCA();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,115);


(lib.makabi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Maccabi();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,115);


(lib.macabi1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Maccabi_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,125);


(lib.LOMAR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.לאמרירה();
	this.instance.parent = this;
	this.instance.setTransform(48,12);

	this.instance_1 = new lib.Rectangle1copy5_1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192,42);


(lib.liefmanes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.liefmans_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,126);


(lib.lfmns = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.liefmans();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,112);


(lib.lf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Leffe();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,113);


(lib.lef1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Leffe_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,124);


(lib.lachuf1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.LaChouffe_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,124);


(lib.lachuf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.LaChouffe();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,91);


(lib.kastel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Kasteel();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38,95);


(lib.kasteel1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Kasteel_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,184,124);


(lib.karlsberg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Carlsberg_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,124);


(lib.k30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.liefmans();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,112);


(lib.k29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.NewcastleBrownAle();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,112);


(lib.k28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GoldstarUNFILTERED();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,115);


(lib.k27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Paulaner();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28,116);


(lib.k26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SanMiguel();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31,114);


(lib.k25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Negev();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,112);


(lib.k24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Budweiser();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,111);


(lib.k23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SamuelAdams();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,111);


(lib.k22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.skol();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27,111);


(lib.k21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Kasteel();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38,95);


(lib.k20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.becksblue();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,112);


(lib.k19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Jems88();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,111);


(lib.k18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Carlsberg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,113);


(lib.k17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.LaChouffe();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,91);


(lib.k16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Ginness();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,111);


(lib.k15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.748,0.748);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71.8,116);


(lib.k14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Leffe();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,113);


(lib.k13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Becks();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,113);


(lib.k12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hogaarden();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,117);


(lib.k11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Weihenstephan();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,118);


(lib.k10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Corona();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28,116);


(lib.k9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tuborg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,114);


(lib.k8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.heineken();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,116);


(lib.k7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Maccabi();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,115);


(lib.k6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.736,0.736);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.8,119.2);


(lib.k5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Alexander();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,113);


(lib.k4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Duvel();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37,94);


(lib.k3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.MALCA();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,115);


(lib.k2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.715,0.715);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.9,118);


(lib.k1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Goldstar();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,114);


(lib.jms = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Jems88();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,111);


(lib.james1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Jems88_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,124);


(lib.IPUS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.איפוסתכונות();
	this.instance.parent = this;
	this.instance.setTransform(32,7);

	this.instance_1 = new lib.Rectangle5();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,191,28);


(lib.hogarden1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hogaarden_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,125);


(lib.hogarden = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hogaarden();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,117);


(lib.hog6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HOEGARRDEN();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,941,878);


(lib.hiniken1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.heineken_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,108,125);


(lib.HAZAKA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.חזקה();
	this.instance.parent = this;
	this.instance.setTransform(74,15);

	this.instance_1 = new lib.Rectangle1copy2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192,42);


(lib.HALASHA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.חלשה();
	this.instance.parent = this;
	this.instance.setTransform(70,11);

	this.instance_1 = new lib.Rectangle1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192,42);


(lib.hainiken = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.heineken();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,116);


(lib.gui6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GUINNESS();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,941,878);


(lib.golstarunfilted1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GoldstarUNFILTERED_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,126);


(lib.golstar11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Goldstar_1();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoRJ7IAAz1IQjAAIAAT1g");
	this.shape.setTransform(53,63.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,127);


(lib.golstar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GoldstarUNFILTERED();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,115);


(lib.golstar_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Goldstar();
	this.instance.parent = this;
	this.instance.setTransform(-3,-10,1.175,1.175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-10,34.1,134);


(lib.gol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.UNFILTERED();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,941,878);


(lib.gines1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Ginness_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,124);


(lib.gines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Ginness();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,111);


(lib.duvel1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Duvel_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,127);


(lib.duvel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Duvel();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37,94);


(lib.weak_fadecopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.חלשהcopy4();
	this.instance.parent = this;
	this.instance.setTransform(70,11);

	this.instance_1 = new lib.Rectangle1copy29();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192,41);


(lib.veryBitter_fadecopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.מאדמרירהcopy4();
	this.instance.parent = this;
	this.instance.setTransform(45,15);

	this.instance_1 = new lib.Rectangle1copy32();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192,41);


(lib.strong_fadecopy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.חזקהcopy4();
	this.instance.parent = this;
	this.instance.setTransform(74,14);

	this.instance_1 = new lib.Rectangle1copy31();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192,41);


(lib.notBitter_fadecopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.לאמרירהcopy4();
	this.instance.parent = this;
	this.instance.setTransform(48,12);

	this.instance_1 = new lib.Rectangle1copy33();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192,41);


(lib.medium_fadecopy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.בינוניתcopy4();
	this.instance.parent = this;
	this.instance.setTransform(67,14);

	this.instance_1 = new lib.Rectangle1copy30();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192,42);


(lib.local_fadecopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.מקומיcopy4();
	this.instance.parent = this;
	this.instance.setTransform(69,17);

	this.instance_1 = new lib.Rectangle1copy36();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192,42);


(lib.imported_fadecopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.מיובאcopy4();
	this.instance.parent = this;
	this.instance.setTransform(71,14);

	this.instance_1 = new lib.Rectangle1copy35();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192,41);


(lib.Bitter_fadecopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.מרירהcopy4();
	this.instance.parent = this;
	this.instance.setTransform(65,15);

	this.instance_1 = new lib.Rectangle1copy34();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192,42);


(lib.corona1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Corona_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,125);


(lib.corona = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Corona();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28,116);


(lib.cas6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.KASTEEL();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,941,878);


(lib.carlsberg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Carlsberg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,113);


(lib.budwiser1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Budweiser_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,124);


(lib.budwis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Budweiser();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,111);


(lib.bksblue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.becksblue();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,112);


(lib.beksblue1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Beksblue();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,108,124);


(lib.beks1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Becks_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,124);


(lib.beks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Becks();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,113);


(lib.BEINONI = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.בינונית();
	this.instance.parent = this;
	this.instance.setTransform(67,14);

	this.instance_1 = new lib.Rectangle1copy();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192,42);


(lib.bazalet1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bazelet();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,127);


(lib.alg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._8888psdcopy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,631,623);


(lib.alexander1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Alexander_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,127);


(lib.alexander = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Alexander();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,113);


(lib._6cor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CORONA();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,941,878);


(lib.TOGREY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.gols8 = new lib.golstar11();
	this.gols8.parent = this;
	this.gols8.setTransform(54,64.2,1,1,0,0,0,53,63.5);
	new cjs.ButtonHelper(this.gols8, 0, 1, 2, false, new lib.golstar11(), 3);

	this.instance = new lib.Paulaner_1();
	this.instance.parent = this;
	this.instance.setTransform(212,499);

	this.instance_1 = new lib.SanMiguel_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(106,499);

	this.instance_2 = new lib.NewcastleBrownAle_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(421,499);

	this.instance_3 = new lib.GoldstarUNFILTERED_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(316,499);

	this.instance_4 = new lib.Maccabi_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,127);

	this.instance_5 = new lib.Bazelet();
	this.instance_5.parent = this;
	this.instance_5.setTransform(521,0);

	this.instance_6 = new lib.Duvel_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(316,0);

	this.instance_7 = new lib.Alexander_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(421,0);

	this.instance_8 = new lib.MALCA_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(212,0);

	this.instance_9 = new lib.Negev_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1,499);

	this.instance_10 = new lib.liefmans_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(526,499);

	this.instance_11 = new lib.Budweiser_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(526,375);

	this.instance_12 = new lib.Peroni_bottle();
	this.instance_12.parent = this;
	this.instance_12.setTransform(106,0);

	this.instance_13 = new lib.SamuelAdams_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(421,375);

	this.instance_14 = new lib.skol_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(317,375);

	this.instance_15 = new lib.Kasteel_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(211,375);

	this.instance_16 = new lib.Beksblue();
	this.instance_16.parent = this;
	this.instance_16.setTransform(106,375);

	this.instance_17 = new lib.Jems88_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(0,375);

	this.instance_18 = new lib.Carlsberg_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(526,251);

	this.instance_19 = new lib.LaChouffe_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(421,251);

	this.instance_20 = new lib.Ginness_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(316,251);

	this.instance_21 = new lib.Stella();
	this.instance_21.parent = this;
	this.instance_21.setTransform(212,246);

	this.instance_22 = new lib.Leffe_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(106,251);

	this.instance_23 = new lib.Becks_1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(1,251);

	this.instance_24 = new lib.hogaarden_1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(526,127);

	this.instance_25 = new lib.Weihenstephan_1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(421,127);

	this.instance_26 = new lib.Corona_1();
	this.instance_26.parent = this;
	this.instance_26.setTransform(317,127);

	this.instance_27 = new lib.Tuborg_1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(211,127);

	this.instance_28 = new lib.heineken_1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(106,127);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.gols8}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,636,686);


(lib.s2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.peroni = new lib.peroni();
	this.peroni.parent = this;
	this.peroni.setTransform(23.7,55.5,1.252,1.252,0,0,0,18.9,44.3);
	new cjs.ButtonHelper(this.peroni, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.peroni).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.9,145.3);


(lib.s1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.golstar = new lib.golstar_1();
	this.golstar.parent = this;
	this.golstar.setTransform(55.1,73.1,1.089,1.089,0,0,0,14.6,57.1);
	new cjs.ButtonHelper(this.golstar, 0, 1, 1);

	this.instance = new lib.Goldstar_1();
	this.instance.parent = this;
	this.instance.setTransform(0,19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.golstar}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,146.2);


(lib.mal8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.malka1 = new lib.malka1();
	this.malka1.parent = this;
	this.malka1.setTransform(53,63.5,1,1,0,0,0,53,63.5);
	new cjs.ButtonHelper(this.malka1, 0, 1, 2, false, new lib.malka1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.malka1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,127);


(lib.heinekout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.hainiken = new lib.hainiken();
	this.hainiken.parent = this;
	this.hainiken.setTransform(54.6,71.1,1.224,1.224,0,0,0,15,58.1);
	new cjs.ButtonHelper(this.hainiken, 0, 1, 1);

	this.instance = new lib.heineken_1();
	this.instance.parent = this;
	this.instance.setTransform(0,17);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ApXKyIAA1jISvAAIAAVjg");
	this.shape.setTransform(55.5,76.5,0.858,0.92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.hainiken}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,108,142);


(lib.e1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.malka = new lib.malka();
	this.malka.parent = this;
	this.malka.setTransform(18.8,73.7,1.278,1.278,0,0,0,14.7,57.6);
	new cjs.ButtonHelper(this.malka, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.malka).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37.1,147);


(lib.cor6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._6cor();
	this.instance.parent = this;
	this.instance.setTransform(470.5,439,1,1,0,0,0,470.5,439);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,941,878);


(lib.s5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.e1 = new lib.e1();
	this.e1.parent = this;
	this.e1.setTransform(51.1,73.5,1,1,0,0,0,18.5,73.5);
	new cjs.ButtonHelper(this.e1, 0, 1, 1);

	this.instance = new lib.MALCA_1();
	this.instance.parent = this;
	this.instance.setTransform(0,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.e1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,148);


(lib.s4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.s2 = new lib.s2();
	this.s2.parent = this;
	this.s2.setTransform(49.9,72.6,1,1,0,0,0,22.9,72.6);
	new cjs.ButtonHelper(this.s2, 0, 1, 1);

	this.instance = new lib.Peroni_bottle();
	this.instance.parent = this;
	this.instance.setTransform(0,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.s2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,147.3);


// stage content:
(lib.v501worksbeinoni = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		///
		var frequency = 3;
		var click=0;
		var pop=true;
		var op=0;
		
		
		
		/*
		
		this.hal.alpha=0;
		this.bei.alpha=0;
		this.haz.alpha=0;
		this.lomer.alpha=0;
		this.mer.alpha=0;
		this.meodmer.alpha=0;
		this.mk.alpha=0;
		this.mv.alpha=0;
		///cat
		
		
		
		///
		//greybackincatall
		this.alg.alpha=0;
		
		///popup
		
		
		//bottleincat
		this.k1.alpha=0;
		this.k2.alpha=0;
		this.k3.alpha=0;
		this.k4.alpha=0;
		this.k5.alpha=0;
		this.k6.alpha=0;
		this.k7.alpha=0;
		this.k8.alpha=0;
		this.k9.alpha=0;
		this.k10.alpha=0;
		this.k11.alpha=0;
		this.k12.alpha=0;
		this.k13.alpha=0;
		this.k14.alpha=0;
		this.k15.alpha=0;
		this.k16.alpha=0;
		this.k17.alpha=0;
		this.k18.alpha=0;
		this.k19.alpha=0;
		this.k20.alpha=0;
		this.k21.alpha=0;
		this.k22.alpha=0;
		this.k23.alpha=0;
		this.k24.alpha=0;
		this.k25.alpha=0;
		this.k26.alpha=0;
		this.k27.alpha=0;
		this.k28.alpha=0;
		this.k29.alpha=0;
		this.k30.alpha=0;
		
		
		
		*/
		
		
		this.gol6.visible=false;
		this.cas6.visible=false;
		this.gui6.visible=false;
		this.ste6.visible=false;
		this.hog6.visible=false;
		this.cor6.visible=false;
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		//ipus
		this.IPUS.addEventListener("click", fl_MouseClickHandler_100.bind(this));
		
		function fl_MouseClickHandler_100()
		{
			op=0;
			click=0;
			this.gotoAndStop(0);}
		/*	click=0;
			
			
				this.liefmanes1.alpha=1;
				this.skol1.alpha=1;
				this.beksblue1.alpha=1;
			this.winshtefen1.alpha=1;
			this.Hiniken1.alpha=1;
			this.Korona1.alpha=1;
			this.peroni11.alpha=1;
			this.kasteel1.alpha=1;
			this.Lef1.alpha=1;
			this.macabi1.alpha=1;
			this.lachuf1.alpha=1;
			this.Gines1.alpha=1;
			this.duvel1.alpha=1;
			this.james1.alpha=1;
			this.bazelet1.alpha=1;
			this.mal8.alpha=1;
			this.budwiser1.alpha=1;
			this.paulner1.alpha=1;
			this.sanmigel1.alpha=1;
			this.gols8.alpha=1;
			this.golstarunfilted1.alpha=1;
			this.newcastelbrownale1.alpha=1;
			this.Tuborg1.alpha=1;
			this.samueladams1.alpha=1;
			this.karlsberg1.alpha=1;
			this.stella1.alpha=1;
			this.beks1.alpha=1;
			this.alexander1.alpha=1;
			this.hogarden1.alpha=1;
			this.Negev1.alpha=1;
			
			
			
			
			
			
			
			
			
			
		this.hal.alpha=0;
		this.bei.alpha=0;
		this.haz.alpha=0;
		this.lomer.alpha=0;
		this.mer.alpha=0;
		this.meodmer.alpha=0;
		this.mk.alpha=0;
		this.mv.alpha=0;
			
			
			
			
			this.k1.alpha=0;
		this.k2.alpha=0;
		this.k3.alpha=0;
		this.k4.alpha=0;
		this.k5.alpha=0;
		this.k6.alpha=0;
		this.k7.alpha=0;
		this.k8.alpha=0;
		this.k9.alpha=0;
		this.k10.alpha=0;
		this.k11.alpha=0;
		this.k12.alpha=0;
		this.k13.alpha=0;
		this.k14.alpha=0;
		this.k15.alpha=0;
		this.k16.alpha=0;
		this.k17.alpha=0;
		this.k18.alpha=0;
		this.k19.alpha=0;
		this.k20.alpha=0;
		this.k21.alpha=0;
		this.k22.alpha=0;
		this.k23.alpha=0;
		this.k24.alpha=0;
		this.k25.alpha=0;
		this.k26.alpha=0;
		this.k27.alpha=0;
		this.k28.alpha=0;
		this.k29.alpha=0;
		this.k30.alpha=0;*/
		
		
		
		/*
			
		
		//halasha-only  לףמנס,סקול,בקססלו
		this.halasha00.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		function fl_MouseClickHandler_4()
		{click=1;
			{if(click==1){
				//categor-go-grey
		this.bei.alpha=1;
		this.haz.alpha=1;
		this.lomer.alpha=1;
		this.mer.alpha=1;
		this.meodmer.alpha=1;
		this.mk.alpha=1;
		this.mv.alpha=1;
				/////////backgroun-fits-grey0.3
				this.liefmanes1.alpha=0.3;
				this.skol1.alpha=0.3;
				this.beksblue1.alpha=0.3;
				/////all-notfits-grey
				this.alg.alpha=1;
				//bottle
				this.k20.alpha=1;
		this.k22.alpha=1;
		this.k30.alpha=1;}}}
		
		
		
		
		
		
		
		
		////////////////beinonit-only
		
		
		
		
		this.beinonit00.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		function fl_MouseClickHandler_5()
		{click=1;
			{if(click==1){
		this.hal.alpha=1;
		this.haz.alpha=1;
		this.lomer.alpha=1;
		this.mer.alpha=1;
		this.meodmer.alpha=1;
		this.mk.alpha=1;
		this.mv.alpha=1;
				
				///
				this.alg.alpha=1;
				///
				
				
		   this.winshtefen1.alpha=0.3;
			this.Hiniken1.alpha=0.3;
			this.Korona1.alpha=0.3;
			this.peroni11.alpha=0.3;
			this.bazelet1.alpha=0.3;
			this.mal8.alpha=0.3;
			this.budwiser1.alpha=0.3;
			this.paulner1.alpha=0.3;
			this.sanmigel1.alpha=0.3;
			this.gols8.alpha=0.3;
			this.golstarunfilted1.alpha=0.3;
			this.newcastelbrownale1.alpha=0.3;
			this.Tuborg1.alpha=0.3;
			this.samueladams1.alpha=0.3;
			this.karlsberg1.alpha=0.3;
			this.stella1.alpha=0.3;
			this.beks1.alpha=0.3;
				
				///
				this.k1.alpha=1;
		this.k2.alpha=1;
		this.k3.alpha=1;
		this.k5.alpha=1;
		this.k6.alpha=1;
		this.k8.alpha=1;
		this.k9.alpha=1;
		this.k10.alpha=1;
		this.k11.alpha=1;
		this.k12.alpha=1;
		this.k13.alpha=1;
		this.k15.alpha=1;
		this.k18.alpha=1;
		this.k23.alpha=1;
		this.k24.alpha=1;
		this.k25.alpha=1;
		this.k26.alpha=1;
		this.k27.alpha=1;
		this.k28.alpha=1;
		this.k29.alpha=1;
		
		
				
		}}
		}
		
		
		//hazaka  חזקה-קסטיל,לף,לשוף,גינס,מכבי,דובל,גמס
		
		this.hazaka00.addEventListener("click", fl_MouseClickHandler_6.bind(this));
		
		function fl_MouseClickHandler_6()
		{click=1;
			{if(click==1){
		this.hal.alpha=1;
		this.bei.alpha=1;
		this.lomer.alpha=1;
		this.mer.alpha=1;
		this.meodmer.alpha=1;
		this.mk.alpha=1;
		this.mv.alpha=1;
				///
				
				this.alg.alpha=1;
				///
				this.kasteel1.alpha=0.3;
			this.Lef1.alpha=0.3;
		this.lachuf1.alpha=0.3;
			this.Gines1.alpha=0.3;
			this.duvel1.alpha=0.3;
			this.james1.alpha=0.3;
			this.macabi1.alpha=0.3;
				
				
				
				
				
				
		///
		
				this.k18.alpha=1;
		this.k19.alpha=1;
		this.k4.alpha=1;
		this.k17.alpha=1;
		this.k16.alpha=1;
		this.k7.alpha=1;
		this.k14.alpha=1;
		this.k21.alpha=1;
				
		}}
		}
		
		
		
		//lo merira
		
		
		
		
		this.lomerira00.addEventListener("click", fl_MouseClickHandler_7.bind(this));
		
		function fl_MouseClickHandler_7()
		{click=1;
			{if(click==1){
				this.hal.alpha=1;
		this.bei.alpha=1;
		this.haz.alpha=1;
		this.mer.alpha=1;
		this.meodmer.alpha=1;
		this.mk.alpha=1;
		this.mv.alpha=1;
				
				
			////
					this.alg.alpha=1;
				/////
				
				this.k2.alpha=1;
		this.k18.alpha=1;
		this.k22.alpha=1;
		this.k30.alpha=1;
		this.k26.alpha=1;
		this.k27.alpha=1;
		this.k24.alpha=1;
		this.k2.alpha=1;
		this.k8.alpha=1;
		this.k10.alpha=1;
		this.k11.alpha=1;
		this.k12.alpha=1;
		this.k3.alpha=1;
		this.k6.alpha=1;
		
				////
				
				
					this.bazelet1.alpha=0.3;
			this.mal8.alpha=0.3;
				this.paulner1.alpha=0.3;
			this.sanmigel1.alpha=0.3;
				this.kasteel1.alpha=0.3;
				this.budwiser1.alpha=0.3;
			this.liefmanes1.alpha=0.3;
				this.skol1.alpha=0.3;
				this.beksblue1.alpha=0.3;
					this.winshtefen1.alpha=0.3;
			this.Hiniken1.alpha=0.3;
			this.Korona1.alpha=0.3;
			this.hogarden1.alpha=0.3;
			
		
				
				
				
				
				
		}}
		}
		
		
		
		///merira
		this.merira00.addEventListener("click", fl_MouseClickHandler_8.bind(this));
		
		function fl_MouseClickHandler_8()
		{click=1;
			{if(click==1){
				this.hal.alpha=1;
		this.bei.alpha=1;
		this.haz.alpha=1;
		this.lomer.alpha=1;
		this.meodmer.alpha=1;
		this.mk.alpha=1;
		this.mv.alpha=1;
				
				///
					this.alg.alpha=1;
				////
				
				
				
			this.alexander1.alpha=0.3;
				this.newcastelbrownale1.alpha=0.3;
			this.Tuborg1.alpha=1;
				this.samueladams1.alpha=0.3;
			this.karlsberg1.alpha=0.3;
				this.stella1.alpha=0.3;
			this.beks1.alpha=0.3;
			this.gols8.alpha=0.3;
			this.golstarunfilted1.alpha=0.3;
			this.Negev1.alpha=0.3;
				this.Lef1.alpha=0.3;
					this.macabi1.alpha=0.3;
					
					//////////
		this.k13.alpha=1;
		this.k15.alpha=1;
		this.k18.alpha=1;
		this.k23.alpha=1;
		this.k29.alpha=1;
		this.k23.alpha=1;
		this.k28.alpha=1;
		this.k1.alpha=1;
		this.k5.alpha=1;
		this.k7.alpha=1;
		this.k14.alpha=1;
		
			
		}}
		}
		
		
		////meodmarira
		this.meodmerira00.addEventListener("click", fl_MouseClickHandler_9.bind(this));
		
		function fl_MouseClickHandler_9()
		{click=1;
			{if(click==1){
				this.hal.alpha=1;
		this.bei.alpha=1;
		this.haz.alpha=1;
		this.lomer.alpha=1;
		this.mer.alpha=1;
		this.mk.alpha=1;
		this.mv.alpha=1;
				
				/////
					this.alg.alpha=1;
				/////
				this.lachuf1.alpha=0.3;
			this.Gines1.alpha=0.3;
			this.duvel1.alpha=0.3;
			this.james1.alpha=0.3;
				////
			
		this.k19.alpha=1;
		this.k16.alpha=1;
		this.k4.alpha=1;
		this.k17.alpha=1;
		
		
				////
		}}
		}
		
		
		
		
		
		/////mekomi
		this.mekomi00.addEventListener("click", fl_MouseClickHandler_10.bind(this));
		
		function fl_MouseClickHandler_10()
		{click=1;
			{if(click==1){
				this.hal.alpha=1;
		this.bei.alpha=1;
		this.haz.alpha=1;
		this.lomer.alpha=1;
		this.mer.alpha=1;
		this.meodmer.alpha=1;
		this.mv.alpha=1;
				
				
				
				
				
				///////////
				
				
				
			this.macabi1.alpha=0.3;
			this.bazelet1.alpha=0.3;
			this.mal8.alpha=0.3;
			this.james1.alpha=0.3;
			this.gols8.alpha=0.3;
			this.golstarunfilted1.alpha=0.3;
			this.alexander1.alpha=0.3;
			this.Negev1.alpha=0.3;
				
				//////////
				
				
				this.k1.alpha=1;
		this.k7.alpha=1;
		this.k3.alpha=1;
		this.k5.alpha=1;
		this.k6.alpha=1;
		this.k19.alpha=1;
		this.k25.alpha=1;
		this.k28.alpha=1;
		
				
			
				
				
				
				
				
				
		}}
		}
		
		 this.inner.gotoAndStop(1); 
		
		///yevu
		this.meyuve00.addEventListener("click", fl_MouseClickHandler_11.bind(this));
		
		function fl_MouseClickHandler_11()
		{click=1;
			{if(click==1){
				this.hal.alpha=1;
		this.bei.alpha=1;
		this.haz.alpha=1;
		this.lomer.alpha=1;
		this.mer.alpha=1;
		this.meodmer.alpha=1;
		this.mk.alpha=1;
				
				
				
				////
				
					this.alg.alpha=1;
				/////
				
		this.k4.alpha=1;
		this.k2.alpha=1;
		this.k8.alpha=1;
		this.k9.alpha=1;
		this.k10.alpha=1;
		this.k11.alpha=1;
		this.k12.alpha=1;
		this.k13.alpha=1;
		this.k15.alpha=1;
		this.k14.alpha=1;
		this.k16.alpha=1;
		this.k17.alpha=1;
		this.k18.alpha=1;
		this.k19.alpha=1;
		this.k20.alpha=1;
		this.k21.alpha=1;
		this.k22.alpha=1;
		this.k23.alpha=1;
		this.k24.alpha=1;
		this.k26.alpha=1;
		this.k27.alpha=1;
		this.k29.alpha=1;
		this.k30.alpha=1;
		
		
				////////////
						this.liefmanes1.alpha=0.3;
				this.skol1.alpha=0.3;
				this.beksblue1.alpha=0.3;
			this.winshtefen1.alpha=0.3;
			this.Hiniken1.alpha=0.3;
			this.Korona1.alpha=0.3;
			this.peroni11.alpha=0.3;
			this.kasteel1.alpha=0.3;
			this.Lef1.alpha=0.3;
			this.lachuf1.alpha=0.3;
			this.Gines1.alpha=0.3;
			this.duvel1.alpha=0.3;
			this.budwiser1.alpha=0.3;
			this.paulner1.alpha=0.3;
			this.sanmigel1.alpha=0.3;
			this.newcastelbrownale1.alpha=0.3;
			this.Tuborg1.alpha=0.3;
			this.samueladams1.alpha=0.3;
			this.karlsberg1.alpha=0.3;
			this.stella1.alpha=0.3;
			this.beks1.alpha=0.3;
			this.hogarden1.alpha=0.3;
		
			
			
			
			
		
			
			
			
			
			
			
		}}
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		/*
		
		peroni2
		duvel2
		hiniken2
		corona2
		leffe2
		guinnes2
		carlsberg2
		negev2
		budvis2
		sunm2
		paul2
		lief2
		kastilbrown2
		goldstardark2
		skol2
		samuel2
		lachuf2
		kastill2
		james2
		becksblue2
		stella2
		hogarden2
		becks2
		winshtefen2
		tuborg2
		macabi2
		bazelet2
		alexander2
		malka2
		goldstar2
		*/
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		////hover//////
		
		//golstar
		
		
		stage.enableMouseOver(frequency);
		this.goldstar2.addEventListener("mouseover", fl_MouseOverHandler_1.bind(this));
		function fl_MouseOverHandler_1()
		{if(click==0){
		this.gotoAndStop(1);}}
		
		stage.enableMouseOver(frequency);
		this.goldstar2.addEventListener("mouseout", fl_MouseOutHandler_1.bind(this));
		function fl_MouseOutHandler_1()
		{if(click==0){
		this.gotoAndStop(0);}}
		
		
		/*
		
		//in options
		stage.enableMouseOver(frequency);
		this.k1.addEventListener("mouseover", fl_MouseOutHandler_130.bind(this));
		function fl_MouseOutHandler_130()
		{if (op==1){
		this.gotoAndStop(1);}}
		
		
		stage.enableMouseOver(frequency);
		this.k1.addEventListener("mouseout", fl_MouseOutHandler_131.bind(this));
		function fl_MouseOutHandler_131(){if (op==1){
		this.gotoAndStop(35);}}
		
		
		
		
		
		
		//in options2
		stage.enableMouseOver(frequency);
		this.k1.addEventListener("mouseover", fl_MouseOutHandler_132.bind(this));
		function fl_MouseOutHandler_132()
		{if (op==2){
		this.gotoAndStop(1);}}
		
		
		stage.enableMouseOver(frequency);
		this.k1.addEventListener("mouseout", fl_MouseOutHandler_133.bind(this));
		function fl_MouseOutHandler_133(){if (op==2){
		this.gotoAndStop(35);}}
		
		
		
		
		//in options3
		stage.enableMouseOver(frequency);
		this.k1.addEventListener("mouseover", fl_MouseOutHandler_134.bind(this));
		function fl_MouseOutHandler_134()
		{if (op==3){
		this.gotoAndStop(1);}}
		
		
		stage.enableMouseOver(frequency);
		this.k1.addEventListener("mouseout", fl_MouseOutHandler_135.bind(this));
		function fl_MouseOutHandler_135(){if (op==3){
		this.gotoAndStop(36);}}
		
		
		
		
		
		
		
		
		
		
		//in options
		stage.enableMouseOver(frequency);
		this.k1.addEventListener("mouseover", fl_MouseOutHandler_130.bind(this));
		function fl_MouseOutHandler_130()
		{if (op==1){
		this.gotoAndStop(1);}}
		
		
		stage.enableMouseOver(frequency);
		this.k1.addEventListener("mouseout", fl_MouseOutHandler_131.bind(this));
		function fl_MouseOutHandler_131(){if (op==1){
		this.gotoAndStop(35);}}
		
		*/
		
		
		
		
		//in options2
		stage.enableMouseOver(frequency);
		this.k1.addEventListener("mouseover", fl_MouseOutHandler_132.bind(this));
		function fl_MouseOutHandler_132()
		{if (op==0){
		this.gotoAndStop(1);}}
		
		
		stage.enableMouseOver(frequency);
		this.k1.addEventListener("mouseout", fl_MouseOutHandler_133.bind(this));
		function fl_MouseOutHandler_133(){if (op==0){
		this.gotoAndStop(35); }}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		//peroni11
		
		stage.enableMouseOver(frequency);
		this.peroni2.addEventListener("mouseover", fl_MouseOverHandler_2.bind(this));
		function fl_MouseOverHandler_2()
		{
			if(click==0){
		this.gotoAndStop(2);
		}
		
		}
		
		stage.enableMouseOver(frequency);
		this.peroni2.addEventListener("mouseout", fl_MouseOutHandler_2.bind(this));
		function fl_MouseOutHandler_2()
		{if(click==0){
		this.gotoAndStop(0);
		}
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		//malka
		
		stage.enableMouseOver(frequency);
		this.malka2.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3()
		{
			if(click==0){
		this.gotoAndStop(3);
		}
		
		}
		
		stage.enableMouseOver(frequency);
		this.malka2.addEventListener("mouseout", fl_MouseOutHandler_3.bind(this));
		function fl_MouseOutHandler_3()
		{
			
				if(click==0){
		this.gotoAndStop(0);
		}
		
		}
		
		
		//duvel
		
		stage.enableMouseOver(frequency);
		this.duvel2.addEventListener("mouseover", fl_MouseOverHandler_4.bind(this));
		function fl_MouseOverHandler_4()
		{
			
			if(click==0){
		this.gotoAndStop(4);
		}
			
		}
		
		
		stage.enableMouseOver(frequency);
		this.duvel2.addEventListener("mouseout", fl_MouseOutHandler_4.bind(this));
		function fl_MouseOutHandler_4()
		{
			
				if(click==0){
		this.gotoAndStop(0);
		}
			
		}
		
		
		
		
		
		
		
		
		//alexandder
		
		
		stage.enableMouseOver(frequency);
		this.alexander2.addEventListener("mouseover", fl_MouseOverHandler_5.bind(this));
		function fl_MouseOverHandler_5()
		
		{
			
			if(click==0){
		this.gotoAndStop(5);
		}
			
		}
			
		
		stage.enableMouseOver(frequency);
		this.alexander2.addEventListener("mouseout", fl_MouseOutHandler_5.bind(this));
		function fl_MouseOutHandler_5()
		{
			
				if(click==0){
		this.gotoAndStop(0);
		}
			
		}
		
		//bazelet
		
		
		
		stage.enableMouseOver(frequency);
		this.bazelet2.addEventListener("mouseover", fl_MouseOverHandler_6.bind(this));
		function fl_MouseOverHandler_6()
		
		{
			
			if(click==0){
		this.gotoAndStop(6);
		}
			
		}
			
			
		stage.enableMouseOver(frequency);
		this.bazelet2.addEventListener("mouseout", fl_MouseOutHandler_6.bind(this));
		function fl_MouseOutHandler_6()
		{
			
				if(click==0){
		this.gotoAndStop(0);
		}
			
		}
		
		
		//////////////////////
		
		
		
		
		
		
		
		
		
		//macabi
		
		stage.enableMouseOver(frequency);
		this.macabi2.addEventListener("mouseover", fl_MouseOverHandler_7.bind(this));
		function fl_MouseOverHandler_7()
		
		{
			
			if(click==0){
		this.gotoAndStop(7);
		}
			
		}
			
		
		stage.enableMouseOver(frequency);
		this.macabi2.addEventListener("mouseout", fl_MouseOutHandler_7.bind(this));
		function fl_MouseOutHandler_7()
		{
			
				if(click==0){
		this.gotoAndStop(0);
		}
			
		}	
		
		//hiniken2
		
		
		
		stage.enableMouseOver(frequency);
		this.hiniken2.addEventListener("mouseover", fl_MouseOverHandler_8.bind(this));
		function fl_MouseOverHandler_8()
		{
			if(click==0){
		this.gotoAndStop(8);
		}
		
		}
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.hiniken2.addEventListener("mouseout", fl_MouseOutHandler_8.bind(this));
		var click=0;
		function fl_MouseOutHandler_8()
		{
			
				if(click==0){
		this.gotoAndStop(0);
		}
		
		}
		
		
		
		
		
		
		
		
		//tuborg1
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.tuborg2.addEventListener("mouseover", fl_MouseOverHandler_9.bind(this));
		var click=0;
		function fl_MouseOverHandler_9()
		{
			if(click==0){
		this.gotoAndStop(9);
		}
		
		}
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.tuborg2.addEventListener("mouseout", fl_MouseOutHandler_9.bind(this));
		var click=0;
		function fl_MouseOutHandler_9()
		{
			
				if(click==0){
		this.gotoAndStop(0);
		}
		
		}
		
		//corona1
		//hover
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.corona2.addEventListener("mouseover", fl_MouseOverHandler_10.bind(this));
		var click=0;
		function fl_MouseOverHandler_10()
		{
			if(click==0){
		this.gotoAndStop(10);
				
			}}
				//popupopen open
				this.corona2.addEventListener("click", fl_MouseClickHandler_60.bind(this));
		function fl_MouseClickHandler_60(){if (pop=true){
		
				
				this.cor6.visible=true;
				
			This.corona2.mouseEnabled=true;
		This.corona2.mouseEnabled=true;
			This.stella2.mouseEnabled=true;
			This.kastill2.mouseEnabled=true;
			This.james2.mouseEnabled=true;
			This.skol2.mouseEnabled=true;
			This.samuel2.mouseEnabled=true;
			This.lachuf2.mouseEnabled=true;
			This.becksblue2.mouseEnabled=true;
			This.kastilbrown2.mouseEnabled=true;
			This.sunm2.mouseEnabled=true;
			This.lief2.mouseEnabled=true;
			This.budvis2.mouseEnabled=true;
			This.goldstardark2.mouseEnabled=true;
			This.paul2.mouseEnabled=true;
			This.negev2.mouseEnabled=true;
			This.carlsberg2.mouseEnabled=true;
			This.hiniken2.mouseEnabled=true;
			This.leffe2.mouseEnabled=true;
			This.guinnes2.mouseEnabled=true;
			This.duvel2.mouseEnabled=true;
			This.peroni2.mouseEnabled=true;
			This.malka2.mouseEnabled=true;
			This.tuborg2.mouseEnabled=true;
			This.macabi2.mouseEnabled=true;
			This.alexander2.mouseEnabled=true;
			This.bazelet2.mouseEnabled=true;
			This.goldstar2.mouseEnabled=true;
			This.winshtefen2.mouseEnabled=true;
			This.becks2.mouseEnabled=true;
			This.hogarden2.mouseEnabled=true;
			This.kastilbrown2.mouseEnabled=true;
			This.goldstardark2.mouseEnabled=true;
		}}
		
		
		
		
		
		
		
			
			
			
			//clickonpopup
			this.cor6.addEventListener("click", fl_MouseClickHandler_61.bind(this));
		function fl_MouseClickHandler_61(){if (pop=true){
		
		
				
		this.cor6.visible=false;
				This.stella2.mouseEnabled=false;
			This.kastill2.mouseEnabled=false;
			This.james2.mouseEnabled=false;
			This.skol2.mouseEnabled=false;
			This.samuel2.mouseEnabled=false;
			This.lachuf2.mouseEnabled=false;
			This.becksblue2.mouseEnabled=false;
			This.kastilbrown2.mouseEnabled=false;
			This.sunm2.mouseEnabled=false;
			This.lief2.mouseEnabled=false;
			This.budvis2.mouseEnabled=false;
			This.goldstardark2.mouseEnabled=false;
			This.paul2.mouseEnabled=false;
			This.negev2.mouseEnabled=false;
			This.carlsberg2.mouseEnabled=false;
			This.hiniken2.mouseEnabled=false;
			This.leffe2.mouseEnabled=false;
			This.guinnes2.mouseEnabled=false;
			This.duvel2.mouseEnabled=false;
			This.peroni2.mouseEnabled=false;
			This.malka2.mouseEnabled=false;
			This.tuborg2.mouseEnabled=false;
			This.macabi2.mouseEnabled=false;
			This.alexander2.mouseEnabled=false;
			This.bazelet2.mouseEnabled=false;
			This.goldstar2.mouseEnabled=false;
			This.winshtefen2.mouseEnabled=false;
			This.becks2.mouseEnabled=false;
			This.hogarden2.mouseEnabled=false;
			
				This.kastilbrown2.mouseEnabled=false;
					This.goldstardark2.mouseEnabled=false;
			
		
		
		}}
		
		
		
		
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.corona2.addEventListener("mouseout", fl_MouseOutHandler_10.bind(this));
		var click=1;
		function fl_MouseOutHandler_10()
		{
			
				if(click==1){
		this.gotoAndStop(0);
		}
		
		}
		
		
		
		
		
		
		
		//winshtefen1
		
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.winshtefen2.addEventListener("mouseover", fl_MouseOverHandler_11.bind(this));
		var click=0;
		function fl_MouseOverHandler_11()
		{
			if(click==0){
		this.gotoAndStop(11);
		}
		
		}
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.winshtefen2.addEventListener("mouseout", fl_MouseOutHandler_11.bind(this));
		var click=0;
		function fl_MouseOutHandler_11()
		{
			
				if(click==0){
		this.gotoAndStop(0);
		}
		
		}
		
		
		
		
		
		//hogarden1
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.hogarden2.addEventListener("mouseover", fl_MouseOverHandler_12.bind(this));
		var click=0;
		function fl_MouseOverHandler_12()
		{
			if(click==0){
		this.gotoAndStop(12);
		}
		
		
		}
		
		
		
		
		
		//popupopen open
				this.hogarden2.addEventListener("click", fl_MouseClickHandler_90.bind(this));
		function fl_MouseClickHandler_90(){if (pop=true){
		
				
				this.hog6.visible=true;
				
			This.corona2.mouseEnabled=true;
		This.corona2.mouseEnabled=true;
			This.stella2.mouseEnabled=true;
			This.kastill2.mouseEnabled=true;
			This.james2.mouseEnabled=true;
			This.skol2.mouseEnabled=true;
			This.samuel2.mouseEnabled=true;
			This.lachuf2.mouseEnabled=true;
			This.becksblue2.mouseEnabled=true;
			This.kastilbrown2.mouseEnabled=true;
			This.sunm2.mouseEnabled=true;
			This.lief2.mouseEnabled=true;
			This.budvis2.mouseEnabled=true;
			This.goldstardark2.mouseEnabled=true;
			This.paul2.mouseEnabled=true;
			This.negev2.mouseEnabled=true;
			This.carlsberg2.mouseEnabled=true;
			This.hiniken2.mouseEnabled=true;
			This.leffe2.mouseEnabled=true;
			This.guinnes2.mouseEnabled=true;
			This.duvel2.mouseEnabled=true;
			This.peroni2.mouseEnabled=true;
			This.malka2.mouseEnabled=true;
			This.tuborg2.mouseEnabled=true;
			This.macabi2.mouseEnabled=true;
			This.alexander2.mouseEnabled=true;
			This.bazelet2.mouseEnabled=true;
			This.goldstar2.mouseEnabled=true;
			This.winshtefen2.mouseEnabled=true;
			This.becks2.mouseEnabled=true;
			This.hogarden2.mouseEnabled=true;
			This.kastilbrown2.mouseEnabled=true;
			This.goldstardark2.mouseEnabled=true;
		}}
		
		
		
		
		
		
		
			
			
			
			//clickonpopup
			this.hog6.addEventListener("click", fl_MouseClickHandler_92.bind(this));
		function fl_MouseClickHandler_92(){if (pop=true){
		
		
				
		this.hog6.visible=false;
				This.stella2.mouseEnabled=false;
			This.kastill2.mouseEnabled=false;
			This.james2.mouseEnabled=false;
			This.skol2.mouseEnabled=false;
			This.samuel2.mouseEnabled=false;
			This.lachuf2.mouseEnabled=false;
			This.becksblue2.mouseEnabled=false;
			This.kastilbrown2.mouseEnabled=false;
			This.sunm2.mouseEnabled=false;
			This.lief2.mouseEnabled=false;
			This.budvis2.mouseEnabled=false;
			This.goldstardark2.mouseEnabled=false;
			This.paul2.mouseEnabled=false;
			This.negev2.mouseEnabled=false;
			This.carlsberg2.mouseEnabled=false;
			This.hiniken2.mouseEnabled=false;
			This.leffe2.mouseEnabled=false;
			This.guinnes2.mouseEnabled=false;
			This.duvel2.mouseEnabled=false;
			This.peroni2.mouseEnabled=false;
			This.malka2.mouseEnabled=false;
			This.tuborg2.mouseEnabled=false;
			This.macabi2.mouseEnabled=false;
			This.alexander2.mouseEnabled=false;
			This.bazelet2.mouseEnabled=false;
			This.goldstar2.mouseEnabled=false;
			This.winshtefen2.mouseEnabled=false;
			This.becks2.mouseEnabled=false;
			This.hogarden2.mouseEnabled=false;
				This.kastilbrown2.mouseEnabled=false;
					This.goldstardark2.mouseEnabled=false;
			
		
		
		}}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.hogarden2.addEventListener("mouseout", fl_MouseOutHandler_12.bind(this));
		var click=0;
		function fl_MouseOutHandler_12()
		{
			
				if(click==0){
		this.gotoAndStop(0);
		}
		
		}
		
		
		
		
		
		
		
		
		
		//beks
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.becks2.addEventListener("mouseover", fl_MouseOverHandler_13.bind(this));
		var click=0;
		function fl_MouseOverHandler_13()
		{
			if(click==0){
		this.gotoAndStop(13);
		}
		
		}
		
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.becks2.addEventListener("mouseout", fl_MouseOutHandler_13.bind(this));
		var click=0;
		function fl_MouseOutHandler_13()
		{
			
				if(click==0){
		this.gotoAndStop(0);
		}
		
		}
		
		//lef1
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.leffe2.addEventListener("mouseover", fl_MouseOverHandler_14.bind(this));
		var click=0;
		function fl_MouseOverHandler_14()
		{
			if(click==0){
		this.gotoAndStop(14);
		}
		
		}
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.leffe2.addEventListener("mouseout", fl_MouseOutHandler_14.bind(this));
		var click=0;
		function fl_MouseOutHandler_14()
		{
			
				if(click==0){
		this.gotoAndStop(0);
		}
		
		}
		
		
		
		
		
		
		
		//stella
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.stella2.addEventListener("mouseover", fl_MouseOverHandler_15.bind(this));
		var click=0;
		function fl_MouseOverHandler_15()
		{
			if(click==0){
		this.gotoAndStop(15);
		}
		
		}
		
		
		
		
		
		
		
		//popupopen open
				this.stella2.addEventListener("click", fl_MouseClickHandler_322.bind(this));
		function fl_MouseClickHandler_322(){if (pop=true){
		
				
				this.ste6.visible=true;
				
			This.corona2.mouseEnabled=true;
		This.corona2.mouseEnabled=true;
			This.stella2.mouseEnabled=true;
			This.kastill2.mouseEnabled=true;
			This.james2.mouseEnabled=true;
			This.skol2.mouseEnabled=true;
			This.samuel2.mouseEnabled=true;
			This.lachuf2.mouseEnabled=true;
			This.becksblue2.mouseEnabled=true;
			This.kastilbrown2.mouseEnabled=true;
			This.sunm2.mouseEnabled=true;
			This.lief2.mouseEnabled=true;
			This.budvis2.mouseEnabled=true;
			This.goldstardark2.mouseEnabled=true;
			This.paul2.mouseEnabled=true;
			This.negev2.mouseEnabled=true;
			This.carlsberg2.mouseEnabled=true;
			This.hiniken2.mouseEnabled=true;
			This.leffe2.mouseEnabled=true;
			This.guinnes2.mouseEnabled=true;
			This.duvel2.mouseEnabled=true;
			This.peroni2.mouseEnabled=true;
			This.malka2.mouseEnabled=true;
			This.tuborg2.mouseEnabled=true;
			This.macabi2.mouseEnabled=true;
			This.alexander2.mouseEnabled=true;
			This.bazelet2.mouseEnabled=true;
			This.goldstar2.mouseEnabled=true;
			This.winshtefen2.mouseEnabled=true;
			This.becks2.mouseEnabled=true;
			This.hogarden2.mouseEnabled=true;
			This.kastilbrown2.mouseEnabled=true;
			This.goldstardark2.mouseEnabled=true;
		}}
		
		
		
		
		
		
		
			
			
			
			//clickonpopup
			this.ste6.addEventListener("click", fl_MouseClickHandler_321.bind(this));
		function fl_MouseClickHandler_321(){if (pop=true){
		
		
				
		this.ste6.visible=false;
				This.stella2.mouseEnabled=false;
			This.kastill2.mouseEnabled=false;
			This.james2.mouseEnabled=false;
			This.skol2.mouseEnabled=false;
			This.samuel2.mouseEnabled=false;
			This.lachuf2.mouseEnabled=false;
			This.becksblue2.mouseEnabled=false;
			This.kastilbrown2.mouseEnabled=false;
			This.sunm2.mouseEnabled=false;
			This.lief2.mouseEnabled=false;
			This.budvis2.mouseEnabled=false;
			This.goldstardark2.mouseEnabled=false;
			This.paul2.mouseEnabled=false;
			This.negev2.mouseEnabled=false;
			This.carlsberg2.mouseEnabled=false;
			This.hiniken2.mouseEnabled=false;
			This.leffe2.mouseEnabled=false;
			This.guinnes2.mouseEnabled=false;
			This.duvel2.mouseEnabled=false;
			This.peroni2.mouseEnabled=false;
			This.malka2.mouseEnabled=false;
			This.tuborg2.mouseEnabled=false;
			This.macabi2.mouseEnabled=false;
			This.alexander2.mouseEnabled=false;
			This.bazelet2.mouseEnabled=false;
			This.goldstar2.mouseEnabled=false;
			This.winshtefen2.mouseEnabled=false;
			This.becks2.mouseEnabled=false;
			This.hogarden2.mouseEnabled=false;
				This.kastilbrown2.mouseEnabled=false;
					This.goldstardark2.mouseEnabled=false;
			
		
		
		}}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.stella2.addEventListener("mouseout", fl_MouseOutHandler_15.bind(this));
		var click=0;
		function fl_MouseOutHandler_15()
		{
			
				if(click==0){
		this.gotoAndStop(0);
		}
		
		}
		
		//gines
		
		stage.enableMouseOver(frequency);
		this.guinnes2.addEventListener("mouseover", fl_MouseOverHandler_16.bind(this));
		function fl_MouseOverHandler_16()
		{if(click==0){
		this.gotoAndStop(16);
			click=1;}}
			
				
			
			
			
			
		
			
		
		//popupopen open
				this.guinnes2.addEventListener("click", fl_MouseClickHandler_98.bind(this));
		function fl_MouseClickHandler_98(){if (pop=true){
		
				
				this.gui6.visible=true;
				
			This.corona2.mouseEnabled=true;
		This.corona2.mouseEnabled=true;
			This.stella2.mouseEnabled=true;
			This.kastill2.mouseEnabled=true;
			This.james2.mouseEnabled=true;
			This.skol2.mouseEnabled=true;
			This.samuel2.mouseEnabled=true;
			This.lachuf2.mouseEnabled=true;
			This.becksblue2.mouseEnabled=true;
			This.kastilbrown2.mouseEnabled=true;
			This.sunm2.mouseEnabled=true;
			This.lief2.mouseEnabled=true;
			This.budvis2.mouseEnabled=true;
			This.goldstardark2.mouseEnabled=true;
			This.paul2.mouseEnabled=true;
			This.negev2.mouseEnabled=true;
			This.carlsberg2.mouseEnabled=true;
			This.hiniken2.mouseEnabled=true;
			This.leffe2.mouseEnabled=true;
			This.guinnes2.mouseEnabled=true;
			This.duvel2.mouseEnabled=true;
			This.peroni2.mouseEnabled=true;
			This.malka2.mouseEnabled=true;
			This.tuborg2.mouseEnabled=true;
			This.macabi2.mouseEnabled=true;
			This.alexander2.mouseEnabled=true;
			This.bazelet2.mouseEnabled=true;
			This.goldstar2.mouseEnabled=true;
			This.winshtefen2.mouseEnabled=true;
			This.becks2.mouseEnabled=true;
			This.hogarden2.mouseEnabled=true;
			This.kastilbrown2.mouseEnabled=true;
			This.goldstardark2.mouseEnabled=true;
			pop=false;
		}}
		
		
		
		
		
		
		
			
			
			
			//clickonpopup
			this.gui6.addEventListener("click", fl_MouseClickHandler_99.bind(this));
		function fl_MouseClickHandler_99(){if (pop=true){
		
		
				
		this.gui6.visible=false;
				This.stella2.mouseEnabled=false;
			This.kastill2.mouseEnabled=false;
			This.james2.mouseEnabled=false;
			This.skol2.mouseEnabled=false;
			This.samuel2.mouseEnabled=false;
			This.lachuf2.mouseEnabled=false;
			This.becksblue2.mouseEnabled=false;
			This.kastilbrown2.mouseEnabled=false;
			This.sunm2.mouseEnabled=false;
			This.lief2.mouseEnabled=false;
			This.budvis2.mouseEnabled=false;
			This.goldstardark2.mouseEnabled=false;
			This.paul2.mouseEnabled=false;
			This.negev2.mouseEnabled=false;
			This.carlsberg2.mouseEnabled=false;
			This.hiniken2.mouseEnabled=false;
			This.leffe2.mouseEnabled=false;
			This.guinnes2.mouseEnabled=false;
			This.duvel2.mouseEnabled=false;
			This.peroni2.mouseEnabled=false;
			This.malka2.mouseEnabled=false;
			This.tuborg2.mouseEnabled=false;
			This.macabi2.mouseEnabled=false;
			This.alexander2.mouseEnabled=false;
			This.bazelet2.mouseEnabled=false;
			This.goldstar2.mouseEnabled=false;
			This.winshtefen2.mouseEnabled=false;
			This.becks2.mouseEnabled=false;
			This.hogarden2.mouseEnabled=false;
				This.kastilbrown2.mouseEnabled=false;
					This.goldstardark2.mouseEnabled=false;
			
		
		
		
		
		}}
		
		
		
		
		
			
			
			
			
			
		
			
		
			
		
			
		
		
		
		
			
			
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.guinnes2.addEventListener("mouseout", fl_MouseOutHandler_16.bind(this));
		
		function fl_MouseOutHandler_16()
		{
			
				if(click==1){
		this.gotoAndStop(0);
		}
		
		}
		
		
		
		
		
		
		
		//////////////////////
		//lachuf1
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.lachuf2.addEventListener("mouseover", fl_MouseOverHandler_17.bind(this));
		var click=0;
		function fl_MouseOverHandler_17()
		{
			if(click==0){
		this.gotoAndStop(17);
		}
		
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.lachuf2.addEventListener("mouseout", fl_MouseOutHandler_17.bind(this));
		var click=0;
		function fl_MouseOutHandler_17()
		{
			
				if(click==0){
		this.gotoAndStop(0);
		}
		
		}
		
		//karlsberg1
		stage.enableMouseOver(frequency);
		this.carlsberg2.addEventListener("mouseover", fl_MouseOverHandler_18.bind(this));
		function fl_MouseOverHandler_18()
		{
			if(click==0){
		this.gotoAndStop(18);
		}
		
		}
		
		stage.enableMouseOver(frequency);
		this.carlsberg2.addEventListener("mouseout", fl_MouseOutHandler_18.bind(this));
		function fl_MouseOutHandler_18()
		{
			
				if(click==0){
		this.gotoAndStop(0);
		}
		
		}
		
		
		
		
		
		
		
		
		//james1
		
		stage.enableMouseOver(frequency);
		this.james2.addEventListener("mouseover", fl_MouseOverHandler_19.bind(this));
		function fl_MouseOverHandler_19()
		{
			if(click==0){
		this.gotoAndStop(19);
		}
		
		}
		
		
		stage.enableMouseOver(frequency);
		this.james2.addEventListener("mouseout", fl_MouseOutHandler_19.bind(this));
		function fl_MouseOutHandler_19()
		{
			
				if(click==0){
		this.gotoAndStop(0);
		}
		
		}
		
		
		//becksblue1
		
		stage.enableMouseOver(frequency);
		this.becksblue2.addEventListener("mouseover", fl_MouseOverHandler_20.bind(this));
		function fl_MouseOverHandler_20()
		{
			if(click==0){
		this.gotoAndStop(20);
		}
		
		}
		
		stage.enableMouseOver(frequency);
		this.becksblue2.addEventListener("mouseout", fl_MouseOutHandler_20.bind(this));
		function fl_MouseOutHandler_20()
		{
			
				if(click==0){
		this.gotoAndStop(0);
		}
		
		}
		
		
		
		
		//kasteel1
		
		
		
		stage.enableMouseOver(frequency);
		this.kastill2.addEventListener("mouseover", fl_MouseOverHandler_21.bind(this));
		function fl_MouseOverHandler_21()
		{
			if(click==0){
		this.gotoAndStop(21);
		}
		
		}
		
		
		
		
		
		//popupopen open
				this.kastill2.addEventListener("click", fl_MouseClickHandler_96.bind(this));
		function fl_MouseClickHandler_96(){if (pop=true){
		
				
				this.cas6.visible=true;
				
			This.corona2.mouseEnabled=true;
		This.corona2.mouseEnabled=true;
			This.stella2.mouseEnabled=true;
			This.kastill2.mouseEnabled=true;
			This.james2.mouseEnabled=true;
			This.skol2.mouseEnabled=true;
			This.samuel2.mouseEnabled=true;
			This.lachuf2.mouseEnabled=true;
			This.becksblue2.mouseEnabled=true;
			This.kastilbrown2.mouseEnabled=true;
			This.sunm2.mouseEnabled=true;
			This.lief2.mouseEnabled=true;
			This.budvis2.mouseEnabled=true;
			This.goldstardark2.mouseEnabled=true;
			This.paul2.mouseEnabled=true;
			This.negev2.mouseEnabled=true;
			This.carlsberg2.mouseEnabled=true;
			This.hiniken2.mouseEnabled=true;
			This.leffe2.mouseEnabled=true;
			This.guinnes2.mouseEnabled=true;
			This.duvel2.mouseEnabled=true;
			This.peroni2.mouseEnabled=true;
			This.malka2.mouseEnabled=true;
			This.tuborg2.mouseEnabled=true;
			This.macabi2.mouseEnabled=true;
			This.alexander2.mouseEnabled=true;
			This.bazelet2.mouseEnabled=true;
			This.goldstar2.mouseEnabled=true;
			This.winshtefen2.mouseEnabled=true;
			This.becks2.mouseEnabled=true;
			This.hogarden2.mouseEnabled=true;
			This.kastilbrown2.mouseEnabled=true;
			This.goldstardark2.mouseEnabled=true;
		}}
		
		
		
		
		
		
		
			
			
			
			//clickonpopup
			this.cas6.addEventListener("click", fl_MouseClickHandler_97.bind(this));
		function fl_MouseClickHandler_97(){if (pop=true){
		
		
				
		this.cas6.visible=false;
				This.stella2.mouseEnabled=false;
			This.kastill2.mouseEnabled=false;
			This.james2.mouseEnabled=false;
			This.skol2.mouseEnabled=false;
			This.samuel2.mouseEnabled=false;
			This.lachuf2.mouseEnabled=false;
			This.becksblue2.mouseEnabled=false;
			This.kastilbrown2.mouseEnabled=false;
			This.sunm2.mouseEnabled=false;
			This.lief2.mouseEnabled=false;
			This.budvis2.mouseEnabled=false;
			This.goldstardark2.mouseEnabled=false;
			This.paul2.mouseEnabled=false;
			This.negev2.mouseEnabled=false;
			This.carlsberg2.mouseEnabled=false;
			This.hiniken2.mouseEnabled=false;
			This.leffe2.mouseEnabled=false;
			This.guinnes2.mouseEnabled=false;
			This.duvel2.mouseEnabled=false;
			This.peroni2.mouseEnabled=false;
			This.malka2.mouseEnabled=false;
			This.tuborg2.mouseEnabled=false;
			This.macabi2.mouseEnabled=false;
			This.alexander2.mouseEnabled=false;
			This.bazelet2.mouseEnabled=false;
			This.goldstar2.mouseEnabled=false;
			This.winshtefen2.mouseEnabled=false;
			This.becks2.mouseEnabled=false;
			This.hogarden2.mouseEnabled=false;
				This.kastilbrown2.mouseEnabled=false;
					This.goldstardark2.mouseEnabled=false;
			
		
		
		}}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		stage.enableMouseOver(frequency);
		this.kastill2.addEventListener("mouseout", fl_MouseOutHandler_21.bind(this));
		function fl_MouseOutHandler_21()
		{
			
				if(click==0){
		this.gotoAndStop(0);
		}
		
		}
		//skol1
		
		
		stage.enableMouseOver(frequency);
		this.skol2.addEventListener("mouseover", fl_MouseOverHandler_22.bind(this));
		function fl_MouseOverHandler_22()
		{
			if(click==0){
		this.gotoAndStop(22);
		}
		
		}
		
		stage.enableMouseOver(frequency);
		this.skol2.addEventListener("mouseout", fl_MouseOutHandler_22.bind(this));
		function fl_MouseOutHandler_22()
		{
			
				if(click==0){
		this.gotoAndStop(0);
		}
		
		}
		
		
		
		
		
		
		
		
		//samueladams1
		
		stage.enableMouseOver(frequency);
		this.samuel2.addEventListener("mouseover", fl_MouseOverHandler_23.bind(this));
		function fl_MouseOverHandler_23()
		{
			if(click==0){
		this.gotoAndStop(23);
		}
		
		}
		
		
		stage.enableMouseOver(frequency);
		this.samuel2.addEventListener("mouseout", fl_MouseOutHandler_23.bind(this));
		function fl_MouseOutHandler_23()
		{
			
				if(click==0){
		this.gotoAndStop(0);
		}
		
		}
		
		//budwiser
		
		
		stage.enableMouseOver(frequency);
		this.budvis2.addEventListener("mouseover", fl_MouseOverHandler_24.bind(this));
		function fl_MouseOverHandler_24()
		{
			if(click==0){
		this.gotoAndStop(24);
		}
		
		}
		
		
		stage.enableMouseOver(frequency);
		this.budvis2.addEventListener("mouseout", fl_MouseOutHandler_24.bind(this));
		function fl_MouseOutHandler_24()
		{
			
				if(click==0){
		this.gotoAndStop(0);
		}
		
		}
		
		
		
		
		//negev
		
		
		stage.enableMouseOver(frequency);
		this.negev2.addEventListener("mouseover", fl_MouseOverHandler_25.bind(this));
		function fl_MouseOverHandler_25()
		{
			if(click==0){
		this.gotoAndStop(25);
		}
		
		}
		
		stage.enableMouseOver(frequency);
		this.negev2.addEventListener("mouseout", fl_MouseOutHandler_25.bind(this));
		function fl_MouseOutHandler_25()
		{
			
				if(click==0){
		this.gotoAndStop(0);
		}
		
		}
		/////////////
		//sanmigel1
		
		
		stage.enableMouseOver(frequency);
		this.sunm2.addEventListener("mouseover", fl_MouseOverHandler_26.bind(this));
		function fl_MouseOverHandler_26()
		{
			if(click==0){
		this.gotoAndStop(26);
		}
		
		}
		
		stage.enableMouseOver(frequency);
		this.sunm2.addEventListener("mouseout", fl_MouseOutHandler_26.bind(this));
		function fl_MouseOutHandler_26()
		{
			
				if(click==0){
		this.gotoAndStop(0);
		}
		
		}
		
		
		
		
		
		//paulner1
		
		stage.enableMouseOver(frequency);
		this.paul2.addEventListener("mouseover", fl_MouseOverHandler_27.bind(this));
		function fl_MouseOverHandler_27()
		{
			if(click==0){
		this.gotoAndStop(27);
		}
		
		}
		
		
		stage.enableMouseOver(frequency);
		this.paul2.addEventListener("mouseout", fl_MouseOutHandler_27.bind(this));
		function fl_MouseOutHandler_27()
		{
			
				if(click==0){
		this.gotoAndStop(0);
		}
		
		}
		
		
		
		
		//golstarunfilted1
		
		stage.enableMouseOver(frequency);
		this.goldstardark2.addEventListener("mouseover", fl_MouseOverHandler_28.bind(this));
		function fl_MouseOverHandler_28()
		{
			if(click==0){
		this.gotoAndStop(28);
		}
		
		}
		
		
		
		
		
		//popupopen open
				this.goldstardark2.addEventListener("click", fl_MouseClickHandler_93.bind(this));
		function fl_MouseClickHandler_93(){if (pop=true){
		
				
				this.gol6.visible=true;
				
			This.corona2.mouseEnabled=true;
		This.corona2.mouseEnabled=true;
			This.stella2.mouseEnabled=true;
			This.kastill2.mouseEnabled=true;
			This.james2.mouseEnabled=true;
			This.skol2.mouseEnabled=true;
			This.samuel2.mouseEnabled=true;
			This.lachuf2.mouseEnabled=true;
			This.becksblue2.mouseEnabled=true;
			This.kastilbrown2.mouseEnabled=true;
			This.sunm2.mouseEnabled=true;
			This.lief2.mouseEnabled=true;
			This.budvis2.mouseEnabled=true;
			This.goldstardark2.mouseEnabled=true;
			This.paul2.mouseEnabled=true;
			This.negev2.mouseEnabled=true;
			This.carlsberg2.mouseEnabled=true;
			This.hiniken2.mouseEnabled=true;
			This.leffe2.mouseEnabled=true;
			This.guinnes2.mouseEnabled=true;
			This.duvel2.mouseEnabled=true;
			This.peroni2.mouseEnabled=true;
			This.malka2.mouseEnabled=true;
			This.tuborg2.mouseEnabled=true;
			This.macabi2.mouseEnabled=true;
			This.alexander2.mouseEnabled=true;
			This.bazelet2.mouseEnabled=true;
			This.goldstar2.mouseEnabled=true;
			This.winshtefen2.mouseEnabled=true;
			This.becks2.mouseEnabled=true;
			This.hogarden2.mouseEnabled=true;
			This.kastilbrown2.mouseEnabled=true;
			This.goldstardark2.mouseEnabled=true;
		}}
		
		
		
		
		
		
		
			
			
			
			//clickonpopup
			this.gol6.addEventListener("click", fl_MouseClickHandler_94.bind(this));
		function fl_MouseClickHandler_94(){if (pop=true){
		
		
				
		this.gol6.visible=false;
				This.stella2.mouseEnabled=false;
			This.kastill2.mouseEnabled=false;
			This.james2.mouseEnabled=false;
			This.skol2.mouseEnabled=false;
			This.samuel2.mouseEnabled=false;
			This.lachuf2.mouseEnabled=false;
			This.becksblue2.mouseEnabled=false;
			This.kastilbrown2.mouseEnabled=false;
			This.sunm2.mouseEnabled=false;
			This.lief2.mouseEnabled=false;
			This.budvis2.mouseEnabled=false;
			This.goldstardark2.mouseEnabled=false;
			This.paul2.mouseEnabled=false;
			This.negev2.mouseEnabled=false;
			This.carlsberg2.mouseEnabled=false;
			This.hiniken2.mouseEnabled=false;
			This.leffe2.mouseEnabled=false;
			This.guinnes2.mouseEnabled=false;
			This.duvel2.mouseEnabled=false;
			This.peroni2.mouseEnabled=false;
			This.malka2.mouseEnabled=false;
			This.tuborg2.mouseEnabled=false;
			This.macabi2.mouseEnabled=false;
			This.alexander2.mouseEnabled=false;
			This.bazelet2.mouseEnabled=false;
			This.goldstar2.mouseEnabled=false;
			This.winshtefen2.mouseEnabled=false;
			This.becks2.mouseEnabled=false;
			This.hogarden2.mouseEnabled=false;
				This.kastilbrown2.mouseEnabled=false;
					This.goldstardark2.mouseEnabled=false;
			
		
		
		}}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		stage.enableMouseOver(frequency);
		this.goldstardark2.addEventListener("mouseout", fl_MouseOutHandler_28.bind(this));
		function fl_MouseOutHandler_28()
		{
			
				if(click==0){
		this.gotoAndStop(0);
		}
		
		}
		
		
		
		//newcastelbrownale1
		
		stage.enableMouseOver(frequency);
		this.kastilbrown2.addEventListener("mouseover", fl_MouseOverHandler_29.bind(this));
		function fl_MouseOverHandler_29()
		{
			if(click==0){
		this.gotoAndStop(29);
		}
		
		}
		
		stage.enableMouseOver(frequency);
		this.kastilbrown2.addEventListener("mouseout", fl_MouseOutHandler_29.bind(this));
		function fl_MouseOutHandler_29()
		{
			
				if(click==0){
		this.gotoAndStop(0);
		}
		
		}
		
		//liefmanes1
		
		
		stage.enableMouseOver(frequency);
		this.lief2.addEventListener("mouseover", fl_MouseOverHandler_30.bind(this));
		function fl_MouseOverHandler_30()
		{
			if(click==0){
		this.gotoAndStop(30);
		}
		
		}
		
		
		stage.enableMouseOver(frequency);
		this.lief2.addEventListener("mouseout", fl_MouseOutHandler_30.bind(this));
		function fl_MouseOutHandler_30()
		{
			
				if(click==0){
		this.gotoAndStop(0);
		}
		
		}
		
		
		
		
		
		/////////////////
		
		
		
		
		
		//per
		//in options2
		stage.enableMouseOver(frequency);
		this.k2.addEventListener("mouseover", fl_MouseOutHandler_1352.bind(this));
		function fl_MouseOutHandler_1352()
		{if (op==0){
		this.gotoAndStop(2);}}
		
		
		stage.enableMouseOver(frequency);
		this.k2.addEventListener("mouseout", fl_MouseOutHandler_1373.bind(this));
		function fl_MouseOutHandler_1373(){if (op==0){
		this.gotoAndStop(35); }}
		
		
		
		
		
		
		
		///mal
		//in options2
		stage.enableMouseOver(frequency);
		this.k11.addEventListener("mouseover", fl_MouseOutHandler_134372.bind(this));
		function fl_MouseOutHandler_134372()
		{if (op==0){
		this.gotoAndStop(11);}}
		
		
		stage.enableMouseOver(frequency);
		this.k11.addEventListener("mouseout", fl_MouseOutHandler_144373.bind(this));
		function fl_MouseOutHandler_144373(){if (op==0){
		this.gotoAndStop(35); }}
		
		
		
		
		
		
		///mal
		//in options2
		stage.enableMouseOver(frequency);
		this.k5.addEventListener("mouseover", fl_MouseOutHandler_13325.bind(this));
		function fl_MouseOutHandler_13325()
		{if (op==0){
		this.gotoAndStop(5);}}
		
		
		stage.enableMouseOver(frequency);
		this.k5.addEventListener("mouseout", fl_MouseOutHandler_14335.bind(this));
		function fl_MouseOutHandler_14335(){if (op==0){
		this.gotoAndStop(35); }}
		
		
		///
		
		stage.enableMouseOver(frequency);
		this.k12.addEventListener("mouseover", fl_MouseOutHandler_132328.bind(this));
		function fl_MouseOutHandler_132328()
		{if (op==0){
		this.gotoAndStop(12);}}
		
		
		stage.enableMouseOver(frequency);
		this.k12.addEventListener("mouseout", fl_MouseOutHandler_142338.bind(this));
		function fl_MouseOutHandler_142338(){if (op==0){
		this.gotoAndStop(35); }}
		
		
		
		
		
		
		///mal
		//in options2
		stage.enableMouseOver(frequency);
		this.k6.addEventListener("mouseover", fl_MouseOutHandler_61332.bind(this));
		function fl_MouseOutHandler_61332()
		{if (op==0){
		this.gotoAndStop(6);}}
		
		
		stage.enableMouseOver(frequency);
		this.k6.addEventListener("mouseout", fl_MouseOutHandler_61433.bind(this));
		function fl_MouseOutHandler_61433(){if (op==0){
		this.gotoAndStop(35); }}
		
		
		
		
		
		
		
		
		//in options2
		stage.enableMouseOver(frequency);
		this.k13.addEventListener("mouseover", fl_MouseOutHandler_611332.bind(this));
		function fl_MouseOutHandler_611332()
		{if (op==0){
		this.gotoAndStop(13);}}
		
		
		stage.enableMouseOver(frequency);
		this.k13.addEventListener("mouseout", fl_MouseOutHandler_611433.bind(this));
		function fl_MouseOutHandler_611433(){if (op==0){
		this.gotoAndStop(35); }}
		
		
		
		
		
		
		
		
		
		
		//in options2
		stage.enableMouseOver(frequency);
		this.k15.addEventListener("mouseover", fl_MouseOutHandler_613332.bind(this));
		function fl_MouseOutHandler_613332()
		{if (op==0){
		this.gotoAndStop(15);}}
		
		
		stage.enableMouseOver(frequency);
		this.k15.addEventListener("mouseout", fl_MouseOutHandler_614333.bind(this));
		function fl_MouseOutHandler_614333(){if (op==0){
		this.gotoAndStop(35); }}
		
		
		///mal
		//in options2
		stage.enableMouseOver(frequency);
		this.k8.addEventListener("mouseover", fl_MouseOutHandler_13328.bind(this));
		function fl_MouseOutHandler_13328()
		{if (op==0){
		this.gotoAndStop(8);}}
		
		
		stage.enableMouseOver(frequency);
		this.k8.addEventListener("mouseout", fl_MouseOutHandler_14338.bind(this));
		function fl_MouseOutHandler_14338(){if (op==0){
		this.gotoAndStop(35); }}
		
		
		
		stage.enableMouseOver(frequency);
		this.k9.addEventListener("mouseover", fl_MouseOutHandler_193328.bind(this));
		function fl_MouseOutHandler_193328()
		{if (op==0){
		this.gotoAndStop(9);}}
		
		
		stage.enableMouseOver(frequency);
		this.k9.addEventListener("mouseout", fl_MouseOutHandler_194338.bind(this));
		function fl_MouseOutHandler_194338(){if (op==0){
		this.gotoAndStop(35); }}
		
		
		
		
		
		
		
		
		
		
		
		
		///mal
		//in options2
		stage.enableMouseOver(frequency);
		this.k3.addEventListener("mouseover", fl_MouseOutHandler_1332.bind(this));
		function fl_MouseOutHandler_1332()
		{if (op==0){
		this.gotoAndStop(3);}}
		
		
		stage.enableMouseOver(frequency);
		this.k3.addEventListener("mouseout", fl_MouseOutHandler_1433.bind(this));
		function fl_MouseOutHandler_1433(){if (op==0){
		this.gotoAndStop(35); }}
		
		
		
		
		
		
		
		
		//in options2
		stage.enableMouseOver(frequency);
		this.k18.addEventListener("mouseover", fl_MouseOutHandler_13382.bind(this));
		function fl_MouseOutHandler_13382()
		{if (op==0){
		this.gotoAndStop(18);}}
		
		
		stage.enableMouseOver(frequency);
		this.k18.addEventListener("mouseout", fl_MouseOutHandler_14338.bind(this));
		function fl_MouseOutHandler_14338(){if (op==0){
		this.gotoAndStop(35); }}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		//in options2
		stage.enableMouseOver(frequency);
		this.k23.addEventListener("mouseover", fl_MouseOutHandler_221332.bind(this));
		function fl_MouseOutHandler_221332()
		{if (op==0){
		this.gotoAndStop(23);}}
		
		
		stage.enableMouseOver(frequency);
		this.k23.addEventListener("mouseout", fl_MouseOutHandler_221433.bind(this));
		function fl_MouseOutHandler_221433(){if (op==0){
		this.gotoAndStop(35); }}
		
		
		
		
		
		
		
		
		
		
		
		//in options2
		stage.enableMouseOver(frequency);
		this.k24.addEventListener("mouseover", fl_MouseOutHandler_13302.bind(this));
		function fl_MouseOutHandler_13302()
		{if (op==0){
		this.gotoAndStop(24);}}
		
		
		stage.enableMouseOver(frequency);
		this.k24.addEventListener("mouseout", fl_MouseOutHandler_14303.bind(this));
		function fl_MouseOutHandler_14303(){if (op==0){
		this.gotoAndStop(35); }}
		
		
		
		
		
		
		
		
		
		
		
		
		
		//in options2
		stage.enableMouseOver(frequency);
		this.k29.addEventListener("mouseover", fl_MouseOutHandler_133029.bind(this));
		function fl_MouseOutHandler_133029()
		{if (op==0){
		this.gotoAndStop(29);}}
		
		
		stage.enableMouseOver(frequency);
		this.k29.addEventListener("mouseout", fl_MouseOutHandler_143039.bind(this));
		function fl_MouseOutHandler_143039(){if (op==0){
		this.gotoAndStop(35); }}
		
		
		
		
		
		
		//in options2
		stage.enableMouseOver(frequency);
		this.k25.addEventListener("mouseover", fl_MouseOutHandler_133502.bind(this));
		function fl_MouseOutHandler_133502()
		{if (op==0){
		this.gotoAndStop(25);}}
		
		
		stage.enableMouseOver(frequency);
		this.k25.addEventListener("mouseout", fl_MouseOutHandler_143035.bind(this));
		function fl_MouseOutHandler_143035(){if (op==0){
		this.gotoAndStop(35); }}
		
		
		
		
		
		
		
		
		//in options2
		stage.enableMouseOver(frequency);
		this.k26.addEventListener("mouseover", fl_MouseOutHandler_1330266.bind(this));
		function fl_MouseOutHandler_1330266()
		{if (op==0){
		this.gotoAndStop(26);}}
		
		
		stage.enableMouseOver(frequency);
		this.k26.addEventListener("mouseout", fl_MouseOutHandler_1430366.bind(this));
		function fl_MouseOutHandler_1430366(){if (op==0){
		this.gotoAndStop(35); }}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		//in options2
		stage.enableMouseOver(frequency);
		this.k27.addEventListener("mouseover", fl_MouseOutHandler_1377302.bind(this));
		function fl_MouseOutHandler_1377302()
		{if (op==0){
		this.gotoAndStop(27);}}
		
		
		stage.enableMouseOver(frequency);
		this.k27.addEventListener("mouseout", fl_MouseOutHandler_1477303.bind(this));
		function fl_MouseOutHandler_1477303(){if (op==0){
		this.gotoAndStop(35); }}
		
		
		
		
		
		
		
		//in options2
		stage.enableMouseOver(frequency);
		this.k28.addEventListener("mouseover", fl_MouseOutHandler_133802.bind(this));
		function fl_MouseOutHandler_133802()
		{if (op==0){
		this.gotoAndStop(28);}}
		
		
		stage.enableMouseOver(frequency);
		this.k28.addEventListener("mouseout", fl_MouseOutHandler_1430388.bind(this));
		function fl_MouseOutHandler_1430388(){if (op==0){
		this.gotoAndStop(35); }}
		
		
		
		
		
		
		
		
		
		
		//////
		
		
		////corona
		//in options2
		stage.enableMouseOver(frequency);
		this.k10.addEventListener("mouseover", fl_MouseOutHandler_1932.bind(this));
		function fl_MouseOutHandler_1932()
		{if (op==0){
		this.gotoAndStop(10);}}
		
		
		stage.enableMouseOver(frequency);
		this.k10.addEventListener("mouseout", fl_MouseOutHandler_1933.bind(this));
		function fl_MouseOutHandler_1933(){if (op==0){
		this.gotoAndStop(35); }}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		//////////////
		
		///bnoni-merira-meyuve
			this.beinonit00.addEventListener("click", fl_MouseClickHandler_2700.bind(this));
		function fl_MouseClickHandler_2700()
		{click=1;
			if(click==1){
				this.gotoAndStop(35);
				click++; }}
				
				
				
		this.mer.addEventListener("click", fl_MouseClickHandler_2220171.bind(this));
		function fl_MouseClickHandler_2220171()
			{ 
				if(click==2){
				this.gotoAndStop(34);
				
					}}
				
				
				
				
			this.mv.addEventListener("click", fl_MouseClickHandler_20173.bind(this));
		function fl_MouseClickHandler_20173(){
			if(click==2){
				this.gotoAndStop(36);
			
			}}
		
				
				
				
				
				/////////halasha-lomerira-yevu
			
			
				
				
				
			this.halasha00.addEventListener("click", fl_MouseClickHandler_52700.bind(this));
		function fl_MouseClickHandler_52700()
		{click=1;
			if(click==1){
				this.gotoAndStop(31);
				click++; }}
				
				
				
		this.lomer.addEventListener("click", fl_MouseClickHandler_52220171.bind(this));
		function fl_MouseClickHandler_52220171()
			{ 
				if(click==2){
				this.gotoAndStop(32);click=3;
				
					}}
				
				
				
				
			this.mv.addEventListener("click", fl_MouseClickHandler_520173.bind(this));
		function fl_MouseClickHandler_520173(){
			if(click==3){
				this.gotoAndStop(33);
			
			}}
		
				
				
				
				
		//hazaka-meodmar-mekomi
			
			
			
			
				this.hazaka00.addEventListener("click", fl_MouseClickHandler_5270660.bind(this));
		function fl_MouseClickHandler_5270660()
		{click=1;
			if(click==1){
				this.gotoAndStop(38);
				click++; }}
				
				
				
		this.meodmer.addEventListener("click", fl_MouseClickHandler_522201716.bind(this));
		function fl_MouseClickHandler_522201716()
			{ 
				if(click==2){
				this.gotoAndStop(37);
				
					}}
				
				
				
				
			this.mk.addEventListener("click", fl_MouseClickHandler_6520173.bind(this));
		function fl_MouseClickHandler_6520173(){
			if(click==2){
				this.gotoAndStop(39);
			
			}}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59));

	// POPUP
	this.cor6 = new lib.cor6();
	this.cor6.parent = this;
	this.cor6.setTransform(440.5,493,1,1,0,0,0,470.5,439);
	new cjs.ButtonHelper(this.cor6, 0, 1, 1);

	this.hog6 = new lib.hog6();
	this.hog6.parent = this;
	this.hog6.setTransform(440.5,498,1,1,0,0,0,470.5,439);
	new cjs.ButtonHelper(this.hog6, 0, 1, 1);

	this.ste6 = new lib.ste6();
	this.ste6.parent = this;
	this.ste6.setTransform(436.5,484,1,1,0,0,0,470.5,439);
	new cjs.ButtonHelper(this.ste6, 0, 1, 1);

	this.gui6 = new lib.gui6();
	this.gui6.parent = this;
	this.gui6.setTransform(443.5,490,1,1,0,0,0,470.5,439);
	new cjs.ButtonHelper(this.gui6, 0, 1, 1);

	this.cas6 = new lib.cas6();
	this.cas6.parent = this;
	this.cas6.setTransform(438.5,487,1,1,0,0,0,470.5,439);
	new cjs.ButtonHelper(this.cas6, 0, 1, 1);

	this.gol6 = new lib.gol6();
	this.gol6.parent = this;
	this.gol6.setTransform(440.5,470,1,1,0,0,0,470.5,439);
	new cjs.ButtonHelper(this.gol6, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.cor6}]},10).to({state:[]},1).to({state:[{t:this.hog6}]},1).to({state:[]},1).to({state:[{t:this.ste6}]},2).to({state:[{t:this.gui6}]},1).to({state:[]},1).to({state:[{t:this.cas6}]},4).to({state:[]},1).to({state:[{t:this.gol6}]},6).to({state:[]},1).to({state:[]},5).wait(25));

	// Actions
	this.meyuve00 = new lib.testbutton1();
	this.meyuve00.parent = this;
	this.meyuve00.setTransform(823.2,724,1.776,0.299,0,0,0,53.6,63.5);
	new cjs.ButtonHelper(this.meyuve00, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.mekomi00 = new lib.testbutton1();
	this.mekomi00.parent = this;
	this.mekomi00.setTransform(823.2,685,1.776,0.299,0,0,0,53.6,63.5);
	new cjs.ButtonHelper(this.mekomi00, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.meodmerira00 = new lib.testbutton1();
	this.meodmerira00.parent = this;
	this.meodmerira00.setTransform(823.2,570,1.776,0.299,0,0,0,53.6,63.5);
	new cjs.ButtonHelper(this.meodmerira00, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.merira00 = new lib.testbutton1();
	this.merira00.parent = this;
	this.merira00.setTransform(823.2,529,1.776,0.299,0,0,0,53.6,63.5);
	new cjs.ButtonHelper(this.merira00, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.lomerira00 = new lib.testbutton1();
	this.lomerira00.parent = this;
	this.lomerira00.setTransform(822.2,490,1.776,0.299,0,0,0,53.6,63.5);
	new cjs.ButtonHelper(this.lomerira00, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.hazaka00 = new lib.testbutton1();
	this.hazaka00.parent = this;
	this.hazaka00.setTransform(823.2,385,1.776,0.299,0,0,0,53.6,63.5);
	new cjs.ButtonHelper(this.hazaka00, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.beinonit00 = new lib.testbutton1();
	this.beinonit00.parent = this;
	this.beinonit00.setTransform(821.2,343,1.776,0.299,0,0,0,53.6,63.5);
	new cjs.ButtonHelper(this.beinonit00, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.halasha00 = new lib.testbutton1();
	this.halasha00.parent = this;
	this.halasha00.setTransform(822.2,302,1.776,0.299,0,0,0,53.6,63.5);
	new cjs.ButtonHelper(this.halasha00, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.tuborg2 = new lib.testbutton1();
	this.tuborg2.parent = this;
	this.tuborg2.setTransform(310.4,382.1,1,0.961,0,0,0,53.5,63.6);
	new cjs.ButtonHelper(this.tuborg2, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.hiniken2 = new lib.testbutton1();
	this.hiniken2.parent = this;
	this.hiniken2.setTransform(203.4,382.1,1,0.961,0,0,0,53.5,63.6);
	new cjs.ButtonHelper(this.hiniken2, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.lief2 = new lib.testbutton1();
	this.lief2.parent = this;
	this.lief2.setTransform(619,755.6,0.991,0.968,0,0,0,53.5,63.6);
	new cjs.ButtonHelper(this.lief2, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.kastilbrown2 = new lib.testbutton1();
	this.kastilbrown2.parent = this;
	this.kastilbrown2.setTransform(516,755.6,0.991,0.968,0,0,0,53.5,63.6);
	new cjs.ButtonHelper(this.kastilbrown2, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.goldstardark2 = new lib.testbutton1();
	this.goldstardark2.parent = this;
	this.goldstardark2.setTransform(410,755.6,0.991,0.968,0,0,0,53.5,63.6);
	new cjs.ButtonHelper(this.goldstardark2, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.paul2 = new lib.testbutton1();
	this.paul2.parent = this;
	this.paul2.setTransform(306,755.6,0.991,0.968,0,0,0,53.5,63.6);
	new cjs.ButtonHelper(this.paul2, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.sunm2 = new lib.testbutton1();
	this.sunm2.parent = this;
	this.sunm2.setTransform(199,755.6,0.991,0.968,0,0,0,53.5,63.6);
	new cjs.ButtonHelper(this.sunm2, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.negev2 = new lib.testbutton1();
	this.negev2.parent = this;
	this.negev2.setTransform(94,753.6,0.991,0.968,0,0,0,53.5,63.6);
	new cjs.ButtonHelper(this.negev2, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.budvis2 = new lib.testbutton1();
	this.budvis2.parent = this;
	this.budvis2.setTransform(616,630.5,0.991,1,0,0,0,53.5,63.5);
	new cjs.ButtonHelper(this.budvis2, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.samuel2 = new lib.testbutton1();
	this.samuel2.parent = this;
	this.samuel2.setTransform(511,628.5,0.991,1,0,0,0,53.5,63.5);
	new cjs.ButtonHelper(this.samuel2, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.skol2 = new lib.testbutton1();
	this.skol2.parent = this;
	this.skol2.setTransform(410,630.5,0.991,1,0,0,0,53.5,63.5);
	new cjs.ButtonHelper(this.skol2, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.kastill2 = new lib.testbutton1();
	this.kastill2.parent = this;
	this.kastill2.setTransform(304,631.5,0.991,1,0,0,0,53.5,63.5);
	new cjs.ButtonHelper(this.kastill2, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.becksblue2 = new lib.testbutton1();
	this.becksblue2.parent = this;
	this.becksblue2.setTransform(200,631.5,0.991,1,0,0,0,53.5,63.5);
	new cjs.ButtonHelper(this.becksblue2, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.james2 = new lib.testbutton1();
	this.james2.parent = this;
	this.james2.setTransform(94,633.5,0.991,1,0,0,0,53.5,63.5);
	new cjs.ButtonHelper(this.james2, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.carlsberg2 = new lib.testbutton1();
	this.carlsberg2.parent = this;
	this.carlsberg2.setTransform(619,508.1,0.991,0.945,0,0,0,53.5,63.6);
	new cjs.ButtonHelper(this.carlsberg2, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.lachuf2 = new lib.testbutton1();
	this.lachuf2.parent = this;
	this.lachuf2.setTransform(513,508.3,0.991,0.945,0,0,0,53.5,63.8);
	new cjs.ButtonHelper(this.lachuf2, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.guinnes2 = new lib.testbutton1();
	this.guinnes2.parent = this;
	this.guinnes2.setTransform(410,507.6,0.991,0.969,0,0,0,53.5,63.6);
	new cjs.ButtonHelper(this.guinnes2, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.stella2 = new lib.testbutton1();
	this.stella2.parent = this;
	this.stella2.setTransform(305,507.5,0.991,1,0,0,0,53.5,63.5);
	new cjs.ButtonHelper(this.stella2, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.leffe2 = new lib.testbutton1();
	this.leffe2.parent = this;
	this.leffe2.setTransform(198,507.5,0.991,1,0,0,0,53.5,63.5);
	new cjs.ButtonHelper(this.leffe2, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.becks2 = new lib.testbutton1();
	this.becks2.parent = this;
	this.becks2.setTransform(93,507.5,0.991,1,0,0,0,53.5,63.5);
	new cjs.ButtonHelper(this.becks2, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.hogarden2 = new lib.testbutton1();
	this.hogarden2.parent = this;
	this.hogarden2.setTransform(619,383.5,0.991,1,0,0,0,53.5,63.5);
	new cjs.ButtonHelper(this.hogarden2, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.winshtefen2 = new lib.testbutton1();
	this.winshtefen2.parent = this;
	this.winshtefen2.setTransform(514,383.5,0.991,1,0,0,0,53.5,63.5);
	new cjs.ButtonHelper(this.winshtefen2, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.corona2 = new lib.testbutton1();
	this.corona2.parent = this;
	this.corona2.setTransform(410,383.5,0.991,1,0,0,0,53.5,63.5);
	new cjs.ButtonHelper(this.corona2, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.macabi2 = new lib.testbutton1();
	this.macabi2.parent = this;
	this.macabi2.setTransform(97,382.5,0.991,1,0,0,0,53.5,63.5);
	new cjs.ButtonHelper(this.macabi2, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.bazelet2 = new lib.testbutton1();
	this.bazelet2.parent = this;
	this.bazelet2.setTransform(619,256.5,0.991,1,0,0,0,53.5,63.5);
	new cjs.ButtonHelper(this.bazelet2, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.alexander2 = new lib.testbutton1();
	this.alexander2.parent = this;
	this.alexander2.setTransform(514,260.5,0.991,1,0,0,0,53.5,63.5);
	new cjs.ButtonHelper(this.alexander2, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.duvel2 = new lib.testbutton1();
	this.duvel2.parent = this;
	this.duvel2.setTransform(412,257.5,0.991,1,0,0,0,53.7,63.5);
	new cjs.ButtonHelper(this.duvel2, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.malka2 = new lib.testbutton1();
	this.malka2.parent = this;
	this.malka2.setTransform(306,255.6,0.991,0.984,0,0,0,53.5,63.6);
	new cjs.ButtonHelper(this.malka2, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.peroni2 = new lib.testbutton1();
	this.peroni2.parent = this;
	this.peroni2.setTransform(202.6,257,0.981,0.961,0,0,0,53.6,63.5);
	new cjs.ButtonHelper(this.peroni2, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.goldstar2 = new lib.testbutton1();
	this.goldstar2.parent = this;
	this.goldstar2.setTransform(96.4,257.1,1,0.961,0,0,0,53.5,63.6);
	new cjs.ButtonHelper(this.goldstar2, 0, 1, 2, false, new lib.testbutton1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.goldstar2},{t:this.peroni2},{t:this.malka2},{t:this.duvel2},{t:this.alexander2},{t:this.bazelet2},{t:this.macabi2},{t:this.corona2},{t:this.winshtefen2},{t:this.hogarden2},{t:this.becks2},{t:this.leffe2},{t:this.stella2},{t:this.guinnes2},{t:this.lachuf2},{t:this.carlsberg2},{t:this.james2},{t:this.becksblue2},{t:this.kastill2},{t:this.skol2},{t:this.samuel2},{t:this.budvis2},{t:this.negev2},{t:this.sunm2},{t:this.paul2},{t:this.goldstardark2},{t:this.kastilbrown2},{t:this.lief2},{t:this.hiniken2},{t:this.tuborg2},{t:this.halasha00,p:{x:822.2,y:302}},{t:this.beinonit00,p:{x:821.2,y:343}},{t:this.hazaka00,p:{x:823.2,y:385}},{t:this.lomerira00,p:{x:822.2,y:490}},{t:this.merira00,p:{x:823.2,y:529}},{t:this.meodmerira00,p:{x:823.2,y:570}},{t:this.mekomi00,p:{x:823.2,y:685}},{t:this.meyuve00,p:{x:823.2,y:724}}]}).to({state:[{t:this.halasha00,p:{x:825.2,y:301}},{t:this.beinonit00,p:{x:824.2,y:342}},{t:this.hazaka00,p:{x:826.2,y:384}},{t:this.lomerira00,p:{x:825.2,y:489}},{t:this.merira00,p:{x:826.2,y:528}},{t:this.meodmerira00,p:{x:826.2,y:569}},{t:this.mekomi00,p:{x:826.2,y:684}},{t:this.meyuve00,p:{x:826.2,y:723}}]},30).to({state:[]},1).to({state:[]},19).wait(9));

	// names
	this.instance = new lib.לחץעלהבקבוקלמידענוסף();
	this.instance.parent = this;
	this.instance.setTransform(79,131);

	this.text = new cjs.Text("גולדסטאר", "bold 20px 'Heebo'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 99;
	this.text.parent = this;
	this.text.setTransform(97,99);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(2,1,1).p("AqcqKIU5AAQBsAABMBMQBKBKACBnIAAC2QAABrhMBMQhMBMhsAAIjFAAIo8JfIEypfItqAAQhsAAhMhMQhMhMAAhrIAAi2QAChnBKhKQBMhMBsAAg");
	this.shape.setTransform(141,153.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADOAsItqAAQhsAAhMhMQhMhMAAhrIAAi2QAChnBKhKQBMhMBsAAIU5AAQBsAABMBMQBKBKACBnIAAC2QAABrhMBMQhMBMhsAAIjFAAIo8Jfg");
	this.shape_1.setTransform(141,153.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1,p:{x:141,y:153.9}},{t:this.shape,p:{x:141,y:153.9}},{t:this.text,p:{x:97,text:"גולדסטאר",y:99,lineWidth:99}},{t:this.instance,p:{x:79,y:131}}]},1).to({state:[{t:this.shape_1,p:{x:248,y:153.9}},{t:this.shape,p:{x:248,y:153.9}},{t:this.text,p:{x:229.1,text:"פרוני",y:99,lineWidth:99}},{t:this.instance,p:{x:186,y:131}}]},1).to({state:[{t:this.shape_1,p:{x:350,y:153.9}},{t:this.shape,p:{x:350,y:153.9}},{t:this.text,p:{x:329.1,text:"מלכה",y:99,lineWidth:99}},{t:this.instance,p:{x:288,y:131}}]},1).to({state:[{t:this.shape_1,p:{x:448.9,y:153.9}},{t:this.shape,p:{x:448.9,y:153.9}},{t:this.text,p:{x:428,text:"דובל",y:99,lineWidth:99}},{t:this.instance,p:{x:387,y:131}}]},1).to({state:[{t:this.shape_1,p:{x:558.9,y:153.9}},{t:this.shape,p:{x:558.9,y:153.9}},{t:this.text,p:{x:514,text:"אלכסנדר",y:99,lineWidth:99}},{t:this.instance,p:{x:497,y:131}}]},1).to({state:[{t:this.shape_1,p:{x:662,y:153.9}},{t:this.shape,p:{x:662,y:153.9}},{t:this.text,p:{x:648.1,text:"בזלת",y:99,lineWidth:99}},{t:this.instance,p:{x:600,y:131}}]},1).to({state:[{t:this.shape_1,p:{x:138.8,y:277.9}},{t:this.shape,p:{x:138.8,y:277.9}},{t:this.text,p:{x:97,text:"מכבי 7.9",y:223,lineWidth:99}},{t:this.instance,p:{x:77,y:255}}]},1).to({state:[{t:this.shape_1,p:{x:248.9,y:277.9}},{t:this.shape,p:{x:248.9,y:277.9}},{t:this.text,p:{x:209.7,text:"הייניקן",y:223,lineWidth:99}},{t:this.instance,p:{x:187,y:255}}]},1).to({state:[{t:this.shape_1,p:{x:347.9,y:277.9}},{t:this.shape,p:{x:347.9,y:277.9}},{t:this.text,p:{x:326.4,text:"טובורג",y:223,lineWidth:99}},{t:this.instance,p:{x:286,y:255}}]},1).to({state:[{t:this.shape_1,p:{x:449.9,y:284.1}},{t:this.shape,p:{x:449.9,y:284.1}},{t:this.text,p:{x:418,text:"קורונה",y:229,lineWidth:99}},{t:this.instance,p:{x:388,y:261}}]},1).to({state:[{t:this.shape_1,p:{x:553.9,y:284.1}},{t:this.shape,p:{x:553.9,y:284.1}},{t:this.text,p:{x:522,text:"ויישטפן",y:229,lineWidth:99}},{t:this.instance,p:{x:492,y:261}}]},1).to({state:[{t:this.shape_1,p:{x:663.1,y:284.1}},{t:this.shape,p:{x:663.1,y:284.1}},{t:this.text,p:{x:640.2,text:"הוגרדן",y:229,lineWidth:99}},{t:this.instance,p:{x:601,y:261}}]},1).to({state:[{t:this.shape_1,p:{x:143.9,y:401.9}},{t:this.shape,p:{x:143.9,y:401.9}},{t:this.text,p:{x:97,text:"בקס אדום",y:347,lineWidth:99}},{t:this.instance,p:{x:82,y:379}}]},1).to({state:[{t:this.shape_1,p:{x:244,y:401.9}},{t:this.shape,p:{x:244,y:401.9}},{t:this.text,p:{x:200,text:"לף בלונד",y:347,lineWidth:99}},{t:this.instance,p:{x:182,y:379}}]},1).to({state:[{t:this.shape_1,p:{x:349,y:401.9}},{t:this.shape,p:{x:349,y:401.9}},{t:this.text,p:{x:289,text:"סטלה ארטואה",y:345.3,lineWidth:151}},{t:this.instance,p:{x:287,y:379}}]},1).to({state:[{t:this.shape_1,p:{x:454,y:401.9}},{t:this.shape,p:{x:454,y:401.9}},{t:this.text,p:{x:431.1,text:"גינס",y:346.8,lineWidth:99}},{t:this.instance,p:{x:392,y:379}}]},1).to({state:[{t:this.shape_1,p:{x:553.9,y:412.9}},{t:this.shape,p:{x:553.9,y:412.9}},{t:this.text,p:{x:516,text:"לה - שוף",y:358,lineWidth:99}},{t:this.instance,p:{x:492,y:390}}]},1).to({state:[{t:this.shape_1,p:{x:650.1,y:412.9}},{t:this.shape,p:{x:650.1,y:412.9}},{t:this.text,p:{x:612.2,text:"קרלסברג",y:358,lineWidth:99}},{t:this.instance,p:{x:588,y:390}}]},1).to({state:[{t:this.shape_1,p:{x:138.9,y:532.1}},{t:this.shape,p:{x:138.9,y:532.1}},{t:this.text,p:{x:123,text:"ג'מס",y:477,lineWidth:99}},{t:this.instance,p:{x:77,y:509}}]},1).to({state:[{t:this.shape_1,p:{x:247.9,y:532.1}},{t:this.shape,p:{x:247.9,y:532.1}},{t:this.text,p:{x:209,text:"בקס כחול",y:477,lineWidth:99}},{t:this.instance,p:{x:186,y:509}}]},1).to({state:[{t:this.shape_1,p:{x:343.9,y:532.1}},{t:this.shape,p:{x:343.9,y:532.1}},{t:this.text,p:{x:312,text:"קסטיל",y:477,lineWidth:99}},{t:this.instance,p:{x:282,y:509}}]},1).to({state:[{t:this.shape_1,p:{x:449.9,y:532.1}},{t:this.shape,p:{x:449.9,y:532.1}},{t:this.text,p:{x:418,text:"סקול",y:477,lineWidth:99}},{t:this.instance,p:{x:388,y:509}}]},1).to({state:[{t:this.shape_1,p:{x:564,y:532.1}},{t:this.shape,p:{x:564,y:532.1}},{t:this.text,p:{x:511.1,text:"סמואל אדמס",y:477,lineWidth:129}},{t:this.instance,p:{x:502,y:509}}]},1).to({state:[{t:this.shape_1,p:{x:660.9,y:532.1}},{t:this.shape,p:{x:660.9,y:532.1}},{t:this.text,p:{x:632.9,text:"בודוויזר",y:477,lineWidth:129}},{t:this.instance,p:{x:599,y:509}}]},1).to({state:[{t:this.shape_1,p:{x:142.8,y:656.1}},{t:this.shape,p:{x:142.8,y:656.1}},{t:this.text,p:{x:130.7,text:"נגב",y:599.3,lineWidth:129}},{t:this.instance,p:{x:81,y:633}}]},1).to({state:[{t:this.shape_1,p:{x:243.8,y:656.1}},{t:this.shape,p:{x:243.8,y:656.1}},{t:this.text,p:{x:205.6,text:"סאן מיגל",y:599.3,lineWidth:129}},{t:this.instance,p:{x:182,y:633}}]},1).to({state:[{t:this.shape_1,p:{x:355.8,y:656.1}},{t:this.shape,p:{x:355.8,y:656.1}},{t:this.text,p:{x:317.6,text:"פאולנר",y:599.3,lineWidth:129}},{t:this.instance,p:{x:294,y:633}}]},1).to({state:[{t:this.shape_1,p:{x:460.8,y:656.1}},{t:this.shape,p:{x:460.8,y:656.1}},{t:this.text,p:{x:374.9,text:"גולדסטאר אנפילטרד",y:605.2,lineWidth:215}},{t:this.instance,p:{x:399,y:633}}]},1).to({state:[{t:this.shape_1,p:{x:559.9,y:656.1}},{t:this.shape,p:{x:559.9,y:656.1}},{t:this.text,p:{x:518.3,text:"ניוקאסל",y:599.3,lineWidth:175}},{t:this.instance,p:{x:498,y:633}}]},1).to({state:[{t:this.shape_1,p:{x:658.9,y:656.1}},{t:this.shape,p:{x:658.9,y:656.1}},{t:this.text,p:{x:620.7,text:"ליפמנס",y:599.3,lineWidth:129}},{t:this.instance,p:{x:597,y:633}}]},1).to({state:[]},1).wait(28));

	// big
	this.s1 = new lib.s1();
	this.s1.parent = this;
	this.s1.setTransform(94,245.9,1,1,0,0,0,53,73.1);
	new cjs.ButtonHelper(this.s1, 0, 1, 1);

	this.s4 = new lib.s4();
	this.s4.parent = this;
	this.s4.setTransform(199,245.4,1,1,0,0,0,53,73.6);
	new cjs.ButtonHelper(this.s4, 0, 1, 1);

	this.s5 = new lib.s5();
	this.s5.parent = this;
	this.s5.setTransform(305,245,1,1,0,0,0,53,74);
	new cjs.ButtonHelper(this.s5, 0, 1, 1);

	this.duvel = new lib.duvel();
	this.duvel.parent = this;
	this.duvel.setTransform(409.5,258,1.277,1.277,0,0,0,18.5,47);
	new cjs.ButtonHelper(this.duvel, 0, 1, 1);

	this.alexander = new lib.alexander();
	this.alexander.parent = this;
	this.alexander.setTransform(512.1,249.5,1.248,1.248,0,0,0,15,56.5);
	new cjs.ButtonHelper(this.alexander, 0, 1, 1);

	this.instance_1 = new lib.Layer1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(600,166,0.783,0.783);

	this.makabi = new lib.makabi();
	this.makabi.parent = this;
	this.makabi.setTransform(95.2,373.6,1.226,1.226,0,0,0,16.6,57.6);
	new cjs.ButtonHelper(this.makabi, 0, 1, 1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(2,1,1).p("AAhkEQg7AAgzgVAAqEaIAkg+ABNEKIgSAQ");
	this.shape_2.setTransform(110.3,328.8);

	this.heineken = new lib.heinekout();
	this.heineken.parent = this;
	this.heineken.setTransform(200,373,1,1,0,0,0,54,71);
	new cjs.ButtonHelper(this.heineken, 0, 1, 2, false, new lib.heinekout(), 3);

	this.tuborg = new lib.tuborg();
	this.tuborg.parent = this;
	this.tuborg.setTransform(306.2,365.1,1.22,1.22,0,0,0,15.1,49.3);
	new cjs.ButtonHelper(this.tuborg, 0, 1, 1);

	this.corona = new lib.corona();
	this.corona.parent = this;
	this.corona.setTransform(411.3,363,1.208,1.208,0,0,0,14.1,48.9);
	new cjs.ButtonHelper(this.corona, 0, 1, 1);

	this.winshtef = new lib.winshtef();
	this.winshtef.parent = this;
	this.winshtef.setTransform(511.6,370.2,1.253,1.253,0,0,0,16.4,59.1);
	new cjs.ButtonHelper(this.winshtef, 0, 1, 1);

	this.hogarden = new lib.hogarden();
	this.hogarden.parent = this;
	this.hogarden.setTransform(619.2,364.5,1.188,1.188,0,0,0,16,50.1);
	new cjs.ButtonHelper(this.hogarden, 0, 1, 1);

	this.beks = new lib.beks();
	this.beks.parent = this;
	this.beks.setTransform(97.2,494.8,1.284,1.284,0,0,0,15.1,56.7);
	new cjs.ButtonHelper(this.beks, 0, 1, 1);

	this.s14 = new lib.lf();
	this.s14.parent = this;
	this.s14.setTransform(199.3,495.1,1.24,1.24,0,0,0,16.1,56.6);
	new cjs.ButtonHelper(this.s14, 0, 1, 1);

	this.instance_2 = new lib.Layer2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(249,423,0.753,0.753);

	this.gines = new lib.gines();
	this.gines.parent = this;
	this.gines.setTransform(410.1,494.7,1.27,1.27,0,0,0,16,55.6);
	new cjs.ButtonHelper(this.gines, 0, 1, 1);

	this.lachuf = new lib.lachuf();
	this.lachuf.parent = this;
	this.lachuf.setTransform(514.5,507.7,1.264,1.264,0,0,0,17.5,45.6);
	new cjs.ButtonHelper(this.lachuf, 0, 1, 1);

	this.carlsberg = new lib.carlsberg();
	this.carlsberg.parent = this;
	this.carlsberg.setTransform(617.2,495.6,1.23,1.23,0,0,0,14.5,56.6);
	new cjs.ButtonHelper(this.carlsberg, 0, 1, 1);

	this.jms = new lib.jms();
	this.jms.parent = this;
	this.jms.setTransform(96.2,617.7,1.324,1.324,0,0,0,14.6,55.6);
	new cjs.ButtonHelper(this.jms, 0, 1, 1);

	this.bksblue = new lib.bksblue();
	this.bksblue.parent = this;
	this.bksblue.setTransform(200,617.2,1.321,1.321,0,0,0,15,56.1);
	new cjs.ButtonHelper(this.bksblue, 0, 1, 1);

	this.kastel = new lib.kastel();
	this.kastel.parent = this;
	this.kastel.setTransform(305.2,632.7,1.274,1.274,0,0,0,19.1,47.6);
	new cjs.ButtonHelper(this.kastel, 0, 1, 1);

	this.skol = new lib.skol_2();
	this.skol.parent = this;
	this.skol.setTransform(410.2,617.7,1.324,1.324,0,0,0,13.6,55.6);
	new cjs.ButtonHelper(this.skol, 0, 1, 1);

	this.instance_3 = new lib.SamuelAdams();
	this.instance_3.parent = this;
	this.instance_3.setTransform(496,550,1.27,1.27);

	this.budwis = new lib.budwis();
	this.budwis.parent = this;
	this.budwis.setTransform(621.7,633.1,1.307,1.307,0,0,0,16.4,66.7);
	new cjs.ButtonHelper(this.budwis, 0, 1, 1);

	this.negev = new lib.negev();
	this.negev.parent = this;
	this.negev.setTransform(96.2,740,1.304,1.304,0,0,0,15.1,56);
	new cjs.ButtonHelper(this.negev, 0, 1, 1);

	this.sanmigel = new lib.sanmigel();
	this.sanmigel.parent = this;
	this.sanmigel.setTransform(200.1,740.2,1.281,1.281,0,0,0,15.5,57.1);
	new cjs.ButtonHelper(this.sanmigel, 0, 1, 1);

	this.paulner = new lib.paulner();
	this.paulner.parent = this;
	this.paulner.setTransform(305.2,737,1.345,1.345,0,0,0,14.1,58);
	new cjs.ButtonHelper(this.paulner, 0, 1, 1);

	this.golstar = new lib.golstar();
	this.golstar.parent = this;
	this.golstar.setTransform(409.7,742.6,1.297,1.297,0,0,0,16.1,57.6);
	new cjs.ButtonHelper(this.golstar, 0, 1, 1);

	this.newcastelbrownale = new lib.newcastelbrownale();
	this.newcastelbrownale.parent = this;
	this.newcastelbrownale.setTransform(514.3,740,1.304,1.304,0,0,0,17.1,56);
	new cjs.ButtonHelper(this.newcastelbrownale, 0, 1, 1);

	this.lfmns = new lib.lfmns();
	this.lfmns.parent = this;
	this.lfmns.setTransform(620.2,744.1,1.232,1.232,0,0,0,14.5,56.1);
	new cjs.ButtonHelper(this.lfmns, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.s1}]},1).to({state:[{t:this.s4}]},1).to({state:[{t:this.s5}]},1).to({state:[{t:this.duvel}]},1).to({state:[{t:this.alexander}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_2},{t:this.makabi}]},1).to({state:[{t:this.heineken}]},1).to({state:[{t:this.tuborg}]},1).to({state:[{t:this.corona}]},1).to({state:[{t:this.winshtef}]},1).to({state:[{t:this.hogarden}]},1).to({state:[{t:this.beks}]},1).to({state:[{t:this.s14}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.gines}]},1).to({state:[{t:this.lachuf}]},1).to({state:[{t:this.carlsberg}]},1).to({state:[{t:this.jms}]},1).to({state:[{t:this.bksblue}]},1).to({state:[{t:this.kastel}]},1).to({state:[{t:this.skol}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.budwis}]},1).to({state:[{t:this.negev}]},1).to({state:[{t:this.sanmigel}]},1).to({state:[{t:this.paulner}]},1).to({state:[{t:this.golstar}]},1).to({state:[{t:this.newcastelbrownale}]},1).to({state:[{t:this.lfmns}]},1).to({state:[]},1).wait(28));

	// greyforoptions
	this.haz = new lib.strong_fadecopy4();
	this.haz.parent = this;
	this.haz.setTransform(825,385,1,1.024,0,0,0,96,20.5);
	new cjs.ButtonHelper(this.haz, 0, 1, 1);

	this.bei = new lib.medium_fadecopy4();
	this.bei.parent = this;
	this.bei.setTransform(825,344,1,1,0,0,0,96,21.1);
	new cjs.ButtonHelper(this.bei, 0, 1, 1);

	this.mv = new lib.imported_fadecopy3();
	this.mv.parent = this;
	this.mv.setTransform(825,725,1,1.024,0,0,0,96,20.6);
	new cjs.ButtonHelper(this.mv, 0, 1, 1);

	this.mk = new lib.local_fadecopy3();
	this.mk.parent = this;
	this.mk.setTransform(825,683,1,1,0,0,0,96,21);
	new cjs.ButtonHelper(this.mk, 0, 1, 1);

	this.mer = new lib.Bitter_fadecopy3();
	this.mer.parent = this;
	this.mer.setTransform(825,529,1,1,0,0,0,96,21);
	new cjs.ButtonHelper(this.mer, 0, 1, 1);

	this.meodmer = new lib.veryBitter_fadecopy3();
	this.meodmer.parent = this;
	this.meodmer.setTransform(825,571,1,1.024,0,0,0,96,20.5);
	new cjs.ButtonHelper(this.meodmer, 0, 1, 1);

	this.lomer = new lib.notBitter_fadecopy3();
	this.lomer.parent = this;
	this.lomer.setTransform(825,488.1,1,1.024,0,0,0,96,20.6);
	new cjs.ButtonHelper(this.lomer, 0, 1, 1);

	this.hal = new lib.weak_fadecopy3();
	this.hal.parent = this;
	this.hal.setTransform(825,303.1,1,1.024,0,0,0,96,20.6);
	new cjs.ButtonHelper(this.hal, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.lomer},{t:this.meodmer},{t:this.mer},{t:this.mk},{t:this.mv},{t:this.bei},{t:this.haz}]},31).to({state:[{t:this.meodmer},{t:this.mer},{t:this.mk},{t:this.mv},{t:this.bei},{t:this.haz}]},1).to({state:[{t:this.meodmer},{t:this.mer},{t:this.mk},{t:this.bei},{t:this.haz}]},1).to({state:[{t:this.lomer},{t:this.meodmer},{t:this.mk},{t:this.mv},{t:this.hal},{t:this.haz}]},1).to({state:[{t:this.lomer},{t:this.meodmer},{t:this.mer},{t:this.mk},{t:this.mv},{t:this.hal},{t:this.haz}]},1).to({state:[{t:this.lomer},{t:this.meodmer},{t:this.hal},{t:this.haz},{t:this.mk}]},1).to({state:[{t:this.lomer},{t:this.mer},{t:this.mk},{t:this.mv},{t:this.hal},{t:this.bei}]},1).to({state:[{t:this.lomer},{t:this.mer},{t:this.mv},{t:this.hal},{t:this.bei},{t:this.meodmer},{t:this.mk}]},1).to({state:[{t:this.lomer},{t:this.mer},{t:this.mv},{t:this.hal},{t:this.bei}]},1).to({state:[]},1).wait(19));

	// onlybottle
	this.k30 = new lib.k30();
	this.k30.parent = this;
	this.k30.setTransform(619.5,754,1,1,0,0,0,14.5,56);
	new cjs.ButtonHelper(this.k30, 0, 1, 1);

	this.k22 = new lib.k22();
	this.k22.parent = this;
	this.k22.setTransform(410.5,628.5,1,1,0,0,0,13.5,55.5);
	new cjs.ButtonHelper(this.k22, 0, 1, 1);

	this.k20 = new lib.k20();
	this.k20.parent = this;
	this.k20.setTransform(201,629,1,1,0,0,0,15,56);
	new cjs.ButtonHelper(this.k20, 0, 1, 1);

	this.k29 = new lib.k29();
	this.k29.parent = this;
	this.k29.setTransform(515,754,1,1,0,0,0,17,56);
	new cjs.ButtonHelper(this.k29, 0, 1, 1);

	this.k28 = new lib.k28();
	this.k28.parent = this;
	this.k28.setTransform(410,754.5,1,1,0,0,0,16,57.5);
	new cjs.ButtonHelper(this.k28, 0, 1, 1);

	this.k25 = new lib.k25();
	this.k25.parent = this;
	this.k25.setTransform(97,754,1,1,0,0,0,15,56);
	new cjs.ButtonHelper(this.k25, 0, 1, 1);

	this.k23 = new lib.k23();
	this.k23.parent = this;
	this.k23.setTransform(515.5,629.5,1,1,0,0,0,14.5,55.5);
	new cjs.ButtonHelper(this.k23, 0, 1, 1);

	this.k18 = new lib.k18();
	this.k18.parent = this;
	this.k18.setTransform(619.5,506.5,1,1,0,0,0,14.5,56.5);
	new cjs.ButtonHelper(this.k18, 0, 1, 1);

	this.k15 = new lib.k15();
	this.k15.parent = this;
	this.k15.setTransform(318.9,508,1,1,0,0,0,35.9,58);
	new cjs.ButtonHelper(this.k15, 0, 1, 1);

	this.k13 = new lib.k13();
	this.k13.parent = this;
	this.k13.setTransform(98,506.5,1,1,0,0,0,15,56.5);
	new cjs.ButtonHelper(this.k13, 0, 1, 1);

	this.k9 = new lib.k9();
	this.k9.parent = this;
	this.k9.setTransform(306,382,1,1,0,0,0,15,57);
	new cjs.ButtonHelper(this.k9, 0, 1, 1);

	this.k5 = new lib.k5();
	this.k5.parent = this;
	this.k5.setTransform(514,256.5,1,1,0,0,0,15,56.5);
	new cjs.ButtonHelper(this.k5, 0, 1, 1);

	this.k1 = new lib.k1();
	this.k1.parent = this;
	this.k1.setTransform(96.5,255,1,1,0,0,0,14.5,57);
	new cjs.ButtonHelper(this.k1, 0, 1, 1);

	this.k27 = new lib.k27();
	this.k27.parent = this;
	this.k27.setTransform(306,754,1,1,0,0,0,14,58);
	new cjs.ButtonHelper(this.k27, 0, 1, 1);

	this.k26 = new lib.k26();
	this.k26.parent = this;
	this.k26.setTransform(200.5,754,1,1,0,0,0,15.5,57);
	new cjs.ButtonHelper(this.k26, 0, 1, 1);

	this.k24 = new lib.k24();
	this.k24.parent = this;
	this.k24.setTransform(619,628.5,1,1,0,0,0,16,55.5);
	new cjs.ButtonHelper(this.k24, 0, 1, 1);

	this.k12 = new lib.k12();
	this.k12.parent = this;
	this.k12.setTransform(619,381.5,1,1,0,0,0,16,58.5);
	new cjs.ButtonHelper(this.k12, 0, 1, 1);

	this.k11 = new lib.k11();
	this.k11.parent = this;
	this.k11.setTransform(514,381,1,1,0,0,0,16,59);
	new cjs.ButtonHelper(this.k11, 0, 1, 1);

	this.k10 = new lib.k10();
	this.k10.parent = this;
	this.k10.setTransform(410,382,1,1,0,0,0,14,58);
	new cjs.ButtonHelper(this.k10, 0, 1, 1);

	this.k8 = new lib.k8();
	this.k8.parent = this;
	this.k8.setTransform(201,382,1,1,0,0,0,15,58);
	new cjs.ButtonHelper(this.k8, 0, 1, 1);

	this.k6 = new lib.k6();
	this.k6.parent = this;
	this.k6.setTransform(635.9,260.6,1,1,0,0,0,30.9,59.6);
	new cjs.ButtonHelper(this.k6, 0, 1, 1);

	this.k3 = new lib.k3();
	this.k3.parent = this;
	this.k3.setTransform(306.5,255.5,1,1,0,0,0,14.5,57.5);
	new cjs.ButtonHelper(this.k3, 0, 1, 1);

	this.k2 = new lib.k2();
	this.k2.parent = this;
	this.k2.setTransform(202.4,254,1,1,0,0,0,16.4,59);
	new cjs.ButtonHelper(this.k2, 0, 1, 1);

	this.k19 = new lib.k19();
	this.k19.parent = this;
	this.k19.setTransform(98.5,629.5,1,1,0,0,0,14.5,55.5);
	new cjs.ButtonHelper(this.k19, 0, 1, 1);

	this.k17 = new lib.k17();
	this.k17.parent = this;
	this.k17.setTransform(514.5,517.5,1,1,0,0,0,17.5,45.5);
	new cjs.ButtonHelper(this.k17, 0, 1, 1);

	this.k16 = new lib.k16();
	this.k16.parent = this;
	this.k16.setTransform(411,507.5,1,1,0,0,0,16,55.5);
	new cjs.ButtonHelper(this.k16, 0, 1, 1);

	this.k4 = new lib.k4();
	this.k4.parent = this;
	this.k4.setTransform(410.5,267,1,1,0,0,0,18.5,47);
	new cjs.ButtonHelper(this.k4, 0, 1, 1);

	this.k21 = new lib.k21();
	this.k21.parent = this;
	this.k21.setTransform(305,642.5,1,1,0,0,0,19,47.5);
	new cjs.ButtonHelper(this.k21, 0, 1, 1);

	this.k14 = new lib.k14();
	this.k14.parent = this;
	this.k14.setTransform(202,506.5,1,1,0,0,0,16,56.5);
	new cjs.ButtonHelper(this.k14, 0, 1, 1);

	this.k7 = new lib.k7();
	this.k7.parent = this;
	this.k7.setTransform(96.5,381.5,1,1,0,0,0,16.5,57.5);
	new cjs.ButtonHelper(this.k7, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.k20},{t:this.k22},{t:this.k30}]},31).to({state:[{t:this.k20},{t:this.k22},{t:this.k30}]},1).to({state:[{t:this.k20},{t:this.k22},{t:this.k30}]},1).to({state:[{t:this.k1,p:{x:96.5,y:255}},{t:this.k5},{t:this.k9,p:{x:306,y:382}},{t:this.k13,p:{x:98,y:506.5}},{t:this.k15,p:{x:318.9,y:508}},{t:this.k18,p:{x:619.5,y:506.5}},{t:this.k23,p:{x:515.5,y:629.5}},{t:this.k25},{t:this.k28,p:{x:410,y:754.5}},{t:this.k29,p:{x:515,y:754}}]},1).to({state:[{t:this.k1,p:{x:96.5,y:255}},{t:this.k2},{t:this.k3},{t:this.k5},{t:this.k6},{t:this.k8},{t:this.k9,p:{x:306,y:382}},{t:this.k10},{t:this.k11},{t:this.k12},{t:this.k13,p:{x:98,y:506.5}},{t:this.k15,p:{x:318.9,y:508}},{t:this.k18,p:{x:619.5,y:506.5}},{t:this.k23,p:{x:515.5,y:629.5}},{t:this.k24},{t:this.k25},{t:this.k26},{t:this.k27},{t:this.k28,p:{x:410,y:754.5}},{t:this.k29,p:{x:515,y:754}}]},1).to({state:[{t:this.k1,p:{x:96.6,y:256}},{t:this.k9,p:{x:306.1,y:383}},{t:this.k13,p:{x:98.1,y:507.5}},{t:this.k15,p:{x:319,y:509}},{t:this.k18,p:{x:619.6,y:507.5}},{t:this.k23,p:{x:515.6,y:630.5}},{t:this.k28,p:{x:410.1,y:755.5}},{t:this.k29,p:{x:515.1,y:755}}]},1).to({state:[{t:this.k4},{t:this.k16},{t:this.k17},{t:this.k19}]},1).to({state:[{t:this.k4},{t:this.k7},{t:this.k14},{t:this.k16},{t:this.k17},{t:this.k19},{t:this.k21}]},1).to({state:[{t:this.k19}]},1).to({state:[]},11).wait(9));

	// coloredbuaftercat
	this.alg = new lib.alg();
	this.alg.parent = this;
	this.alg.setTransform(356.5,503.5,1,1,0,0,0,315.5,311.5);
	this.alg._off = true;
	new cjs.ButtonHelper(this.alg, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.alg).wait(31).to({_off:false},0).wait(8).to({_off:true},11).wait(9));

	// cat4hover
	this.hal_1 = new lib.weak_fadecopy3();
	this.hal_1.parent = this;
	this.hal_1.setTransform(825,303.1,1,1.024,0,0,0,96,20.6);
	new cjs.ButtonHelper(this.hal_1, 0, 1, 1);

	this.haz_1 = new lib.strong_fadecopy4();
	this.haz_1.parent = this;
	this.haz_1.setTransform(825,385.1,1,1.024,0,0,0,96,20.5);
	new cjs.ButtonHelper(this.haz_1, 0, 1, 1);

	this.mv_1 = new lib.imported_fadecopy3();
	this.mv_1.parent = this;
	this.mv_1.setTransform(825,724.1,1,1.024,0,0,0,96,20.6);
	new cjs.ButtonHelper(this.mv_1, 0, 1, 1);

	this.meodmer_1 = new lib.veryBitter_fadecopy3();
	this.meodmer_1.parent = this;
	this.meodmer_1.setTransform(825,570.1,1,1.024,0,0,0,96,20.5);
	new cjs.ButtonHelper(this.meodmer_1, 0, 1, 1);

	this.lomer_1 = new lib.notBitter_fadecopy3();
	this.lomer_1.parent = this;
	this.lomer_1.setTransform(825,487.2,1,1.024,0,0,0,96,20.6);
	new cjs.ButtonHelper(this.lomer_1, 0, 1, 1);

	this.mk_1 = new lib.local_fadecopy3();
	this.mk_1.parent = this;
	this.mk_1.setTransform(825,682.1,1,1,0,0,0,96,21);
	new cjs.ButtonHelper(this.mk_1, 0, 1, 1);

	this.mer_1 = new lib.Bitter_fadecopy3();
	this.mer_1.parent = this;
	this.mer_1.setTransform(825,528.1,1,1,0,0,0,96,21);
	new cjs.ButtonHelper(this.mer_1, 0, 1, 1);

	this.bei_1 = new lib.medium_fadecopy4();
	this.bei_1.parent = this;
	this.bei_1.setTransform(825,343.1,1,1,0,0,0,96,21.1);
	new cjs.ButtonHelper(this.bei_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.lomer_1},{t:this.meodmer_1},{t:this.mv_1},{t:this.haz_1},{t:this.hal_1}]},1).to({state:[{t:this.lomer_1},{t:this.meodmer_1},{t:this.mk_1},{t:this.haz_1},{t:this.hal_1}]},1).to({state:[{t:this.meodmer_1},{t:this.mer_1,p:{y:528.1}},{t:this.mv_1},{t:this.haz_1},{t:this.hal_1}]},1).to({state:[{t:this.lomer_1},{t:this.mer_1,p:{y:528.1}},{t:this.mk_1},{t:this.bei_1},{t:this.hal_1}]},1).to({state:[{t:this.lomer_1},{t:this.meodmer_1},{t:this.mk_1},{t:this.haz_1},{t:this.hal_1}]},1).to({state:[{t:this.meodmer_1},{t:this.mer_1,p:{y:528.1}},{t:this.mk_1},{t:this.haz_1},{t:this.hal_1}]},1).to({state:[{t:this.lomer_1},{t:this.meodmer_1},{t:this.mv_1},{t:this.bei_1},{t:this.hal_1}]},1).to({state:[{t:this.meodmer_1},{t:this.mer_1,p:{y:528.1}},{t:this.mk_1},{t:this.haz_1},{t:this.hal_1}]},1).to({state:[{t:this.lomer_1},{t:this.meodmer_1},{t:this.mk_1},{t:this.haz_1},{t:this.hal_1}]},1).to({state:[{t:this.meodmer_1},{t:this.mer_1,p:{y:528.1}},{t:this.mk_1},{t:this.haz_1},{t:this.hal_1}]},1).to({state:[{t:this.meodmer_1},{t:this.mer_1,p:{y:528.1}},{t:this.mk_1},{t:this.haz_1},{t:this.hal_1}]},1).to({state:[{t:this.meodmer_1},{t:this.mer_1,p:{y:528.1}},{t:this.mk_1},{t:this.haz_1},{t:this.hal_1}]},1).to({state:[{t:this.lomer_1},{t:this.meodmer_1},{t:this.mk_1},{t:this.haz_1},{t:this.hal_1}]},1).to({state:[{t:this.lomer_1},{t:this.meodmer_1},{t:this.mk_1},{t:this.bei_1},{t:this.hal_1}]},1).to({state:[{t:this.lomer_1},{t:this.meodmer_1},{t:this.mk_1},{t:this.haz_1},{t:this.hal_1}]},1).to({state:[{t:this.lomer_1},{t:this.mer_1,p:{y:528.1}},{t:this.mk_1},{t:this.bei_1},{t:this.hal_1}]},1).to({state:[{t:this.lomer_1},{t:this.mer_1,p:{y:528.1}},{t:this.mk_1},{t:this.bei_1},{t:this.hal_1}]},1).to({state:[{t:this.lomer_1},{t:this.meodmer_1},{t:this.mk_1},{t:this.haz_1},{t:this.hal_1}]},1).to({state:[{t:this.lomer_1},{t:this.mer_1,p:{y:528.1}},{t:this.mv_1},{t:this.bei_1},{t:this.hal_1}]},1).to({state:[{t:this.meodmer_1},{t:this.mer_1,p:{y:528.1}},{t:this.mk_1},{t:this.bei_1},{t:this.haz_1}]},1).to({state:[{t:this.meodmer_1},{t:this.mer_1,p:{y:528.1}},{t:this.mk_1},{t:this.bei_1},{t:this.hal_1}]},1).to({state:[{t:this.meodmer_1},{t:this.mer_1,p:{y:528.1}},{t:this.mk_1},{t:this.bei_1},{t:this.haz_1}]},1).to({state:[{t:this.lomer_1},{t:this.meodmer_1},{t:this.mk_1},{t:this.haz_1},{t:this.hal_1}]},1).to({state:[{t:this.meodmer_1},{t:this.mk_1},{t:this.haz_1},{t:this.hal_1},{t:this.mer_1,p:{y:529}}]},1).to({state:[{t:this.lomer_1},{t:this.meodmer_1},{t:this.mv_1},{t:this.haz_1},{t:this.hal_1}]},1).to({state:[{t:this.meodmer_1},{t:this.mer_1,p:{y:528.1}},{t:this.mk_1},{t:this.haz_1},{t:this.hal_1}]},1).to({state:[{t:this.meodmer_1},{t:this.mk_1},{t:this.haz_1},{t:this.hal_1},{t:this.mer_1,p:{y:529}}]},1).to({state:[{t:this.lomer_1},{t:this.meodmer_1},{t:this.mv_1},{t:this.haz_1},{t:this.hal_1}]},1).to({state:[{t:this.lomer_1},{t:this.meodmer_1},{t:this.mk_1},{t:this.haz_1},{t:this.hal_1}]},1).to({state:[{t:this.lomer_1},{t:this.meodmer_1},{t:this.mk_1},{t:this.bei_1},{t:this.haz_1}]},1).to({state:[]},1).to({state:[{t:this.lomer_1},{t:this.meodmer_1},{t:this.mv_1},{t:this.bei_1},{t:this.hal_1}]},9).to({state:[{t:this.lomer_1},{t:this.mer_1,p:{y:528.1}},{t:this.mk_1},{t:this.bei_1},{t:this.hal_1}]},1).to({state:[{t:this.meodmer_1},{t:this.mer_1,p:{y:528.1}},{t:this.mk_1},{t:this.bei_1},{t:this.hal_1}]},1).to({state:[{t:this.lomer_1},{t:this.mer_1,p:{y:528.1}},{t:this.mv_1},{t:this.bei_1},{t:this.hal_1}]},1).to({state:[{t:this.lomer_1},{t:this.mer_1,p:{y:528.1}},{t:this.mk_1},{t:this.bei_1},{t:this.hal_1}]},1).to({state:[{t:this.lomer_1},{t:this.meodmer_1},{t:this.mk_1},{t:this.bei_1},{t:this.hal_1}]},1).to({state:[{t:this.lomer_1},{t:this.mer_1,p:{y:528.1}},{t:this.mk_1},{t:this.bei_1},{t:this.hal_1}]},1).to({state:[{t:this.lomer_1},{t:this.meodmer_1},{t:this.mer_1,p:{y:528.1}},{t:this.mk_1},{t:this.mv_1},{t:this.bei_1},{t:this.haz_1},{t:this.hal_1}]},1).to({state:[{t:this.lomer_1},{t:this.meodmer_1},{t:this.mer_1,p:{y:528.1}},{t:this.mk_1},{t:this.mv_1},{t:this.bei_1},{t:this.haz_1},{t:this.hal_1}]},1).to({state:[{t:this.lomer_1},{t:this.meodmer_1},{t:this.mer_1,p:{y:528.1}},{t:this.mk_1},{t:this.mv_1},{t:this.bei_1},{t:this.haz_1},{t:this.hal_1}]},1).to({state:[{t:this.lomer_1},{t:this.meodmer_1},{t:this.mer_1,p:{y:528.1}},{t:this.mk_1},{t:this.mv_1},{t:this.bei_1},{t:this.haz_1},{t:this.hal_1}]},1).to({state:[{t:this.lomer_1},{t:this.meodmer_1},{t:this.mer_1,p:{y:528.1}},{t:this.mk_1},{t:this.mv_1},{t:this.bei_1},{t:this.haz_1},{t:this.hal_1}]},1).to({state:[{t:this.lomer_1},{t:this.meodmer_1},{t:this.mer_1,p:{y:528.1}},{t:this.mk_1},{t:this.mv_1},{t:this.bei_1},{t:this.haz_1},{t:this.hal_1}]},1).to({state:[{t:this.lomer_1},{t:this.meodmer_1},{t:this.mer_1,p:{y:528.1}},{t:this.mk_1},{t:this.mv_1},{t:this.bei_1},{t:this.haz_1},{t:this.hal_1}]},1).to({state:[{t:this.lomer_1},{t:this.meodmer_1},{t:this.mer_1,p:{y:528.1}},{t:this.mk_1},{t:this.mv_1},{t:this.bei_1},{t:this.haz_1},{t:this.hal_1}]},1).to({state:[{t:this.lomer_1},{t:this.meodmer_1},{t:this.mer_1,p:{y:528.1}},{t:this.mk_1},{t:this.mv_1},{t:this.bei_1},{t:this.haz_1},{t:this.hal_1}]},1).to({state:[{t:this.lomer_1},{t:this.meodmer_1},{t:this.mer_1,p:{y:528.1}},{t:this.mk_1},{t:this.mv_1},{t:this.bei_1},{t:this.haz_1},{t:this.hal_1}]},1).to({state:[{t:this.lomer_1},{t:this.meodmer_1},{t:this.mer_1,p:{y:528.1}},{t:this.mk_1},{t:this.mv_1},{t:this.bei_1},{t:this.haz_1},{t:this.hal_1}]},1).to({state:[{t:this.lomer_1},{t:this.meodmer_1},{t:this.mer_1,p:{y:528.1}},{t:this.mk_1},{t:this.mv_1},{t:this.bei_1},{t:this.haz_1},{t:this.hal_1}]},1).wait(1));

	// העבר את העכבר על הבקבוקים או לחץ על התכונות הרצויות
	this.instance_4 = new lib.העבראתהעכברעלהבקבוקיםאולחץעלהתכונותהרצויות();
	this.instance_4.parent = this;
	this.instance_4.setTransform(198,51);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({y:85},0).to({_off:true},1).wait(9));

	// ?איזו בירה הכי מתאימה לי
	this.instance_5 = new lib.איזובירההכימתאימהלי();
	this.instance_5.parent = this;
	this.instance_5.setTransform(267,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(49).to({y:37},0).to({_off:true},1).wait(9));

	// % חוזק
	this.instance_6 = new lib.חוזק();
	this.instance_6.parent = this;
	this.instance_6.setTransform(853,247);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(49).to({_off:true},1).wait(9));

	// חזקה
	this.HAZAKA = new lib.HAZAKA();
	this.HAZAKA.parent = this;
	this.HAZAKA.setTransform(825,385,1,1,0,0,0,96,21);
	new cjs.ButtonHelper(this.HAZAKA, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.HAZAKA).wait(49).to({_off:true},1).wait(9));

	// בינונית
	this.BEINONI = new lib.BEINONI();
	this.BEINONI.parent = this;
	this.BEINONI.setTransform(825,344,1,1,0,0,0,96,21);
	new cjs.ButtonHelper(this.BEINONI, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.BEINONI).wait(49).to({_off:true},1).wait(9));

	// חלשה
	this.HALASHA = new lib.HALASHA();
	this.HALASHA.parent = this;
	this.HALASHA.setTransform(825,303,1,1,0,0,0,96,21);
	new cjs.ButtonHelper(this.HALASHA, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.HALASHA).wait(49).to({_off:true},1).wait(9));

	// מיובא
	this.MEYUVE = new lib.MEYUVE();
	this.MEYUVE.parent = this;
	this.MEYUVE.setTransform(825,724,1,1,0,0,0,96,21);
	new cjs.ButtonHelper(this.MEYUVE, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.MEYUVE).wait(49).to({_off:true},1).wait(9));

	// מקומי
	this.MEKOMI = new lib.MEKOMI();
	this.MEKOMI.parent = this;
	this.MEKOMI.setTransform(825,683,1,1,0,0,0,96,21);
	new cjs.ButtonHelper(this.MEKOMI, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.MEKOMI).wait(49).to({_off:true},1).wait(9));

	// ייצור
	this.instance_7 = new lib.ייצור();
	this.instance_7.parent = this;
	this.instance_7.setTransform(874,631);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(49).to({_off:true},1).wait(9));

	// מרירה
	this.MAR = new lib.MAR();
	this.MAR.parent = this;
	this.MAR.setTransform(825,529,1,1,0,0,0,96,21);
	new cjs.ButtonHelper(this.MAR, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.MAR).wait(49).to({_off:true},1).wait(9));

	// מאד מרירה
	this.MEODMAR = new lib.MEODMAR();
	this.MEODMAR.parent = this;
	this.MEODMAR.setTransform(825,570,1,1,0,0,0,96,21);
	new cjs.ButtonHelper(this.MEODMAR, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.MEODMAR).wait(49).to({_off:true},1).wait(9));

	// לא מרירה
	this.LOMAR = new lib.LOMAR();
	this.LOMAR.parent = this;
	this.LOMAR.setTransform(825,488,1,1,0,0,0,96,21);
	new cjs.ButtonHelper(this.LOMAR, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.LOMAR).wait(49).to({_off:true},1).wait(9));

	// מרירות
	this.instance_8 = new lib.מרירות();
	this.instance_8.parent = this;
	this.instance_8.setTransform(851,436);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(49).to({_off:true},1).wait(9));

	// איפוס תכונות
	this.IPUS = new lib.IPUS();
	this.IPUS.parent = this;
	this.IPUS.setTransform(825.5,799,1,1,0,0,0,95.5,14);
	new cjs.ButtonHelper(this.IPUS, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.IPUS).wait(49).to({_off:true},1).wait(9));

	// onlybottle
	this.k30_1 = new lib.k30();
	this.k30_1.parent = this;
	this.k30_1.setTransform(619.5,754,1,1,0,0,0,14.5,56);
	new cjs.ButtonHelper(this.k30_1, 0, 1, 1);

	this.k29_1 = new lib.k29();
	this.k29_1.parent = this;
	this.k29_1.setTransform(515,754,1,1,0,0,0,17,56);
	new cjs.ButtonHelper(this.k29_1, 0, 1, 1);

	this.k28_1 = new lib.k28();
	this.k28_1.parent = this;
	this.k28_1.setTransform(410,754.5,1,1,0,0,0,16,57.5);
	new cjs.ButtonHelper(this.k28_1, 0, 1, 1);

	this.k27_1 = new lib.k27();
	this.k27_1.parent = this;
	this.k27_1.setTransform(306,754,1,1,0,0,0,14,58);
	new cjs.ButtonHelper(this.k27_1, 0, 1, 1);

	this.k26_1 = new lib.k26();
	this.k26_1.parent = this;
	this.k26_1.setTransform(200.5,754,1,1,0,0,0,15.5,57);
	new cjs.ButtonHelper(this.k26_1, 0, 1, 1);

	this.k25_1 = new lib.k25();
	this.k25_1.parent = this;
	this.k25_1.setTransform(97,754,1,1,0,0,0,15,56);
	new cjs.ButtonHelper(this.k25_1, 0, 1, 1);

	this.k24_1 = new lib.k24();
	this.k24_1.parent = this;
	this.k24_1.setTransform(619,628.5,1,1,0,0,0,16,55.5);
	new cjs.ButtonHelper(this.k24_1, 0, 1, 1);

	this.k23_1 = new lib.k23();
	this.k23_1.parent = this;
	this.k23_1.setTransform(515.5,629.5,1,1,0,0,0,14.5,55.5);
	new cjs.ButtonHelper(this.k23_1, 0, 1, 1);

	this.k22_1 = new lib.k22();
	this.k22_1.parent = this;
	this.k22_1.setTransform(410.5,628.5,1,1,0,0,0,13.5,55.5);
	new cjs.ButtonHelper(this.k22_1, 0, 1, 1);

	this.k21_1 = new lib.k21();
	this.k21_1.parent = this;
	this.k21_1.setTransform(305,642.5,1,1,0,0,0,19,47.5);
	new cjs.ButtonHelper(this.k21_1, 0, 1, 1);

	this.k20_1 = new lib.k20();
	this.k20_1.parent = this;
	this.k20_1.setTransform(201,629,1,1,0,0,0,15,56);
	new cjs.ButtonHelper(this.k20_1, 0, 1, 1);

	this.k19_1 = new lib.k19();
	this.k19_1.parent = this;
	this.k19_1.setTransform(98.5,629.5,1,1,0,0,0,14.5,55.5);
	new cjs.ButtonHelper(this.k19_1, 0, 1, 1);

	this.k18_1 = new lib.k18();
	this.k18_1.parent = this;
	this.k18_1.setTransform(619.5,506.5,1,1,0,0,0,14.5,56.5);
	new cjs.ButtonHelper(this.k18_1, 0, 1, 1);

	this.k17_1 = new lib.k17();
	this.k17_1.parent = this;
	this.k17_1.setTransform(514.5,517.5,1,1,0,0,0,17.5,45.5);
	new cjs.ButtonHelper(this.k17_1, 0, 1, 1);

	this.k16_1 = new lib.k16();
	this.k16_1.parent = this;
	this.k16_1.setTransform(411,507.5,1,1,0,0,0,16,55.5);
	new cjs.ButtonHelper(this.k16_1, 0, 1, 1);

	this.k15_1 = new lib.k15();
	this.k15_1.parent = this;
	this.k15_1.setTransform(318.9,508,1,1,0,0,0,35.9,58);
	new cjs.ButtonHelper(this.k15_1, 0, 1, 1);

	this.k14_1 = new lib.k14();
	this.k14_1.parent = this;
	this.k14_1.setTransform(202,506.5,1,1,0,0,0,16,56.5);
	new cjs.ButtonHelper(this.k14_1, 0, 1, 1);

	this.k13_1 = new lib.k13();
	this.k13_1.parent = this;
	this.k13_1.setTransform(98,506.5,1,1,0,0,0,15,56.5);
	new cjs.ButtonHelper(this.k13_1, 0, 1, 1);

	this.k12_1 = new lib.k12();
	this.k12_1.parent = this;
	this.k12_1.setTransform(619,381.5,1,1,0,0,0,16,58.5);
	new cjs.ButtonHelper(this.k12_1, 0, 1, 1);

	this.k11_1 = new lib.k11();
	this.k11_1.parent = this;
	this.k11_1.setTransform(514,381,1,1,0,0,0,16,59);
	new cjs.ButtonHelper(this.k11_1, 0, 1, 1);

	this.k10_1 = new lib.k10();
	this.k10_1.parent = this;
	this.k10_1.setTransform(410,382,1,1,0,0,0,14,58);
	new cjs.ButtonHelper(this.k10_1, 0, 1, 1);

	this.k9_1 = new lib.k9();
	this.k9_1.parent = this;
	this.k9_1.setTransform(306,382,1,1,0,0,0,15,57);
	new cjs.ButtonHelper(this.k9_1, 0, 1, 1);

	this.k8_1 = new lib.k8();
	this.k8_1.parent = this;
	this.k8_1.setTransform(201,382,1,1,0,0,0,15,58);
	new cjs.ButtonHelper(this.k8_1, 0, 1, 1);

	this.k7_1 = new lib.k7();
	this.k7_1.parent = this;
	this.k7_1.setTransform(96.5,381.5,1,1,0,0,0,16.5,57.5);
	new cjs.ButtonHelper(this.k7_1, 0, 1, 1);

	this.k6_1 = new lib.k6();
	this.k6_1.parent = this;
	this.k6_1.setTransform(635.9,260.6,1,1,0,0,0,30.9,59.6);
	new cjs.ButtonHelper(this.k6_1, 0, 1, 1);

	this.k5_1 = new lib.k5();
	this.k5_1.parent = this;
	this.k5_1.setTransform(514,256.5,1,1,0,0,0,15,56.5);
	new cjs.ButtonHelper(this.k5_1, 0, 1, 1);

	this.k4_1 = new lib.k4();
	this.k4_1.parent = this;
	this.k4_1.setTransform(410.5,267,1,1,0,0,0,18.5,47);
	new cjs.ButtonHelper(this.k4_1, 0, 1, 1);

	this.k3_1 = new lib.k3();
	this.k3_1.parent = this;
	this.k3_1.setTransform(306.5,255.5,1,1,0,0,0,14.5,57.5);
	new cjs.ButtonHelper(this.k3_1, 0, 1, 1);

	this.k2_1 = new lib.k2();
	this.k2_1.parent = this;
	this.k2_1.setTransform(202.4,254,1,1,0,0,0,16.4,59);
	new cjs.ButtonHelper(this.k2_1, 0, 1, 1);

	this.k1_1 = new lib.k1();
	this.k1_1.parent = this;
	this.k1_1.setTransform(96.5,255,1,1,0,0,0,14.5,57);
	new cjs.ButtonHelper(this.k1_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.k1_1},{t:this.k2_1},{t:this.k3_1},{t:this.k4_1},{t:this.k5_1},{t:this.k6_1},{t:this.k7_1},{t:this.k8_1},{t:this.k9_1},{t:this.k10_1},{t:this.k11_1},{t:this.k12_1},{t:this.k13_1},{t:this.k14_1},{t:this.k15_1},{t:this.k16_1},{t:this.k17_1},{t:this.k18_1},{t:this.k19_1},{t:this.k20_1},{t:this.k21_1},{t:this.k22_1},{t:this.k23_1},{t:this.k24_1},{t:this.k25_1},{t:this.k26_1},{t:this.k27_1},{t:this.k28_1},{t:this.k29_1},{t:this.k30_1}]}).to({state:[]},1).wait(58));

	// coloredbuaftercat
	this.alg_1 = new lib.alg();
	this.alg_1.parent = this;
	this.alg_1.setTransform(356.5,503.5,1,1,0,0,0,315.5,311.5);
	new cjs.ButtonHelper(this.alg_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.alg_1).to({_off:true},1).wait(58));

	// greyforoptions
	this.haz_2 = new lib.strong_fadecopy4();
	this.haz_2.parent = this;
	this.haz_2.setTransform(825,385,1,1.024,0,0,0,96,20.5);
	new cjs.ButtonHelper(this.haz_2, 0, 1, 1);

	this.bei_2 = new lib.medium_fadecopy4();
	this.bei_2.parent = this;
	this.bei_2.setTransform(825,344,1,1,0,0,0,96,21.1);
	new cjs.ButtonHelper(this.bei_2, 0, 1, 1);

	this.hal_2 = new lib.weak_fadecopy3();
	this.hal_2.parent = this;
	this.hal_2.setTransform(825,303.1,1,1.024,0,0,0,96,20.6);
	new cjs.ButtonHelper(this.hal_2, 0, 1, 1);

	this.mv_2 = new lib.imported_fadecopy3();
	this.mv_2.parent = this;
	this.mv_2.setTransform(825,725,1,1.024,0,0,0,96,20.6);
	new cjs.ButtonHelper(this.mv_2, 0, 1, 1);

	this.mk_2 = new lib.local_fadecopy3();
	this.mk_2.parent = this;
	this.mk_2.setTransform(825,683,1,1,0,0,0,96,21);
	new cjs.ButtonHelper(this.mk_2, 0, 1, 1);

	this.mer_2 = new lib.Bitter_fadecopy3();
	this.mer_2.parent = this;
	this.mer_2.setTransform(825,529,1,1,0,0,0,96,21);
	new cjs.ButtonHelper(this.mer_2, 0, 1, 1);

	this.meodmer_2 = new lib.veryBitter_fadecopy3();
	this.meodmer_2.parent = this;
	this.meodmer_2.setTransform(825,571,1,1.024,0,0,0,96,20.5);
	new cjs.ButtonHelper(this.meodmer_2, 0, 1, 1);

	this.lomer_2 = new lib.notBitter_fadecopy3();
	this.lomer_2.parent = this;
	this.lomer_2.setTransform(825,488.1,1,1.024,0,0,0,96,20.6);
	new cjs.ButtonHelper(this.lomer_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lomer_2},{t:this.meodmer_2},{t:this.mer_2},{t:this.mk_2},{t:this.mv_2},{t:this.hal_2},{t:this.bei_2},{t:this.haz_2}]}).to({state:[]},1).wait(58));

	// העבר את העכבר על הבקבוקים או לחץ על התכונות הרצויות
	this.instance_9 = new lib.העבראתהעכברעלהבקבוקיםאולחץעלהתכונותהרצויות();
	this.instance_9.parent = this;
	this.instance_9.setTransform(198,51);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(49).to({y:85},0).to({_off:true},1).wait(9));

	// ?איזו בירה הכי מתאימה לי
	this.instance_10 = new lib.איזובירההכימתאימהלי();
	this.instance_10.parent = this;
	this.instance_10.setTransform(267,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(49).to({y:37},0).to({_off:true},1).wait(9));

	// % חוזק
	this.instance_11 = new lib.חוזק();
	this.instance_11.parent = this;
	this.instance_11.setTransform(853,247);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(49).to({_off:true},1).wait(9));

	// חזקה
	this.HAZAKA_1 = new lib.HAZAKA();
	this.HAZAKA_1.parent = this;
	this.HAZAKA_1.setTransform(825,385,1,1,0,0,0,96,21);
	new cjs.ButtonHelper(this.HAZAKA_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.HAZAKA_1).wait(49).to({_off:true},1).wait(9));

	// בינונית
	this.BEINONI_1 = new lib.BEINONI();
	this.BEINONI_1.parent = this;
	this.BEINONI_1.setTransform(825,344,1,1,0,0,0,96,21);
	new cjs.ButtonHelper(this.BEINONI_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.BEINONI_1).wait(49).to({_off:true},1).wait(9));

	// חלשה
	this.HALASHA_1 = new lib.HALASHA();
	this.HALASHA_1.parent = this;
	this.HALASHA_1.setTransform(825,303,1,1,0,0,0,96,21);
	new cjs.ButtonHelper(this.HALASHA_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.HALASHA_1).wait(49).to({_off:true},1).wait(9));

	// מיובא
	this.MEYUVE_1 = new lib.MEYUVE();
	this.MEYUVE_1.parent = this;
	this.MEYUVE_1.setTransform(825,724,1,1,0,0,0,96,21);
	new cjs.ButtonHelper(this.MEYUVE_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.MEYUVE_1).wait(49).to({_off:true},1).wait(9));

	// מקומי
	this.MEKOMI_1 = new lib.MEKOMI();
	this.MEKOMI_1.parent = this;
	this.MEKOMI_1.setTransform(825,683,1,1,0,0,0,96,21);
	new cjs.ButtonHelper(this.MEKOMI_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.MEKOMI_1).wait(49).to({_off:true},1).wait(9));

	// ייצור
	this.instance_12 = new lib.ייצור();
	this.instance_12.parent = this;
	this.instance_12.setTransform(874,631);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(49).to({_off:true},1).wait(9));

	// מרירה
	this.MAR_1 = new lib.MAR();
	this.MAR_1.parent = this;
	this.MAR_1.setTransform(825,529,1,1,0,0,0,96,21);
	new cjs.ButtonHelper(this.MAR_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.MAR_1).wait(49).to({_off:true},1).wait(9));

	// מאד מרירה
	this.MEODMAR_1 = new lib.MEODMAR();
	this.MEODMAR_1.parent = this;
	this.MEODMAR_1.setTransform(825,570,1,1,0,0,0,96,21);
	new cjs.ButtonHelper(this.MEODMAR_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.MEODMAR_1).wait(49).to({_off:true},1).wait(9));

	// לא מרירה
	this.LOMAR_1 = new lib.LOMAR();
	this.LOMAR_1.parent = this;
	this.LOMAR_1.setTransform(825,488,1,1,0,0,0,96,21);
	new cjs.ButtonHelper(this.LOMAR_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.LOMAR_1).wait(49).to({_off:true},1).wait(9));

	// מרירות
	this.instance_13 = new lib.מרירות();
	this.instance_13.parent = this;
	this.instance_13.setTransform(851,436);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(49).to({_off:true},1).wait(9));

	// איפוס תכונות
	this.IPUS_1 = new lib.IPUS();
	this.IPUS_1.parent = this;
	this.IPUS_1.setTransform(825.5,799,1,1,0,0,0,95.5,14);
	new cjs.ButtonHelper(this.IPUS_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.IPUS_1).wait(49).to({_off:true},1).wait(9));

	// greybackground
	this.instance_14 = new lib.TOGREY();
	this.instance_14.parent = this;
	this.instance_14.setTransform(358,535,1,1,0,0,0,318,343);
	this.instance_14.alpha = 0.301;
	this.instance_14.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, -100, 0))];
	this.instance_14.cache(-2,-2,640,690);
	new cjs.ButtonHelper(this.instance_14, 0, 1, 1);

	this.gols865 = new lib.golstar11();
	this.gols865.parent = this;
	this.gols865.setTransform(93,255.5,1,1,0,0,0,53,63.5);
	this.gols865.alpha = 0.301;
	this.gols865.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, -100, 0))];
	this.gols865.cache(-2,-2,110,131);
	new cjs.ButtonHelper(this.gols865, 0, 1, 2, false, new lib.golstar11(), 3);

	this.p1 = new lib.p1();
	this.p1.parent = this;
	this.p1.setTransform(358,535,1,1,0,0,0,318,343);
	this.p1.alpha = 0.301;
	this.p1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, -100, 0))];
	this.p1.cache(-2,-2,640,690);
	new cjs.ButtonHelper(this.p1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.p1},{t:this.gols865}]},29).to({state:[]},1).wait(28));

	// San Miguel
	this.sanmigel1 = new lib.sanmigel1();
	this.sanmigel1.parent = this;
	this.sanmigel1.setTransform(199,784.5,1,1,0,0,0,53,93.5);
	new cjs.ButtonHelper(this.sanmigel1, 0, 1, 1);

	this.instance_15 = new lib.SanMiguel_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(146,691);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sanmigel1}]}).to({state:[]},1).to({state:[{t:this.instance_15}]},25).to({state:[]},1).to({state:[]},4).wait(28));

	// Newcastle-Brown-Ale
	this.newcastelbrownale1 = new lib.newcastelbrownale1();
	this.newcastelbrownale1.parent = this;
	this.newcastelbrownale1.setTransform(514.5,784.5,1,1,0,0,0,53.5,93.5);
	new cjs.ButtonHelper(this.newcastelbrownale1, 0, 1, 1);

	this.instance_16 = new lib.NewcastleBrownAle_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(461,691);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.newcastelbrownale1}]}).to({state:[]},1).to({state:[{t:this.instance_16}]},28).to({state:[]},1).to({state:[]},1).wait(28));

	// paulner bottle
	this.paulner1 = new lib.paulner1();
	this.paulner1.parent = this;
	this.paulner1.setTransform(305.1,784.2,1,1,0,0,0,53,93.5);
	new cjs.ButtonHelper(this.paulner1, 0, 1, 1);

	this.instance_17 = new lib.GoldstarUNFILTERED_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(252,690);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.paulner1}]}).to({state:[]},1).to({state:[{t:this.instance_17}]},26).to({state:[]},1).to({state:[]},3).wait(28));

	// Goldstar UNFILTERED
	this.golstarunfilted1 = new lib.golstarunfilted1();
	this.golstarunfilted1.parent = this;
	this.golstarunfilted1.setTransform(409.5,754,1,1,0,0,0,53.5,63);
	new cjs.ButtonHelper(this.golstarunfilted1, 0, 1, 1);

	this.instance_18 = new lib.GoldstarUNFILTERED_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(356,691);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.golstarunfilted1}]}).to({state:[]},1).to({state:[{t:this.instance_18}]},27).to({state:[]},1).to({state:[]},2).wait(28));

	// Maccabi
	this.macabi1 = new lib.macabi1();
	this.macabi1.parent = this;
	this.macabi1.setTransform(93,381.5,1,1,0,0,0,53,62.5);
	new cjs.ButtonHelper(this.macabi1, 0, 1, 1);

	this.instance_19 = new lib.Maccabi_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(40,319);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.macabi1}]}).to({state:[]},1).to({state:[{t:this.instance_19}]},6).to({state:[]},1).to({state:[]},23).wait(28));

	// Bazelet
	this.bazelet1 = new lib.bazalet1();
	this.bazelet1.parent = this;
	this.bazelet1.setTransform(618.5,255.5,1,1,0,0,0,57.5,63.5);
	new cjs.ButtonHelper(this.bazelet1, 0, 1, 1);

	this.instance_20 = new lib.Bazelet();
	this.instance_20.parent = this;
	this.instance_20.setTransform(561,192);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bazelet1}]}).to({state:[]},1).to({state:[{t:this.instance_20}]},5).to({state:[]},1).to({state:[]},24).wait(28));

	// Duvel
	this.duvel1 = new lib.duvel1();
	this.duvel1.parent = this;
	this.duvel1.setTransform(409.5,255.5,1,1,0,0,0,53.5,63.5);
	new cjs.ButtonHelper(this.duvel1, 0, 1, 1);

	this.instance_21 = new lib.Duvel_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(356,192);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.duvel1}]}).to({state:[]},1).to({state:[{t:this.instance_21}]},3).to({state:[]},1).to({state:[]},26).wait(28));

	// Alexander
	this.alexander1 = new lib.alexander1();
	this.alexander1.parent = this;
	this.alexander1.setTransform(514.5,255.5,1,1,0,0,0,53.5,63.5);
	new cjs.ButtonHelper(this.alexander1, 0, 1, 1);

	this.instance_22 = new lib.Alexander_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(461,192);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.alexander1}]}).to({state:[]},1).to({state:[{t:this.instance_22}]},4).to({state:[]},1).to({state:[]},24).wait(29));

	// MALCA
	this.mal8 = new lib.mal8();
	this.mal8.parent = this;
	this.mal8.setTransform(306,255.5,1,1,0,0,0,53,63.5);
	new cjs.ButtonHelper(this.mal8, 0, 1, 1);

	this.malka1 = new lib.malka1();
	this.malka1.parent = this;
	this.malka1.setTransform(304.1,256.2,1,1,0,0,0,53,63.5);
	new cjs.ButtonHelper(this.malka1, 0, 1, 2, false, new lib.malka1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mal8}]}).to({state:[]},1).to({state:[{t:this.malka1}]},2).to({state:[]},1).to({state:[]},27).wait(28));

	// Negev
	this.negev1 = new lib.negev1();
	this.negev1.parent = this;
	this.negev1.setTransform(94,784.5,1,1,0,0,0,53,93.5);
	new cjs.ButtonHelper(this.negev1, 0, 1, 1);

	this.instance_23 = new lib.Negev_1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(41,691);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.negev1}]}).to({state:[]},1).to({state:[{t:this.instance_23}]},24).to({state:[]},1).to({state:[]},5).wait(28));

	// liefmans
	this.liefmanes1 = new lib.liefmanes();
	this.liefmanes1.parent = this;
	this.liefmanes1.setTransform(619,754,1,1,0,0,0,53,63);
	new cjs.ButtonHelper(this.liefmanes1, 0, 1, 1);

	this.instance_24 = new lib.liefmans_1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(566,691);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.liefmanes1}]}).to({state:[]},1).to({state:[{t:this.instance_24}]},29).to({state:[]},1).wait(28));

	// Budweiser
	this.budwiser1 = new lib.budwiser1();
	this.budwiser1.parent = this;
	this.budwiser1.setTransform(619.5,629,1,1,0,0,0,53.5,62);
	new cjs.ButtonHelper(this.budwiser1, 0, 1, 1);

	this.instance_25 = new lib.Budweiser_1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(566,567);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.budwiser1}]}).to({state:[]},1).to({state:[{t:this.instance_25}]},23).to({state:[]},1).to({state:[]},6).wait(28));

	// Peroni_bottle
	this.peroni11 = new lib.peroni11();
	this.peroni11.parent = this;
	this.peroni11.setTransform(200,255.5,1,1,0,0,0,53,63.5);
	new cjs.ButtonHelper(this.peroni11, 0, 1, 2, false, new lib.peroni11(), 3);

	this.timeline.addTween(cjs.Tween.get(this.peroni11).to({_off:true},1).wait(1).to({_off:false,x:198.1,y:256.2},0).to({_off:true},1).wait(56));

	// SamuelAdams
	this.samueladams1 = new lib.samueladams1();
	this.samueladams1.parent = this;
	this.samueladams1.setTransform(514.5,629,1,1,0,0,0,53.5,62);
	new cjs.ButtonHelper(this.samueladams1, 0, 1, 1);

	this.instance_26 = new lib.SamuelAdams_1();
	this.instance_26.parent = this;
	this.instance_26.setTransform(461,567);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.samueladams1}]}).to({state:[]},1).to({state:[{t:this.instance_26}]},22).to({state:[]},1).to({state:[]},7).wait(28));

	// skol
	this.skol1 = new lib.skol1();
	this.skol1.parent = this;
	this.skol1.setTransform(410,629,1,1,0,0,0,53,62);
	new cjs.ButtonHelper(this.skol1, 0, 1, 1);

	this.instance_27 = new lib.skol_1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(357,567);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.skol1}]}).to({state:[]},1).to({state:[{t:this.instance_27}]},21).to({state:[]},1).to({state:[]},8).wait(28));

	// Kasteel
	this.kasteel1 = new lib.kasteel1();
	this.kasteel1.parent = this;
	this.kasteel1.setTransform(343,629,1,1,0,0,0,92,62);
	new cjs.ButtonHelper(this.kasteel1, 0, 1, 1);

	this.instance_28 = new lib.Kasteel_1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(251,567);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.kasteel1}]}).to({state:[]},1).to({state:[{t:this.instance_28}]},20).to({state:[]},1).to({state:[]},9).wait(28));

	// Beks blue
	this.beksblue1 = new lib.beksblue1();
	this.beksblue1.parent = this;
	this.beksblue1.setTransform(200,629,1,1,0,0,0,54,62);
	new cjs.ButtonHelper(this.beksblue1, 0, 1, 1);

	this.instance_29 = new lib.Beksblue();
	this.instance_29.parent = this;
	this.instance_29.setTransform(146,567);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.beksblue1}]}).to({state:[]},1).to({state:[{t:this.instance_29}]},19).to({state:[]},1).to({state:[]},10).wait(28));

	// Jems88
	this.james1 = new lib.james1();
	this.james1.parent = this;
	this.james1.setTransform(93,629,1,1,0,0,0,53,62);
	new cjs.ButtonHelper(this.james1, 0, 1, 1);

	this.instance_30 = new lib.Jems88_1();
	this.instance_30.parent = this;
	this.instance_30.setTransform(40,567);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.james1}]}).to({state:[]},1).to({state:[{t:this.instance_30}]},18).to({state:[]},1).to({state:[]},11).wait(28));

	// Carlsberg
	this.karlsberg1 = new lib.karlsberg1();
	this.karlsberg1.parent = this;
	this.karlsberg1.setTransform(619,505,1,1,0,0,0,53,62);
	new cjs.ButtonHelper(this.karlsberg1, 0, 1, 1);

	this.instance_31 = new lib.Carlsberg_1();
	this.instance_31.parent = this;
	this.instance_31.setTransform(566,443);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.karlsberg1}]}).to({state:[]},1).to({state:[{t:this.instance_31}]},17).to({state:[]},1).to({state:[]},12).wait(28));

	// La-Chouffe
	this.lachuf1 = new lib.lachuf1();
	this.lachuf1.parent = this;
	this.lachuf1.setTransform(514.5,505,1,1,0,0,0,53.5,62);
	new cjs.ButtonHelper(this.lachuf1, 0, 1, 1);

	this.instance_32 = new lib.LaChouffe_1();
	this.instance_32.parent = this;
	this.instance_32.setTransform(461,443);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lachuf1}]}).to({state:[]},1).to({state:[{t:this.instance_32}]},16).to({state:[]},1).to({state:[]},13).wait(28));

	// Ginness
	this.gines1 = new lib.gines1();
	this.gines1.parent = this;
	this.gines1.setTransform(409.5,505,1,1,0,0,0,53.5,62);
	new cjs.ButtonHelper(this.gines1, 0, 1, 1);

	this.instance_33 = new lib.Ginness_1();
	this.instance_33.parent = this;
	this.instance_33.setTransform(356,443);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.gines1}]}).to({state:[]},1).to({state:[{t:this.instance_33}]},15).to({state:[]},1).to({state:[]},14).wait(28));

	// Stella
	this.stella1 = new lib.stella1();
	this.stella1.parent = this;
	this.stella1.setTransform(305,502.5,1,1,0,0,0,53,64.5);
	new cjs.ButtonHelper(this.stella1, 0, 1, 1);

	this.instance_34 = new lib.Stella();
	this.instance_34.parent = this;
	this.instance_34.setTransform(252,438);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.stella1}]}).to({state:[]},1).to({state:[{t:this.instance_34}]},14).to({state:[]},1).to({state:[]},15).wait(28));

	// Leffe
	this.lef1 = new lib.lef1();
	this.lef1.parent = this;
	this.lef1.setTransform(199,505,1,1,0,0,0,53,62);
	new cjs.ButtonHelper(this.lef1, 0, 1, 1);

	this.instance_35 = new lib.Leffe_1();
	this.instance_35.parent = this;
	this.instance_35.setTransform(146,443);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lef1}]}).to({state:[]},1).to({state:[{t:this.instance_35}]},13).to({state:[]},1).to({state:[]},16).wait(28));

	// Becks
	this.beks1 = new lib.beks1();
	this.beks1.parent = this;
	this.beks1.setTransform(94,505,1,1,0,0,0,53,62);
	new cjs.ButtonHelper(this.beks1, 0, 1, 1);

	this.instance_36 = new lib.Becks_1();
	this.instance_36.parent = this;
	this.instance_36.setTransform(41,443);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.beks1}]}).to({state:[]},1).to({state:[{t:this.instance_36}]},12).to({state:[]},1).to({state:[]},17).wait(28));

	// hogaarden
	this.hogarden1 = new lib.hogarden1();
	this.hogarden1.parent = this;
	this.hogarden1.setTransform(619.5,381.5,1,1,0,0,0,53.5,62.5);
	new cjs.ButtonHelper(this.hogarden1, 0, 1, 1);

	this.instance_37 = new lib.hogaarden_1();
	this.instance_37.parent = this;
	this.instance_37.setTransform(566,319);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hogarden1}]}).to({state:[]},1).to({state:[{t:this.instance_37}]},11).to({state:[]},1).to({state:[]},18).wait(28));

	// Weihenstephan
	this.winshtefen1 = new lib.winshtefen1();
	this.winshtefen1.parent = this;
	this.winshtefen1.setTransform(514.5,381.5,1,1,0,0,0,53.5,62.5);
	new cjs.ButtonHelper(this.winshtefen1, 0, 1, 1);

	this.instance_38 = new lib.Weihenstephan_1();
	this.instance_38.parent = this;
	this.instance_38.setTransform(461,319);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.winshtefen1}]}).to({state:[]},1).to({state:[{t:this.instance_38}]},10).to({state:[]},1).to({state:[]},19).wait(28));

	// Corona
	this.corona1 = new lib.corona1();
	this.corona1.parent = this;
	this.corona1.setTransform(410,381.5,1,1,0,0,0,53,62.5);
	new cjs.ButtonHelper(this.corona1, 0, 1, 1);

	this.instance_39 = new lib.Corona_1();
	this.instance_39.parent = this;
	this.instance_39.setTransform(357,319);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.corona1}]}).to({state:[]},1).to({state:[{t:this.instance_39}]},9).to({state:[]},1).to({state:[]},20).wait(28));

	// Tuborg
	this.tuborg1 = new lib.tuborg1();
	this.tuborg1.parent = this;
	this.tuborg1.setTransform(304,381.5,1,1,0,0,0,53,62.5);
	new cjs.ButtonHelper(this.tuborg1, 0, 1, 1);

	this.instance_40 = new lib.Tuborg_1();
	this.instance_40.parent = this;
	this.instance_40.setTransform(251,319);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tuborg1}]}).to({state:[]},1).to({state:[{t:this.instance_40}]},8).to({state:[]},1).to({state:[]},21).wait(28));

	// heineken 
	this.hiniken1 = new lib.hiniken1();
	this.hiniken1.parent = this;
	this.hiniken1.setTransform(200,381.5,1,1,0,0,0,54,62.5);
	new cjs.ButtonHelper(this.hiniken1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.hiniken1).to({_off:true},1).wait(7).to({_off:false,x:202,y:379.5},0).to({_off:true},1).wait(50));

	// Goldstar
	this.gols8 = new lib.golstar11();
	this.gols8.parent = this;
	this.gols8.setTransform(94,255.5,1,1,0,0,0,53,63.5);
	new cjs.ButtonHelper(this.gols8, 0, 1, 2, false, new lib.golstar11(), 3);

	this.timeline.addTween(cjs.Tween.get(this.gols8).wait(1).to({x:95,y:253.9},0).to({_off:true},1).wait(57));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(515,446,883,874);
// library properties:
lib.properties = {
	width: 950,
	height: 884,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/interctive_atlas_.png", id:"interctive_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;