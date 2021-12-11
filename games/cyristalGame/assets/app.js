class Dom {
    static  crystalRed = document.querySelector('#crystalRed');
    static  crystalBlue = document.querySelector('#crystalBlue');
    static  crystalPurple =document.querySelector('#crystalPurple');
    static  crystalGreen = document.querySelector('#crystalGreen');
    static  winCount = document.querySelector('#winCount');
    static  loseCOunt =document.querySelector('#loseCount')
}

console.log(Dom.crystalRed.value);
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
         $("#target-score").text(` target :${this.targetScore}`);
    }

    changeValue = () => {

      //bug fix here--
      currentScore = 0;
      this.targetCount();
      //bug fix here---

        this.data.crystalRed.value = 22;
        this.data.crystalGreen.value() = this.random(1, 12);
        this.data.crystalGreen.value = this.random(1, 12);
        this.data.Purple.value = this.random(1, 12);

        Dom.win.text(`win --- ${this.winCount}`)
        Dom.lose.text(`lose --- ${this.lossCount}`)
        
        // bug fix here----
        $("#your-score").text(`current: ${currentScore}`); 
         // bug fix here----

    }

    currentCounter = (x) => {
            if (currentScore === this.targetScore ) {
                alert("winner");
                this.winCount++;
                this.changeValue();
            }
    
            else if (currentScore >  this.targetScore){
                alert('lose')
                this.lossCount++;
                this.changeValue();
               
            }
          
            else {
                $("#your-score").text(`current: ${currentScore}`);        
                currentScore += x.value 
            }
    }
    
  }



  let g = new Game(crystal);
  g.targetCount();
  g.changeValue();

  $(document).on('click', '#kirstal', () => g.currentCounter(crystal.blue))
  $(document).on('click', '#sq', () => g.currentCounter(crystal.red))
  $(document).on('click', '#kv', () => g.currentCounter(crystal.green))
  $(document).on('click', '#kure', () => g.currentCounter(crystal.yellow))   
 
