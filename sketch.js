var movingr,fixedr;



function setup() {
  createCanvas(800,400);
  movingr = createSprite(200, 200, 100, 40);
  movingr.shapeColor="blue";
  movingr.debug="true";
  fixedr = createSprite(400,200,40,100);
  fixedr.shapeColor = "blue";
  fixedr.debug="true";
  }

function draw() {
  background(255,255,255);  

if(movingr.x-fixedr.x<movingr.width/2+fixedr.width/2 &&
  movingr.y-fixedr.y<movingr.height/2+fixedr.height/2&&
  fixedr.x-movingr.x<fixedr.width/2+movingr.width&&
  fixedr.y-movingr.y<fixedr.height/2+movingr.height){
movingr.shapeColor = "red";
fixedr.shapeColor = "red";
}

else{

  movingr.shapeColor = "blue";
  fixedr.shapeColor = "blue";
}
  movingr.y=World.mouseY;
  movingr.x=World.mouseX;
  drawSprites();
}