
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	, paper , paperImg , bg;
var world;


function setup() {
	createCanvas(1600,700);
	rectMode(CENTER);
    
	bg = loadImage("park.jpg");
       
	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
     
	//paperImg = loadImage("paper.png");
	
	paper = new Paper(250,350,25);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
 

  groundObject.display();
  dustbinObj.display();
  paper.display();

}function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body ,paper.body.position ,{x:1.3, y:-1.3} );
	}
	if(paper.collide(dustbinObj)){
		paper.visible = false;
	}
}
