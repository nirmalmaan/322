const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg , bg;
var snowfall=[];



function preload() {
  bg=loadImage("snow3.jpg");
  engine = Engine.create();
  world = engine.world;

}


function setup() {
  var canvas = createCanvas(800,400);
 


}

function draw() {
 background(bg);
 

 if (frameCount% 60 === 0){
  snowfall.push(new Fall(random(width/2 -30,width/2 +30),10,400));
}
for (var i = 0; i<snowfall.length; i++){
  snowfall[i].display();
}

Engine.update(engine);

}

