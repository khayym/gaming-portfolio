class Dom {
    black = $('#black');
}


class Application extends Dom{

    seconds = 0;
    interval = null;
    quickInt = null;
    hrs = 0;
    mins = 0;
    secs = 0;
    tens = 0;
    constructor(order){
        super();
        this.order = order;
    }

    checkOrder = order => {
        if (order == 'start') this.start();
        if (order == 'stop') this.stop();
        if (order == 'reset') this.reset();
        if (order == 'log') this.log();
    }

    timer =() => {
	this.seconds++;
	// set timer itmes
	this.hrs = Math.floor(this.seconds / 3600);
	this.mins = Math.floor((this.seconds - (this.hrs * 3600)) / 60);
	this.secs = this.seconds % 60;

	if (this.secs < 10) this.secs = '0' + this.secs;
	if (this.mins < 10) this.mins = "0" + this.mins;
	if (this.hrs < 10) this.hrs = "0" + this.hrs;
	$('#cl').html(`${this.hrs}:${this.mins}:${this.secs}`);
    }

    start = ()=> {
    if (this.interval) {
        return
    }
    this.interval = setInterval(this.timer, 1000);
    }

    stop = () => {
    clearInterval(this.interval);
    this.interval = null;
    }

    reset = () => {
    this.stop();
    this.seconds = 0;
    $('#cl').html('00:00:00');
    }
    
    log = () => {
        $('#black').append(`
        <p class="h3 text-white bg-dark">${this.hrs} : ${this.mins} : ${this.secs}</p>  
        `)
    }
}

let stopWatch  = new Application();
$(document).on('click','#btn',(e)=>{
    console.log(e.target.value);
    stopWatch.checkOrder(e.target.value)
})

// tens++; 
    
//     if(tens <= 9){
//       appendTens.innerHTML = "0" + tens;
//     }
    
//     if (tens > 9){
//       appendTens.innerHTML = tens;
      
//     } 
    
//     if (tens > 99) {
//       console.log("seconds");
//       seconds++;
//       appendSeconds.innerHTML = "0" + seconds;
//       tens = 0;
//       appendTens.innerHTML = "0" + 0;
//     }