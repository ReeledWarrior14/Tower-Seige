var Engine = Matter.Engine;
var Worlds = Matter.World;
var Bodies = Matter.Bodies;
var Constraint = Matter.Constraint;
var Mouse = Matter.Mouse;
var MouseConstraint = Matter.MouseConstraint;

var engine, world;

var ground;

function preload(){
  backgroun = loadImage("sprites/bg.png");
}

function setup() {
  var canvas = createCanvas(1250,400);

  // angleMode(DEGREES);

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

  ground = new GROUND(width, 380, width * 3, 100);

  box1 = new BOX(800, 305, 40, 50);
  box2 = new BOX(850, 305, 40, 50);
  box3 = new BOX(900, 305, 40, 50);
  box4 = new BOX(950, 305, 40, 50);
  box5 = new BOX(1000, 305, 40, 50);

  box6 = new BOX(825, 250, 50, 40);
  box7 = new BOX(900, 250, 50, 40);
  box8 = new BOX(975, 250, 50, 40);

  box9 = new BOX(870, 205, 50, 40);
  box10 = new BOX(935, 205, 50, 40);

  box11 = new BOX(900, 175, 50, 40);

  bird = new BIRD(325, 200, 1, 1);

  slingshot = new CONSTRAINT(bird.Bodies3, {x : 325, y : 200});

  var mouse = Mouse.create(canvas.clientWidth, canvas.clientHeight);
  var options = {
    mouse : mouse,
  }
  mConstraint = MouseConstraint.create(engine, options);
  Worlds.add(world, mConstraint);
}

function draw() {
  // Engine.update(engine);

  background(backgroun);  
  
  rectMode(CENTER);

  ground.display();

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

  if(slingshot.c.bodyA){
    slingshot.displayConstraint();
  }

  if (bird.Bodies3){
    bird.displayBird();
  }

  // Matter.Events.on(engine, 'collisionStart', function(event){
  //   // bird.image = loadImage('sprites/explosion.png');
  //   setTimeout(() => {
  //     bird.image = loadImage('sprites/explosion.png');
  //   }, 5000);
  // })

  // console.log(Math.round(box7.Bodies3.speed, box11.Bodies3.speed));

  if (bird.Bodies3){
    if (box7.Bodies3.speed >= 4 || box11.Bodies3.speed >= 4){
      bird.image = loadImage('sprites/explosion.png');
      setTimeout(() => {
        bird.Bodies3.isStatic = true;
      }, 250);
      setTimeout(() => {
        Worlds.remove(world, bird.Bodies3);
        bird.Bodies3 = null;
      }, 5000);
    }
  }

  fill("blue");
  text(mouseX, 10, 15);
  text(mouseY, 30, 15);

  push();
  textSize(30);
  text(box1.score + box2.score + box3.score + box4.score + box5.score + box6.score + box7.score + box8.score + box9.score + box10.score + box11.score, 1200, 30);
  pop()
}

// function mouseDragged(){
//   bird.Bodies3.position.x = mouseX;
//   bird.Bodies3.position.y = mouseY;
// }

function mouseReleased(){
    // slingshot.c.bodyA = null;
    setTimeout(() => {
      slingshot.c.bodyA = null;
    }, 15);
}