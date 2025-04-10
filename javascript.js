function getComputerChoice () {
    let randomNumber = Math.floor((Math.random() * 3));
    switch (randomNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function getHumanChoice (humanChoice) {
    if (humanChoice == "rock") {
        return "Rock";
    }
    else if (humanChoice == "paper") {
        return "Paper";
    }
    else if (humanChoice == "scissors") {
        return "Scissors";
    }
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Draw";
    }

    if (humanChoice === "Rock" && computerChoice === "Scissors" || humanChoice === "Paper" && computerChoice === "Rock" || humanChoice === "Scissors" && computerChoice === "Paper"){
        return "Human";
    }

    if (computerChoice === "Rock" && humanChoice === "Scissors" || computerChoice === "Paper" && humanChoice === "Rock" || computerChoice === "Scissors" && humanChoice === "Paper"){
        return "Computer";
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