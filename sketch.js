
var particle ;
var pinkos = []
var divisions = []

var divisionHeight = 300;

var gameState="play"

var count= 0;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world

function setup() {
  createCanvas(800, 605);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 600, 800, 10);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight))
  }

  for (var j = 40; j <= width; j = j + 40) {
    pinkos.push(new Pinko(j, 75,8))
  }

  for (var j = 15; j <= width - 10; j = j + 50) {
    pinkos.push(new Pinko(j, 175,8))
  }

}


function draw() {
  //rectMode(CENTER);

  background("black");
  Engine.update(engine);

  ground.display();

 fill("white")
 textSize(20)

 text("100",40,300)
 text("200",100,300)
 text("300",180,300)
 text("400",260,300)
 text("400",350,300)
 text("300",440,300)
 text("200",490,300)
 text("100",560,300)
 text("200",660,300)
 text("300",720,300)
 text("Count:"+ count ,80,30)
  // create Particles after every 60 frames
  //if (frameCount % 30 === 0) {
   // particles.push(new Particle(random(width / 2 - 10, width / 2 + 10), 10, 10))
 // }

  // for loop to display particles
  //for (var j = 0; j < particles.length; j++) {
    //particles[j].display();
  //}


  // for loop to display plinkos
  for (var k = 0; k < pinkos.length; k++) {
    pinkos[k].display();
  }

  // for loop to display divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  if(particle!=null){
    particle.display();

    if(particle.body.position.y>760){
      if(particle.body.position.x>300){
        count= count+500;
        particle=null;
        if(count>=5) gameState="end"
      }
    }
  }

  drawSprites();

}

function mousePressed(){
  if(gameState!=="end"){
    count++
    particle= new Particle(mouseX,mouseY,10,10)
  }
}