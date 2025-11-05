// 0.1.Drawing

function setup() {
  createCanvas(400, 400);
  background(230);
  noStroke();
}

function draw() {
  //Face base 
  fill(225, 100, 180);
  ellipse(200, 200, 200, 200);
  
//Closed eyes 
fill(0);
rect(150, 180, 30, 5);
rect(220, 180, 30, 5);

// Small mouth
fill(100, 0, 0);
rect(180, 240, 40, 8);

// Stylised heart (inspired by Multi) 
fill(255, 80, 100);
ellipse(305, 305, 18, 18);  //left lobe
ellipse(325, 305, 18, 18);  //right lobe

beginShape();             
vertex(292, 310);        
vertex(338, 310); 
vertex(315, 335); 
endShape(CLOSE); 

}




