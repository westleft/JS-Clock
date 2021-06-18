const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function runClock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    let secDeg = seconds * 6 ;
    let minDeg = minutes * 6 ;
    let hourDeg = ((hours * 30 - 180) + (minutes / 10 *5));
    
    secondHand.style.transform = `rotate(${secDeg}deg)`
    minuteHand.style.transform = `rotate(${minDeg}deg)`
    hourHand.style.transform = `rotate(${hourDeg}deg)`
    console.log(hours,minutes,seconds,hourDeg)    
}

setInterval(runClock,1000)