const startBtn = document.querySelector('.btn-start');
const stopBtn = document.querySelector('.btn-stop');
const resetBtn = document.querySelector('.btn-restart');
const forceStartBtn = document.querySelector('.btn-forceStart');

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;
// setInterval(() => {
//     console.log('bla')
// }, 100)

let timer = false;

let start;
let stop;

function stopWatch() {
    
        second++;
        
 
        if (second == 60) {
            minute++;
            second = 0;
        }
 
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
 
        let hrString = hour;
        let minString = minute;
        let secString = second;
 
        if (hour < 10) {
            hrString = "0" + hrString+":";
        }else {
            hrString = hrString+":";
        }
 
        if (minute < 10) {
            minString = "0" + minString+":";
        }else {
            minString = minString+":";
        }
 
        if (second < 10) {
            secString = "0" + secString;
        }
 
 
        document.querySelector('.hours').innerHTML = hrString;
        document.querySelector('.minutes').innerHTML = minString;
        document.querySelector('.seconds').innerHTML = secString;
        
    
}



startBtn.addEventListener('click', function () {
    start = setInterval(stopWatch, 1000);
});

stopBtn.addEventListener('click', function () {
    stop = clearInterval(start);
});

resetBtn.addEventListener('click', function () {
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.querySelector('.hours').innerHTML = "00:";
    document.querySelector('.minutes').innerHTML = "00:";
    document.querySelector('.seconds').innerHTML = "00";
    stop = clearInterval(start);
});


function myStopFunction() {
    clearInterval(setInterval(stopWatch, 1000));
  }

forceStartBtn.addEventListener('click', function () {
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.querySelector('.hours').innerHTML = "00:";
    document.querySelector('.minutes').innerHTML = "00:";
    document.querySelector('.seconds').innerHTML = "00";
    stop = clearInterval(start);
    start = setInterval(stopWatch, 1000);
});