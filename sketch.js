var ship,sea,sea2
var shipImg,seaImg,

function preload(){
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png","ship-3.png",
                         "ship-2.png","ship-4.png");


}

function setup(){
  createCanvas(400,400);
  background("white");
  


//create a sea Sprite
sea=createSprite(400,200,900,10);
sea.addImage("sailing sea",seaImg);
sea.scale=0.4;
sea.x = sea.width/2;
sea.velocityX=-3;











}

function draw() {
  
  background("white");
 


drawSprites();
}