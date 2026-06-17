function addTask(){

const taskInput =
document.getElementById("taskInput");

const taskDate =
document.getElementById("taskDate");

if(taskInput.value === ""){
alert("Enter a task");
return;
}

const li =
document.createElement("li");

li.innerHTML = `
<span>
${taskInput.value}
<br>
<small>${taskDate.value}</small>
</span>

<div>
<button onclick="completeTask(this)">✓</button>

<button onclick="editTask(this)">Edit</button>

<button onclick="deleteTask(this)">Delete</button>
</div>
`;

document
.getElementById("taskList")
.appendChild(li);

taskInput.value = "";
taskDate.value = "";
}

function completeTask(btn){

btn.parentElement.parentElement
.classList.toggle("completed");

}

function deleteTask(btn){

btn.parentElement.parentElement
.remove();

}

function editTask(btn){

let li =
btn.parentElement.parentElement;

let taskText =
li.querySelector("span").childNodes[0]
.textContent.trim();

let newTask =
prompt("Edit Task", taskText);

if(newTask){

li.querySelector("span").childNodes[0]
.textContent = newTask + " ";

}

}
