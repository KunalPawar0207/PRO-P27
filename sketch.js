const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint=Matter.Constraint;

var roo;
var b1,b2,b3,b4,b5;
var c1,c2,c3,c4,c5;
function preload()
{
	
}

function setup() {
	createCanvas(800,1000);

	engine = Engine.create();	
	world = engine.world;

	//Create the Bodies Here.
	roo=new Roof(400,30,600,40);
	
	var r =Math.round(random(1,255))
	var g =Math.round(random(1,255))
	var b =Math.round(random(1,255))
	
	fill(color(r,g,b))
	b1 = new Bob(100,100,50);
	b2 = new Bob(300,100,50);
	b3 = new Bob(400,100,50);
	b4 = new Bob(500,100,50);
	b5 = new Bob(600,100,50);

	c1 = new Chain(b1.body,roo.body,-200,0);
	c2 = new Chain(b2.body,roo.body,-100,0);
	c3 = new Chain(b3.body,roo.body,0,0);
	c4 = new Chain(b4.body,roo.body,100,0);
	c5 = new Chain(b5.body,roo.body,200,0);
	
	Engine.run(engine);
  
	console.log(roo.body.position.x+","+roo.body.position.y);
}


function draw() {
  background(0);
  
  roo.display();

  
  b1.display();
  
  b2.display();
  
  b3.display();
  
  b4.display();
  
  b5.display();

  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();

  drawSprites();
}

function keyPressed()
{
	if(keyDown(UP_ARROW))
	{
        Matter.Body.applyForce(b1.body,b1.body.position,{x:-200,y:-100});
	}
}