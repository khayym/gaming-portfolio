class Dom {
    static  crystalRed = document.querySelector('#crystalRed');
    static  crystalBlue = document.querySelector('#crystalBlue');
    static  crystalPurple =document.querySelector('#crystalPurple');
    static  crystalGreen = document.querySelector('#crystalGreen');
    static  winCount = $('#winCount');
    static  loseCount = $('#loseCount')
}

let currentScore = 0;
const crystal = {
    blue:
    {
      name: "Blue",
      value: 0
    },
    green:
    {
      name: "Green",
      value: 0
    },
    red:
    {
      name: "Red",
      value: 0
    },
    yellow:
    {
      name: "Yellow",
      value: 0
    }
  };


  class Game extends Dom{

    lossCount = 0;
    winCount = 0;
    targetScore = 0;
    currentScore = 0;
    
    constructor(data){
        super(data);
        this.data = data;
    }

    random = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min;

    targetCount  =() =>{
         this.targetScore = this.random(19,150);
         $("#target_scor").text(`${this.targetScore}`);
    }

    changeValue = () => {

      //bug fix here--
      currentScore = 0;
      this.targetCount();
      //bug fix here---

        this.data.blue.value = this.random(1,12);
        this.data.green.value = this.random(1, 12);
        this.data.red.value = this.random(1, 12);
        this.data.yellow.value = this.random(1, 12);

        Dom.winCount.html(`win - ${this.winCount}`)
        Dom.loseCount.text(`lose - ${this.lossCount}`)
        
        // bug fix here----
        $("#your_scor").text(`${currentScore}`); 
         // bug fix here----

    }


    currentCounter = (x) => {
            
        if (currentScore === this.targetScore ) {
          alert("winner");
          this.winCount++;
          this.changeValue();
        }

        // (currentScore === this.targetScore)  ? winner() : (currentScore >  this.targetScore) ? loser() : otherVercion();
          if (currentScore >  this.targetScore){
            alert('lose')
            this.lossCount++;
            this.changeValue();
            
        }
      
        else {
            $("#your_scor").text(`${currentScore}`);        
            currentScore += x.value 
        }
    }

    leftPopup=() => {
      
      setTimeout(()=>{
        $('#info_boy_img').css('left','1.7rem');
      },3400);
    
      setTimeout(()=>{
        $('#info_boy_img').css('left','-100rem');
      },10000);
    
    }
  }


  let gameVariable = new Game(crystal);
  gameVariable.targetCount();
  gameVariable.changeValue();
  gameVariable.leftPopup();

  $(document).on('click', '#crystalRed', () => gameVariable.currentCounter(crystal.blue))
  $(document).on('click', '#crystalBlue', () => gameVariable.currentCounter(crystal.red))
  $(document).on('click', '#crystalPurple', () => gameVariable.currentCounter(crystal.green))
  $(document).on('click', '#crystalGreen', () => gameVariable.currentCounter(crystal.yellow))   
 
