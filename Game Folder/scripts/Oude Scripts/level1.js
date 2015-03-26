var PacSpeedX = 0.5;
var GameScore = 0;
var GameScore2 = 0;

function start(){
	// alle plaatjes in het level plaatsen, beginposities.
	
	gameObjectsLayer.removeChildren();
	
	// gameObjectsLayer.add(Hitbox14);
	// gameObjectsLayer.add(Hitbox15);
	// gameObjectsLayer.add(Hitbox16);
	// gameObjectsLayer.add(Hitbox17);
	// gameObjectsLayer.add(Hitbox18);
	// gameObjectsLayer.add(Hitbox19);
	// gameObjectsLayer.add(Hitbox20);
	// gameObjectsLayer.add(Hitbox21);
	// gameObjectsLayer.add(Hitbox22);
	// gameObjectsLayer.add(Hitbox23);
	// gameObjectsLayer.add(Hitbox24);
	// gameObjectsLayer.add(Hitbox25);
	// gameObjectsLayer.add(Hitbox26);
	// gameObjectsLayer.add(Hitbox27);
	// gameObjectsLayer.add(hitbox1);
 //    gameObjectsLayer.add(hitbox2);
 //    gameObjectsLayer.add(hitbox3);
 //    gameObjectsLayer.add(hitbox4);
 //    gameObjectsLayer.add(hitbox5);
 //    gameObjectsLayer.add(hitbox6);
 //    gameObjectsLayer.add(hitbox7);
 //    gameObjectsLayer.add(hitbox8);
 //    gameObjectsLayer.add(hitbox9);
 //    gameObjectsLayer.add(hitbox10);
 //    gameObjectsLayer.add(hitbox11);
 //    gameObjectsLayer.add(hitbox12);
 //    gameObjectsLayer.add(hitbox13);
//HITBOXES LAYERED ABOVE^^^^^^^^^^^

	gameObjectsLayer.add(background);
	gameObjectsLayer.add(PacPlayer);
	gameObjectsLayer.add(GhostPlayer);
	gameObjectsLayer.add(Slime1);

	gameObjectsLayer.add(ScoreCounter);
	gameObjectsLayer.add(ScoreCounter2);
    



	// muren.push(hitbox1);
	// muren.push(hitbox2);
	// muren.push(hitbox3);
	// muren.push(hitbox4);
	// muren.push(hitbox5);
	// muren.push(hitbox6);
	// muren.push(hitbox7);
	// muren.push(hitbox8);
	// muren.push(hitbox9);
	// muren.push(hitbox10);
	// muren.push(hitbox11);
	// muren.push(hitbox12);
	// muren.push(hitbox13);
	

	// muren.push(Hitbox14);
	// muren.push(Hitbox15);
	// muren.push(Hitbox16);
	// muren.push(Hitbox17);
	// muren.push(Hitbox18);
	// muren.push(Hitbox19);
	// muren.push(Hitbox20);
	// muren.push(Hitbox21);
	// muren.push(Hitbox22);
	// muren.push(Hitbox23);
	// muren.push(Hitbox24);
	// muren.push(Hitbox25);
	// muren.push(Hitbox26);
	// muren.push(Hitbox27);

	gameObjectsLayer.draw(); //Do nothing with this shit. KAPPA.
			
	switchGameState(GAME_STATE_LEVEL_1);
}



function level() {
	gameLoop=setInterval(update,20);  
	//update();
	//20 is de 'wachttijd in milliseconden, de functie 'update' wordt om de 0.02 s aangeroepen.
	// Dit voorbeeld is dus 50 fps (mits de hardware het aankan)
	
}

function update(){
	//D key moves right

	
	if(keyPressList[68]){
		PacPlayer.setX(PacPlayer.getX() + SpeedPlayerX);
	}

	//A key moves left
	if(keyPressList[65]){
		PacPlayer.setX(PacPlayer.getX() -SpeedPlayerX);
	}

	//S key moves down
	if(keyPressList[83]){
		PacPlayer.setY(PacPlayer.getY() + SpeedPlayerY);
	}

	//W key moves Up
	if(keyPressList[87]){
		PacPlayer.setY(PacPlayer.getY() -SpeedPlayerY);
	}

	//Up Arrow
		if(keyPressList[38]){
		GhostPlayer.setY(GhostPlayer.getY() -SpeedGhostY);
	}
	//Down Arrow
		if(keyPressList[40]){
			GhostPlayer.setY(GhostPlayer.getY() +SpeedGhostY);
		}
	//Right Key
		if(keyPressList[39]){
			GhostPlayer.setX(GhostPlayer.getX() +SpeedGhostX);
		}
	//Left Key
		if(keyPressList[37]){
			GhostPlayer.setX(GhostPlayer.getX() -SpeedGhostX);
		}

	// G Key / Green button left player
	if (keyPressList[71]){
		Slime1.setX(GhostPlayer.getX());
		Slime1.setY(GhostPlayer.getY());
	}
	
	
	 

	//if (collision(PacPlayer, Slime1) && PacSpeedX = -2) {
	//	PacSpeedX = -1;
	//}
	//else {
	//	PacSpeedX = -2;
	//}


	// -------------------COLLISION---------------------------


	// for (var i = 0; i < muren.length; i++) {

	// 	if (collision(PacPlayer, muren[i]) && keyPressList[68]) {
	// 		PacPlayer.setX(PacPlayer.getX()-SpeedPlayerX);
	// 	}

	// 	if (collision(PacPlayer, muren[i]) && keyPressList[65]) {
	// 		PacPlayer.setX(PacPlayer.getX()+SpeedPlayerX);
	// 	}

	// 	if (collision(PacPlayer, muren[i]) && keyPressList[83]) {
	// 		PacPlayer.setY(PacPlayer.getY()-SpeedPlayerY);
	// 	}

	// 	if (collision(PacPlayer, muren[i]) && keyPressList[87]) {
	// 		PacPlayer.setY(PacPlayer.getY()+SpeedPlayerY);
	// 	}
	// 	if (collision(GhostPlayer, muren[i]) && keyPressList[39]) {
	// 		GhostPlayer.setX(GhostPlayer.getX()-SpeedGhostX);
	// 	}
	// 	if (collision(GhostPlayer, muren[i]) && keyPressList[37]){
	// 		GhostPlayer.setX(GhostPlayer.getX()+SpeedGhostX);
	// 	}
	// 	if (collision(GhostPlayer, muren[i]) && keyPressList[40]){
	// 		GhostPlayer.setY(GhostPlayer.getY()-SpeedGhostY);
	// 	}
	// 	if (collision(GhostPlayer, muren[i]) && keyPressList[38]){
	// 		GhostPlayer.setY(GhostPlayer.getY()+SpeedGhostY);
	// 	}
	// }
		
	if (collision(PacPlayer, Slime1) && PacSpeedX === 2) {
		PacSpeedX = 0.5;
		console.log("POOOOOP2");
	}
	else {
		PacSpeedX = 2;
	}

	if (collision(PacPlayer, Slime1) && PacSpeedX === -2) {
		PacSpeedX = -0.5;
		console.log("POOOOOOPPPP");
	}

	if (collision(GhostPlayer, PacPlayer)){
		PacPlayer.setX(5000000);
		GameScore2 +=10;
		ScoreCounter2.setText("ScorePlayer2: "+GameScore2);
		console.log(GameScore2);
	}
	
	

	

	gameObjectsLayer.draw();
	
}   