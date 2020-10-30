const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var sling1,sling2,sling3,sling4,sling5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Ground(400,200,300,20)
	bob1 = new Bob(320,400,20)
	bob2 = new Bob(340,400,20)
	bob3 = new Bob(360,400,20)
	bob4 = new Bob(380,400,20)
	bob5 = new Bob(480,400,20)
	
	sling1 = new SlingShot(bob1.body,roof.body,-80,0)
	sling2 = new SlingShot(bob2.body,roof.body,-40,0)
	sling3 = new SlingShot(bob3.body,roof.body,0,0)
	sling4 = new SlingShot(bob4.body,roof.body,40,0)
	sling5 = new SlingShot(bob5.body,roof.body,80,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x: -0.06,y: 0})
	}
}


