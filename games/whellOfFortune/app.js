let choisenWord = "";
let splitChoisenWord = [];
let lengthOfChoisenWord = 0;
let mainVariable = [];
let wrongChoisenWord = [];
let choisenTitle = [];
let randomize = 0;

let gameChanse = 10;

class DomManipulator {
 static cardArea = document.querySelector('#card-area');
 static hederBoxInfo = document.querySelector('#info-box');
 static letterChoiseArea = document.querySelector('#letterChoiseArea');
 static buttons = document.querySelectorAll('.btn');
 static gameChanse = document.querySelector('#gameChanse');
 static wheel = document.querySelector('.wheel');
 static startButton = document.querySelector('.button');
 static display = document.querySelector('.display');

}



class Gaming extends DomManipulator{

 constructor(jsonData,jsonTitle) {
   super()
   this.jsonData = jsonData;
   this.jsonTitle = jsonTitle;
 }


 startGame =  () => {
   randomize = Math.floor(Math.random() * this.jsonData.length);
   choisenWord = this.jsonData [randomize]
   choisenTitle = this.jsonTitle [randomize]
   splitChoisenWord = choisenWord.split('')
   lengthOfChoisenWord = splitChoisenWord.length;
   mainVariable = [];
   gameChanse = 10;

   
   for (let i = 0; i < lengthOfChoisenWord; i++)  mainVariable.push('-')


   // Adding HTML PROSESS
   DomManipulator.gameChanse.innerHTML = gameChanse;
   DomManipulator.cardArea.innerHTML = mainVariable.map((e => ` <div class="card col-1" id="1"><h4>${e}</h4></div>`)).join(' ');
   DomManipulator.hederBoxInfo.innerHTML = `<p>${choisenTitle}</p>`

 }

  


 checkUserOrder = userOrder => {
     let letterInWord = false;

    
     for(let i = 0; i < lengthOfChoisenWord; i++){

       if(choisenWord[i] === userOrder) {
         letterInWord = true;
       }
     }
     
     

     if(letterInWord){

       for(let n = 0; n < lengthOfChoisenWord; n++){
         if(choisenWord[n] == userOrder) {
           mainVariable[n] = userOrder;
         }
         document.getElementById(userOrder).disabled = true;
       }

     }else {

      document.getElementById(userOrder).disabled = true;
      gameChanse --;
    }

 }
 

 roundEnd = () =>{
   DomManipulator.gameChanse.innerHTML = gameChanse;
   DomManipulator.cardArea.innerHTML = mainVariable.map((e => ` <div class="card col-1" id="1"><h4>${e}</h4></div>`)).join(' ');

   if (splitChoisenWord.toString() === mainVariable.toString()) {
     for(let i = 0; i < 35;i++)  DomManipulator.buttons[i].disabled = false;
     this.startGame();
   }else if (gameChanse <= 0) {
     for(let i = 0; i < 35;i++)  DomManipulator.buttons[i].disabled = false;
     alert("Biraz lüğət oxusan yaxşı olar");
     this.startGame();
   }
 }
 // edof class
}




//  g.startGame();

clickButton = e => {
 fetch('./data/letters.json')
 .then((response) => response.json())
 .then((data) =>{
   let ConvertedDataLetter = [] ;
   let ConvertedDataTitle = [] ;
   for (let i = 0 ; i < data.length; i++) {
     ConvertedDataLetter.push(data[i].letter.toLowerCase());
     ConvertedDataTitle.push(data[i].title);
   } 
   let g = new Gaming(ConvertedDataLetter,ConvertedDataTitle);
   let getButtonValue = e
   g.checkUserOrder(getButtonValue);
   g.roundEnd();
 })

} 


