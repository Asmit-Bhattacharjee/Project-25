
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	ground = new Ground(600,height,1200,20);

	paper = new Paper(100, 200, 10);

	box1 = new Dustbin1(490, 630, 20, 100);
	box2 = new Dustbin1(700, 630, 20, 100);
	box3 = new Dustbin2(600, 680, 200, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightGrey");
  ground.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();

  if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:0.85,y:-0.85});
  }

  drawSprites();
 
}



