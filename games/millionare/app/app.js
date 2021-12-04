let randomNum  = 0;
let dataList = [];
let data_Questions = '';
let answers = [];
let correctAnswer ;
let nextQuestion = 0;
let moneyPramid_count = 0;
// let counter = 0;
let interval

class DomElements{
    static moneyPramid = $('#money-pramid')
    static answerBlock = $('.ans')
    static questionDiv = document.getElementById('questionDiv');
    static lets_play = document.querySelector('#lets-play');
    static easy = document.querySelector('#easy');
    static wrong_answer = document.querySelector('#wrong-answer');
    static correct_answer = document.querySelector('#correct-answer');
}


class Gaming extends DomElements{
    constructor(jsonData) {
        super();
        this.jsonData = jsonData;
    }

    dataConvert(){
        randomNum = Math.floor(Math.random() * this.jsonData.length);
        dataList = this.jsonData [randomNum];
        data_Questions = this.jsonData [randomNum].question
        answers = this.jsonData [randomNum].answers
        correctAnswer = this.jsonData [randomNum].correct_answers

        console.log(dataList);
        console.log(data_Questions);
        console.log(answers);
        console.log(correctAnswer);

      

        // Question Block
        DomElements.answerBlock[0].innerHTML = answers[0]
        DomElements.answerBlock[1].innerHTML = answers[1]
        DomElements.answerBlock[2].innerHTML = answers[2]
        DomElements.answerBlock[3].innerHTML = answers[3]
        DomElements.questionDiv.innerHTML = data_Questions
        
    }   

    
    
    loserEnd(){
        document.querySelector('[data-target="#exampleModal"]').click()
    }
    
    // timer(counter){
    //     interval = setInterval(function() {
    //     counter--;
    //          if (counter <= 0) {
    //              clearInterval(interval);
    //              document.querySelector('[data-target="#exampleModal"]').click()
    //         }else{
    //              $('.timer').html(counter);
    //              console.log("Timer --> " + counter);
    //             }
    //     }, 1000);
    // }

    // timerEnd(){

    // }

    checkUserOrder(buttonValue) {
        if(buttonValue == correctAnswer){
            moneyPramid_count++
            if(moneyPramid_count > 12){
                alert('You Winnnnn');
                window.location.reload();
            }else{
                $(`#mp-${moneyPramid_count}`).css(
                    {
                    "border": "1px solid #fff", 
                    "border-radius": "30px",
                    "background":"rgb(135,126,56)",
                    "background":"linear-gradient(27deg, rgba(135,126,56,1) 12%, rgba(138,138,51,1) 39%, rgba(203,184,34,1) 99%)"
                });
                this.dataConvert();
            }
        }
        else this.loserEnd();
    }




}




fetch('/gaming-portfolio/games/millionare/app/data.json')
.then(response => response.json())
.then(data => {
    let cls = new Gaming(data)
    cls.dataConvert();
    return cls
})
.then(z => {
    $(document).on('click','.ans',(e)=>{
        setTimeout(()=>{
            const buttonVal = e.target.value;
            z.checkUserOrder(buttonVal);
            // DomElements.lets_play.play();
        },1000)
    })
})


function restartBtt(){
    window.location.reload();
}



