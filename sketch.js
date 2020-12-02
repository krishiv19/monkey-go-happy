
var monkey , monkey_running,ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey=createSprite(50,380,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(10,400,800,10);
  
  ground.velocityX=-4;
  

  bananaGroup= createGroup();
  obstacleGroup=createGroup();
  
  
}


function draw() {
  background("white");
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  survivalTime = survivalTime + Math.ceil(getFrameRate()/60);
  stroke("black");
  textSize(20);
  fill("black");

  text("Survival Time: "+ survivalTime, 20,20);
  
  food();
  obstacle();
  
  drawSprites();
}

function food() {
  
  if (frameCount % 130 === 0) {
    var banana = createSprite(800,10,10,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.lifetime = 200;
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    bananaGroup.add(banana);
  }
}

function obstacle(){
  if(frameCount % 300===0){
    var obstacle=createSprite(400,380,10,10);
    obstacle.velocityX=-4;
    obstacle.lifetime=200;
    obstacle.addImage(obstacleImage);
    obstacleGroup.add(obstacle);
    obstacle.scale=0.2;
  }
}



