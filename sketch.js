var car, wall;
var speed ,weight;
var deformation
function setup() {
createCanvas(1600,400);
  speed= Math.round(random(55,90));
  weight= Math.round(random(400,1500));
  car = createSprite(50,200,50,50);
  wall = createSprite(1400,200,20,1000);
  wall.shapeColor = "white";
  car.velocityX = speed;
 
}

function draw() {
  background(0); 
 if (wall.x - car.x < (car.width+wall.width)/2){ 
   
  deformation = 0.5*weight*speed*speed/22500;
  car.velocityX = 0;
  if(deformation < 101){
    car.shapeColor = color(0, 255, 0);
   // car.velocityX = 0;
  }
  if(deformation < 181 &&deformation >100){
    car.shapeColor = color(230, 230, 0);
    //car.velocityX = 0;
  }
  if(deformation > 180){
    car.shapeColor = color(255, 0, 0);
   // car.velocityX = 0;
  }
}
  drawSprites();
}