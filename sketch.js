const Engine= Matter.Engine;
const World= Matter. World;
const Bodies= Matter.Bodies;
var engine,world;
var ground;
var box1,box2;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world= engine.world;

  box1=new Box(100,50,20,20);
  box2=new Box(120,60,50,80);

  ground=new Ground(200,height,400,20);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  box1.display();
  box2.display();
  ground.display();
}