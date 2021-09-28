const toDoForm = document.querySelector("#toDoForm");
const toDoInput = document.querySelector("#toDoForm input");
const toDoList = document.querySelector("#toDoList");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
} 

function paintToDo(newToDo){
    const li = document.createElement("li"); // li 생성
    const span = document.createElement("span"); // span 생성
    span.innerText = newToDo; // 내용
    const button = document.createElement("button"); // button 생성
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); // li 안에 span 위치
    li.appendChild(button); // li 안에 button 위치
    toDoList.appendChild(li); // list 안에 li 위치
}


function handleToDoSumit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSumit);

const savedToDos = localStorage.getItem(TODOS_KEY);
    console.log(savedToDos);
if (saveToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedToDos);
} 