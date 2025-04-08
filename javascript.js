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
            return "Computer";
        }
        else if (computerChoice === "Scissors") {
            console.log("You win. Rock beats scissors.");
            return "Human";
        }
        else {
            console.log("It was a tie.");
            return "Draw";
        }
    }
    else if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            console.log("You win. Paper beats rock.");
            return "Human";
        }
        else if (computerChoice === "Scissors") {
            console.log("You lose. Scissors beat paper.");
            return "Computer";
        }
        else {
            console.log("It was a tie.");
            return "Draw";
        }
    }
    else if (humanChoice === "Scissors") {
        if (computerChoice === "Rock") {
            console.log("You lose. Rock beats scissors.");
            return "Computer";
        }
        else if (computerChoice === "Paper") {
            console.log("You win. Scissors beats paper.");
            return "Human";
        }
        else {
            console.log("It was a tie.");
            return "Draw";
        }
    }
}

function playGame () {
    for (let i = 1; i <= 5; i++) {
        let roundWinner = playRound(getHumanChoice(), getComputerChoice());
        if (roundWinner === "Human") {
            humanScore++;
        }
        else if (roundWinner === "Computer") {
            computerScore++;
        }
    }

    if (humanScore === computerScore) {
        console.log("Draw! Want to try again and see if you can win this time?");
    }
    else if (humanScore > computerScore) {
        console.log(`You won the game. Congratulations!\nFinal Score:\nHuman: ${humanScore} / Computer: ${computerScore}`);
    }
    else {
        console.log(`Unfortunately, you lost. Better luck next time.\nFinal Score:\nHuman: ${humanScore} / Computer: ${computerScore}`);
    }

}

let humanScore = 0;
let computerScore = 0;

playGame();