
// 0.3.Multiples - Digital Pulse

// Globals (structure + behaviour)

let rows = 12;                 // Number of rows in the grid
let cols = 18;                 // Number of columns in the grid
let pad = 6;                   // Padding between cells
let sWidth, sHeight;           // Cell size (computed in setup)

let pulse = [];                // Per-cell "phase" (changes over time)
let speeds = [];               // Per-cell speeds (array of differences)
let shades = [];               // Per-cell base shades (for subtle variation)
let mode = 0;                  // 0..2 cyles visual style on click
let counter = 0;               // Simple frame counter (rhythm reference)

function setup() {
createCanvas(windowWidth, windowHeight);
frameRate(15);
rectMode(CENTER);
noStroke();

// Computing cell size from canvas + padding
sWidth = (width / cols) - (pad + (pad / cols));
sHeight = (height /rows) - (pad + (pad / rows));

// Initialising per-cell arrays
for (let i = 0; i < rows * cols; i++) {
  pulse[i] = random(0, 100);               // Start Phase
  speeds[i] = random(0.5, 3.5);            // Movement speed
  shades[i] = random(140, 240);            // Lightness base
}

// Deep night blue background
background(20, 20, 80);
}

function draw() {
  // Slow fade to leave traces and show rhythm 
  fill(20, 30, 80, 35); 
  rect(width/2, height/2, width, height);
  
  // Nested loops to build the grid 
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let idx = r * cols + c;                     // 1D index 
      let x = (c * (sWidth + pad)) + pad + sWidth / 2; 
      let y = (r * (sHeight + pad)) + pad + sHeight / 2;

// Faint transparent grid for rhythm
stroke(255, 255 ,255, 10);            // Faint white lines
noFill();
for (let i = 1; i < cols; i++) {      // Starting from 1 instead of
let x = i * (sWidth + pad);
line (x, 0, x, height);
}

for (let j = 0; j <= rows; j++) {
  let y = j * (sHeight + pad);
  line(0, y, width, y);               // Horizontal Lines
}
noStroke();                       // Reset stroke for rest of sketch

// Update the per-cell "phase"
      pulse[idx] += speeds[idx];
      // Use modulo (%) to make a repeating pulse from 0..100
      let p = pulse[idx] % 100;         // 0..99 loop
      let a = map(p, 0, 100, 50, 140);  // Alpha changes over time

// Checker-style alternation using modulo on grid coords
let evenCell = ((r + c) % 2 === 0);

// Choosing base shade + alpha + alternation
if (mode === 0) {
  // Soft pulse
  fill(shades[idx], shades[idx], 255, a);
} else if (mode === 1 ) {
if (evenCell) {
fill(90, 140 , 255, a); 
} else {
fill(255, 180, 120, a);
}
} else {
  let g = shades [idx] + (p > 90 ? 30 : 0);
  fill (g, g, g, a);
}


// Small swap of shape
if ((r + c) % 3 === 0) {
rect(x, y, sWidth, sHeight);
} else {
  ellipse(x, y, sWidth, sHeight);
}

// Tiny accent: when the phase wraps (p near 0), refresh shade
// (adds difference inside repetition)

if (p < 1) {
  shades[idx] = random(140, 240);
}
}
    }
  

function mouseClicked() {
  mode++;
if (mode >= 3) mode = 0;

for (let i = 0; i < speeds.length; i++) {
// Keep speeds within a gentle range so it stays readable
speeds[i] = random(0.5, 3.5);
}
}
}


