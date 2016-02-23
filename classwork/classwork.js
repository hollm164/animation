/*
  Classwork
*/
var ballX = 0;
var ballY = 0;
var speedX = 3;
var speedY = 3;
var randColorX;
var randColorY;


function setup(){
  createCanvas(windowWidth, windowHeight);

  randColorX = color(random(255),random(255),random(255));

  randColorY = color(random(255),random(255),random(255));

}

function draw(){
  background("coral");

  if(mouseIsPressed){
    noStroke();
    fill(randColorX);
    ellipse(ballX, height/2, 50,50);
  } else{
    noStroke();
    fill(255,255,255);
    ellipse(ballX, height/2, 50,50);

  }

  if(mouseIsPressed){
    noStroke();
    fill(randColorY);
    ellipse(width/2,ballY,50,50);
  } else{
    noStroke();
    fill(255,255,255);
    ellipse(width/2,ballY,50,50);
  }

  if (ballX >= width){
    speedX = -3;
  } else if (ballX <= 0){
    speedX = 3;
  }

  ballX = ballX + speedX;


  if (ballY >= height){
    speedY = -3;
  } else if (ballY <= 0){
    speedY = 3;
  }

  ballY = ballY + speedY;


}
