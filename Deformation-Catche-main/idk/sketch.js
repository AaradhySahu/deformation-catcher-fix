var wall
var car,speed,weight
var deformation
function setup() {
  weight = Math.round(random(400,1500))
  
  car = createSprite(0,200,20,20)
  speed = Math.round(random(55,90))
  car.velocityX = speed 
  createCanvas(800,400);
  wall = createSprite(650, 200, 50, 100);
  deformation = 0.5 * weight * speed * speed/22500
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if (car.isTouching(wall))
  {
     console.log(Math.round(deformation))
     if (deformation > 84&& deformation < 134)
     {   
          car.velocityX = 0
          car.shapecolour = "green"
          console.log(car.shapecolour)
     }
     if(deformation > 134&& deformation < 180)
     {    
          car.velocityX = 0
          car.shapecolour = "red"
          console.log(car.shapecolour)
     }
     if(deformation > 180)
     { 
          car.velocityX = 0
          car.shapecolour = "yellow"
          console.log(car.shapecolour)
     }
  }
  
}