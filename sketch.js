
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobimg
function preload()
{
	bobimg=loadImage("bob.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1= new bob (200,500)
bob1.addImage("bob.png")
	bob2=new bob(300,500)
	bob2.addImage("bob.png")
	bob3=new bob(400,500)
	bob3.addImage("bob.png")
	roof=new roof(100,200,800,50)
	chain=new chain()
	Engine.run(engine);
  
}


function draw() {
    background(backgroundImg);
    Engine.update(engine);
    console.log(bob.body.position.x);
    console.log(bob.body.position.y);
    console.log(bob.body.angle);
    bob.display();
    bob2.display();
    roof.display();
    bob3.display();
   
chain.display();}




