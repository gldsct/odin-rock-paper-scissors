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