//setInvite
//create
//init
//taketurn
//waiting
//recived
//taketurn
var inviteID = "107373363902631863467"
var matchID;

function multiplayerController(){
    if (gamestate == "setInvite"){
    
    }
    else if (gamestate == "create"){
        console.log("create game");
        createGame();
    }
    else if (gamestate == "takeTurn"){
        
        Grid.drawGrid();
        Grid.drawCountersToGrid();
        Arrow.drawArrow();
        Arrow.placeCounter();
        console.log("Take your turn");
    }
    else if (gamestate == "waiting"){
        Grid.drawGrid();
        Grid.drawCountersToGrid();
        console.log("waiting");
        //getData();
    }
}

function setGameState(gstate){
    gamestate = gstate;
}
function setInviteID(data){
    inviteID = data;
}

function multiplayerPlaceCounter(col){
    Grid.insertCounter(col,2);
}