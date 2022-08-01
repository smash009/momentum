const dayH2 = document.querySelector("h2#day");

function getDay() {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth()+1);
    const day = date.getDate();
    dayH2.innerText = `${year}년 ${month}월 ${day}일`;
}

getDay();