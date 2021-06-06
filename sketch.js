

var backgroundImage;
var child1, child1Img;
var child2, child2Img;
var snow, snowImage;




function preload(){
  backgroundImage = loadImage("images/snow1.jpg");
  child1Img = loadImage("images/1.png");
  child2Img = loadImage("images/2.png");
  snowImage = loadImage("images/snow5.webp");
}

function setup() {
  createCanvas(800,400);
  child1 = createSprite(200, 225, 50, 50);
  child1.addImage(child1Img);
  child1.scale = 0.75;

  child2 = createSprite(300, 225, 50, 50);
  child2.addImage(child2Img);
  child2.scale = 0.75;
}


function draw() {
  background(backgroundImage);  
  if(frameCount % 30 == 0){
    snow = createSprite(round(random(0, width)));
    snow.addImage(snowImage);
    snow.scale = 0.05;
    snow.velocityY = 3;
  }
  drawSprites();
}