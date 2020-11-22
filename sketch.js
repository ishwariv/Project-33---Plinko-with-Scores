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
var score=0;
var particle;
var turn=0;
var gameState="play";

function setup() {
  createCanvas(880,800);
  engine = Engine.create();
  world = engine.world;
  
  //Create Ground
  ground=new Ground(440,800,880,40);

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
}

function draw() {
  background(0);
  Engine.update(engine);

  push();
  stroke("yellow");
  strokeWeight(5);
  line(0,500,880,500);
  pop();

  //Instructions
  textFont('Georgia');
  fill("white");
  textSize(20);
  text("Score: "+score,760,30);
  text("Turn: "+turn,10,30);
  text("500",20,530);
  text("500",100,530);
  text("500",180,530);
  text("200",260,530);
  text("200",340,530);
  text("100",420,530);
  text("200",500,530);
  text("200",580,530);
  text("500",660,530);
  text("500",740,530);
  text("500",820,530);


  /*
  //Release Particles
  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10,"white"));
  }*/

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

  if(particle!=null){
    particle.display();
    if(particle.body.position.y>500){
      if(particle.body.position.x<220){
          score=score+500;
          particle=null;
          if(turn>=5) gameState="end";
      }
      else if(particle.body.position.x>221 && particle.body.position.x<340){
        score=score+200;
        particle=null;
        if(turn>=5) gameState="end";
      }
      else if(particle.body.position.x>341&&particle.body.position.x<441){
        score=score+100;
        particle=null;
        if(turn>=5) gameState="end";
      }
      else if(particle.body.position.x>441 && particle.body.position.x<600){
        score=score+200;
        particle=null;
        if(turn>=5) gameState="end";
      }
      else if(particle.body.position.x>601 && particle.body.position.x<840){
        score=score+500;
        particle=null;
        if(turn>=5) gameState="end";
      }
    }
  }
  if(turn===5 && gameState==="end"){
    textFont('Georgia');
    textSize(45);
    fill("white");
    text("Game Over",350,450);
  }
  if(turn<5 && gameState!="end"){
    textFont('Georgia');
    textSize(20);
    fill("white");
    text("Click the Mouse and Watch the Magic!",250,30);
  }
}

function mousePressed(){
  if(gameState!=="end"){
    turn++;
    particle=new Particle(mouseX,10,10,10);
  }
  
}