var starImg, fairyImg , bgImg;
var fairy , fairyVoice;
var star, starBody;

const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
 starImg = loadImage("images/starImage.png");
 fairyImg = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");
 bgImg = loadImage("images/starNight.png");
 fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup(){
createCanvas(800, 600);

fairyVoice.play();


fairy = createSprite(300, 490);
fairy.addAnimation("fairyFlying", fairyImg);
fairy.scale = 0.2;

star = createSprite(650, 30);
star.addImage(starImg);
star.scale = 0.010

engine = Engine.create();
world = engine.world;

starBody = Bodies.circle(650, 30, 5, {restitution:0.5 , isStatic:true});
World.add(world, starBody);

Engine.run(engine);

}


function draw(){

	Engine.update(engine);

	background(bgImg);
	fairy.velocityX = 0;
	fairy.velocityY = 0;

	if(keyDown(RIGHT_ARROW)){
		fairy.velocityX = 3;
	}else if(keyDown(LEFT_ARROW)){
		fairy.velocityX = -3;
	}else if(keyDown(DOWN_ARROW)){
		fairy.velocityY = 3;
	}

	if(star.y > 470 && starBody.position.y > 470){
	Matter.Body.setStatic(starBody, true);
	}

	drawSprites();
}