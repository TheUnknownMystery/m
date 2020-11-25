var player;
var edge;
var r

var health = 100
var gameState = 1;
function preload() {

  //groundImg= loadImage("sprite-0002.png")
  backgroundImg = loadImage("back.png");
  GroundImg = loadImage("gpng.png");
  platfoarmImg = loadImage("p.png");
  platfoarmImg2 = loadImage("p2.png");
  power_img = loadImage("poer.png")
  EnemyImg = loadImage("impale_6.png")
  gameImg = loadImage("G.png")
  playerImg= loadImage("p3.png")
}
function setup() {
  createCanvas(displayWidth - 0, displayHeight - 142);

  platfoarmGroup = new Group();
  Power_up_Group = new Group();
  ggroup = new Group()
  backgrounds();

  Ground = createSprite(200, 730, 2000, 200);
  Ground.velocityX = -10
  Ground.addImage(GroundImg);

  player = createSprite(200, 280, 50, 90);
  
  player.addImage(playerImg)
  player.scale= 1
  player.setCollider("rectangle",0,20,40,140)
  backgroundImg = loadImage("back.png")

  groundPlatfoarm = createSprite(100, 500, 260, 30)
  groundPlatfoarm.shapeColor = "red"

  gameOver = createSprite(700, 200, 10, 10)
  gameOver.addImage(gameImg)
  gameOver.scale = 0.5
  gameOver.visible = false
  

}

function draw() {

  drawSprites();

  textSize(30)
  fill("red")
  text("health:" + health, displayWidth - 1500, displayHeight - 810);


  textSize(30)
  fill("red")
  text("dont touch the floor", 30, 100)
  edge = createEdgeSprites();

  if (Ground.x < 980) {

    Ground.x = 900

  }
  if (background.x < 700) {

    background.x = 800

  }

  if (player.isTouching(platfoarmGroup)) {

    groundPlatfoarm.destroy()

  }

  if (gameState === 1) {
    
    if (World.frameCount % 80 === 0) {

      platfoarms()

    }

    if (keyDown("space")) {

      player.velocityY = player.velocityY - 8

    }

    if (player.isTouching(Ground)) {

      symbol= createSprite(500,200,10,10)
      symbol.addImage(gameImg)
      symbol.scale= 0.3
      player.velocityX= -10
      health=0
    }

  }

  if (gameState === 0) {

    //player.setVelocityEach = 0
    textSize(80)
    gameOver.visible = true
    platfoarm.destroy();
    background.veloxityX = 0
  }

  player.velocityY = player.velocityY + 4
  player.collide(platfoarmGroup)
  player.collide(edge[2])
  player.collide(Ground)
  player.collide(groundPlatfoarm)

}

function platfoarms() {

  platfoarm = createSprite(860, 200, 200, 40)
  //platfoarm.shapeColor = "green"
  platfoarm.velocityX = -5
  platfoarm.y = random(400, 500)
  platfoarm.debug = true
  platfoarm.scale = 0.4
  platfoarm.addImage(platfoarmImg2)


  platfoarmGroup.add(platfoarm)
}

function backgrounds() {

  background = createSprite(800, 150, 4000, 9000)
  background.addImage(backgroundImg)
  background.scale = 0.9
  background.velocityX = -7

}
