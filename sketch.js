const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14,block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25
var slingShot;
var polygon_img, polygon;

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);


  ground = new Ground(400,500,1000,20);
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level oneA
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level twoA
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level threeA
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //topA
  block16 = new Block(390,155,30,40);

  //level oneB
  block17 = new Block(650,50,30,40) 
  block18 = new Block(680,50,30,40)
  block19 = new Block(710,50,30,40)
  block20 = new Block(740,50,30,40)
  block21 = new Block(770,50,30,40)

//level twoB
  block22 = new Block(680,20,30,40)
  block23 = new Block(710,20,30,40)
  block24 = new Block(740,20,30,40)

//level threeB
  block25 = new Block(710,10,30,40)
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new slingshot(this.polygon,{x:100, y:200});
}

function draw() {
  background(56,44,44); 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  slingShot.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block22.display();
  block23.display();
  block24.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  block25.display();
  fill("grey");
  block16.display();

imageMode(CENTER)
image(polygon_img,polygon.position.x,polygon.position.y,40,40)

drawSprites();

}
function mouseDragged(){
  Matter.Body.setPosition(polygon, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}