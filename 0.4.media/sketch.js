// 0.4.Media - Visual Filter Interaction

let img;
let mode = 0;       // Tracks current visual filter mode
let fade = 255;     // Controls transparency / fade effect

function preload(){
  // Load external image asset
  img = loadImage('Swirls.jpg');
}


function setup() {
  // Responsive full-window canvas
  createCanvas(windowWidth, windowHeight);
  textFont('sans-serif');
  textSize(14);
  textAlign(CENTER, CENTER);
  noCursor();       // Hide cursor for cleaner visual focus
}

function draw() {
  background(15, 19, 38);  // Deep navy tone for contrast

  // Map mouseX to transparency = interactive control
  fade = map (mouseX, 0, width, 120, 255);

  // Draw image with dynamic transparency
  tint(255, fade);
  image(img, 0, 0, width, height);
  noTint();

   // Apply filters based on current mode
  if (mode === 1) filter (GRAY);
  else if (mode === 2) filter(POSTERSIZE, 4);
  else if (mode === 3) filter(INVERT);

  // Overlay faint grid for visual texture
  stroke(255,12); 
  for (let y = 0; y < height; y += 3) line(0, y, width, y);
  noStroke();

drawViginette();  // Adds soft radial fade to edges

// UI instruction bar
fill(255, 235);
rectMode(CENTER);
rect(width/2, height - 42, 480, 36, 10);
fill(20);
text(
  `click: filter  ${['NONE','GRAY','POSTERIZE','INVERT'][mode]}   •   move mouse: transparency`,
  width/2, height - 42
);

// Subtle pointer indicator
noStroke();
fill(255,230);
ellipse(mouseX, mouseY, 6, 6);

}

// Switches filter mode with mouse press
function mousePressed() {
  mode = (mode + 1) % 4; 
}

// Keeps layout responsive on resize
function windowResized() {
resizeCanvas(windowWidth, windowHeight)
}

// Adds soft radial viginette - aesthetic framing
function drawViginette() {
  push();
  noFill();
  for (let r = max(width, height) * 0.6; r < max(width, height) * 1.2; r += 40) {
    let a = map (r, max(width, height) * 0.6, max(width, height) * 1.2, 0, 120);
    stroke(15, 19, 38, a);
    ellipse(width/2, height/2, r, r);


  }
  pop();
}


