let randomNum  = 0;
let dataList = [];
let data_Questions = '';
let answers = [];
let correctAnswer ;
let nextQuestion = 0;
let moneyPramid_count = 0;
let resSecond =[];
let intervalId;
let currentTime;
let interval;

class DomElements{
    static moneyPramid = $('#money-pramid')
    static answerBlock = $('.ans')
    static questionDiv = document.getElementById('questionDiv');
    static fiftyButton  = document.querySelector('#fifty');
    static timer = document.querySelector('.timer');
    // Sounds
    static letsPlay = document.querySelector('#lets-play');
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

        console.log(correctAnswer);
        // Question Block
        DomElements.answerBlock[0].innerHTML = answers[0]
        DomElements.answerBlock[1].innerHTML = answers[1]
        DomElements.answerBlock[2].innerHTML = answers[2]
        DomElements.answerBlock[3].innerHTML = answers[3]
        DomElements.questionDiv.innerHTML = data_Questions
    }   

    
    timerFunction = () => {
        currentTime = new Date().getTime();
        intervalId = setInterval(() => {
           interval = Math.floor(
                (41000 + currentTime - new Date().getTime()) / 1000
            );
            DomElements.timer.textContent = interval;
            if (interval === 0) {
                this.loserEnd()
                clearInterval(intervalId);
            }
            return interval;
        }, 100);
    }

    offTimer = () => {
        setTimeout(() => {
            clearInterval(intervalId);
        },200)
    }

    
    loserEnd(){
        $(`.ca_${correctAnswer}`).css('background','green')
        Sounds.wrongAnswerSound();
        setTimeout(()=>document.querySelector('[data-target="#exampleModal"]').click(),1500); 
    }


    checkUserOrder(buttonValue,e) {
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
                this.timerFunction();
                $(`#${e}`).css('background','#021442')
            }
        }
        else this.loserEnd();
    }

}



class Jokers extends Gaming{

        
    fifty(){
        $('#fifty').attr('disabled' , true);

        if(0 == correctAnswer ){
            $(`.ca_1`).attr('disabled' , true);
            $(`.ca_2`).attr('disabled' , true);
        } else if(1 == correctAnswer){
            $(`.ca_3`).attr('disabled' , true);
            $(`.ca_2`).attr('disabled' , true);
        } else if(2 == correctAnswer){
            $(`.ca_0`).attr('disabled' , true);
            $(`.ca_3`).attr('disabled' , true);
        }else if(3 == correctAnswer){
            $(`.ca_2`).attr('disabled' , true);
            $(`.ca_0`).attr('disabled' , true);
        }

    }

    fiftyDisable (){
        $(`.ca_0`).attr('disabled' , false);
        $(`.ca_1`).attr('disabled' , false);
        $(`.ca_2`).attr('disabled' , false);
        $(`.ca_3`).attr('disabled' , false);
    }
    
    callFriend(){
        $('#callJokerBTN').attr('disabled' , true);
        $('#call-modal-p').html(`Einstein cavabın <b> <i> ${answers[correctAnswer]} </i></b> olduğunu düşünür`);
        setTimeout(()=>document.querySelector('[data-target="#callFriendModal"]').click(),200)
    }
}


class Sounds extends Gaming{

    startSound(){ 
        DomElements.letsPlay.play();
        DomElements.letsPlay.volume = 0.3;
        setTimeout(()=>{
            DomElements.easy.play();
            DomElements.easy.volume =0.3;
        },4000);
    }

   static wrongAnswerSound(){
        DomElements.wrong_answer.play();
        DomElements.wrong_answer.volume = 0.3;
    }

    correctAnswer(){
        DomElements.correct_answer.play();
        DomElements.correct_answer.volume = 0.3;
    }

    stop_startSound(){
        DomElements.letsPlay.pause();
        DomElements.easy.pause();
    }

}




fetch('/gaming-portfolio/games/millionare/app/data.json')
.then(response => response.json())
.then(data => {

    let mainClass = new Gaming(data)
    mainClass.dataConvert();
    return mainClass
})
.then(allData => {
    const sound =  new Sounds();
    const jokers = new Jokers();
    allData.timerFunction();
    sound.startSound();
    
    $(document).on('click','#fifty',()=> jokers.fifty());
    $(document).on('click','#callJokerBTN',()=> jokers.callFriend());

    $(document).on('click','.ans',(e)=>{
        $(`#${e.target.id}`).css('background','#037888')
        jokers.fiftyDisable()

        setTimeout(()=>allData.offTimer(),300)
        setTimeout(()=>{   
            const buttonVal = e.target.value;             
            sound.stop_startSound();
            sound.correctAnswer()
            allData.checkUserOrder(buttonVal,e.target.id);
        },3000)
    })
})


function restartBtt(){ window.location.reload();}




