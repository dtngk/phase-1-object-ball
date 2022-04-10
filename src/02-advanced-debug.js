console.log('Advanced debugging example running.')
// debugger

// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
  
    debugger

    let teamObj = game[gameKey]
    
    for (let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      debugger
      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
      let data = teamObj.players;
      for (let key in data) {
        
      }
    }
  }
}

const game = gameObject();
const teams = [game.home.teamName, game.away.teamName];
const gamePlayers = [game.home.players, game.away.players];

/*
- Build a function, `numPointsScored` that takes in an argument of a player's
  name and returns the number of points scored for that player.
  - Think about where in the object you will find a player's `points`. How can
    you iterate down into that level? Think about the return value of your
    function.
*/
function numPointsScored(playerName){

  for (const name in teams){
    for (const score in gamePlayers[name]){

      if (playerName === score){
        return (gamePlayers[name][score].points);
      }
    }
  }

  return undefined;
}

/*
- Build a function, `shoeSize`, that takes in an argument of a player's name and
  returns the shoe size for that player.
  - Think about how you will find the shoe size of the correct player. How can
    you check and see if a player's name matches the name that has been passed
    into the function as an argument?
*/
function shoeSize(playerName){

  for (const name in teams){
    for (const score in gamePlayers[name]){

      if (playerName === score){
        return (gamePlayers[name][score].shoe);
      }
    }
  }

  return undefined;
}

/*
- Build a function, `teamColors`, that takes in an argument of the team name and
  returns an array of that teams colors.
*/
function teamColors(tName){
  return ((tName == teams[0]) ? (game.home.colors) : (game.away.colors));
}

/*
- Build a function, `teamNames`, that operates on the game object to return an
  array of the team names.
*/
function teamNames(){
  return ([teams[0], teams[1]]);
}

/*
- Build a function, `playerNumbers`, that takes in an argument of a team name
  and returns an array of the jersey number's for that team.
*/
function playerNumbers(tName){
    
  let names = [];
  
  const team = ((tName === teams[0]) ? gamePlayers[0] : gamePlayers[1]);
  
  for (const player in team){
      names.push(team[player].number);
  }

  return names;   
}

/*
- Build a function, `playerStats`, that takes in an argument of a player's name
  and returns a object of that player's stats. Check out the following example
  of the expected return value of the `playerStats` function:

  ```js
  playerStats("Alan Anderson")
  // returns:
  {
    number: 0,
    shoe: 16,
    points: 22,
    rebounds: 12,
    assists: 12,
    steals: 3,
    blocks: 1,
    slamDunks: 1
  }
*/
function playerStats(playerName){
    
  for (const name in teams){
    for (const score in gamePlayers[name]){

      if (playerName === score){
        return (gamePlayers[name][score]);
      }
    }
  }

  return undefined;
}

/*
  Build a function, `bigShoeRebounds`, that will return the number of rebounds
  associated with the player that has the largest shoe size. Break this one
  down into steps:
  - First, find the player with the largest shoe size
  - Then, return that player's number of rebounds
  - Remember to think about return values here. Use `debugger` to drop into
    your function and understand what it is returning and why.
*/
function bigShoeRebounds(){

  let shoe_size= 0
  let bounds = 0;
  
  for (const name in teams){
    for (const score in gamePlayers[name]){
        if (gamePlayers[name][score].shoe > shoe_size){
            shoe_size = gamePlayers[name][score].shoe;
            bounds = gamePlayers[name][score].rebound;
        }
      }
    }

  return bounds;
}

/*
  Which player has the most points? Call the function `mostPointsScored`.
*/
function mostPointsScored(){

  let point = 0;
  let person = "";
        
  for (const name in teams){
    for (const score in gamePlayers[name]){
      if (gamePlayers[name][score].points > point){
          point = gamePlayers[name][score].points
          person = score;
      }
    }
  }

  return person;
}

/*
  Which team has the most points? Call the function `winningTeam`.
*/
function winningTeam(){
  let homePoints = 0;
  let awayPoints = 0;
      
  for (const num in teams[0]){
      for (const score in gamePlayers[num]){
          homePoints += gamePlayers[num][score].points
      }
  }

  for (const num in teams[1]){
      for (const score in gamePlayers[num]){
          awayPoints += gamePlayers[num][score].points
      }
  }

  return ((homePoints > awayPoints) ? (teams[0]) : (teams[1]));
}

/*
  Which player has the longest name? Call the function `playerWithLongestName`.
*/
function playerWithLongestName(){

  let person = "";

  for (const name in teams){
    for (const score in gamePlayers[name]){
      if (score.length > person.length){
          person = score;
      }
    }
  }

  return person;
}

/*
  Write a function that returns true if the player with the longest name had
  the most steals. Call the function `doesLongNameStealATon`.
*/
function doesLongNameStealATon(){

    let num = 0;
    let player = "";
    const person = playerWithLongestName();
      
    for (const name in teams){
      for (const score in gamePlayers[name]){
        if (gamePlayers[name][score].steals > num){
              num = gamePlayers[name][score].steals
              player = score;
        }
      }
  }
  
  return (person === player)
}

// then, call the function so it runs!
//goodPractices();
