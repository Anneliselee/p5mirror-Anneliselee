var road,roadImg;
var car,carImg;
var coin ,coinImg ;
var gameState="play";
var score=0;

function preload(){
  
   roadImg = loadImage("road.png");
  carImg = loadImage("car.png");
  
  coinImg = loadImage("coin.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  
road = createSprite(300,300,600,600);
 road.addImage("roadImg",roadImg);
  road.scale=1;
  
  car = createSprite(300,400,600,600);
  car.addImage(carImg);
  car.scale=0.7;
  
 
coinGrp = new Group();
invisibleBlockGrp = new Group();
  
}
function draw(){
  background(0);
       if(gameState === "play")
  {
    score = score + Math.round(getFrameRate()/60);
    
    //Move tower vertically and reset tower image
   road.velocityY = 6;
    if(road.y > height)
    {
      road.y = height/50;
    }
  if(keyDown("space"))
    {
      car.velocityY = -2;
    }
     car .velocityY = car.velocityY + 0.2;

    //Move ghost with left and right arrow key
    if(keyDown(LEFT_ARROW))
    {
      car.x = car.x - 3
    }

    if(keyDown(RIGHT_ARROW))
    {
      car.x = car.x + 3;
    }

    spawncoin();
  //  spawnClimber();

    if(coinGrp.isTouching(car))
    {
      car.velocityY = 0; 
    }

    if(invisibleBlockGrp.isTouching(car) || car.y > height)
    {
      car.destroy();
      road.destroy();
     // coin.destroy();
      gameState = "end";
    }
    
  }
  if(gameState==="end")
  {
    fill("white");
    textSize(50);
    text("Game Over", 200,200)
    coinGrp.destroyEach()
    invisibleBlockGrp.deestroyEach();
  }
  textSize(20);
  text("Score : "+score, 450,50)
  


  drawSprites();
 
}
function spawncoin(){
   if(frameCount % 150 === 0)
  {
    coin = createSprite(200,50);
    invisibleBlock = createSprite(200,115);
    invisibleBlock.height = 2;
 
    coin.x = Math.round(random(120,400));
    invisibleBlock.x = coin.x;
    
    coin.addImage('coinImg',coinImg);
    
    coin.velocityY = 1;
    invisibleBlock.velocityY = 1;
    
    car.depth = coin.depth +1;
    
    coin.lifeTime = 800;
    invisibleBlock.lifetime = 800;
    coin.scale=0.4      
   //coin.debug = true;
    coinGrp.add(coin);
    
    invisibleBlockGrp.add(invisibleBlock);
  }
}