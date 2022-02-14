function computerPlay() {
  //randomly return rock paper scissors
  const gestures = ["rock", "paper", "scissors"];
  var randomGestures = gestures[Math.floor(Math.random() * gestures.length)];
  console.log(randomGestures);
  return randomGestures;
}

/*function playerSelection(){

}

function computerSelection(){
    
}*/

function playRound(playerSelection, computerSelection) {
  // return a string that declares the winner of the round
  /*if (playerSelection || computerSelection === null)
    return console.log("No Game");*/
  if (playerSelection == "rock" && computerSelection == "rock")
    return console.log("Tie");
  if (playerSelection == "rock" && computerSelection == "paper")
    return console.log("You Lose! Paper beats Rock");
  if (playerSelection == "rock" && computerSelection == "scissors")
    return console.log("You Win! Scissors loses to Rock");

  if (playerSelection == "paper" && computerSelection == "paper")
    return console.log("Tie");
  if (playerSelection == "paper" && computerSelection == "scissors")
    return console.log("You Lose! Scissors beats Paper");
  if (playerSelection == "paper" && computerSelection == "rock")
    return console.log("You Win! Rock loses to Paper");

  if (playerSelection == "scissors" && computerSelection == "scissors")
    return console.log("Tie");
  if (playerSelection == "rock" && computerSelection == "scissors")
    return console.log("You Lose! Rock beats Scissors");
  if (playerSelection == "paper" && computerSelection == "scissors")
    return console.log("You Win! Paper loses to Scissors");
}

/*const playerSelection = "rock";
const computerSelection = computerPlay();
playRound(playerSelection, computerSelection);*/
function playerPlay() {
  return (result = window.prompt(
    "Please enter either: rock, paper, or scissors"
  ));
}

const rounds = 5;

function game() {
  for (let i = 0; i < rounds; i++) {
    // your code here!
    //const playerSelection = "rock";
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }
}
