

//Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

canvas.width  = window.innerWidth;
//canvas.width = 600;
// console.log(bgImage.width);
// canvas.width = bgImage.width;

canvas.height = window.innerHeight;
//canvas.height = 600;
// canvas.height = bgImage.height;
// console.log(bgImage.height);
document.body.appendChild(canvas);

// load background
var bgImage = new Image();
var bgReady = false;
bgImage.onload = function () {
  bgReady = true;
};
bgImage.src = "http://gilgamech.com/Images/PAX/Expo4A.png";

// load clientClint
var clientClintReady = false;
var clientClintImage = new Image();
clientClintImage.onload = function () {
  clientClintReady = true;
};
// clientClintImage.src = "http://gilgamech.com/images/clientClint.png";

// packet image
var packetReady = false;
var packetImage = new Image();
packetImage .onload = function () {
  packetReady = true;
};
// packetImage .src = "http://gilgamech.com/images/packet.png";

// Game objects
var ARKMapJSON = "";
var GroupedARKMapJSON = "";
var TribeJSON = ""
var ARKDataPayload = "";

var clientClint = {};
var packet = {};
var packetsCaught = 0;

// keyboard controls
var mousePos = {};

addEventListener('mousemove', function(evt) {
 mousePos = getMousePos(canvas, evt);
}, false);
 
// reset game when player catches packet
var reset = function () {
	loadARKMap();
	loadARKDataPayload();
	loadTribes();
};

// Load JSON
// https://laracasts.com/discuss/channels/general-discussion/load-json-file-from-javascript
function loadJSON(file, callback) {   

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }
 
// Load...stuff?
// https://laracasts.com/discuss/channels/general-discussion/load-json-file-from-javascript
function loadARKMap() {
    
    // loadJSON("http://gilgamech.com/ARKData/ARKMap.json", function(response) {
    loadJSON("http://gilgamech.com:65530/?API=map", function(response) {
  
        var actual_JSON = JSON.parse(response);
		ARKMapJSON = actual_JSON
    }); // end loadJSON
    
}

function loadARKDataPayload() {
    
    loadJSON("http://gilgamech.com/ARKData/ARKDataPayload.json", function(response) {
  
        var actual_JSON = JSON.parse(response);
		ARKDataPayload = actual_JSON
    }); // end loadJSON
    
}

function loadTribes() {
    
    loadJSON("http://gilgamech.com/ARKData/tribe.json", function(response) {
  
        var actual_JSON = JSON.parse(response);
		TribeJSON = actual_JSON
    }); // end loadJSON
    
}

function groupArrayCT(oldArray) {
	var newGroup = [],
		Tribes = {},
		i, j, current;
	for (i = 0, j = oldArray.length; i < j; i++) {
		current = oldArray[i];
		if (!(current.TribeName in Tribes)) {
			Tribes[current.TribeName] = {TribeName: current.TribeName, ARKNames: []};
			newGroup.push(Tribes[current.TribeName]);
		}
		Tribes[current.TribeName].ARKNames.push(current.ARKName);
	}
	return newGroup;
}
// console.log(groupArray(TribeJSON));

function groupArrayAMJ(oldArray) {
	var newGroup = [],
		Tribes = {},
		i, j, current;
	for (i = 0, j = oldArray.length; i < j; i++) {
		current = oldArray[i];
		if (!(current.TribeName in Tribes)) {
			Tribes[current.TribeName] = {TribeName: current.TribeName, Types: []};
			newGroup.push(Tribes[current.TribeName]);
		}
		Tribes[current.TribeName].Types.push(current.Type);
	}
	return newGroup;
}
// console.log(groupArray(TribeJSON));

// http://sajjadhossain.com/2008/10/31/javascript-string-trimming-and-padding/
//pads left
String.prototype.lpad = function(padString, length) {
	var str = this;
    while (str.length < length)
        str = padString + str;
    return str;
}
 
//pads right
String.prototype.rpad = function(padString, length) {
	var str = this;
    while (str.length < length)
        str = str + padString;
    return str;
}
String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g,"");
}
 
//trimming space from left side of the string
String.prototype.ltrim = function() {
	return this.replace(/^\s+/,"");
}
 
//trimming space from right side of the string
String.prototype.rtrim = function() {
	return this.replace(/\s+$/,"");
}

//https://stackoverflow.com/questions/14853779/adding-input-elements-dynamically-to-form
function addARKFields(type,id,placeholder,value,maxlength,size,min,max){
	var container = document.getElementById("container");
	// Create an <input> element, set its type and name attributes
	var input = document.createElement("input");
	input.type = type;
	input.id = id;
	input.placeholder = placeholder;
	input.value = value;
	input.maxlength = maxlength;
	input.size = size;
	input.min = min;
	input.max = max;
	container.appendChild(input);
}

function updateTribeFields() {
	for (i = 0; i < ARKMapJSON.length; i++) { 
		// Set up X, Y and Tribe name.
		TribeX = (ARKMapJSON[i].Long * Math.round((canvas.width/100))* 10 ) / 10;
		TribeY = (ARKMapJSON[i].Lat * Math.round((canvas.height/100))* 10 ) / 10;
		TribeName = (ARKMapJSON[i].TribeName)
		Type = (ARKMapJSON[i].Type)
		Comments = (ARKMapJSON[i].Comments)

		// document.getElementById('TribeName').value=TribeName ; 
		//addARKFields(type,id,placeholder,value,maxlength,size);
		addARKFields("Text",("TribeName" + i),"Tribe name",ARKMapJSON[i].TribeName,32,24);
		addARKFields("Text",("BaseType" + i),"Base type",ARKMapJSON[i].Type,16,8);
		addARKFields("Number",("Lat" + i),"Lat",ARKMapJSON[i].Lat,4,4,0,100);
		addARKFields("Number",("Long" + i),"Long",ARKMapJSON[i].Long,4,4,0,100);
		addARKFields("Text",("LastSeenDate" + i),"Last Seen Date",ARKMapJSON[i].LastSeenDate,4,8);
		addARKFields("Text",("DestroyByDate" + i),"Destroy By Date",ARKMapJSON[i].DestroyDate,8,16);
		addARKFields("Number",("DestroyBy6Digit" + i),"6Digit","",6,6,999999);
		addARKFields("Text",("Comments" + i),"Comments (140 char limit)",ARKMapJSON[i].Comments,140,40);
		// Append a line break 
		container.appendChild(document.createElement("br"));
	}; 
	  
}

  //draw it all
var render = function () {
	if (bgReady) {
		var ImageRatio = bgImage.width / bgImage.height;
		canvas.height = canvas.width * ImageRatio;
		
		ctx.drawImage(bgImage, 0, 0, bgImage.width,    bgImage.height,     // source rectangle
									0, 0, canvas.width, (canvas.width * ImageRatio)); // destination rectangle
	}
   ctx.textBaseline = "top";
		
	// Set up top menus
	// Current Server Info
	// Draw up box behind name
	var current_info_box_text = "testhost"; // [ARKDataPayload.info.HostName];
	var current_info_box_X = 30;
	var current_info_box_Y = 30;
	ctx.font = "12x Helvetica";
	ctx.textAlign = "left";
    ctx.fillStyle = "#EFDFB0"; // light tan
	var current_info_box_text_width = (ctx.measureText(current_info_box_text[0]).width);
	var current_info_box_text_height = (20 * current_info_box_text.length);
    
	// Current tribes
	// Draw up box behind name
	var current_tribes_box_text = ["Tribes Online"];
	var current_tribes_box_X = current_info_box_X;
	var current_tribes_box_Y = current_info_box_Y + 20;
	ctx.font = "12x Helvetica";
	ctx.textAlign = "left";
    ctx.fillStyle = "#EFDFB0"; // light tan
	var current_tribes_box_text_width = (ctx.measureText(current_tribes_box_text[0]).width);
	var current_tribes_box_text_height = (20 * current_tribes_box_text.length);
    
	// Current players
	// Draw up box behind name
	var current_players_box_text = ["Current Players"];
	var current_players_box_X = current_tribes_box_X;
	var current_players_box_Y = current_tribes_box_Y + 20;
	ctx.font = "12x Helvetica";
	ctx.textAlign = "left";
    ctx.fillStyle = "#EFDFB0"; // light tan
	var current_players_box_text_width = (ctx.measureText(current_players_box_text[0]).width);
	var current_players_box_text_height = (20 * current_players_box_text.length);

	// Seen players
	// Draw up box behind name
	var current_seen_box_text = ["Seen Players (Coming Soon)"];
	var current_seen_box_X = current_players_box_X ;
	var current_seen_box_Y = current_players_box_Y + 20;
	ctx.font = "12x Helvetica";
	ctx.textAlign = "left";
    ctx.fillStyle = "#EFDFB0"; // light tan
	var current_seen_box_text_width = (ctx.measureText(current_seen_box_text[0]).width);
	var current_seen_box_text_height = (20 * current_seen_box_text.length);

	// Set up mouseover 
   ctx.font = "10px Helvetica";
	var CursorText = "Mouseover for tribe data."
	var CursorText2 = "Lat: " + (Math.round((mousePos.y*100/canvas.height)*10)/10) + " Long: " + (Math.round((mousePos.x*100/canvas.width)*10)/10);
	var CursorText3 = ""
	var CursorText4 = ""
	var mouseover = 0
	var TextWidthMax = 0
	var TextBoxHeight = 62
	
	for (i = 0; i < ARKMapJSON.length; i++) { 
	// Set up X, Y and Tribe name.
	TribeX = (ARKMapJSON[i].Long * Math.round(canvas.width/100)* 10 ) / 10;
	TribeY = (ARKMapJSON[i].Lat * Math.round(canvas.height/100)* 10 ) / 10;
	TribeName = (ARKMapJSON[i].TribeName)
	Type = (ARKMapJSON[i].Type)
	Comments = (ARKMapJSON[i].Comments)
	
	
	// Draw dot
    ctx.fillStyle = "#00eeee"; // teal
	// ctx.fillStyle="#aabdb7"; // light grey
	ctx.fillRect(TribeX,TribeY,10,10); 

	// Draw up box behind name
    ctx.font = "16px Helvetica";
    ctx.fillStyle = "#EFDFB0"; // light tan
	// ctx.fillRect(TribeX,TribeY,(ctx.measureText(TribeName).width), (ctx.measureText(TribeName).height)); 
	ctx.fillRect(TribeX,TribeY+15,(ctx.measureText(TribeName).width), 15); 

	// Draw text
    ctx.fillStyle = "#000000"; // black
	ctx.textAlign = "left";
	ctx.fillText((ARKMapJSON[i].TribeName), TribeX, TribeY+15);

	//Is the mouse near a base?
	if (
		 TribeX > (mousePos.x  - 16) 
		 && TribeX < (mousePos.x + 6 )
		 && TribeY > (mousePos.y  - 16) 
		 && TribeY < (mousePos.y + 6 )  
	) {
		  
		 // Set up mouseover text
		CursorText = TribeName + " - " + Type;
		CursorText2 = "Lat: " + ARKMapJSON[i].Lat + " Long: " + ARKMapJSON[i].Long + " Last Seen: " + ARKMapJSON[i].LastSeenDate;
		CursorText3 = "Demolish allowed on: " + ARKMapJSON[i].DestroyDate;
		CursorText4 = Comments;
		mouseover = 1;
	} else {
		
	}; // end if TribeX
}; //end for i

// Calculate the player count. Will have to merge all this logic on some future rewrite.	
var ADPPlayerCount = 0;
/*
for (ADPindex = 0; ADPindex < ARKDataPayload.players.length; ++ADPindex) {
	var ADPPlayer = ARKDataPayload.players[ADPindex];
	if (ADPPlayer.Name !== "") {
		ADPPlayerCount++
	}; // end if ADPPlayer
}; // end if ADPPlayer
*/
	
	//Is the mouse near the Current Players box?
	if (
		 current_players_box_X + current_players_box_text_width > (mousePos.x) 
		 && current_players_box_X < (mousePos.x)
		 && current_players_box_Y + current_players_box_text_height  > (mousePos.y ) 
		 && current_players_box_Y < (mousePos.y )
	) {
		// Set the mouseover text to blank
		CursorText = "";
		CursorText2 = "";
		current_seen_box_text = "";
		
		// current_players_box_text = ARKDataPlayers
		current_players_box_text = [' | Steam name | ARK name | Tribe name | Last Session Ended | Session Duration | '];
		TribeJSON = TribeJSON.sort(function(a,b) {
			if(a.TribeName < b.TribeName) return -1;
			if(a.TribeName > b.TribeName) return 1;
			return 0;
		}); //end function a,b
/*
		for (ADPindex = 0; ADPindex < ARKDataPayload.players.length; ++ADPindex) {
			var ADPPlayer = ARKDataPayload.players[ADPindex];
			if (ADPPlayer.Name !== "") {
				
				for (TJindex = 0; TJindex < TribeJSON.length; ++TJindex) {
					if (ADPPlayer.Name == TribeJSON[TJindex].SteamName) {
						ADPPlayer["TribeName"] = TribeJSON[TJindex].TribeName;
						// console.log(TribeJSON[TJindex].TribeName);
						ADPPlayer["ARKName"] = TribeJSON[TJindex].ARKName;
						
						current_players_box_text.push(' | ' + ADPPlayer.Name.rpad(" ", 15) + ' | ' + ADPPlayer.ARKName.rpad(" ", 15) + ' | ' + ADPPlayer.TribeName.rpad(" ", 15) + ' | ' + ADPPlayer.TimeF.rpad(" ", 10) + ' | ');
						ADPPlayerCount++
					}; // end if ADPPlayer
				}; // end for TJindex

			}; // end if ADPPlayer
		}; // end for ADPindex
*/
		
		var str = "pen";
		var padlen = 5;
		// console.log(str.lpad(" ", padlen)); //result "00005"
		// console.log(str.rpad(" ", padlen)); //result "50000"
		// .rpad(" ", padlen)
	}; // end if current_players_box_X

	//Is the mouse near the Current Info box?
	if (
		 current_info_box_X + current_info_box_text_width > (mousePos.x) 
		 && current_info_box_X < (mousePos.x)
		 && current_info_box_Y + current_info_box_text_height  > (mousePos.y ) 
		 && current_info_box_Y < (mousePos.y )
	) {
		// Set the mouseover text to blank
		CursorText = "";
		CursorText2 = "";
		current_seen_box_text = "";
		current_tribes_box_text = "";	
		current_players_box_text = "";	
		// console.log(ADPPlayerCount);
		
		var ADPInfo = ARKDataPayload.info;
		var ADPRules = ARKDataPayload.rules;
		current_info_box_text = ["Server name: " + ADPInfo.HostName,"Map name: " + ADPInfo.Map,"Ingame time: " + ADPRules.DayTime_s,"Player Count: " + ADPPlayerCount,"Current connections: " + ADPInfo.Players,"Max Players: " + ADPInfo.MaxPlayers];

	}; // end if current_info_box_X
		//Is the mouse near the Current Tribes box?
	if (
		 current_tribes_box_X + current_tribes_box_text_width > (mousePos.x) 
		 && current_tribes_box_X < (mousePos.x)
		 && current_tribes_box_Y + current_tribes_box_text_height  > (mousePos.y ) 
		 && current_tribes_box_Y < (mousePos.y )
	) {
		// Set the mouseover text to blank
		CursorText = "";
		CursorText2 = "";
		current_seen_box_text = "";
		current_players_box_text = "";	

		// current_tribes_box_text = ARKDataPlayers
		current_tribes_box_text = [' | Tribe name | Current Online | Total Members | Bases Seen (beta) | '];
		var CurrentTribes = [];	
		var TotalBases = groupArrayAMJ(ARKMapJSON);
		var TotalTribeMembers = groupArrayCT(TribeJSON);
		var TribeMembers = "";
		for (ADPindex = 0; ADPindex < ARKDataPayload.players.length; ++ADPindex) {
				// ADPlayer is a list of all players online, with TribeName and ARKName populated.
			var ADPPlayer = ARKDataPayload.players[ADPindex];
			if (ADPPlayer.Name !== "") {
			// If the player name isn't blank
				for (TJindex = 0; TJindex < TribeJSON.length; ++TJindex) {
					if (ADPPlayer.Name == TribeJSON[TJindex].SteamName) {
						// If the player is currently online
						ADPPlayer["TribeName"] = TribeJSON[TJindex].TribeName;
						// console.log(TribeJSON[TJindex].TribeName);
						ADPPlayer["ARKName"] = TribeJSON[TJindex].ARKName;
						CurrentTribes.push(ADPPlayer);
					}; // end if ADPPlayer
				}; // end for TJindex
			}; // end if ADPPlayer
		}; // end for ADPindex
		
		CurrentTribes = groupArrayCT(CurrentTribes);
		CurrentTribes = CurrentTribes.sort(function(a,b) {
			if(a.ARKNames.length > b.ARKNames.length) return -1;
			if(a.ARKNames.length < b.ARKNames.length) return 1;
			return 0;
		}); //end function a,b

		// console.log(CurrentTribes);
		GroupedARKMapJSON = groupArrayAMJ(ARKMapJSON);
		var CountOfBases = 0;
		for (CTindex = 0; CTindex < CurrentTribes.length; ++CTindex) {
				for (AMJindex = 0; AMJindex < GroupedARKMapJSON.length; ++AMJindex) {
					if (CurrentTribes[CTindex].TribeName == GroupedARKMapJSON[AMJindex].TribeName) {
						// If the player is currently online
						CountOfBases = GroupedARKMapJSON[AMJindex].Types.length;
					}; // end if CurrentTribes
				}; // end for AMJindex
					for (TTMindex = 0; TTMindex < TotalTribeMembers.length; ++TTMindex) {
						if (CurrentTribes[CTindex].TribeName == TotalTribeMembers[TTMindex].TribeName) {
							TribeMembers = TotalTribeMembers[TTMindex].ARKNames.length;
						}; // end if CurrentTribes
					}; // end for TTMindex

			 current_tribes_box_text.push(' | ' + CurrentTribes[CTindex].TribeName.rpad(" ", 20) + ' | ' + CurrentTribes[CTindex].ARKNames.length.toString().rpad(" ", 20) + ' | ' + TribeMembers.toString().rpad(" ", 20) + ' | ' + CountOfBases.toString().rpad(" ", 20) + ' | ');
		}; // end for CTindex

			// current_tribes_box_text.push('</table>');
	}; // end if current_tribes_box_X
	
  
// Mark locations of beaver dams
    ctx.fillStyle = "#bb88ee";
	ctx.fillRect(22* Math.round(canvas.width/100),68.5* Math.round(canvas.height/100),10,10); 
	ctx.fillRect(41.6* Math.round(canvas.width/100),68.5* Math.round(canvas.height/100),10,10); 
	ctx.fillRect(54.5* Math.round(canvas.width/100),29.5* Math.round(canvas.height/100),10,10); 
	ctx.fillRect(82.7* Math.round(canvas.width/100),59.1* Math.round(canvas.height/100),10,10); 
	ctx.fillRect(48.5* Math.round(canvas.width/100),63.8* Math.round(canvas.height/100),10,10); 
	ctx.fillRect(74* Math.round(canvas.width/100),40.5* Math.round(canvas.height/100),10,10); 

	
// Mark locations of undersea caves
	ctx.fillStyle = "#00eeee"; // teal
// North
	ctx.fillRect(10.1* Math.round(canvas.width/100),21.7* Math.round(canvas.height/100),10,10); 
	ctx.fillRect(10.4* Math.round(canvas.width/100),39.9* Math.round(canvas.height/100),10,10); 
	ctx.fillRect(8.2* Math.round(canvas.width/100),90.1* Math.round(canvas.height/100),10,10); 
// West
	ctx.fillRect(15.9* Math.round(canvas.width/100),10.4* Math.round(canvas.height/100),10,10); 
	ctx.fillRect(50.1* Math.round(canvas.width/100),11.0* Math.round(canvas.height/100),10,10); 
	ctx.fillRect(83.3* Math.round(canvas.width/100),10.2* Math.round(canvas.height/100),10,10); 
// East
	ctx.fillRect(36.2* Math.round(canvas.width/100),91.1* Math.round(canvas.height/100),10,10); 
	ctx.fillRect(52.8* Math.round(canvas.width/100),91.8* Math.round(canvas.height/100),10,10); 
	ctx.fillRect(87.3* Math.round(canvas.width/100),90.2* Math.round(canvas.height/100),10,10); 
// South
	ctx.fillRect(90.9* Math.round(canvas.width/100),13.5* Math.round(canvas.height/100),10,10); 
	ctx.fillRect(90.1* Math.round(canvas.width/100),36.3* Math.round(canvas.height/100),10,10); 
	ctx.fillRect(90.7* Math.round(canvas.width/100),71.5* Math.round(canvas.height/100),10,10); 
/*
*/

 /*
*/
	// Draw out Seen Tribes
	ctx.font = "12x Helvetica";
	ctx.textAlign = "left";
    ctx.fillStyle = "#EFDFB0"; // light tan
	current_seen_box_text_width = (ctx.measureText(current_seen_box_text[0]).width);
	current_seen_box_text_height = (20 * current_seen_box_text.length);
	// console.log(current_seen_box_text_width);
	// ctx.fillRect(100,10,(ctx.measureText(current_seen_box_text).width), (ctx.measureText(current_seen_box_text).height)); 
	ctx.fillRect(current_seen_box_X,current_seen_box_Y,current_seen_box_text_width,current_seen_box_text_height);
	// Draw text
    ctx.fillStyle = "#000000"; // black
	for (index = 0; index < current_seen_box_text.length; ++index) {
		ctx.fillText(current_seen_box_text[index],current_seen_box_X, ( current_seen_box_Y  + (20 * index)));
	}; // end for index

	// Draw out Current Tribes
	ctx.font = "12x Helvetica";
	ctx.textAlign = "left";
    ctx.fillStyle = "#EFDFB0"; // light tan
	current_tribes_box_text_width = (ctx.measureText(current_tribes_box_text[0]).width);
	current_tribes_box_text_height = (20 * current_tribes_box_text.length);
	// console.log(current_tribes_box_text_width);
	// ctx.fillRect(100,10,(ctx.measureText(current_tribes_box_text).width), (ctx.measureText(current_tribes_box_text).height)); 
	ctx.fillRect(current_tribes_box_X,current_tribes_box_Y,current_tribes_box_text_width,current_tribes_box_text_height);
	// Draw text
    ctx.fillStyle = "#000000"; // black
	for (index = 0; index < current_tribes_box_text.length; ++index) {
		ctx.fillText(current_tribes_box_text[index],current_tribes_box_X, ( current_tribes_box_Y  + (20 * index)));
	}; // end for index

	// Draw out Current Players
	ctx.font = "12x Helvetica";
	ctx.textAlign = "left";
    ctx.fillStyle = "#EFDFB0"; // light tan
	current_players_box_text_width = (ctx.measureText(current_players_box_text[0]).width);
	current_players_box_text_height = (20 * current_players_box_text.length);
	// console.log(current_players_box_text_width);
	// ctx.fillRect(100,10,(ctx.measureText(current_players_box_text).width), (ctx.measureText(current_players_box_text).height)); 
	ctx.fillRect(current_players_box_X,current_players_box_Y,current_players_box_text_width,current_players_box_text_height);
	// Draw text
    ctx.fillStyle = "#000000"; // black
	for (index = 0; index < current_players_box_text.length; ++index) {
		ctx.fillText(current_players_box_text[index],current_players_box_X, ( current_players_box_Y  + (20 * index)));
	}; // end for index
	
	// Draw out Current Info
	ctx.font = "12x Helvetica";
	ctx.textAlign = "left";
    ctx.fillStyle = "#EFDFB0"; // light tan
	current_info_box_text_width = (ctx.measureText(current_info_box_text[0]).width);
	current_info_box_text_height = (20 * current_info_box_text.length);
	// console.log(current_info_box_text_width);
	// ctx.fillRect(100,10,(ctx.measureText(current_info_box_text).width), (ctx.measureText(current_info_box_text).height)); 
	ctx.fillRect(current_info_box_X,current_info_box_Y,current_info_box_text_width,current_info_box_text_height);
	// Draw text
    ctx.fillStyle = "#000000"; // black
	for (index = 0; index < current_info_box_text.length; ++index) {
		ctx.fillText(current_info_box_text[index],current_info_box_X, ( current_info_box_Y  + (20 * index)));
	}; // end for index

	// Draw out mouseover
    ctx.font = "12px Helvetica";
	TextWidthMax = Math.max(ctx.measureText(CursorText2).width, Math.max(ctx.measureText(CursorText3).width, ctx.measureText(CursorText4).width));

	ctx.font = "22px Helvetica";
	ctx.fillStyle="#fcfae5";
	// TextWidthMax = ctx.measureText(CursorText).width
	//TextWidthMax = Math.max(Math.max(ctx.measureText(CursorText).width, ctx.measureText(CursorText2).width),0)
	TextWidthMax = Math.max(ctx.measureText(CursorText).width, TextWidthMax);
	

// If the mouse is too close to the right edge, flip the text the other way.
if ((mousePos.x + TextWidthMax) > canvas.width) {
  ctx.textAlign = "right";
	ctx.fillRect((mousePos.x-9-(TextWidthMax)), (mousePos.y+15), (TextWidthMax + 5),TextBoxHeight);
  } else {
	ctx.textAlign = "left";
	ctx.fillRect((mousePos.x-9), (mousePos.y+15), (TextWidthMax + 5),62);
}; // end if mousePos

if ((mousePos.y + TextBoxHeight) > canvas.height) {
	// ctx.fillRect((mousePos.x-9-(TextWidthMax)), (mousePos.y-47), (TextWidthMax + 5),62)
  } else {
	// ctx.fillRect((mousePos.x-9), (mousePos.y+15), (TextWidthMax + 5),62)
}; // end if mousePos

if (TextWidthMax > 1) {
	//Draw mouse.
    // ctx.fillStyle = "#EFDFB0"; // light tan
    ctx.fillStyle = "#222200"; // light bluish-grey
    ctx.fillText(CursorText, (mousePos.x-6), (mousePos.y+16));
	
    ctx.font = "12px Helvetica";
    ctx.fillText(CursorText2, (mousePos.x-6), (mousePos.y+38));
    ctx.fillText(CursorText3, (mousePos.x-6), (mousePos.y+50));
    ctx.fillText(CursorText4, (mousePos.x-6), (mousePos.y+62));
  } else {
}; // end if mousePos
  
}; // end render

// Get mouse position
function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}


// Game loop
var main = function () {
  var now = Date.now();
  var delta = now - then;
  
  render();
  
  then = now;
};

//Play!
reset();
var then = Date.now();
setInterval(main, 50); //function, milliseconds between execution - higher number is more responsive and also more CPU use. 