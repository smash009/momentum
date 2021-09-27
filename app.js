// const loginForm = document.getElementById("loginForm");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("Button");
const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event) {
    event.preventDefault(); //submit 기본 동작인 refresh 방지.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings();
};

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
};

const savedUsername = localStorage.getItem(USERNAME_KEY); // localStorage에 정보가 있다면 가져옴.

if(savedUsername === null) {
    //savedUsername 값아 없을 때 loginForm을 보여줌.
    loginForm.classList.remove(HIDDEN_CLASSNAME); //hidden class 제거
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //있으면 greeting 보여 줌.
    paintGreetings();// 새로 저장한 username을 보여줌.
};


// function handleLoginBtnClick() {
//     // console.log("Hello",loginInput.value)
//     // console.log("clicked!")
//     const Value = loginInput.value;

//     if(value === ""){
//         alert("Please, write your name!")
//     }
// };



// loginButton.addEventListener("click", handleLoginBtnClick);