const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var  pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var n = "simaak";
var check = n.toUpperCase();
console.log(check);
var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    getBackgroundImg();
  
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
ground1 = new Ground(800,300,500,10);
   ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    ground4 = new Ground(400,300,200,10);
my4 = new fire(350,250,30,100)
my1 = new my(700,150,40,200);
    pig1 = new Pig(740, 170);
    pig5 = new Pig (800,200);
    pig3 = new Pig(800, 150);

pig6 = new Pig(740,170);
pig4 = new Pig(800,150);
my2 = new my(840,210,40,200);
    bird = new Bird(200,50);
    my3 = new my (800,120,400,10);
pig7 = new Pig(740,170);
    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:230, y:80} );
    my5 = new fire(290,250,30,100);
    enemy1 = new piggy (380,200);
   fire1 =  new fire(890,150,30,10);
   ground3 = new Ground (1100,300,100,200);
piggy3 = new piggy(800,70);
gold1 = new gold(1100,100)
piggy4 = new piggy(790,70);
}

function draw(){
   
    if(backgroundImg)
        background(backgroundImg);
   if(bird.x === 890){
    bird.x=mouseX;
    bird.y=mouseY;

   }
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
        textStyle(ITALIC);
        fill("red");
        text('wait until log comes down',250,100);
        text('Help the army to save the man',300,50);
        textSize(10);
        text('by simaak hawa',950,200);
    Engine.update(engine);
    //strokeWeight(4);
    piggy3.display();
    gold1.display();
    piggy4.display()
    pig4.display();
    ground3.display();
    my5.display();
    ground4.display()
my4.display();
enemy1.display();
fire1.display()
    my1.display();
    my2.display();
    pig7.display();
    pig6.display();
    pig5.display();
   ground.display();
    pig1.display();
    pig1.score();
    my3.display();
    pig3.display();
    pig3.score();
ground1.display();
    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}


function mouseDragged(){
  //  if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
//}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        bird.trajectory = [];
Matter.Body.setPosition(bird.body,{x:70,y:60});
       slingshot.attach(bird.body);
       Matter.Body.setAngle(bird.body,0);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "sprites/war.jpg";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}