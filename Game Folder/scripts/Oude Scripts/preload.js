var loadCount = 0;
var hero;
var enemies=[];
var muren = [];
var GameScore = 0;
var GameScore2 = 0;
var SpeedPlayerX = 2.5;
var SpeedPlayerY = 2.5;
var SpeedGhostY = 2;
var SpeedGhostX = 2;
var bolletjes=[];

function init() {
    console.log("init called");        
    itemsToLoad = 31; // <-- verander dit in het aantal afbeeldingen er ingeladen moet worden

    //alle afbeeldingen volgen hier	
    backgroundImage=preload("assets/WALLS.png");
    PacPlayerImage=preload("assets/PacPlayer.png");
    GhostPlayerImage=preload("assets/GhostPlayer.png");
    slime1Image=preload("assets/slime1.png");
    // ScoreImage=preload("assets/bullet.png");
    // hitbox14Image=preload("assets/buitenstelinksondermuur.png");
    // hitbox15Image=preload("assets/buitensteondermuurhorizontaal.png");
    // hitbox16Image=preload("assets/buitensterechtsondermuur.png");
    // hitbox17Image=preload("assets/datkleinestukjehorizontalemuurbovenmiddenonderste.png");
    // hitbox18Image=preload("assets/horizontalemuurlinksonder.png");
    // hitbox19Image=preload("assets/langeverticalemuurlinksonder.png");
    // hitbox20Image=preload("assets/meestmiddenlinksehorizontalemuur.png");
    // hitbox21Image=preload("assets/meestmiddenrechtshorizontalemuur.png");
    // hitbox22Image=preload("assets/middenlinksondermuur.png");
    // hitbox23Image=preload("assets/middenonderstehorizontalemuur.png");
    // hitbox24Image=preload("assets/middenondersteverticalemuur.png");
    // hitbox25Image=preload("assets/middenrechtsondermuur.png");
    // hitbox26Image=preload("assets/rechtsonderstelangeverticalemuur.png");
    // hitbox27Image=preload("assets/verticaalmuurtjebovenkortstegrafsteen.png");
    // hitbox100=preload("assets/grafsteenbovenmidden(onder).png");
    // hitbox200=preload("assets/heklinksboven.png");
    // hitbox300=preload("assets/hekboven.png");
    // hitbox400=preload("assets/hekrechtsboven.png");
    // hitbox500=preload("assets/middenboven2grafstenenhorizontaal.png");
    // hitbox600=preload("assets/muurdieeerstscheefstond.png");
    // hitbox700=preload("assets/langehegrechtsboven.png");
    // hitbox800=preload("assets/grafsteenbovenonder.png");
    // hitbox900=preload("assets/grafsteenlinksboven.png");
    // hitbox1000=preload("assets/grafsteenrechtsboven.png");
    // hitbox1100=preload("assets/hegbovenmidden(onder).png");
    // hitbox1200=preload("assets/heglinksboven.png");
    // hitbox1300=preload("assets/hegmiddenboven.png");

    
    
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

    background = new Kinetic.Image({x: 0,y: 0, image: backgroundImage});
    PacPlayer = new Kinetic.Image({x: 100,y: 200, image: PacPlayerImage});
    GhostPlayer = new Kinetic.Image({x: 200, y: 200, image: GhostPlayerImage});
    Slime1 = new Kinetic.Image({x:-4000, y:-4000, image: slime1Image});
    ScoreCounter = new Kinetic.Text({x: 10, y: 10, text: 'Score player1: ' + GameScore, fontSize: 16, fontFamily: 'verdana', fill: 'white'});
    ScoreCounter2 = new Kinetic.Text({x: 10, y: 30, text: 'Score player2: ' + GameScore2, fontSize: 16, fontFamily: 'verdana', fill: 'white'});
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