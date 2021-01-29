game();

function game() {
    //main game loop
    var pScore = 0;
    var cScore = 0;
    var playBtn = document.querySelector(".intro button");
    playBtn.addEventListener("click", startGame);
    // Now you can click 
    chooseOption();
}

function startGame() {
    // you want to fade out the start screen and pull up the match div
    var introScreen = document.querySelector(".intro");
    var match = document.querySelector(".match");
    introScreen.classList.add("fadeOut");
    match.classList.add("fadeIn");
}

function chooseOption() {
    var rock = document.querySelector(".rock");
    var paper = document.querySelector(".paper");
    var scissors = document.querySelector(".scissors");
    rock.addEventListener("click", optionChosen);
    paper.addEventListener("click", optionChosen);
    scissors.addEventListener("click", optionChosen);
}

function optionChosen() {
    let pChoice = this.textContent;
    // We are going to update the player image here
    let playerImage = document.querySelector(".player-hand");
    playerImage.src = "assets/" + pChoice + ".png";
    switch(pChoice) {
        case "rock" :
            pChoice = 0;
            break;
        case "paper":
            pChoice = 1;
            break;
        case "scissors":
            pChoice = 2;
    }
    let cChoice = getComputerChoice();
    let winner = compareChoices(pChoice, cChoice);
}

function compareChoices(playerChoice, ComputerChoice) {
    // row is computer, column is player
    var choices = ["rock", "paper", "scissors"];
    let results = [
        ["tie", "player", "computer"],
        ["computer", "tie", "player"],
        ["player", "computer", "tie"]
    ]
    let winner = results[ComputerChoice][playerChoice];
    let computerString = choices[ComputerChoice];
    // update computer image here
    let computerImage = document.querySelector(".computer-hand");
    computerImage.src = "assets/" + computerString + ".png";
    displayWinner(winner, computerString);
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choice;
}

function displayWinner(winner, computerString) {
    // get the 
    let ans = "";
    if(winner == "tie") {
        ans = "Tie";
    }
    else if(winner == "computer") {
        ans = "Computer Wins";
    }
    else if (winner == "player") {
        ans = "Player Wins";
    }
    let displayWinner = document.querySelector(".winner");
    displayWinner.textContent = ans;
}