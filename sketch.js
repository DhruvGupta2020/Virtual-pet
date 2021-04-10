var dog, Happydog ;
var dogImage, HappydogImage;
var foodS, foodStock;
var database;

function preload()
{
  dogImage = loadImage("images/dogImg.png");
  HappydogImage = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
    dog = createSprite(250,300,50,50);
    
    dog.addImage(dogImage);

}


function draw() {  
  background (46, 139, 87)
  drawSprites();
  //add styles here

}



