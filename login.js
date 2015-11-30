function handleAuthResult(auth){
    console.log(auth);
    if (auth && auth.error == null) {
        console.log("Logged in");
        load();
    } else {
        console.log("Login failed");
        //Call popup window for login
        gapi.auth.signIn();
  }
}

function load(){
    var a;
    console.log("Running load function");
    gapi.client.load('games','v1',function(response) {
        // Ready to make calls!
        if(response == null){
            //loadLeaderboard();
            //testScore();
            a = new leaderboardController('CgkIw5Xv3M4GEAIQAQ');
            var b = new leaderboardController('CgkIw5Xv3M4GEAIQAw');
        }
      });
    console.log(a.data.items[0].formattedScore);
}
/*
  var json={};
    json.leaderboardId='CgkIw5Xv3M4GEAIQAQ';
    json.collection='PUBLIC';
    json.timeSpan='ALL_TIME';
    var request = gapi.client.games.scores.listWindow(json);
    request.execute(function(response) {
        console.log('Leaderboard data', response);
    });

*/
function loadLeaderboard(){
    var json={};
    json.leaderboardId='CgkIw5Xv3M4GEAIQAQ';
    json.collection='PUBLIC';
    json.timeSpan='ALL_TIME';
    var request = gapi.client.games.scores.listWindow(json);
    request.execute(function(response) {
        console.log('Leaderboard data', response);
    });
}

function testScore(){
    console.log("new score added");
     var request = gapi.client.games.scores.submit(
        {leaderboardId: "CgkIw5Xv3M4GEAIQAQ",
         timeSpan : "ALL_TIME",
        score: 12}
    );
    request.execute(function(response) {
      // Check to see if this is a new high score
    });
}