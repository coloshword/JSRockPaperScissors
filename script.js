game();

function game() {
    //main game loop
    let pScore = 0;
    let cScore = 0;
    var playBtn = document.querySelector(".intro button");
    playBtn.addEventListener("click", startGame);
    // Now you can click 
    var choices = ["rock", "paper", "scissors"];
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
    switch(pChoice) {
        case "rock" :
            pChoice = 1;
            break;
        case "paper":
            pChoice = 2;
            break;
        case "scissors":
            pChoice = 3;
    }
    let cChoice = getComputerChoice();
    compareChoices(pChoice, cChoice);
}


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choice;
}

 