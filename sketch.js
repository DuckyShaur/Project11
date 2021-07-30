var path_img,path;
var jackson_ani,jackson;
function preload(){
  path_img = loadImage("path.png");
  jackson_ani = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,200);
  path.scale = 1.2;
  path.addImage("path1",path_img)

  jackson = createSprite(200,360,30,30);
  jackson.addAnimation("Jackson",jackson_ani);
  jackson.scale = 0.1
  leftb = createSprite(-10,0,100,800)
  rightb = createSprite(410,0,100,800)
  leftb.visible = false
  rightb.visible = false
}
 
function draw() {
  background(0);
  jackson.x = mouseX
  path.velocityY = 5
  if(path.y > 400){
    path.y = height/2
  } 
  edges = createEdgeSprites()
  jackson.collide(edges[3])
  jackson.collide(leftb)
  jackson.collide(rightb)
drawSprites()
}
