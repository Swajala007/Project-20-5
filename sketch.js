var astronaut;
var bg,sleep,bath,brush,gym,eat,drink,move;


function preload(){
bg = loadImage("images/iss.png");
sleep = loadAnimation("images/sleep.png");
bath = loadAnimation("images/bath1.png","images/bath2.png");
brush = loadAnimation("images/brush.png");
gym = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
eat = loadAnimation("images/eat1.png","images/eat2.png");
drink = loadAnimation("images/drink1.png","images/drink2.png");
move = loadAnimation("images/move.png");
move1 = loadAnimation("images/move1.png");

}


function setup() {
  createCanvas(900,400);
  astronaut = createSprite(450, 200, 50, 50);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(bg); 

  textSize(25);
  fill("red");
  text("Rules:",20,25);
  textSize(15);
  text("SPACEBAR KEY for sleeping",20,45);
  text("UP_ARROW KEY for exercising ",20,65);
  text("LEFT_ARROW KEY for brushing",20,85);
  text("RIGHT_ARROW KEY for bathing",20,105);
  text("DOWN_ARROW KEY for eating",20,125);
  text("D KEY for drinking water",20,145);
  text("M & N KEY for moving",20,165);

  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
   
  if(keyDown("space")){
    astronaut.addAnimation("sleeping",sleep);
    astronaut.changeAnimation("sleeping");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("exercising",gym);
    astronaut.changeAnimation("exercising");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");  
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("d")){
    astronaut.addAnimation("drinking",drink);
    astronaut.changeAnimation("drinking");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  
  if(keyDown("m")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y = 300;
    astronaut.velocityX = -1;
    astronaut.velocityY = 1;
  }
  
  
  if(keyDown("n")){
    astronaut.addAnimation("moving",move1);
    astronaut.changeAnimation("moving");
    astronaut.y = 300;
    astronaut.velocityX = 1;
    astronaut.velocityY = -1;
  }
  
 

  
  drawSprites();
}