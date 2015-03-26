var loadCount = 0;
var hero;
var enemies=[];
var muren = [];
var GameScore = 0;
var GameScore2 = 0;
var SpeedGhostY = 5;
var SpeedGhostX = 5;
var bolletjes= [];
var GhostAmmo= 40;
var LastKeyPressed = [];
var Kappa= console.log("Grey face (no space)");
var Seconde = 0;
var TimeSeconde = 30;
var TimeMinuut = 2;
var LarryWins = 0;
var Timer = 148;
var StatusEffect= 3;
var SlimeTimer= 3;
var snd1 = new Audio("assets/gameplay.mp3");
var snd2 = new Audio("assets/start scherm.mp3");
var snd3 = new Audio("assets/victory.mp3");

function init() {
    console.log("init called");        
    itemsToLoad = 47; // <-- verander dit in het aantal afbeceldingen er ingeladen moet worden

    //alle afbeeldingen volgen hier	
    GameOver1Image=preload("assets/LarryWinsScreen.png");
    GameOver2Image=preload("assets/ClydeWinsScreen.png");
    snoepImage=preload("assets/snoepje.png");
    pumpkinImage=preload("assets/pumpkin.png");
    chocoImage=preload("assets/choco.png");
    backgroundImage=preload("assets/WALLS.png");
    PacPlayerImage=preload("assets/PacPlayer.png");
    GhostPlayerImage=preload("assets/GhostPlayer.png");
    SlimeBulletImage=preload("assets/slimebullet.png");
    StartImage=preload("assets/instructions.png");
    ammoImage=preload("assets/slimeammo.png");

    newmuur1Image=preload("assets/newmuur1.png");
    newmuur2Image=preload("assets/newmuur2.png");
    newmuur3Image=preload("assets/newmuur3.png");
    newmuur4Image=preload("assets/newmuur4.png");
    
    newmuur6Image=preload("assets/newmuur6.png");
    newmuur7Image=preload("assets/newmuur7.png");
    newmuur8Image=preload("assets/newmuur8.png");
    newmuur9Image=preload("assets/newmuur9.png");
    newmuur10Image=preload("assets/newmuur10.png");
    newmuur11Image=preload("assets/newmuur11.png");
    newmuur12Image=preload("assets/newmuur12.png");
    newmuur13Image=preload("assets/newmuur13.png");
    newmuur14Image=preload("assets/newmuur14.png");
    newmuur15Image=preload("assets/newmuur15.png");
    newmuur16Image=preload("assets/newmuur16.png");
    newmuur17Image=preload("assets/newmuur17.png");

    hitbox100=preload("assets/newmuur269.png");
    hitbox200=preload("assets/newmuurgroot.png");
    hitbox300=preload("assets/newmuurL3onder.png");
    hitbox400=preload("assets/newmuurlang.png");
    hitbox500=preload("assets/newmuurlang2.png");
    hitbox600=preload("assets/newmuurLboven1.png");
    hitbox700=preload("assets/newmuurLboven2.png");
    hitbox800=preload("assets/newmuurlinks(boven).png");
    hitbox900=preload("assets/newmuurlinks.png");
    hitbox1000=preload("assets/newmuurlinksboven.png");
    hitbox1100=preload("assets/newmuurLonder1.png");
    hitbox1200=preload("assets/newmuurLonder2.png");
    hitbox1300=preload("assets/newmuuronder.png");
    hitbox1400=preload("assets/newmuurstuff.png");
    hitbox1500=preload("assets/newmuurstuffz.png");
    hitbox1600=preload("assets/newtetris1.png");
    hitbox1700=preload("assets/newtetris2.png");
    hitbox1800=preload("assets/newtetris3.png");

    mistImage=preload("assets/mist.png");
    grafstenenImage=preload("assets/grafstenen.png");
    bolImage=preload("assets/bolletje.png");
    // hitbox200=preload("assets/");
    // hitbox300=preload("assets/");
    // hitbox400=preload("assets/");
    // hitbox500=preload("assets/");
    // hitbox600=preload("assets/");
    // hitbox700=preload("assets/");
    // hitbox800=preload("assets/");
    // hitbox900=preload("assets/");
    // hitbox1000=preload("assets/");
    // hitbox1100=preload("assets/");
    // hitbox1200=preload("assets/");
    // hitbox1300=preload("assets/");
    // hitbox1400=preload("assets/");
    // hitbox1500=preload("assets/");
    // hitbox1600=preload("assets/");
    // hitbox1700=preload("assets/");
    // hitbox1800=preload("assets/");
    // hitbox1900=preload("assets/");
    // hitbox2000=preload("assets/");
    // hitbox2100=preload("assets/");

    
    
    switchGameState(GAME_STATE_IDLE);
	
}

function preload(path){
        img = new Image();
        img.src = path;
        img.onload = itemLoaded;
        return img;
 }

 function itemLoaded(event) {
    //leave this function as it is
    console.log("itemLoaded called")

    loadCount++;
    console.log("loading:" + loadCount)

    if (loadCount >= itemsToLoad) {
        console.log("Locked & Loaded!");
        makeKineticImages();
    }

}

function doNothing(){
  //do nothing
}

function doNothing2(){
    //do nothing *2
    console.log("Poephoofden");
}

function makeKineticImages() {
   console.log( "makeKineticImages");

    // all images here! Even those you do not use in the start of the game
   
    GameOver1 = new Kinetic.Image({x: 100000,y: 1000000, image: GameOver1Image});
    GameOver2 = new Kinetic.Image({x: 100000,y: 1000000, image: GameOver2Image});
    background = new Kinetic.Image({x: 0,y: 0, image: backgroundImage});
    PacPlayer = new Kinetic.Image({x: 100,y: 200, image: PacPlayerImage});
    GhostPlayer = new Kinetic.Image({x: 250, y: 200, image: GhostPlayerImage});
    SlimeBullet = new Kinetic.Image({x:-4000, y:-4000, image: SlimeBulletImage});
    SlimeBullet.AllowReset = true;
    ScoreCounter = new Kinetic.Text({x: 10, y: 5, text: 'Score Larry: ' + GameScore, fontSize: 30, fontFamily: 'verdana', fill: 'white'});
    // ScoreCounter2 = new Kinetic.Text({x: 1600, y: 5, text: 'Score Clyde: ' + GameScore2, fontSize: 30, fontFamily: 'verdana', fill: 'white'});
    ScoreCounter3 = new Kinetic.Text({x: 1200, y: 5, text: 'Ammo: ' + GhostAmmo, fontSize: 30, fontFamily: 'verdana', fill: 'white'});
    TimeCounter = new Kinetic.Text({x: 600, y: 5, text: 'Time: ' + TimeMinuut + ':' + TimeSeconde, fontSize: 30, fontFamily: 'verdana', fill: 'white'});
    // Hitbox14 = new Kinetic.Image({x:0, y:535, image: hitbox14Image});
    // Hitbox15 = new Kinetic.Image({x:0, y:955, image: hitbox15Image});
    // Hitbox16 = new Kinetic.Image({x:702, y:535, image: hitbox16Image});
    // Hitbox17 = new Kinetic.Image({x:300, y:590, image: hitbox17Image});
    // Hitbox18 = new Kinetic.Image({x:105, y:839, image: hitbox18Image});
    // Hitbox19 = new Kinetic.Image({x:100, y:490, image: hitbox19Image});
    // Hitbox20 = new Kinetic.Image({x:110, y:485, image: hitbox20Image});
    // Hitbox21 = new Kinetic.Image({x:450, y:840, image: hitbox21Image});
    // Hitbox22 = new Kinetic.Image({x:295, y:490, image: hitbox22Image});
    // Hitbox23 = new Kinetic.Image({x:215, y:717, image: hitbox23Image});
    // Hitbox24 = new Kinetic.Image({x:344, y:740, image: hitbox24Image});
    // Hitbox25 = new Kinetic.Image({x:493, y:617, image: hitbox25Image});
    // Hitbox26 = new Kinetic.Image({x:590, y:600, image: hitbox26Image});
    // Hitbox27 = new Kinetic.Image({x:210, y:610, image: hitbox27Image});
    Newmuur1 = new Kinetic.Image({x:1040, y:0, image: newmuur1Image});
    Newmuur2 = new Kinetic.Image({x:1877, y:-10, image: newmuur2Image});
    Newmuur3 = new Kinetic.Image({x:1877, y:613, image: newmuur3Image});
    Newmuur4 = new Kinetic.Image({x:1033, y:1034, image: newmuur4Image});
    
    Newmuur6 = new Kinetic.Image({x:1680, y:603, image: newmuur6Image});
    Newmuur7 = new Kinetic.Image({x:1490, y:420, image: newmuur7Image});
    Newmuur8 = new Kinetic.Image({x:1590, y:850, image: newmuur8Image});
    Newmuur9 = new Kinetic.Image({x:1395, y:850, image: newmuur9Image});
    Newmuur10 = new Kinetic.Image({x:1112, y:510, image: newmuur10Image});
    Newmuur11 = new Kinetic.Image({x:1183, y:420, image: newmuur11Image});
    Newmuur12 = new Kinetic.Image({x:1295, y:510, image: newmuur12Image});
    Newmuur13 = new Kinetic.Image({x:5555555555000, y:300, image: newmuur13Image});
    Newmuur14 = new Kinetic.Image({x:1180, y:140, image: newmuur14Image});
    Newmuur15 = new Kinetic.Image({x:1300, y:233, image: newmuur15Image});
    Newmuur16 = new Kinetic.Image({x:1487, y:40, image: newmuur16Image});
    Newmuur17 = new Kinetic.Image({x:1680, y:138, image: newmuur17Image});


    hitbox1 = new Kinetic.Image({x: 720, y: 710, image: hitbox100});
    hitbox2 = new Kinetic.Image({x: 340, y: 610, image: hitbox200});
    hitbox3 = new Kinetic.Image({x: 913, y: 600, image: hitbox300});
    hitbox4 = new Kinetic.Image({x: 225, y: 430, image: hitbox400});
    hitbox5 = new Kinetic.Image({x: 30, y: 610, image: hitbox500});
    hitbox6 = new Kinetic.Image({x: 335, y: 135, image: hitbox600});
    hitbox7 = new Kinetic.Image({x: 425, y: 135, image: hitbox700});
    hitbox8 = new Kinetic.Image({x: 0, y: 0, image: hitbox800});
    hitbox9 = new Kinetic.Image({x: 0, y: 610, image: hitbox900});
    hitbox10 = new Kinetic.Image({x: 0, y: 0, image: hitbox1000});
    hitbox11 = new Kinetic.Image({x: 135, y: 740, image: hitbox1100});
    hitbox12 = new Kinetic.Image({x: 225, y: 845, image: hitbox1200});
    hitbox13 = new Kinetic.Image({x: 0, y: 1035, image: hitbox1300});
    hitbox14 = new Kinetic.Image({x: 720, y: 510, image: hitbox1400});
    hitbox15 = new Kinetic.Image({x: 140, y: 135, image: hitbox1500});
    hitbox16 = new Kinetic.Image({x: 985, y: 230, image: hitbox1600});
    hitbox17 = new Kinetic.Image({x: 525, y: 325, image: hitbox1700});
    hitbox18 = new Kinetic.Image({x: 615, y: 325, image: hitbox1800});
    mist = new Kinetic.Image({x:0, y: 0, image: mistImage});
    grafstenen = new Kinetic.Image({x: 0,y: 0, image: grafstenenImage});
    Menu = new Kinetic.Image({x: 0,y: 0, image: StartImage});


    // hitbox1 = new Kinetic.Image({x: 220, y: 368, image: hitbox100});
    // hitbox2 = new Kinetic.Image({x: 0, y: 0, image: hitbox200});
    // hitbox3 = new Kinetic.Image({x: 0, y: 0, image: hitbox300});
    // hitbox4 = new Kinetic.Image({x: 700, y: 0, image: hitbox400});
    // hitbox5 = new Kinetic.Image({x: 110, y: 250, image: hitbox500});
    // hitbox6 = new Kinetic.Image({x: 500, y: 250, image: hitbox600});
    // hitbox7 = new Kinetic.Image({x: 600, y: 125, image: hitbox700});
    // hitbox8 = new Kinetic.Image({x: 420, y: 490, image: hitbox800});
    // hitbox9 = new Kinetic.Image({x: 105, y: 120, image: hitbox900});
    // hitbox10 = new Kinetic.Image({x: 470, y: 120, image: hitbox1000});
    // hitbox11 = new Kinetic.Image({x: 410, y: 375, image: hitbox1100});
    // hitbox12 = new Kinetic.Image({x: 110, y: 250, image: hitbox1200});
    // hitbox13 = new Kinetic.Image({x: 350, y: 0, image: hitbox1300});

    
    
    switchGameState(GAME_STATE_INIT_LEVEL_1);
}