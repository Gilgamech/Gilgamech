//Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 1024;
document.body.appendChild(canvas);

// load background
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
  bgReady = true;
};
bgImage.src = "/images/KerBG.png";

// load clientClint
var clientClintReady = false;
var clientClintImage = new Image();
clientClintImage.onload = function () {
clientClintReady = true;
};
clientClintImage.src = "/images/clientClint.png";

// packet image
var packetReady = false;
var packetImage = new Image();
packetImage.onload = function () {
  packetReady = true;
};
packetImage.src = "/images/packet.png";

// Game objects

var clientClint = {};
var packet = {};
var packetsCaught = 0;

// keyboard controls
var mousePos = {};

addEventListener('mousemove', function(evt) {
 mousePos = getMousePos(canvas, evt);
}, false);

// addEventListener('mouseclick', function(evt) {
// onClick = getMousePos(canvas, evt);
// }, false);

  
// reset game when player catches packet
var reset = function () {
	// Throw the packet somewhere on the screen randomly
	packet.x = 32 + (Math.random() * (canvas.width - 64));
	packet.y = 32 + (Math.random() * (canvas.height - 64));
};

//Update game objects
var update = function(modifier) {
 
//Did Clint catch the packet?
  if (
    mousePos.x <= (clientClint.x + 16)
    && packet.x <= (mousePos.x + 16)
    && mousePos.y <= (clientClint.y + 16)
    && packet.y <= (mousePos.y + 16)
  ) {
    ++packetsCaught;
    reset();
  }
};


//draw it all
var render = function () {
  if (bgReady) {
    ctx.drawImage(bgImage, 0, 0);
  }
  
  if (clientClintReady) {
    ctx.drawImage(clientClintImage, (mousePos.x-16), (mousePos.y-16));
  }
    
  if (packetReady) {
    ctx.drawImage(packetImage, packet.x, packet.y);
  }
  
  //score
  ctx.fillStyle = "rgb(250, 250, 250,)";
  ctx.font = "24px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("Packets caught: " + packetsCaught, 32, 32);
};

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
  
  update(delta/1000);
  render();
  
  then = now;
};

//Play!
reset();
var then = Date.now();
setInterval(main, 1); //run at top speed