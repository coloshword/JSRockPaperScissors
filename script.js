
function game() {
    //main game loop
    let pScore = 0;
    let cScore = 0;
    var playBtn = document.querySelector(".intro button");
    playBtn.addEventListener("click", startGame);
}

function startGame() {
    // you want to fade out the start screen and pull up the match div
    var introScreen = document.querySelector(".intro");
    var match = document.querySelector(".match");
    introScreen.classList.add("fadeOut");
    match.classList.add("fadeIn");
}

game();