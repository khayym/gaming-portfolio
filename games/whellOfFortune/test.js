let wordsList = ["jerome", "neena", "darion", "lou", "greg", "jordan",
  "jasmine", "stephen", "jacob", "adam", "rui", "luis"];

  class DomElelements {
    static idGame = document.querySelector('#game')
  }

let randomWordlist = wordsList[Math.floor(Math.random() * wordsList.length)]
let choisenWord = randomWordlist.split('')
let mySetvalu
var blanksAndSuccesses = [];
var wrongGuesses = [];
// let element = document.createElement('P')
// let createdElementDiv = DomElelements.idGame.appendChild(element);



function startGame(){
  
  
  countWrittenDiv = choisenWord.length;
  console.log( choisenWord);
  
       // CRITICAL LINE - Here we *reset* the guess and success array at each round.
    blanksAndSuccesses = [];
    // CRITICAL LINE - Here we *reset* the wrong guesses from the previous round.
    wrongGuesses = [];

  for(var i = 0; i < countWrittenDiv; i++){ 
    var divCreate = document.createElement("div");
    divCreate.className = 'divforLetter';
    DomElelements.idGame.appendChild(divCreate);
    blanksAndSuccesses.push("_");
    console.log(blanksAndSuccesses);
    document.querySelector(".divforLetter").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}
  
  
}

 startGame();
