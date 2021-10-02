const clock = document.querySelector("h2#clock > span");
const clock2 = document.querySelector("h2#clock > span#sec");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}`;
    clock2.innerText = `${seconds}`;
}


getClock();
setInterval(getClock, 1000);