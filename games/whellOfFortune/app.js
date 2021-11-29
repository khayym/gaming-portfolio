 let choisenWord = "";
 let splitChoisenWord = [];
 let lengthOfChoisenWord = 0;
 let mainVariable = [];
 let wrongChoisenWord = [];
 let choisenTitle = [];
 let randomize = 0;

 let gameEarndMoney = 0;
 let countOfLose = 0;
 let gameChanse = 3;


class DomManipulator {
  static cardArea = document.querySelector('#card-area');
  static hederBoxInfo = document.querySelector('#info-box');
  static letterChoiseArea = document.querySelector('#letterChoiseArea');
  static buttons = document.querySelectorAll('.btn');
  static gameChanse = document.querySelector('#gameChanse');
  static wheel = document.querySelector('.wheel');
  static startButton = document.querySelector('.button');
  static display = document.querySelector('.display');
  static gameMoney = document.querySelector('#gameMoney');
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
    gameChanse = 3;

    
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
       gameChanse--;}

  }
  
 
  roundEnd = () =>{
    DomManipulator.gameChanse.innerHTML = gameChanse;
    DomManipulator.cardArea.innerHTML = mainVariable.map((e => ` <div class="card col-1" id="1"><h4>${e}</h4></div>`)).join(' ');

    if (splitChoisenWord.toString() === mainVariable.toString()) {
      countOfWin++;
      for(let i = 0; i < 35;i++)  DomManipulator.buttons[i].disabled = false;
      this.startGame();
    }else if (gameChanse === 0) {
      for(let i = 0; i < 35;i++)  DomManipulator.buttons[i].disabled = false;
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
 

 function speen() {
    
  let deg = 0;
  let zoneSize = 45; // deg
 
  // Counter clockwise
  const symbolSegments = {
    1: 150,
    2: 200,
    3: 340,
    4: 500,
    5: 1200,
    6: 700,
    7: 20,
    8: 1500,
  }
 
  const handleWin = (actualDeg) => {
    const winningSymbolNr = Math.ceil(actualDeg / zoneSize);
    gameEarndMoney += symbolSegments[winningSymbolNr];
    DomManipulator.gameMoney.innerHTML = gameEarndMoney;
  }
 
  DomManipulator.startButton.addEventListener('click', () => {
    // Reset display
    DomManipulator.display.innerHTML = "-";
    // Disable button during spin
    DomManipulator.startButton.style.pointerEvents = 'none';
    // Calculate a new rotation between 5000 and 10 000
    deg = Math.floor(5000 + Math.random() * 5000);
    // Set the transition on the wheel
    DomManipulator.wheel.style.transition = 'all 10s ease-out';
    // Rotate the wheel
    DomManipulator.wheel.style.transform = `rotate(${deg}deg)`;
    // Apply the blur
    DomManipulator.wheel.classList.add('blur');
  });
 
  DomManipulator.wheel.addEventListener('transitionend', () => {
    // Remove blur
    DomManipulator.wheel.classList.remove('blur');
    // Enable button when spin is over
    DomManipulator.startButton.style.pointerEvents = 'auto';
    // Need to set transition to none as we want to rotate instantly
    DomManipulator.wheel.style.transition = 'none';
    // Calculate degree on a 360 degree basis to get the "natural" real rotation
    // Important because we want to start the next spin from that one
    // Use modulus to get the rest value
    const actualDeg = deg % 360;
    // Set the real rotation instantly without animation
    DomManipulator.wheel.style.transform = `rotate(${actualDeg}deg)`;
    // Calculate and display the winning symbol
    handleWin(actualDeg);
  });
 }

  speen();




