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

function endGame () {
    body.appendChild(newGame);
}

let humanScore = 0;
let computerScore = 0;

const body = document.querySelector("body");
const gameChoices = document.querySelector(".game-choices");
const gameResults = document.querySelector(".game-results");
const gameHistory = document.querySelector("#game-history");
const gameWinner = document.querySelector("#game-winner");

const newGame = document.createElement("button");
newGame.id = "new-game";
newGame.textContent = "Start New Game?";

gameChoices.addEventListener("click", (event) => {
    if (humanScore < 5 && computerScore < 5) {
        let roundWinner = playRound(getHumanChoice(event.target.id), getComputerChoice());
        if (roundWinner === "Human") {
            humanScore++;
            gameHistory.textContent += `You won this round.\n`;
        }
        else if (roundWinner === "Computer") {
            computerScore++;
            gameHistory.textContent += `You lost this round. \n`;
        }
        else {
            gameHistory.textContent += `It was a tie. \n`;
        }

        if (humanScore === 5 || computerScore === 5) {
            if (humanScore === 5) {
                gameWinner.textContent += `\nHuman: ${humanScore} / Computer: ${computerScore} \n\nYou beat the computer!`;
            }
            else {
                gameWinner.textContent += `\nHuman: ${humanScore} / Computer: ${computerScore} \n\nThe computer bested you.`;
            }
            endGame();
        }
    }
});

newGame.addEventListener("click", (event) => {
    event.stopPropagation();
    humanScore = 0;
    computerScore = 0;
    gameHistory.textContent = "";
    gameWinner.textContent = "";
    body.removeChild(newGame);
});