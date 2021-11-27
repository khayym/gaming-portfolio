
class DomManipulator {
 static cardArea = document.querySelector('#card-area');
 static hederBoxInfo = document.querySelector('#info-box');
 static letterChoizeArea = document.querySelector('#letterChoizeArea');
 static buttons = document.querySelectorAll('.btn');
}


// function getRandomInt(value) {
//   return Math.floor(Math.random() * value);
// }

class MainGamingProses extends DomManipulator {

  constructor(data){
    super();
    this.data = data;
    }

    
  alphabetForChoice(){
    const englishLetters = ['a', 'b', 'c', 'ç','d','e','f','g','ğ','h','i','j','k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'ə', 'x', 'y', 'z','ö','ü','ı','ş','w']
    DomManipulator.letterChoizeArea.innerHTML = englishLetters
    .map((e) => `<button type="button" class="btn btn-danger" id="${e}" onclick="onUserClick(this.id)">${e.toUpperCase()}</button>`).join('');
    
  }


  getValueFromJson(data){
    const getRandomInt = value => Math.floor(Math.random() * value)
    const getRandom = getRandomInt(data.length)
    const choisenLetter = data[getRandom].letter.split('');
    const hiddeCurrentValue =[];


    for (let i = 0; i < choisenLetter.length; i++) {
      hiddeCurrentValue.push("~");
    }
    
    // if (condition) {
      
    // }

    const choisenAciqlama = data[getRandom].aciqlama;
    DomManipulator.hederBoxInfo.innerHTML = choisenAciqlama;
    DomManipulator.cardArea.innerHTML = hiddeCurrentValue.map((element => `<div class="card col-1"><h4>${element}</h4></div>`)).join('')
  }

  mm = [];

 


}



  // getClickButtonValue()


const main = new MainGamingProses();

main.alphabetForChoice();




let dd = document.querySelectorAll('.btn');
for (let i = 0; i < dd.length; i++) {
  
  //mm.push(dd[i].id);
  
}

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


let b = []; 

let a = fetch('./data/letters.json')
.then(res => res.json())
.then(data => {
  
  main.getValueFromJson(data);

})



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
