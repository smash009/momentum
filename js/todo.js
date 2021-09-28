const toDoForm = document.querySelector("#toDoForm");
const toDoInput = document.querySelector("#toDoForm input");
const toDoList = document.querySelector("#toDoList");

function paintToDo(newToDo){
    const li = document.createElement("li"); // li 생성
    const span = document.createElement("span"); // span 생성
    li.appendChild(span); // li 안에 span 위치
    span.innerText = newToDo; // 내용
    toDoList.appendChild(li); // list 안에 li 위치
}


function handleToDoSumit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSumit);