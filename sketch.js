
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5;
var rope1;
var roof1;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new roof(700,300,300,30)
	ball1 = new Ball(700,500,50)
	rope1 = new rope(ball1.body,roof1.body,0,0)
	ball2 = new Ball(715,500,50)
	rope2 = new rope(ball2.body,roof1.body,{x: 100,y: 0})

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
    ball1.display();
	rope1.display();
	roof1.display();
	ball2.display();
	rope2.display();
  drawSprites();
 
}



