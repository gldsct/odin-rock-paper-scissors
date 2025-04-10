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
const gameChoices = document.querySelectorAll("button");
const gameResults = document.querySelector(".game-results");
const gameHistory = document.querySelector("#game-history");
const gameWinner = document.querySelector("#game-winner");

const newGame = document.createElement("button");
newGame.id = "new-game";
newGame.textContent = "Start New Game?";
newGame.style.cssText = "align-self: center;";

gameChoices.forEach((button) => {
    button.addEventListener("click", (event) => {
        gameHistory.style.cssText = "border: 1px solid #ADACB5; border-radius: 8px;";
        if (humanScore < 5 && computerScore < 5) {
            let humanChoice = getHumanChoice(button.id);
            let computerChoice = getComputerChoice();
            let roundWinner = playRound(humanChoice, computerChoice);
            if (roundWinner === "Human") {
                humanScore++;
                gameHistory.textContent += `${humanChoice} beats ${computerChoice}. You won this round.\n`;
            }
            else if (roundWinner === "Computer") {
                computerScore++;
                gameHistory.textContent += `${humanChoice} beats ${computerChoice}. You lost this round.\n`;
            }
            else {
                gameHistory.textContent += `${humanChoice} ties ${computerChoice}. It was a draw.\n`;
            }

            if (humanScore === 5 || computerScore === 5) {
                if (humanScore === 5) {
                    gameWinner.textContent += `\nFinal Score\nHuman: ${humanScore} / Computer: ${computerScore}\nYOU BEAT THE COMPUTER!`;
                }
                else {
                    gameWinner.textContent += `\nFinal Score\nHuman: ${humanScore} / Computer: ${computerScore}\nThe computer bested you.`;
                }
                endGame();
            }
        }
    });
});

newGame.addEventListener("click", (event) => {
    event.stopPropagation();
    humanScore = 0;
    computerScore = 0;
    gameHistory.textContent = "";
    gameWinner.textContent = "";
    gameHistory.style.cssText = "border: 0";
    body.removeChild(newGame);
});