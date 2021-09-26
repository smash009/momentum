// const loginForm = document.getElementById("loginForm");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("Button");
const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const loginButton = document.querySelector("#loginForm button");

function onLoginSubmit(event) {
    event.preventDefault(); //submit 기본 동작인 refresh 방지.
    console.log(loginInput.value)
};

loginButton.addEventListener("submit", onLoginSubmit);

// function handleLoginBtnClick() {
//     // console.log("Hello",loginInput.value)
//     // console.log("clicked!")
//     const Value = loginInput.value;

//     if(value === ""){
//         alert("Please, write your name!")
//     }
// };



// loginButton.addEventListener("click", handleLoginBtnClick);