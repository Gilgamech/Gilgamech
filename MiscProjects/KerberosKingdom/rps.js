//make canvas
canvas = document.createElement("canvas");
context = canvas.getContext("2d");
canvas.height = 480;
canvas.width = 480;
document.body.appendChild(canvas);

//background image
//need to come up with something
//separate sections?
var bgImg = new Image();
bgImg.src = "https://dl.dropboxusercontent.com/u/21982561/html5/images/bgrps.png";
var bgRdy = false;
bgImg.onload = function () {
	bgRdy = true;
};

//rock image
var rockImg = new Image();
rockImg.src = "https://dl.dropboxusercontent.com/u/21982561/html5/images/rock.src";
rockRdy = false;
rockImg.onload = function () {
	rockRdy = true;
};

//paper image
var paperImg = new Image();
paperImg.src = "https://dl.dropboxusercontent.com/u/21982561/html5/images/paper.png";
paperRdy = false;
paperImg.onload = function () {
	paperRdy = true;
};

//scissors image
var scissorsImg = new Image();
scissorsImg.src = "https://dl.dropboxusercontent.com/u/21982561/html5/images/scissors.png";
scissorsRdy = false;
scissorsImg.onload = function () {
	scissorsRdy = true;
};
//lizard image
var lizardImg = new Image();
lizardImg.src = "https://dl.dropboxusercontent.com/u/21982561/html5/images/lizard.png";
lizardRdy = false;
lizardImg.onload = function (){
	lizardRdy = true;
};

//spock image
var spockImg = new Image();
spockImg.src = "https://dl.dropboxusercontent.com/u/21982561/html5/images/spock.png";
spockRdy = false;
spockImg.onload = function () {
	spockRdy = true;
};

//mouse input -- relative to canvas
function getMousePos(canvas, e) {
	var r = canvas.getBoundingClientRect();
	return {
	x: e.clientX - r.left,
	y: e.clientY - r.top
	};
}

//mouseover event listener
addEventListener('mousemove', function(e) {
	mosPos = getMousePos(canvas, e);
}, false);

//mouse click event listener
addEventListener('click', function(e) {
	mosPos = getMousePos(canvas, e);
	//stuff that happens when mouse gets clicked
	clickLoc();

}, false);

//Computer chooses
compChoice = function() {
	compPiece = Math.random(5)):


};

//win conditions
gameWin = function() {
//if game isn't won, do nothing
if (!gameWon) {
	//Same piece, nobody wins
} else if (playerPiece == compPiece){
	winningText = "Tie!";

//Rock wins
	//Rock crushes scissors or Rock crushes lizard
} else if ( (playerPiece==1 &&compPiece==3) || ( playerPiece==1 &&compPiece==5)) {
	winningText = "You won!";
} else if ( (playerPiece==3 &&compPiece==1) || ( playerPiece==5 &&compPiece==1)) {
	winningText = "Your computer won!";


//Paper wins
	//Paper covers rock or Paper disproves Spock
} else if ( (playerPiece==2 &&compPiece==1) || ( playerPiece==2 &&compPiece==5)) {
	winningText = "You won!";
} else if ( (playerPiece==1 &&compPiece==2) || ( playerPiece==4 &&compPiece==2)) {
	winningText = "Your computer won!";

	
//Scissors wins
	//Scissors cuts paper or Scissors cuts lizard
} else if ( (playerPiece==3 &&compPiece==2) || ( playerPiece==3 &&compPiece==4)) {
	winningText = "You won!";
} else if ( (playerPiece==2 &&compPiece==3) || ( playerPiece==4 &&compPiece==3)) {
	winningText = "Your computer won!";

//Lizard wins
	//Lizard consumes paper or Lizard poisons Spock
} else if ( (playerPiece==3 &&compPiece==2) || ( playerPiece==3 &&compPiece==4)) {
	winningText = "You won!";
} else if ( (playerPiece==2 &&compPiece==3) || ( playerPiece==4 &&compPiece==3)) {
	winningText = "Your computer won!";

//Spock wins
	//Spock vaporizes rock or Spock something scisso
} else {
	winningText = "Spock won!";
}	
	
};

//game loop
var main = function () {
	var now = Date.now();
	var delta = now - then
	
	//do stuff in here...
	
	then = now;
	//...and down here it measures how long that takes, and adjusts speed appropriately.
};

//play

var then = Date.now();
setInterval(main, 1); //run the main function at full speed