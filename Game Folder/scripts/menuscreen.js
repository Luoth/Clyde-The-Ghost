var startButton;

function menuScreen(){
	//clear the stage
	backgroundLayer.removeChildren();
	gameObjectsLayer.removeChildren();
	//createStartButton();
	//add all content 		
	gameObjectsLayer.add(startButton);
	
	//finally draw
	gameObjectsLayer.draw();
	backgroundLayer.draw();
}