
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg;
var bone;
var dog, dogIMG;

function preload(){
bg = loadImage('background.jpg');
dogIMG = loadImage('PuppySittingEdited.png');
bone = loadImage('BoneImage.png');
}
function setup() {
  createCanvas(900,550);
  engine = Engine.create();
  world = engine.world;

  
  dog = createSprite(400,450);
  dog.scale = 0.3;
  dog.addImage(dogIMG);

  image(bg,0,0,width, height);

  
  

  
}


function draw() 
{
  Engine.update(engine);
 
  
  drawSprites();
}

