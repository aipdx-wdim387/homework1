var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

function compare(choice1, choice2) {

    if (choice1 === "rock") {
        if (choice2 === "Scissors") {
            return("rock wins!");
        } else {
            return "paper wins!";
        } 
    };
    
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            return("paper wins!");
        } else {
            return "scissors wins!";
        } 
    };
    
    if (choice1 === "scissors") {
        if (choice2 === "paper") {
            return("scissors wins!");
        } else {
            return "rock wins!";
        }  
    };

};

compare(userChoice, computerChoice); 


  /* Thought this way would be clearer as it seemed in my head but was a mess compared to the way above 

    if (choice1 === choice2) {
        return 'The result is a tie!';
    } else if (choice1 === "rock" && choice2 === "scissors") { 
        return "rock wins!";
    } else if (choice1 === "rock" && choice2 === "paper") {
        return "paper wins!";
    } else if (choice1 === "paper" && choice2 === "rock") {
        return "paper wins!";
    } else if (choice1 === "paper" && choice2 === "scissors") {
        return "scissors wins!";
    } else if (choice1 === "scissors" && choice2 === "rock") {
        return "rock wins!"; 
    } else if (choice1 === "scissors" && choice2 === "paper") {
        return "scissors wins!";
    }
*/