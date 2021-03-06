/**
 * @fileOverview Holds the games main game loop, resize and reload scripts.
 * @name game.js
 */
var canvas = document.getElementById("connect4Canvas");
var ctx = canvas.getContext("2d");

//resize 
window.addEventListener('resize', function(){ resize();})

var screenWidth = 640;
var screenHeight = 480;

var ratio = screenHeight/screenWidth;
var ratioHeight =1;
var ratioWidht = 1;

resize();

var currentWidth = screenWidth;
var currentHeight = screenHeight;

canvas.width = screenWidth;
canvas.height = screenHeight;

//Init objects
var loadingS = new loadingScreen();
var Grid = new grid();
var Counter = new counters();
var Arrow = new arrow();
var Menu = new menu();
var Check = new checkScript();
var WinS = new winScreen();
var Leaderboard = new leaderBoard();
var MultiMenu = new multiplayerMenu();

//determines what state the user is in
var gamestate="loading";

var googleAPILoaded = false;

var userInformation;
var usersFriends = new Array();

//leaderboard vars
var leaderboardData = new Array;

update();

/** The update function controls the main game loop */
function update(){
    //every frame clear the whole canvas
    ctx.clearRect(0,0, canvas.width, canvas.height);
    if (gamestate == "loading"){
        loadingS.drawLoading();
    }
    if (gamestate == "login"){
        loadingS.drawLogin();
    }
    if (gamestate=="menu"){
         Menu.drawMenu();
    }
    if(gamestate == "single"){
        Grid.drawGrid();
        Grid.drawCountersToGrid();
        Arrow.drawArrow();
        Arrow.placeCounter();
    }
    if(gamestate == "winner"){
        WinS.drawImg();
    }
    if(gamestate == "loser"){
        WinS.drawImgLose();
    }
    if(gamestate == "winnerPlayer1"){
        WinS.drawImgWin1();
        //Player 1 win screen
    }
    if (gamestate == "winnerPlayer2"){
        WinS.drawImgWin2();
        //Player 2 win screen
    }    
    if(gamestate == "leaderboard"){
        Leaderboard.drawImgBoard();
        //LeaderBoard screen
    }
    if (gamestate == "draw"){
        WinS.DrawImgDrawScreen();
        //Player 2 win screen
    }

    multiplayerController();
	
    //Calls the update function again
    requestAnimationFrame(update);
}

/** The reset function calls reset methods so the grid and arrow position back to default **/
function reset(){
    Grid.clearArray();
    Arrow.resetArrow();
}

/** The resize function is called upon window resize, deals with changing window size **/
function resize(){
    ratio =  screenHeight / screenWidth;
    
    currentWidth = window.innerHeight;
    currentHeight = ratio * currentWidth;
    
    ratioHeight = currentHeight/screenHeight;
    ratioWidht = currentWidth/screenWidth;
    
    canvas.style.width = currentWidth + 'px';
    canvas.style.height = currentHeight + 'px';
    
    console.log("Res of game is now: ", currentWidth, "x",currentHeight);
    
    window.setTimeout(function() {window.scrollTo(0,1);}, 1);

}