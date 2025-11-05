// 0.2.Movement
// Variables
// Core variables, controlling motion, interaction, and also visuals

let count = 0;                         // Tracks the number of lines drawn
let rectY = [0, 120, 240];             // Starting Y positions for falling rectangles
let speeds = [2, 3.5, 5];              // Different falling speeds for each rectangle
let dotSize = 24;                      // Size of interactive mouse ellipses
let rgba = [255, 255, 255, 26];        // RGBA color for translucent shapes
let mode = 0;                          // Placeholder for potential mode toggling

// Setup Function
// Runs once: defines the canvas and main visual settings

function setup() {
  createCanvas(windowWidth, windowHeight);  // Responsive full-window canvas
  frameRate(15);                            // Limits animation speed for smoother rhythm
  rectMode(CENTER);                         // Rectangles drawn from their center
  noStroke();                               // Removes borders from shapes
  background(20, 20, 80);                   // Dark blue background
}

// Draw Function
// Runs continuously: creates movement, interaction

function draw() {
  fill(20,30,80,30);  // Background fade layer (slow visual)
  rect(width/2, height/2, width, height);

  // Random line generation (dynamic, unpredictable movement)
let x1 = random(width);
let y1 = random(height);
let x2 = x1 + random(-60, 60);
let y2 = y1 + random(-60, 60);

stroke(random(100, 255));
line(x1, y1, x2, y2);
noStroke();


// Text overlay showing line count
let label = "lines" + count;
fill(255);
textSize(width / 24);
textAlign(CENTER, CENTER);
text(label, width / 2, height / 2);

count++;

// Reset condition to clear screen after certain count
if (count > 180) {
  count = 0;
  background(20, 20, 80);

}

// Call modular funtions for animated rectangles
drawRectangles();

fill(rgba);  // Translucent fill for mouse interaction ellipses
ellipse(mouseX, mouseY, dotSize, dotSize);  // Follows mouse position 
}

// Mouse interaction function
function mouseClicked() {
  rgba = [random(100, 255), random(100, 255), 90]; // Changes color on click
  dotSize = random(18, 48);                        // Changes size on click
}


// Falling Rectangles 
// Introduces vertical motion with independent speeds for each rectangle
function drawRectangles() {
  fill(225);
for (let i = 0; i < rectY. length ; i++) {
  const x = (i + 1) * width / (rectY.length + 1);  // Evenly spaces rectangles across width
  rectY[i] += speeds[i];                           // Updates position based on speed
  rect(x, rectY[i], 60, 24);

  if (rectY[i] >= height) { rectY[i] = 0; fill(random(120, 225)); } // State change

// When a rectangle moves off-screen, reset its position to the top
if (rectY[i] >= height ) {
  rectY[i] = 0;
}
}
}



