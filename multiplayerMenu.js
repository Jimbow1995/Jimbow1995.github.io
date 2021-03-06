/**
 * @fileOverview Holds the multiplayer menu scripts.
 * @name multiplayerMenu.js
 */

/** 
Constructor calls methods to create the menu and load the images.
@class multiplayerMenu
@classdesc Class holds scripts and data for the multiplayer menu.
*/
function multiplayerMenu() {
    this.createJoin = new Image();
    this.Invite = new Image();
    this.GameList = new Image();
    this.loadImg();
    this.selected;
    this.selectedInvite;
}

 /**
* Loads images for the menu.
* @memberof multiplayerMenu
*/
multiplayerMenu.prototype.loadImg = function() {
    
    this.createJoin = new Image();
    this.Invite = new Image();
    this.GameList = new Image();
    this.createJoin.src = "assets/CreateJoin.png";
    this.Invite.src = "assets/invite.png";
    this.GameList.src = "assets/ActiveGame.png";
}

 /**
* Display the create/invite screen.
* @memberof multiplayerMenu
*/
multiplayerMenu.prototype.drawCreateJoin = function () {
    ctx.drawImage(this.createJoin, 0, 0);
}

 /**
* Display the invite to games screen and draw friends to the screen.
* @memberof multiplayerMenu
*/
multiplayerMenu.prototype.drawInviteList = function(){
    ctx.drawImage(this.Invite, 0, 0);
    ctx.textAlign="left"; 
    ctx.font = 'bold 10pt Calibri';
    for(var i=0; i<usersFriends.length; i++)
    {
       if (this.selected == i){
           ctx.fillStyle = "#CC0000"; 
       }else{
           ctx.fillStyle = "#000000";
       }
        ctx.fillText(usersFriends[i].displayName, 60, 30+(i*20));
    }
}

 /**
* Display games that you have been invited to.
* @memberof multiplayerMenu
*/
multiplayerMenu.prototype.drawGameList = function(){
    ctx.drawImage(this.GameList, 0, 0);
    ctx.textAlign="left"; 
    ctx.font = 'bold 10pt Calibri';
    for(var i=0; i<invitedToList.length; i++){
        if (this.selectedInvite == i){
           ctx.fillStyle = "#CC0000"; 
       }else{
           ctx.fillStyle = "#000000";
       }
        ctx.fillText(invitedToList[i].participants[0].player.displayName, 60, 30+(i*20));
    }
}

 /**
* Menu controls for create/invite.
* @memberof multiplayerMenu
*/
multiplayerMenu.prototype.clicked = function(x,y) {
    if (x < 320*ratioWidht){
        console.log("gamestate is now invite");
        gamestate = "invite";
    }
    else{
        activeGames();
        gamestate = "gameList";
    }
}

 /**
* Menu controls for inviting friends.
* @memberof multiplayerMenu
*/
multiplayerMenu.prototype.clickedInvite = function(x,y) {
    if (x < 320*ratioWidht){
        var pos = Math.round((y-(30*ratioHeight)) / (20*ratioHeight));
        this.selected = pos; 
    }
    if (x > 320*ratioWidht){
        inviteID = usersFriends[this.selected].id;
        createGame();
    }
}
 /**
* Contorls for joining game.
* @memberof multiplayerMenu
*/
multiplayerMenu.prototype.clickedGameList = function(x,y) {
    if (x < 320*ratioWidht){
        var pos = Math.round((y-(30*ratioHeight)) / (20*ratioHeight));
        this.selectedInvite = pos; 
    }
    if (x > 320*ratioWidht){
        if (y < 240*ratioHeight){
            joinGame(invitedToList[this.selectedInvite].matchId);
        }
        else{
            cancelGame(invitedToList[this.selectedInvite].matchId);
        }
    }
}

