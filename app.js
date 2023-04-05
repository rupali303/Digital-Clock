let cl = console.log;
const digitalClock = document.getElementById("digitalClock");

function createdigitalClock(){
    let d = new Date();
let hr = d.getHours();
let min = d.getMinutes();
let sec = d.getSeconds();
let session = "AM";
if(hr >= 12){
    hr = hr - 12;
    session = "PM" 
}
if(hr<10){
    hr = "0" + hr;
}
if(min<10){
    min = "0" + min;
}
if(sec<10){
    sec = "0" + sec;
}
let result = `${hr} : ${min} : ${sec} ${session}`;
digitalClock.innerHTML = result;
setTimeout(() => {
    createdigitalClock();

},1000);
}
createdigitalClock()