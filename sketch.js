//Physics Engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

//Global Variables
var ground,divisions;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
  //Create Ground
  ground=new Ground(240,800,480,40);

  //Create Divisions
  for(var k=0; k<=width; k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight,"white"));
  }

  //Create Plinkos
  for(var j=40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75,"white"));
  }

  for(var j=15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175,));
  }

  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,275,"white"))
  }

  for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j ,375,"white"))
  }

  Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  background(0); 

  //Instructions
  textFont('Georgia');
  fill("white");
  textSize(20);
  text("Press Space and Watch the Magic!",90,30)

  //Key Pressed ---> Release Particles
  if(keyCode === 32 && frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10,"white"));
  }

  //Accessing Particles Array Values
  for(var j=0; j<particles.length; j++){
    particles[j].display();
  }
  //Accessing Divisions Array Values
  for(var k=0; k<divisions.length;k++){
    divisions[k].display();
  }
  //Accessing Plinkos Array Values
  for(var j=0; j<plinkos.length; j++){
    plinkos[j].display();
  }
  
  ground.display(); 
}