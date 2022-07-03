//Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);



// load background
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
  bgReady = true;
};
bgImage.src = "/images/background.png";

// load heero yuy
var heeroReady = false;
var heeroImage = new Image();
heeroImage.onload = function () {
  heeroReady = true;
};
heeroImage.src = "/images/heero.png";

// Demon image
var demonReady = false;
var demonImage = new Image();
demonImage.onload = function () {
  demonReady = true;
};
demonImage.src = "/images/demon.png";

// Game objects

var heero = {};
var demon = {};
var demonsCaught = 0;

// keyboard controls
var mousePos = {};

addEventListener('mousemove', function(evt) {
 mousePos = getMousePos(canvas, evt);
}, false);

// addEventListener('mouseclick', function(evt) {
// onClick = getMousePos(canvas, evt);
// }, false);

  
// reset game when player catches demon
var reset = function () {
	// Throw the demon somewhere on the screen randomly
	demon.x = 32 + (Math.random() * (canvas.width - 64));
	demon.y = 32 + (Math.random() * (canvas.height - 64));
};

//Update game objects
var update = function(modifier) {
 
  //Did Heero catch the Demon?
  if (
    mousePos.x <= (demon.x + 16)
    && demon.x <= (mousePos.x + 16)
    && mousePos.y <= (demon.y + 16)
    && demon.y <= (mousePos.y + 16)
  ) {
    ++demonsCaught;
    reset();
  }
};


//draw it all
var render = function () {
  if (bgReady) {
    ctx.drawImage(bgImage, 0, 0);
  }
  
  if (heeroReady) {
    ctx.drawImage(heeroImage, (mousePos.x-16), (mousePos.y-16));
  }
    
  if (demonReady) {
    ctx.drawImage(demonImage, demon.x, demon.y);
  }
  
  //score
  ctx.fillStyle = "rgb(250, 250, 250,)";
  ctx.font = "24px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("Demons caught: " + demonsCaught, 32, 32);
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