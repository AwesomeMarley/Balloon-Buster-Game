var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var barrier;

var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0  
   
  barrier = createSprite(410,200,20,400);
   
  redB = new Group();
  blueB = new Group();
  greenB = new Group();
  pinkB = new Group();
  arrowGroup = new Group();
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
   
  //creating continous enemies
  var select_balloon = Math.round(random(1,10));
  
  if (World.frameCount % 60 == 0) {
    if (select_balloon >= 1 && select_balloon <= 4) {
      redBalloon();
    } else if (select_balloon >= 5 && select_balloon <= 7) {
      blueBalloon();
    } else if (select_balloon >= 8 && select_balloon <= 9) {
      greenBalloon();
    } else if (select_balloon == 10){
      pinkBalloon();
    }
  }  

  if(arrowGroup.isTouching(redB)){
    redB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1
  }

  if(arrowGroup.isTouching(blueB)){
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 2
  }

  if(arrowGroup.isTouching(greenB)){
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 3
  }

  if(arrowGroup.isTouching(pinkB)){
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 5
  }

  if(redB.isTouching(barrier)){
    redB.destroyEach();
    score = score - 1;
  }

  if(blueB.isTouching(barrier)){
    blueB.destroyEach();
    score = score - 2;
  }

  if(greenB.isTouching(barrier)){
    greenB.destroyEach();
    score = score - 3;
  }

  if(pinkB.isTouching(barrier)){
    pinkB.destroyEach();
    score = score - 5;
  }
  textSize(15);
  fill("white");

  drawSprites();
  text("Score: "+ score, 10,20);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;

  arrowGroup.add(arrow);
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 4;
  blue.lifetime = 150;
  blue.scale = 0.1;

  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 5;
  green.lifetime = 150;
  green.scale = 0.08;

  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 7;
  pink.lifetime = 150;
  pink.scale = 0.9

  pinkB.add(pink);
}
