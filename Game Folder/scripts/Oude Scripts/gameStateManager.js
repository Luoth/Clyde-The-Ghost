const GAME_STATE_IDLE = "idle";
const GAME_STATE_INIT = "init";
const GAME_STATE_INIT_LEVEL_1 = "start"; 
const GAME_STATE_LEVEL_1 = "level1";


var currentGameState = 1;
var currentGameStateFunction = null;

function switchGameState(newState) {
    console.log("switchGameState to newState:" + newState);
    currentGameState = newState;
    switch (currentGameState) {
		  case GAME_STATE_IDLE:
            currentGameStateFunction = doNothing;
            break;
		 
		 case GAME_STATE_INIT:
            currentGameStateFunction = init;
            break;
               
        case GAME_STATE_INIT_LEVEL_1:
            currentGameStateFunction = start;
            break;
		
		case GAME_STATE_LEVEL_1:
            currentGameStateFunction = level;
            break;
     
    }

	currentGameStateFunction();
}

