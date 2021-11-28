class DomManipulator {
  static cardArea = document.querySelector('#card-area');
  static hederBoxInfo = document.querySelector('#info-box');
  static letterChoizeArea = document.querySelector('#letterChoizeArea');
  static buttons = document.querySelectorAll('.btn');
  static gamePoint = document.querySelector('#gameHurtCount');
 }


 let wordsList = ["jerome", "neena", "darion", "lou", "greg", "jordan",
 "jasmine", "stephen", "jacob", "adam", "rui", "luis"];

 let chosenWord = "";
 let lettersInChosenWord = [];
 let numBlanks = 0;
 let blanksAndSuccesses = [];
 let wrongGuesses = [];

 var winCounter = 0;
 var lossCounter = 0;
 var numGuesses = 9;


 function startGame(){
  numGuesses = 9;
  chosenWord  = wordsList[Math.floor(Math.random() * wordsList.length)]

  lettersInChosenWord = chosenWord.split("");
  numBlanks = lettersInChosenWord.length

  console.log(numGuesses);
  console.log(numBlanks);
  console.log(chosenWord);

  for (var i = 0; i < numBlanks; i++) { blanksAndSuccesses.push('_') }
  console.log(blanksAndSuccesses);

  DomManipulator.gamePoint.innerHTML = numGuesses
  
  for (var i = 0; i < numBlanks; i++) {
    
    DomManipulator.cardArea.innerHTML = blanksAndSuccesses.map((e => ` <div class="card col-1" id="1"><h4>${e}</h4></div>`)).join(' ');
  }

}

function checkLetters(letter) {
  let letterInWord = false;

  for (var i = 0; i < numBlanks; i++) {
    if (chosenWord[i] == letter) {
      letterInWord = true;
    }
  }
  
  if (letterInWord) {
    
    for (var b = 0; b < numBlanks; b++)
    if (chosenWord[b] == letter) {
      blanksAndSuccesses[b] = letter;
    }
  }

  else{
    wrongGuesses.push(letter);
    numGuesses--;
  }

}

function roundComplete(){
  console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

  DomManipulator.gamePoint.innerHTML = numGuesses;
  DomManipulator.cardArea.innerHTML = blanksAndSuccesses.map((e => ` <div class="card col-1" id="1"><h4>${e}</h4></div>`)).join(' ');
  if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
    winCounter++
    alert('yes you do');

    startGame();
  }else if (numGuesses === 0){
    lossCounter++;
    alert('lose you do');
    startGame();
  }
}

startGame();


// Then initiate the function for capturing key clicks.
document.onkeyup = function(event) {
  // Converts all key clicks to lowercase letters.
  var letterGuessed = String.fromCharCode(event.which).toLowerCase();
  // Runs the code to check for correctness.
  checkLetters(letterGuessed);
  // Runs the code after each round is done.
  roundComplete();
};

 // function getRandomInt(value) {
 //   return Math.floor(Math.random() * value);
 // }

 //clickButton = id =>console.log(id);

//  const hiddeCurrentValue =[];
// //  const zz =   reply_click = clicked_id => {
// //   // var n = ['a', 'b', 'c', 'd', 'e', 'f']
// //   // for (let i = 0; i < 9; i++) {
// //   //   if (clicked_id == data) {
// //   //     console.log('yes');
// //   //   }
// //   // }
  
// // }


// function getValueFromJson(data){
//   const getRandomInt = value => Math.floor(Math.random() * value)
//   const getRandom = getRandomInt(data.length)
//   const choisenWords = data[getRandom].letter;
//   const chLength = data[getRandom].letter.split('').length
//   var choisenLetter = data[getRandom].letter.split('');
  
//   clickButton = (id) =>{
//     for (let i = 0; i < chLength ; i++) {
//       if (id === choisenLetter[i]) {

//         console.log('yes');

//       }
//     }
//     }
//   for (let i = 0; i < chLength; i++) {
//     hiddeCurrentValue.push("~");
//   }
  
//   const choisenAciqlama = data[getRandom].aciqlama;
//   DomManipulator.hederBoxInfo.innerHTML = choisenAciqlama;
//   DomManipulator.cardArea.innerHTML = hiddeCurrentValue.map((element => `<div class="card col-1"><h4>${element}</h4></div>`)).join('')
// }






//  class MainGamingProses extends DomManipulator {
 
//    constructor(data){
//      super();
//      this.data = data;
//      }

     

//  }


// const main = new MainGamingProses();






 
 
//  let dd = document.querySelectorAll('.btn');
//  for (let i = 0; i < dd.length; i++) {
   
//    //mm.push(dd[i].id);
   
//  }
 
 // function main(data) {
 
 //   function getRandomInt(value) {
 //     return Math.floor(Math.random() * value);
 //   }
 
 
 //   let getRandom = getRandomInt(data.length);
 //   let choisenLetter = data[getRandom].letter.split('');
 //   let choisenAciqlama = data[getRandom].aciqlama;
 //   DomManipulator.hederBoxInfo.innerHTML = choisenAciqlama;
 //   DomManipulator.cardArea.innerHTML = choisenLetter.map((element => `<div class="card col-1"><h4>${element}</h4></div>`)).join('')
 // }
 
 
//  let b = []; 
 
//  let a = fetch('./data/letters.json')
//  .then(res => res.json())
//  .then(data => {
   
//    getValueFromJson(data);
   
//  })

 
 
 
 // function Gaming(data){
 
 //   var a = data.json();
 //   console.log(a);
 
 
 // }
 
 // console.log(getJsonData);
 
 // fetch('./data/letters.json')
 // .then(response => response.json())
 // .then(data => {
 //   let getRandom = getRandomInt(data.length);
 //   let choisenLetter = data[getRandom].letter.split('');
 //   let choisenAciqlama = data[getRandom].aciqlama;
 //   a.innerHTML = choisenAciqlama;
 //   dom.innerHTML = choisenLetter.map((element => `<div class="card col-1"><h4>${element}</h4></div>`)).join('')
 // })
 // .catch(err => alert(err))