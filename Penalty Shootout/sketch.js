const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

var myEngine, myWorld
var ball, keeper, ground
var player, playerFall, playerKick, playButton, goalImg, goal




function preload(){
backgroundImg = loadImage("Images/backgroundImg.png")
keeper = loadImage("Images/keeper.png")
 playerRun = loadAnimation("Images/playerRun.png")
 playerFall = loadAnimation("Images/playerFall.png")
 playerKick =loadAnimation("Images/playerKick.png")
playButton = loadImage("Images/playButton.png")
goalImg = loadImage("Images/goal.png")
ballImg = loadImage("Images/ball1.png")

}



function setup(){
createCanvas(windowWidth,windowHeight);
myEngine = Engine.create();
myWorld = myEngine.world

ground = Bodies.rectangle(width/2, height-10, width, 20,{isStatic : true})
World.add(myWorld,ground);


ball = Bodies.circle(100,100,50,{restitution : 0.85, frictionAir : 0.00000001, density : 0.00101010101010010})
World.add(myWorld,ball);

 goal = Bodies.rectangle(730,130,500,250,{isStatic : true})
 World.add(myWorld,goal);

player = createSprite(720,760,30,30)
player.addAnimation("run",playerRun)
player.addAnimation("kick",playerKick)
player.addAnimation("fall",playerFall)

player.changeAnimation("run")
player.scale = 0.4







}

function draw(){
background("red")
Engine.update(myEngine)


push()
imageMode(CENTER)
image(backgroundImg, width/2,height/2, width, height)
pop()

push()
fill("red")
text(mouseX+","+mouseY, mouseX, mouseY)
pop()

push()
rectMode(CENTER)
rect(ground.position.x,ground.position.y,width,20);
pop()

push()
translate(ball.position.x, ball.position.y)
rotate(ball.angle)
imageMode(CENTER)
image(ballImg,0,0, 50,50)
pop()

push()
imageMode(CENTER)
image(goalImg, goal.position.x, goal.position.y, 500, 250)
pop()


drawSprites()



}



function mouseClicked(){
Body.setPosition(ball, {x: 725, y: 526})
Body.setStatic(ball,true)
player.velocityY = -1





}


// function keyPressed(){
// if(keyCode === "114"){
// Body.setPosition(ball.body,{x:725, y:526})


// }



// }