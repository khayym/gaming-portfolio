
let gameControllerData = ['r','p','s'];
let userScore = 0;
let aiScore = 0;
let drawScore =0;
let roundScore = 0;

let userGameIMG = document.querySelector('#userGameIMG');
let aiGameIMG = document.querySelector('#aiGameIMG');
let userScoreboard = document.querySelector('.userScoreboard');
let aiScoreboard = document.querySelector('.aiScoreboard');
let drawScoreboard = document.querySelector('.drawScoreboard');
let wdlInfoBoard = document.querySelector('#w-d-l-InformationBoard');
let navbarRaund = document.querySelector('.navbar-res-round');
let aiPlaying;
let userOrder;
let userWinEpisodes;
let clickDOM = {
    clickOnScissors :  document.querySelector("#game-buttons-scissors").value,
    clickOnRock : document.querySelector("#game-buttons-rock").value,
    clickOnPaper : document.querySelector("#game-buttons-paper").value
}

// generate random number for AI
function aiRandomPlay (arr){
    let randomOrder = Math.floor(Math.random() * gameControllerData.length);
    return arr[randomOrder];
}

// function for game winner, draw, lose
function winner(){
    userScore++
    roundScore++
    userScoreboard.innerHTML = `${userScore}`;
    wdlInfoBoard.innerHTML = `WIN`;
    document.getElementById('w-d-l-InformationBoard').style.color="rgb(44, 255, 97)";
    navbarRaund.innerHTML = `ROUND ${roundScore}`;
}

function draw(){
    drawScore++
    roundScore++
    navbarRaund.innerHTML = `ROUND ${roundScore}`;
    drawScoreboard.innerHTML = `${drawScore}`;
    wdlInfoBoard.innerHTML = `DRAW`;
    document.getElementById('w-d-l-InformationBoard').style.color="rgba(17, 17, 17, 0.377)";
}

function lose(){
    aiScore++;    
    roundScore++
    navbarRaund.innerHTML = `ROUND ${roundScore}`;
    aiScoreboard.innerHTML = `${aiScore}`
    wdlInfoBoard.innerHTML = `LOSE`;
    document.getElementById('w-d-l-InformationBoard').style.color="rgb(252,72,72)";
}


// button palaying
function clickButton(hand){
    
    aiPlaying = aiRandomPlay(gameControllerData);
    userOrder = hand;

    
    userGameIMG.src = `/gaming-portfolio/img/games-are/r-p-s/${userOrder}.png`
    aiGameIMG.src = `/gaming-portfolio/img/games-are/r-p-s/${aiPlaying}.png`
    
    
     userWinEpisodes = {
        episod_1: userOrder === 'r' && aiPlaying === 's',
        episod_2: userOrder === 's' && aiPlaying === 'p',
        episod_3: userOrder === 'p' && aiPlaying === 'r',
        episod_4: userOrder === aiPlaying 
    };


    if (userWinEpisodes.episod_1 ){
     winner();
    }
    else if (userWinEpisodes.episod_2) {
      winner();
    }
    else if (userWinEpisodes.episod_3) {
     winner();
    }
    else if (userWinEpisodes.episod_4){
    draw()
    }
    else{
    lose()
    }

}


// game with keyboard
function startGame(e){
    aiPlaying = aiRandomPlay(gameControllerData);
    userOrder =e.key.toLowerCase();

    if (gameControllerData.indexOf(userOrder) === -1) {
        alert("Please choise R S P commands")
        return ;
    }
    
    userGameIMG.src = `/gaming-portfolio/img/games-are/r-p-s/${userOrder}.png`
    aiGameIMG.src = `/gaming-portfolio/img/games-are/r-p-s/${aiPlaying}.png`
    
    
    userWinEpisodes = {
        episod_1: userOrder === 'r' && aiPlaying === 's',
        episod_2: userOrder === 's' && aiPlaying === 'p',
        episod_3: userOrder === 'p' && aiPlaying === 'r',
        episod_4: userOrder === aiPlaying 
    };


    if (userWinEpisodes.episod_1 ){
        winner();
       }
       else if (userWinEpisodes.episod_2) {
         winner();
       }
       else if (userWinEpisodes.episod_3) {
        winner();
       }
       else if (userWinEpisodes.episod_4){
       draw()
       }
       else{
       lose()
       }
   
}

function refreshPage(){
    window.location.reload();
} 

window.onkeypress = startGame;