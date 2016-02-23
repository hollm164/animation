/*
  Homework
*/

var posX;
var posY;

var x = 0;
var y = 0;

function setup(){
  createCanvas(600,600);
  background(0);

  posX = 0;
  posY = 0;

}

function draw(){

  fill(255);
  if (mouseIsPressed)

    ellipse(mouseX,mouseY,mouseY/5,mouseY/5);
  else
    fill(0);
    stroke(255);
    ellipse(mouseX,mouseY,mouseY/5,mouseY/5);

  posX = posX + 1;
  posY=posX;

  noStroke();
  fill(0,255,230);

  ellipse(-posX+600,-posY+600,30,30);

  ellipse(posX+130,posY,30,30);

  ellipse(posX+160,posY,30,30);

  ellipse(posX+190,posY,30,30);

  ellipse(posX,posY+130,30,30);

  ellipse(posX,posY+160,30,30);

  ellipse(posX,posY+190,30,30);

  ellipse(-posX+570,posY-30,30,30);

  ellipse(-posX+630,posY+30,30,30);

  ellipse(-posX+600,posY,30,30);

  ellipse(posX-60,-posY+540,30,30);

  ellipse(posX-90,-posY+510,30,30);

  ellipse(posX+60,-posY+660,30,30);

  ellipse(posX+90,-posY+690,30,30);


}
