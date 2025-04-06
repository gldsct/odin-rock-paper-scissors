function getComputerChoice () {
    let randomNumber = Math.floor((Math.random() * 10));
    if (randomNumber < 3) {
        return "Rock";
    }
    else if (randomNumber < 6) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getHumanChoice () {
    let humanChoice = prompt("Rock, paper or scissors?");
    if (humanChoice.toLowerCase() == "rock") {
        return "Rock";
    }
    else if (humanChoice.toLowerCase() == "paper") {
        return "Paper";
    }
    else if (humanChoice.toLowerCase() == "scissors") {
        return "Scissors";
    }
    else {
        return "Invalid Choice";
    }
}

function playRound (humanChoice, computerChoice) {
    console.log("Human Choice: " + humanChoice);
    console.log("Computer Choice: " + computerChoice);
    if (humanChoice === "Rock") {
        if (computerChoice === "Paper") {
            console.log("You lose. Paper beats rock.");
            computerScore++;
        }
        else if (computerChoice === "Scissors") {
            console.log("You win. Rock beats scissors.");
            humanScore++;
        }
        else {
            console.log("It was a tie.");
        }
    }
    else if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            console.log("You win. Paper beats rock.");
            humanScore++;
        }
        else if (computerChoice === "Scissors") {
            console.log("You lose. Scissors beat paper.");
            computerScore++;
        }
        else {
            console.log("It was a tie.");
        }
    }
    else if (humanChoice === "Scissors") {
        if (computerChoice === "Rock") {
            console.log("You lose. Rock beats scissors.");
            computerScore++;
        }
        else if (computerChoice === "Paper") {
            console.log("You win. Scissors beats paper.");
            humanScore++;
        }
        else {
            console.log("It was a tie.");
        }
    }
    else {
        console.log("You picked an invalid choice. Game cannot continue!");
    }
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

let humanScore = 0;
let computerScore = 0;

playRound(getHumanChoice(), getComputerChoice());
