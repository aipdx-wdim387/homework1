var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}
function compare(choice1, choice2){
    if(choice1 == choice2){
        return "The result is a tie!";
    }
    
    if(choice1 == "rock"){
        if(choice2 == "scissors"){
            return "rock wins";
        }
        if(choice2 == "paper"){
            return "paper wins";
        }
    }
    
    if(choice1 == "paper"){
        if(choice2 == "rock"){
            return "paper wins"; 
        }
        if(choice2 == "scissors"){
            return "scissors wins";
        }
    }
    
    if(choice1 == "scissors"){
        if(choice2 == "rock"){
            return "rock wins"; 
        }
        if(choice2 == "paper"){
            return "scissors wins";
        }
    }
    
    if((choice1 !== "rock" || choice1 !=="paper" || choice1 !== "scissors") || (choice2 !== "rock" || choice2 !== "paper" || choice2 !== "scissors")){
        return "ERROR";
    }
}

