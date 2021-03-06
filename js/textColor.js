const sec = document.querySelector("h2#clock > span#sec");
const colors = ["#fff", "#ff0000", "#ff5e00", "#ffbb00", "#ffe400", "#abf200", "#1ddb16", "#00d8ff", "#0054ff", "#0100ff", "#5f00ff", "#ff00dd", "#ff007f"];

function colorControl() {
    const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
    const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
    sec.style = `background:linear-gradient(to left, ${randomColor1}, ${randomColor2}); -webkit-background-clip: text; -webkit-text-fill-color: transparent;`;
};

console.log(sec);
colorControl();
setInterval(colorControl, 1000);