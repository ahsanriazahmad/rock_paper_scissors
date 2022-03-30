function computerPlay() {
  //randomly return rock paper scissors
  const gestures = ["rock", "paper", "scissors"];
  var randomGestures = gestures[Math.floor(Math.random() * gestures.length)];
  //console.log(randomGestures);
  return randomGestures;
}

/*function playerSelection(){

}

function computerSelection(){
    
}*/
//incerment count for player
function playerScore() {
  let playerCount = document.getElementById("playerCount");
  return playerCount.textContent++;
}

function computerScore() {
  let computerCount = document.getElementById("computerCount");
  return computerCount.textContent++;
}

function tieScore() {
  let tieCount = document.getElementById("tieCount");
  return tieCount.textContent++;
}

function incermentRound() {
  let round = document.getElementById("roundCount");
  return round.textContent++;
}

function incermentCount() {
  count++;
}

function isEndGame(player, computer) {
  let result = document.getElementById("results-container");
  if (player == 5) {
    result.textContent = "Player Won! ";
    disableButtons();
  } else if (computer == 5) {
    result.textContent = "Player Lost!";
    disableButtons();
  } else {
    return;
  }
}

function playRound(playerSelection, computerSelection) {
  let result = document.getElementById("results-container");
  // return a string that declares the winner of the round
  /*if (playerSelection || computerSelection === null)
    return console.log("No Game");*/

  if (playerSelection == "rock" && computerSelection == "rock") {
    tieScore();
    result.textContent = "Tie Both Chose Fireball";
    return;
  }

  if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore();
    incermentRound();
    computer++;
    result.textContent = "You Lose! Shield beats Fireball";
    return;
  }

  if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore();
    incermentRound();
    player++;
    result.textContent = "You Win! Sword loses to Fireball";
    return;
  }

  if (playerSelection == "paper" && computerSelection == "paper") {
    tieScore();
    result.textContent = "Tie Both Chose Shield";
    return;
  }

  if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore();
    incermentRound();
    computer++;
    result.textContent = "You Lose! Sword beats Shield";
    return;
  }

  if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore();
    incermentRound();
    player++;
    result.textContent = "You Win! Fireball loses to Shield";
    return;
  }

  if (playerSelection == "scissors" && computerSelection == "scissors") {
    tieScore();
    result.textContent = "Tie Both Chose Sword";
    return;
  }

  if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore();
    incermentRound();
    computer++;
    result.textContent = "You Lose! Fireball beats Sword";
    return;
  }

  if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore();
    incermentRound();
    player++;
    result.textContent = "You Win! Shield loses to Sword";
    return;
  }
}

function disableButtons() {
  buttons.forEach((elem) => {
    elem.disabled = true;
  });
}
////////////////////////////// Gather input from Prompt//////////////////////////////////
/*const playerSelection = "rock";
const computerSelection = computerPlay();
playRound(playerSelection, computerSelection);*/
//Get user input from Window Prompt
// function playerPlay() {
//   return (result = window.prompt(
//     "Please enter either: rock, paper, or scissors"
//   ));
// }

// function game() {
//   for (let i = 0; i < rounds; i++) {
//     // runs the 5 rounds of the r,p,s
//     //const playerSelection = "rock";
//     const playerSelection = playerPlay();
//     const computerSelection = computerPlay();
//     playRound(playerSelection, computerSelection);
//   }
// }
// function game() {
//   // runs the r,p,s
//   //const playerSelection = "rock";
//   const playerSelection = playerPlay();
//   const computerSelection = computerPlay();
//   playRound(playerSelection, computerSelection);
// }
////////////////////////////// Above is gather input from Prompt//////////////////////////////////

////////////////////////////// Below is gather input After selecting a button//////////////////////////////////
// const buttons = document.querySelectorAll("button");

// function playerPlay() {
//   // we use the .forEach method to iterate through each button
//   buttons.forEach((button) => {
//     // and for each one we add a 'click' listener
//     button.addEventListener("click", () => {
//       //console.log(button.id);
//       let playerSelection = button.id;
//       //console.log(playerSelection);
//       return playerSelection;
//     });
//   });
// }

// function game() {
//   // runs the r,p,s
//   let playerSelection = playerPlay();
//   let computerSelection = computerPlay();
//   playRound(playerSelection, computerSelection);
// }

// playerPlay();
// game();
const rounds = 5;
let player = 0;
let computer = 0;

const buttons = document.querySelectorAll("button");
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    //console.log(button.id);
    let playerSelection = button.id;
    let computerSelection = computerPlay();
    console.log("Player" + " " + playerSelection + " " + player);
    console.log("CPU" + " " + computerSelection + " " + computer);
    playRound(playerSelection, computerSelection);
    isEndGame(player, computer);
  });
});
