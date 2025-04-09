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

function getHumanChoice (humanChoice) {
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
    const gameResults = document.createElement("div");
    gameChoices.appendChild(gameResults);
    gameChoices.addEventListener("click", (event) => {
        if (humanScore < 5 && computerScore < 5) {
            let gameResultsText = document.createElement("p");
            let roundWinner = playRound(getHumanChoice(event.target.id), getComputerChoice());
            if (roundWinner === "Human") {
                humanScore++;
                gameResultsText.textContent += "You won this round. ";
            }
            else if (roundWinner === "Computer") {
                computerScore++;
                gameResultsText.textContent += "You lost this round. ";
            }
            else {
                gameResultsText.textContent += "It was a tie. ";
            }
            gameResults.appendChild(gameResultsText);

            if (humanScore === 5 || computerScore === 5) {
                let gameWinner = document.createElement("div");
                if (humanScore === 5) {
                    gameWinner.textContent += "You beat the computer! ";
                }
                else {
                    gameWinner.textContent += "The computer bested you. ";
                }
                gameChoices.appendChild(gameWinner);
            }
        }
    });
}

let humanScore = 0;
let computerScore = 0;
const gameChoices = document.querySelector(".game-choices");

playGame();