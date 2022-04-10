//randomization of computer selection
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
//increment count for player
function playerScore() {
  let playerCount = document.getElementById("playerCount");
  return playerCount.textContent++;
}
//increment count for computer
function computerScore() {
  let computerCount = document.getElementById("computerCount");
  return computerCount.textContent++;
}
//increment count for tie
function tieScore() {
  let tieCount = document.getElementById("tieCount");
  return tieCount.textContent++;
}
//increment round
function incrementRound() {
  let round = document.getElementById("roundCount");
  return round.textContent++;
}
//increment count
function incrementCount() {
  count++;
}
//Display if the Player won or lost
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
  //Rock Logic
  if (playerSelection == "rock" && computerSelection == "rock") {
    tieScore();
    result.innerText = "Tie\r\nBoth Chose Fireball";
    return;
  }

  if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore();
    incrementRound();
    computer++;
    result.innerText = "You Lose!\r\nShield beats Fireball";
    return;
  }

  if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore();
    incrementRound();
    player++;
    result.innerText = "You Win!\r\nSword loses to Fireball";
    return;
  }
  //Paper Logic
  if (playerSelection == "paper" && computerSelection == "paper") {
    tieScore();
    result.innerText = "Tie\r\nBoth Chose Shield";
    return;
  }

  if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore();
    incrementRound();
    computer++;
    result.innerText = "You Lose!\r\nSword beats Shield";
    return;
  }

  if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore();
    incrementRound();
    player++;
    result.innerText = "You Win!\r\nFireball loses to Shield";
    return;
  }
  //Scissor Logic
  if (playerSelection == "scissors" && computerSelection == "scissors") {
    tieScore();
    result.innerText = "Tie\r\nBoth Chose Sword";
    return;
  }

  if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore();
    incrementRound();
    computer++;
    result.innerText = "You Lose!\r\nFireball beats Sword";
    return;
  }

  if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore();
    incrementRound();
    player++;
    result.innerText = "You Win!\r\nShield loses to Sword";
    return;
  }
}
//disable all buttons from being selected
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

//setup global variables
const rounds = 5;
let player = 0;
let computer = 0;

//Check when a button is clicked
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
    //call classes each time a button is clicked
    playRound(playerSelection, computerSelection);
    isEndGame(player, computer);
  });
});
