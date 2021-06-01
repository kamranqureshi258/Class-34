const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;
const Constraint=Matter.Constraint;

var world;
var myengine;
var box1,box8,box7,box6,box2,box3,box4,box5;
var box9,box10,box11,box12,box13,box14,box15,box16,box17,box18;
var box22,box20,box23,box21,box19,box24;
var ground;
var ball;
var slingshot;
function setup() {
  createCanvas(3000,800);
 myengine=Engine.create();
 world=myengine.world;
ground=new Ground(600,600,1200,30)
box1=new Box(900,100)
box2=new Box(900,100)
box3=new Box(900,100)
box4=new Box(900,100)
box5=new Box(900,100)
box6=new Box(900,100)
box7=new Box(900,100)
box8=new Box(900,100)

//second row
box9=new Box(800,100)
box10=new Box(800,100)
box11=new Box(800,100)
box12=new Box(800,100)
box13=new Box(800,100)
box14=new Box(800,100)
box15=new Box(800,100)
box16=new Box(800,100)

box17=new Box(700,100)
box18=new Box(700,100)
box19=new Box(700,100)
box20=new Box(700,100)
box21=new Box(700,100)
box22=new Box(700,100)
box23=new Box(700,100)
box24=new Box(700,100)

ball=new Ball(200,200,50);
slingshot=new Slingshot(ball.body,{x:500,y:50})

}

function draw() {
  background(255,255,255);
  Engine.update(myengine);  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  
ball.display();
slingshot.display();
  ground.display();
}