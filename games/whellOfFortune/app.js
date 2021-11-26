let dom = document.querySelector('#card-area');
  function getRandomInt(val) {
    return Math.floor(Math.random() * val);
  }
  
let a = document.querySelector('#info-box');
console.log(a);


fetch('./data/letters.json')
.then(response => response.json())
.then(data => {
  let getRandom = getRandomInt(data.length);
  let choisenLetter = data[getRandom].letter.split('');
  let choisenAciqlama = data[getRandom].aciqlama;
  dom.innerHTML = choisenLetter.map((element => `<div class="card col-1"><h4>${element}</h4></div>`)).join('')
  a.innerHTML = choisenAciqlama;
})
.catch(err => alert(err))
//wordsList.map((element) => console.log(element));