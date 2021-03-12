var background1, backgroundImage;
var harryPotter, harryPotterImage, harryLeft, harryRight, harryUp, harryDown;


function preload()
{
  backgroundImage = loadImage('background1.png');
  harryPotterImage = loadImage('harrypotteranimations/19.png');
  harryRight = loadAnimation('harrypotteranimations/2.png');
  harryRight = loadAnimation('harrypotteranimations/3.png');
  harryRight = loadAnimation('harrypotteranimations/4.png');
  harryRight = loadAnimation('harrypotteranimations/5.png');
  harryRight = loadAnimation('harrypotteranimations/6.png');
  harryRight = loadAnimation('harrypotteranimations/7.png');
  harryRight = loadAnimation('harrypotteranimations/8.png');
  harryRight = loadAnimation('harrypotteranimations/9.png');
  harryRight = loadAnimation('harrypotteranimations/10.png');
  




}

function setup() {
  createCanvas(1200,4200);

  background1 = createSprite(300,200,20,20);
  background1.addImage(backgroundImage);
  background1.scale = 1.2;

  harryPotter = createSprite(displayWidth/2.5-13, displayHeight+2670, 100,100);
  harryPotter.scale = 1.5;
  harryPotter.shapeColor = "yellow";
  harryPotter.addImage(harryPotterImage);

}

function draw() {
  background(255,255,255);  

  if(keyDown("right")){

    harryPotter.x= harryPotter.x + 2;
    harryPotter.addAnimation(harryRight);

  }

  drawSprites();
}