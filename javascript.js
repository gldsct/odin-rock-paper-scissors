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