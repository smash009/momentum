const toDoForm = document.querySelector("#toDoForm");
const toDoInput = document.querySelector("#toDoForm input");
const toDoList = document.querySelector("#toDoList");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
} 

function paintToDo(newToDo){
    const li = document.createElement("li"); // li 생성
    li.id = newToDo.id;
    const span = document.createElement("span"); // span 생성
    span.innerText = newToDo.text; // 내용
    const button = document.createElement("button"); // button 생성
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); // li 안에 span 위치
    li.appendChild(button); // li 안에 button 위치
    toDoList.appendChild(li); // list 안에 li 위치
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}