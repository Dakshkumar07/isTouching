var fixed, moving;
var rect1, rect2, rect3;

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  fixed.shapeColor = "yellow";
  moving = createSprite(500,200,40,40);
  moving.shapeColor = "red";
  rect1 = createSprite(300,100,50,50);
  rect1.shapeColor = "green";
  rect2 = createSprite(400,100,50,50);
  rect2.shapeColor = "green";
  rect3 = createSprite(500,100,50,50);
  rect3.shapeColor = "green";
}

function draw() {
  background(0);  

moving.x = mouseX;
moving.y = mouseY;


 if(istouching(moving, rect1)){
  moving.shapeColor = "blue";
 } 
else{
  moving.shapeColor = "red";
}

  drawSprites();
}



