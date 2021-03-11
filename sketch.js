
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer=new Hammer(200,200,80,40);
    stone=new Stone(740,200,100,70);
    rubber= new Rubber(540,650,80);
    sand1= new  Sand(400,200,20);
    sand2= new  Sand(370,200,20);
    sand3= new  Sand(340,200,20);
    sand4= new  Sand(310,200,20);
    iron= new Iron(240,200,90,50);
    ground=new Ground(400,680,800,30);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  hammer.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  iron.display();
  ground.display();
 
  drawSprites();
 
}



