var userChoice = game;
var game = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();
console.log(computerChoice);

if (computerChoice >= 0 && computerChoice <= 0.33) {
    computerChoice = "rock";
} else if (computerChoice >= 0.34 && computerChoice <= 0.66) {
    computerChoice = "paper";
} else {
    coputerChoice = "scissors";
}