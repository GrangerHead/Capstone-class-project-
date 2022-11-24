
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let  ball;
let engine;
let world;
let radius = 40;


function setup() {
  createCanvas(1600,1700);

  engine = Engine.create();
	world = engine.world;

	var ball_option = {
	isStatic:false,
	restitution: 0.3,
	friction:0,
	density:1.2
  
}
ball = Bodies.circle(260, 100, radius/2, ball_option );
	World.add(world,ball);

	ground = new Ground(width/2, 670, width, 20);
	leftSide = new Ground(1100, 587, 20, 150);
	rightSide = new Ground(1300,587, 20, 150 )
}

function draw() 
{
  Engine.update(engine);
    background(0);
  
	ellipseMode(RADIUS);
   	ellipse(ball.position.x, ball.position.y, 20);

	ground.show();
	leftSide.show();
	rightSide.show();
  
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x: 85, y: -85})
	}
}
