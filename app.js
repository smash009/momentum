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
    
    console.log(username);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
};


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    //savedUsername 값아 없을 때 loginForm 을 보여줌.
    loginForm.classList.remove(HIDDEN_CLASSNAME); //hidden class 제거
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //있으면 greeting 보여 줌.
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${savedUsername}`; // 새로 저장한 username 을 가져옴.
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