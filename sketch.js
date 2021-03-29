
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paperBody = Bodies.circle(200,350,3,{restitution:0.5, isStatic:false});
	World.add(world, paperBody);

	paper = new Paper(200,350)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();

  drawSprites();

	function keyPressed(){
		if(keyCode === UP_ARROW){
			Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
		}
	}

}




