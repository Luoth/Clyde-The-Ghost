
var GameScore = 0;
var GameScore2 = 0;
var GhostAmmo = 40;
var Seconde = 0;
var LastKeyPress = 0;
var Timer = 148;
var StatusEffect= 0;
var GameStart= 0;
var StartScreen= 0;
var SlimeTimer = 3;
var SpeedPlayerX= 5.5;
var SpeedPlayerY= 5.5;
var EffectTimer = 3;
var PuntMap = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 5],
	[1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 4, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 4],
	[0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 4],
	[1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 4],
	[1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 4],
	[1, 0, 0, 0, 0, 5, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
	[1, 1, 1, 1, 4, 4, 4, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
	[5, 1, 1, 0, 0, 0, 0, 0, 1, 1, 4, 0, 0, 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 4],
	[4, 0, 0, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 4],
	[4, 0, 0, 1, 1, 1, 1, 1, 1, 0, 5, 0, 0, 5, 0, 0, 0, 0, 0, 1, 0, 0, 0, 4],
	[4, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 4],
	[5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 5]
];

var PuntObjectList = [];

function start(){
	// alle plaatjes in het level plaatsen, beginposities.
	
	gameObjectsLayer.removeChildren();
	gameObjectsLayer.add(Newmuur1);
	gameObjectsLayer.add(Newmuur2);
	gameObjectsLayer.add(Newmuur3);
	gameObjectsLayer.add(Newmuur4);
	//NEW MUUR 5 DOES NOT EXIST
	gameObjectsLayer.add(Newmuur6);
	gameObjectsLayer.add(Newmuur7);
	gameObjectsLayer.add(Newmuur8);
	gameObjectsLayer.add(Newmuur9);
	gameObjectsLayer.add(Newmuur10);
	gameObjectsLayer.add(Newmuur11);
	gameObjectsLayer.add(Newmuur12);
	gameObjectsLayer.add(Newmuur13);
	gameObjectsLayer.add(Newmuur14);
	gameObjectsLayer.add(Newmuur15);
	gameObjectsLayer.add(Newmuur16);
	gameObjectsLayer.add(Newmuur17);

	gameObjectsLayer.add(hitbox1);
    gameObjectsLayer.add(hitbox2);
    gameObjectsLayer.add(hitbox3);
    gameObjectsLayer.add(hitbox4);
    gameObjectsLayer.add(hitbox5);
    gameObjectsLayer.add(hitbox6);
    gameObjectsLayer.add(hitbox7);
    gameObjectsLayer.add(hitbox8);
    gameObjectsLayer.add(hitbox9);
    gameObjectsLayer.add(hitbox10);
    gameObjectsLayer.add(hitbox11);
    gameObjectsLayer.add(hitbox12);
    gameObjectsLayer.add(hitbox13);
    gameObjectsLayer.add(hitbox14);
    gameObjectsLayer.add(hitbox15);
    gameObjectsLayer.add(hitbox16);
    gameObjectsLayer.add(hitbox17);
    gameObjectsLayer.add(hitbox18);

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
	gameObjectsLayer.add(SlimeBullet);
	gameObjectsLayer.add(grafstenen);
	gameObjectsLayer.add(mist);

	gameObjectsLayer.add(ScoreCounter);
	// gameObjectsLayer.add(ScoreCounter2);
	gameObjectsLayer.add(ScoreCounter3);
	gameObjectsLayer.add(TimeCounter);


	SlimeBullet.setY(-5000);
    


	muren.push(hitbox1);
	muren.push(hitbox2);
	muren.push(hitbox3);
	muren.push(hitbox4);
	muren.push(hitbox5);
	muren.push(hitbox6);
	muren.push(hitbox7);
	muren.push(hitbox8);
	muren.push(hitbox9);
	muren.push(hitbox10);
	muren.push(hitbox11);
	muren.push(hitbox12);
	muren.push(hitbox13);
	muren.push(hitbox14);
	muren.push(hitbox15);
	muren.push(hitbox16);
	muren.push(hitbox17);
	muren.push(hitbox18);

	muren.push(Newmuur1);
	muren.push(Newmuur2);
	muren.push(Newmuur3);
	muren.push(Newmuur4);
	muren.push(Newmuur6);
	muren.push(Newmuur7);
	muren.push(Newmuur8);
	muren.push(Newmuur9);
	muren.push(Newmuur10);
	muren.push(Newmuur11);
	muren.push(Newmuur12);
	muren.push(Newmuur13);
	muren.push(Newmuur14);
	muren.push(Newmuur15);
	muren.push(Newmuur16);
	muren.push(Newmuur17);
	

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




	// Punten
	


	for (var i = 0; i < PuntMap.length; i++) {

		for (var j = 0; j < PuntMap[i].length; j++) {

			if (PuntMap[i][j] == 1) {

				var NewPunt = new Kinetic.Image({x: 80 + (75 * j), y: 80 + (74 * i), Image: bolImage});
				NewPunt.Score = 25;
				PuntObjectList.push(NewPunt);
				gameObjectsLayer.add(NewPunt);
			}

			
			if (PuntMap[i][j] == 2) {
				var NewAmmo = new Kinetic.Image({x: 80 + (75 * j), y: 80 + (74 * i), Image: ammoImage});

				PuntObjectList.push(NewAmmo);
				gameObjectsLayer.add(NewAmmo);
			}
			if (PuntMap[i][j] == 3) {
				var NewSnoep = new Kinetic.Image({x: 80 + (75 *j), y: 80 + (74 * i), Image: snoepImage});
				
				PuntObjectList.push(NewSnoep);
				gameObjectsLayer.add(NewSnoep);
			}
			if (PuntMap[i][j] == 4) {
				var NewChoco = new Kinetic.Image({x: 80 + (75 *j), y: 80 + (74 * i), Image: chocoImage});
				NewChoco.Score = 12.5;
				PuntObjectList.push(NewChoco);
				gameObjectsLayer.add(NewChoco);
			}
			if (PuntMap[i][j] == 5) {
				var NewPumpkin = new Kinetic.Image({x: 80 + (75 *j), y: 80 + (74 * i), Image: pumpkinImage});
				NewPumpkin.Score = 50;
				PuntObjectList.push(NewPumpkin);
				gameObjectsLayer.add(NewPumpkin);
			}
		}

	}

	gameObjectsLayer.add(GhostPlayer);
	gameObjectsLayer.add(Menu);
	gameObjectsLayer.add(GameOver1);
	gameObjectsLayer.add(GameOver2);

	gameObjectsLayer.draw(); //Do nothing with this shit.
			
	switchGameState(GAME_STATE_LEVEL_1);
}



function level() {
	gameLoop=setInterval(update,20);  
	//update();
	//20 is de 'wachttijd in milliseconden, de functie 'update' wordt om de 0.02 s aangeroepen.
	// Dit voorbeeld is dus 50 fps (mits de hardware het aankan)
	
}

function update(){
	//start
	if(StartScreen<1){
		snd2.play();
		GameStart = 0;
	}
    if(GameStart>0){
    	snd2.pause();
    	snd1.play();
    }
    if(StartScreen>0){
    	Menu.setX(13584);
    	Menu.setY(6855);
    }
    if(keyPressList[69] && keyPressList[76]){
    	GameStart = 1;
    	    	StartScreen = 1;
    }
	//SOUNDS!
	    if(GameStart>0){
    	snd1.play();
    }
	// TIMER
		if(Seconde<100 && GameStart > 0){
		Seconde++;
	}
    if(Seconde=== 100 ){
    	Seconde = 0;
    	TimeSeconde= TimeSeconde -1;
    	TimeCounter.setText("Time: "+ TimeMinuut + ':' + TimeSeconde);
    	Timer= Timer-1;
    	EffectTimer++;
    }
    if(TimeSeconde<1){
    	TimeMinuut= TimeMinuut -1;
    	TimeSeconde= 59;
    	TimeCounter.setText("Time: "+ TimeMinuut + ':' + TimeSeconde);
    }

    if(Timer <1){
    	LarryWins = 1;
    }
    if(LarryWins == 1){
    	for (var i = 0; i < PuntObjectList.length; i++) {
    		PuntObjectList[i].remove();
    		PuntObjectList.splice(i, 1);
    	}
    	GameOver1.setX(0);
    	GameOver1.setY(0);
 	  if (GameStart > 0) {
        	snd1.pause();
        	snd3.play();
        	GameStart = 0;
        }

        snd3.loop = false;
        LarryWins == 0;
        StartScreen == 1;
    }


  
    

	//D key moves right, moet 102 worden. PacPlayer is speler 2 (speler aan de rechter kant)
	if(keyPressList[68]&& GameStart > 0){
		PacPlayer.setX(PacPlayer.getX() + SpeedPlayerX);
	}

	//A key moves left, moet 100 worden
	if(keyPressList[65]&& GameStart > 0){
		PacPlayer.setX(PacPlayer.getX() -SpeedPlayerX);
	}

	//S key moves down, moet 98 worden
	if(keyPressList[83]&& GameStart > 0){
		PacPlayer.setY(PacPlayer.getY() + SpeedPlayerY);
	}

	//W key moves Up, moet 104 worden.
	if(keyPressList[87]&& GameStart > 0){
		PacPlayer.setY(PacPlayer.getY() -SpeedPlayerY);
	}

	//Up Arrow, blijven allemaal hetzelfde, ghost is player 1. (speler aan de linker kant)
		if(keyPressList[38]&& GameStart > 0){
		GhostPlayer.setY(GhostPlayer.getY() -SpeedGhostY);
	}
	if(keyPressList[38] && SlimeBullet.getY()<-40){
			LastKeyPress= 0;
		}
	//Down Arrow
		if(keyPressList[40]&& GameStart > 0){
			GhostPlayer.setY(GhostPlayer.getY() +SpeedGhostY);
		}
		if(keyPressList[40] && SlimeBullet.getY()<-40){
			LastKeyPress= 1;
		}
	//Right Key
		if(keyPressList[39]&& GameStart > 0){
			GhostPlayer.setX(GhostPlayer.getX() +SpeedGhostX);
		}
		if(keyPressList[39] && SlimeBullet.getY()<-40){
			LastKeyPress= 2;
		}
	//Left Key
		if(keyPressList[37]&& GameStart > 0){
			GhostPlayer.setX(GhostPlayer.getX() -SpeedGhostX);
		}
		if(keyPressList[37] && SlimeBullet.getY()<-40){
		LastKeyPress= 3;
		}

	// G Key / Green button left player
	if (keyPressList[96]){
	  if (GhostAmmo) {
	   SlimeTimer++;
	   if (SlimeTimer > 10) {
	    if (SlimeBullet.AllowReset) {
	     SlimeBullet.setX(GhostPlayer.getX());
	     SlimeBullet.setY(GhostPlayer.getY());
	     GhostAmmo -=1;
	     console.log(GhostAmmo);
	     ScoreCounter3.setText("Ammo Ghost: "+GhostAmmo);
	     SlimeBullet.AllowReset = false;
	    }
	   } 
	  }
	 }

	if(LastKeyPress=== 3){
	SlimeBullet.setX(SlimeBullet.getX()-7);
	}
	if(LastKeyPress=== 2){
	SlimeBullet.setX(SlimeBullet.getX()+7);
	}
	if(LastKeyPress=== 1){
	SlimeBullet.setY(SlimeBullet.getY()+7);
	}
	if(LastKeyPress=== 0){
	SlimeBullet.setY(SlimeBullet.getY()-7);
	}
	
	
	
	 

	//if (collision(PacPlayer, Slime1) && PacSpeedX = -2) {
	//	PacSpeedX = -1;
	//}
	//else {
	//	PacSpeedX = -2;
	//}
	//--------------------TELEPORTATION SIDES-----------------
	if (PacPlayer.getX()<-30 && keyPressList[65]){
		PacPlayer.setX(1900);
	}
	if (PacPlayer.getX()>1940 && keyPressList[68]){
		PacPlayer.setX(2);
	}
	if (PacPlayer.getY()<-30 && keyPressList[87]){
		PacPlayer.setY(1080);
	}
	if (PacPlayer.getY()>1100 && keyPressList[83]){
		PacPlayer.setY(10);
	}

	if (GhostPlayer.getX()<-30 && keyPressList[37]){
		GhostPlayer.setX(1900);
	}
	if (GhostPlayer.getX()>1940 && keyPressList[39]){
		GhostPlayer.setX(2);
	}
	if (GhostPlayer.getY()<-30 && keyPressList[38]){
		GhostPlayer.setY(1080);
	}
	if (GhostPlayer.getY()>1100 && keyPressList[40]){
		GhostPlayer.setY(10);
	}




	// -------------------COLLISION---------------------------


	for (var i = 0; i < muren.length; i++) {

		if (collision(PacPlayer, muren[i]) && keyPressList[68]) {
			PacPlayer.setX(PacPlayer.getX()-SpeedPlayerX);
		}

		if (collision(PacPlayer, muren[i]) && keyPressList[65]) {
			PacPlayer.setX(PacPlayer.getX()+SpeedPlayerX);
		}

		if (collision(PacPlayer, muren[i]) && keyPressList[83]) {
			PacPlayer.setY(PacPlayer.getY()-SpeedPlayerY);
		}

		if (collision(PacPlayer, muren[i]) && keyPressList[87]) {
			PacPlayer.setY(PacPlayer.getY()+SpeedPlayerY);
		}
		if (collision(GhostPlayer, muren[i]) && keyPressList[39]) {
			GhostPlayer.setX(GhostPlayer.getX()-SpeedGhostX);
		}
		if (collision(GhostPlayer, muren[i]) && keyPressList[37]){
			GhostPlayer.setX(GhostPlayer.getX()+SpeedGhostX);
		}
		if (collision(GhostPlayer, muren[i]) && keyPressList[40]){
			GhostPlayer.setY(GhostPlayer.getY()-SpeedGhostY);
		}
		if (collision(GhostPlayer, muren[i]) && keyPressList[38]){
			GhostPlayer.setY(GhostPlayer.getY()+SpeedGhostY);
		}
		if (collision(SlimeBullet, muren[i])){
		SlimeBullet.setX(-360);
		SlimeBullet.setY(-5000000);
		SlimeBullet.AllowReset = true;
	}
	}
		if(collision(PacPlayer, SlimeBullet)){
		StatusEffect = 3;
		console.log(StatusEffect);
		SlimeBullet.setX(-360);
		SlimeBullet.setY(-5000000);
		SlimeBullet.AllowReset = true;
	}
	if(StatusEffect == 3) {
		SpeedPlayerY = 2;
		SpeedPlayerX = 2;
		EffectTimer = 0;
		StatusEffect = 0;
	}

	if(EffectTimer > 1) {
		SpeedPlayerY = 5.5;
		SpeedPlayerX = 5.5;
		EffectTimer = 0;
		
	}
		
	// if (collision(PacPlayer, Slimebullet) && PacSpeedX === 2) {
	// 	PacSpeedX = 0.5;
	// 	console.log("POOOOOP2");
	// }
	// else {
	// 	PacSpeedX = 2;
	// }

	// if (collision(PacPlayer, Slime1) && PacSpeedX === -2) {
	// 	PacSpeedX = -0.5;
	// 	console.log("POOOOOOPPPP");
	// }

	if (collision(GhostPlayer, PacPlayer)){
		PacPlayer.setX(5000000);
		GameOver2.setX(0);
		GameOver2.setY(0);
		if (GameStart > 0) {
        	snd1.pause();
        	snd3.play();
        	GameStart = 0;
        }

        snd3.loop = false;
        LarryWins == 0;
        StartScreen == 1;
		// GameScore2 +=10;
		// ScoreCounter2.setText("Score Ghost: "+GameScore2);
		// console.log(GameScore2);
	}


	////// speler met punt
	for(var i = 0; i < PuntObjectList.length; i++) {

		if (collision(PacPlayer, PuntObjectList[i])) {

			GameScore += PuntObjectList[i].Score;
			ScoreCounter.setText("Score Larry: " + GameScore);

			PuntObjectList[i].remove();
			PuntObjectList.splice(i, 1);

		}

	}



	

	gameObjectsLayer.draw();
	
}   