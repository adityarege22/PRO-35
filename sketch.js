//Create variables here
var dog, happyDog, database, foodS, foodStock;
var database , positions;

function preload()
{
  createCanvas(500,500)
  foodStock = database.ref();
  foodStock.on("value",readStock);
  foodStock.loadImage("images/doglmg.png")



	//load images here
}

function setup() {
	createCanvas(800, 700);
  
}


function draw() {  
  background(46,139,87)

  drawSprites();
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage("images/doglmg.png1")
}

}



