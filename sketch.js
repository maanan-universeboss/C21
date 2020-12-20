var fixedObject
var movObject
var gameObject1,gameObject2;
 
var rect1,rect2;


function setup() {
  createCanvas(800,400);
  fixedObject=createSprite(400, 200, 50, 90);
  movObject=createSprite(600,100,50,90);
  gameObject1 = createSprite(100,100,20,80);
  gameObject1.velocityY=2;
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(150,100,20,80);
  gameObject2.shapeColor = "green";

  rect1=createSprite(100,300,50,60);
  rect1.velocityY=-2;
  rect1.shapeColor="blue";
  rect2=createSprite(500,300,50,60);
  rect2.velocityX=-2;
}

function draw() {
 background("black");  
 
 movObject.x=mouseX;
 movObject.y=mouseY;

 if(isTouching(movObject,gameObject1)){

  fixedObject.shapeColor="red";
  gameObject1.shapeColor = "purple";

 }
 else {

  fixedObject.shapeColor="green";
  gameObject1.shapeColor = "green";

 }

 bounceOff(gameObject1,rect1);
 
 drawSprites();

  
}


