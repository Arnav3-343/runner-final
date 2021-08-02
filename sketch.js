
var path,pathImg;
var man,man_running;
var left,right;
function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  man_running = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;
  man = createSprite(180,340,30,30);
  man.addAnimation("running",man_running);
  man.scale = 0.08;
  left = createSprite(14,140,5,70);
  left.visible = false
  right = createSprite(375,152,5,70);
  right.visible = false
  
}

function draw() {
  background(0);
  man.x = World.mouseX;
  edges = createEdgeSprites(); 
  man.collide(edges[3]);
  man.collide(left);
  man.collide(right);
  if (path.y > 400) {
    path.y = height/2;
    }
    
drawSprites();
}
