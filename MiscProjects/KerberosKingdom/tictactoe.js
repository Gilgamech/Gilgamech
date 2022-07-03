// make canvas
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
canvas.height = 512;
canvas.width = 512;
document.body.appendChild(canvas);

//background image 
var bgImage = new Image();
bgImage.src = "https://dl.dropboxusercontent.com/u/21982561/html5/images/tictactoe.png";
var bgReady = false;
bgImage.onload = function () {
bgReady = true;
};

//x image
var ximgImage = new Image();
ximgReady = false;
ximgImage.src = "https://dl.dropboxusercontent.com/u/21982561/html5/images/ticX.png"
ximgImage.onload = function () {
	ximgReady = true;
};

//o image
var oimgImage = new Image();
oimgReady = false;
oimgImage.src = "https://dl.dropboxusercontent.com/u/21982561/html5/images/ticO.png"
oimgImage.onload = function () {
	oimgReady = true;
}

//Creates variables
function init() {
loc1fill = "a";
loc2fill = "b";
loc3fill = "c";
loc4fill = "d";
loc5fill = "e";
loc6fill = "f";
loc7fill = "g";
loc8fill = "h";
loc9fill = "i";
loc1final = "a";
loc2final = "b";
loc3final = "c";
loc4final = "d";
loc5final = "e";
loc6final = "f";
loc7final = "g";
loc8final = "h";
loc9final = "i";
turnLetter = "x";
turn = 0;
col0 = 0;
col1 = 170;
col2 = 340;
col3 = 510;
row0 = 0;
row1 = 170;
row2 = 340;
row3 = 510;
offset = 10;
cellName = 0;
gameWon = false;
winningLetter = "nobody"
}

//game objects
var mouseOnclickLoc = [0, 0];
var mouseOverLoc = [0, 0];

//mouse input
function getMousePos(canvas, e) {
	var rectangle = canvas.getBoundingClientRect();
	return {
	x: e.clientX - rectangle.left,
	y: e.clientY - rectangle.top
	};
}

//mouse move event listener
addEventListener('mousemove', function(e) {
	mosPos = getMousePos(canvas, e);
	mouseOverLoc = [mosPos.x, mosPos.y];
}, false);

//mouse click event listener
addEventListener('click', function(ev) {
	mosPos = getMousePos(canvas, ev);
	mouseOnclickLoc = [ mosPos.x, mosPos.y ]; // not sure why I put this in here...
	clickLoc();
	//check to make sure mouse is within borders before changing turn

}, false);

//changes which letter is active
function changeLetter() {
	if ((turn%2==0) && (!gameWon)) {
		turnLetter = "x";
	} else {
		turnLetter = "o";
	}

}

//check mouse position to see which location it's over, then sets that location to the turn's letter or back to "a"
function checkLoc () {
	if (gameWon) {
	} else {
	if ((mouseOverLoc[0] > row0) && (mouseOverLoc[1] > col0) && (mouseOverLoc[0] < row1) && (mouseOverLoc[1] <col1)) {
		loc1fill = turnLetter;
	} else {
		loc1fill = "a";
	}
	
	if ((mouseOverLoc[0] > row1) && (mouseOverLoc[1] > col0) && (mouseOverLoc[0] <row2) && (mouseOverLoc[1] <col1)) {
		loc2fill = turnLetter;
	} else {
		loc2fill = "a";
	}

	if ((mouseOverLoc[0] > row2) && (mouseOverLoc[1] > col0) && (mouseOverLoc[0] <row3) && (mouseOverLoc[1] <col1)) {
		loc3fill = turnLetter;
	} else {
		loc3fill = "a";
	}

	if ((mouseOverLoc[0] > row0) && (mouseOverLoc[1] > col1) && (mouseOverLoc[0] <row1) && (mouseOverLoc[1] <col2)) {
		loc4fill = turnLetter;
	} else {
		loc4fill = "a";
	}

	if ((mouseOverLoc[0] > row1) && (mouseOverLoc[1] > col1) && (mouseOverLoc[0] <row2) && (mouseOverLoc[1] <col2)) {
		loc5fill = turnLetter;
	} else {
		loc5fill = "a";
	}

	if ((mouseOverLoc[0] > row2) && (mouseOverLoc[1] > col1) && (mouseOverLoc[0] <row3) && (mouseOverLoc[1] <col2)) {
		loc6fill = turnLetter;
	} else {
		loc6fill = "a";
	}

	if ((mouseOverLoc[0] > row0) && (mouseOverLoc[1] > col2) && (mouseOverLoc[0] <row1) && (mouseOverLoc[1] <col3)) {
		loc7fill = turnLetter;
	} else {
		loc7fill = "a";
	}

	if ((mouseOverLoc[0] > row1) && (mouseOverLoc[1] > col2) && (mouseOverLoc[0] <row2) && (mouseOverLoc[1] <col3)) {
		loc8fill = turnLetter;
	} else {
		loc8fill = "a";
	}

	if ((mouseOverLoc[0] > row2) && (mouseOverLoc[1] > col2) && (mouseOverLoc[0] <row3) && (mouseOverLoc[1] <col3)) {
		loc9fill = turnLetter;
	} else {
		loc9fill = "a";
	}
	}
}

function clickLoc () {
	//if game is won do nothing
	if (gameWon) {
	} else {
	if ((mouseOnclickLoc[0] > row0) && (mouseOnclickLoc[1] > col0) && (mouseOnclickLoc[0] < row1) && (mouseOnclickLoc[1] <col1) && loc1final == "a") {
		loc1final = turnLetter;
		turn++;
	} 
	
	if ((mouseOnclickLoc[0] > row1) && (mouseOnclickLoc[1] > col0) && (mouseOnclickLoc[0] <row2) && (mouseOnclickLoc[1] <col1)&& loc2final == "b") {
		loc2final = turnLetter;
		turn++;
		} 
	
	if ((mouseOnclickLoc[0] > row2) && (mouseOnclickLoc[1] > col0) && (mouseOnclickLoc[0] <row3) && (mouseOnclickLoc[1] <col1)&& loc3final == "c") {
		loc3final = turnLetter;
		turn++;
	}  

	if ((mouseOnclickLoc[0] > row0) && (mouseOnclickLoc[1] > col1) && (mouseOnclickLoc[0] <row1) && (mouseOnclickLoc[1] <col2)&& loc4final == "d") {
		loc4final = turnLetter;
		turn++;
	}

	if ((mouseOnclickLoc[0] > row1) && (mouseOnclickLoc[1] > col1) && (mouseOnclickLoc[0] <row2) && (mouseOnclickLoc[1] <col2)&& loc5final == "e") {
		loc5final = turnLetter;
		turn++;
	}

	if ((mouseOnclickLoc[0] > row2) && (mouseOnclickLoc[1] > col1) && (mouseOnclickLoc[0] <row3) && (mouseOnclickLoc[1] <col2)&& loc6final == "f") {
		loc6final = turnLetter;
		turn++;
	}

	if ((mouseOnclickLoc[0] > row0) && (mouseOnclickLoc[1] > col2) && (mouseOnclickLoc[0] <row1) && (mouseOnclickLoc[1] <col3)&& loc7final == "g") {
		loc7final = turnLetter;
		turn++;
	}

	if ((mouseOnclickLoc[0] > row1) && (mouseOnclickLoc[1] > col2) && (mouseOnclickLoc[0] <row2) && (mouseOnclickLoc[1] <col3)&& loc8final == "h") {
		loc8final = turnLetter;
		turn++;
	}

	if ((mouseOnclickLoc[0] > row2) && (mouseOnclickLoc[1] > col2) && (mouseOnclickLoc[0] <row3) && (mouseOnclickLoc[1] <col3)&& loc9final == "i") {
		loc9final = turnLetter;
		turn++;
	}
	}
	
}

//draw stuff
var render = function () {
	if (bgReady) {
		context.drawImage(bgImage,0,0);
	}
	
	//fills in the boxes
	checkLoc();
	if (loc1fill == "x" || loc1final == "x") {
		context.drawImage(ximgImage, (row0+offset), (col0+offset));
	} else if (loc1fill == "o" || loc1final == "o") {
		context.drawImage(oimgImage, (row0+offset), (col0+offset));
	}
	if (loc2fill == "x" || loc2final == "x") {
		context.drawImage(ximgImage, (row1+offset), (col0+offset));
	} else if (loc2fill == "o" || loc2final == "o") {
	context.drawImage(oimgImage, (row1+offset), (col0+offset));
	}
	if (loc3fill == "x" || loc3final == "x") {
		context.drawImage(ximgImage, (row2+offset), (col0+offset));
	} else if (loc3fill == "o" || loc3final == "o") {
	context.drawImage(oimgImage, (row2+offset), (col0+offset));
	}
	if (loc4fill == "x" || loc4final == "x") {
		context.drawImage(ximgImage, (row0+offset), (col1+offset));
	} else if (loc4fill == "o" || loc4final == "o") {
		context.drawImage(oimgImage, (row0+offset), (col1+offset));
	}
	if (loc5fill == "x" || loc5final == "x") {
		context.drawImage(ximgImage, (row1+offset), (col1+offset));
	} else if (loc5fill == "o" || loc5final == "o") {
		context.drawImage(oimgImage, (row1+offset), (col1+offset));
	}
	if (loc6fill == "x" || loc6final == "x") {
		context.drawImage(ximgImage, (row2+offset), (col1+offset));
	} else if (loc6fill == "o" || loc6final == "o") {
		context.drawImage(oimgImage, (row2+offset), (col1+offset));
	}
	if (loc7fill == "x" || loc7final == "x") {
		context.drawImage(ximgImage, (row0+offset), (col2+offset));
	} else if (loc7fill == "o" || loc7final == "o") {
		context.drawImage(oimgImage, (row0+offset), (col2+offset));
	}
	if (loc8fill == "x" || loc8final == "x") {
		context.drawImage(ximgImage, (row1+offset), (col2+offset));
	} else if (loc8fill == "o" || loc8final == "o") {
		context.drawImage(oimgImage, (row1+offset), (col2+offset));
	}
	if (loc9fill == "x" || loc9final == "x") {
		context.drawImage(ximgImage, (row2+offset), (col2+offset));
	} else if (loc9fill == "o" || loc9final == "o") {
		context.drawImage(oimgImage, (row2+offset), (col2+offset));
	}
	//winning 
	context.fillstyle = "rgb(250,250,250)";
	context.font = "24px Helveltica";
	context.textAlign = "left";
	context.textBaseline = "top";
	if (gameWon) {
		context.fillText ( winningLetter + " wins the game!",174,400);
		context.fillText ( "Click restart to play again!",174,432);
	}
}

//from StackOverflow
function areEqual() {
	var len = arguments.length;
	for (var i = 1; i < len; i++){
		if (arguments[i] != arguments [i-1])
		//winningLetter = arguments[i];
		return false;
	}
	return true;
}


//game win conditions
 var gamewin = function() {
	//if location 1 matches location 2 and 2 matches 3 (across)
	if (areEqual(loc1final, loc2final, loc3final)) {
		//game is won, winning letter is location 1
		gameWon = true;
		winningLetter = loc1final;
	} 
	//repeat for 4, 5 & 6
	if (areEqual(loc4final, loc5final, loc6final)) {
		gameWon = true;
		winningLetter = loc4final;
	} 
	//repeat for 7, 8 & 9
	if (areEqual(loc7final, loc8final, loc9final)) {
		gameWon = true;
		winningLetter = loc7final;
	}
	//repeat for 1, 4, 7 (down)
	if (areEqual(loc1final, loc4final, loc7final)) {
		gameWon = true;
		winningLetter = loc1final;
	}
	//repeat for 2, 5, 9 
	if (areEqual(loc2final, loc5final, loc8final)) {
		gameWon = true;
		winningLetter = loc2final;
	}
	//3, 6, 9
	if (areEqual(loc6final, loc9final, loc3final)) {
		gameWon = true;
		winningLetter = loc3final;
	}
	//1, 5, 9 (diagonal)
	if (areEqual(loc1final, loc5final, loc9final)) {
		gameWon = true;
		winningLetter = loc1final;
	}
	//3, 5, 7 (other diagonal)
	if (areEqual(loc7final, loc5final, loc3final)) {
		gameWon = true;
		winningLetter = loc3final;
	}
	//if all cells are filled but nobody has won yet		
	if ((loc1final == "x" || loc1final == "o") && (loc2final == "x" || loc2final == "o") && (loc3final == "x" || loc3final == "o") && (loc4final == "x" || loc4final == "o") && (loc5final == "x" || loc5final == "o") && (loc6final == "x" || loc6final == "o") && (loc7final == "x" || loc7final == "o") && (loc8final == "x" || loc8final == "o") && (loc9final == "x" || loc1final == "o")) {
		gameWon = true;
	} 
 }

// Game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;
  
	render();
	gamewin();
	changeLetter();
	
	then = now;
};

//Play!
init();
var then = Date.now();
setInterval(main, 1); //run at top speed



