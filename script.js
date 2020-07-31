console.log('connected');
const container = document.querySelector('.container');
let i = 0;
const time = {
    seconds:0,
    minutes:0,
    hours:0,
};
function getTime() {
    let today = new Date();
    time.seconds = today.getSeconds();
    time.minutes = today.getMinutes();
    if (today.getHours > 12) {
        time.hours = today.getHours() - 12;
    } else {time.hours = today.getHours();}
    return time;
}
console.log(getTime());
function setTime() {
        getTime();
        console.log(time);
        const SECOND = document.querySelector('.second');
        SECOND.style.transform = `rotate(${time.seconds*6}deg)`;
        const MINUTE = document.querySelector('.minute');
        MINUTE.style.transform = `rotate(${time.minutes*6}deg)`;
        const HOUR = document.querySelector('.hour');
        HOUR.style.transform = `rotate(${time.hours*30}deg)`;
    }
setInterval(setTime, 1000);