function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
}
  
var wall,thickness; 
var bullet,speed,weight; 

speed=random(223,321) 
weight=random(30,52) 

bullet = createsprite(50,200,50,50); bullet.velocityX = speed; 

wall=createsprite(1200,200,thickness,height/2) 

thickness=random(22,83)

if(wall.x-bullet.x < (bullet.width+wall.width)/2) 
{ 
  bullet.velocityX=0; 
  var deformation=0.5 * weight * speed *speed/22509; 
  if(deformation>180) 
  { 
    bullet.shapeColor=color(255,0,0); 
  } 
   if( deformation<180 && deformation>100) 
   { 
     bullet.shapeColor=color(230,230,0); 
   } 
   if(deformation<100) 
   { 
     bullet.shapeColor=color(0,255,0); 
   }
}

function draw() {
  background(255,255,255);  
  drawSprites();
}