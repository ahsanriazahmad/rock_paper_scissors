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

function resultDisplay() {
  let result = document.getElementById("result-container");
}

function playRound(playerSelection, computerSelection) {
  let result = document.getElementById("results-container");
  // return a string that declares the winner of the round
  /*if (playerSelection || computerSelection === null)
    return console.log("No Game");*/

  if (playerSelection == "rock" && computerSelection == "rock") {
    tieScore();
    result.textContent = "Tie";
    return;
  }

  if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore();
    result.textContent = "You Lose! Paper beats Rock";
    return;
  }

  if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore();
    result.textContent = "You Win! Scissors loses to Rock";
    return;
  }

  if (playerSelection == "paper" && computerSelection == "paper") {
    tieScore();
    result.textContent = "Tie";
    return;
  }

  if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore();
    result.textContent = "You Lose! Scissors beats Paper";
    return;
  }

  if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore();
    result.textContent = "You Win! Rock loses to Paper";
    return;
  }

  if (playerSelection == "scissors" && computerSelection == "scissors") {
    tieScore();
    result.textContent = "Tie";
    return;
  }

  if (playerSelection == "rock" && computerSelection == "scissors") {
    computerScore();
    result.textContent = "You Lose! Rock beats Scissors";
    return;
  }

  if (playerSelection == "paper" && computerSelection == "scissors") {
    playerScore();
    result.textContent = "You Win! Paper loses to Scissors";
    return;
  }
}
const rounds = 5;
let count = 1;

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
const buttons = document.querySelectorAll("button");
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    //console.log(button.id);
    let playerSelection = button.id;
    let computerSelection = computerPlay();
    console.log("Player" + " " + playerSelection);
    console.log("CPU" + " " + computerSelection);
    playRound(playerSelection, computerSelection);
  });
});
