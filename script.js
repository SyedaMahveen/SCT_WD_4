let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {

const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const taskTime = document.getElementById("taskTime");

if(taskInput.value.trim()===""){
alert("Enter a task");
return;
}

tasks.push({
text: taskInput.value,
date: taskDate.value,
time: taskTime.value,
completed:false
});

saveTasks();
displayTasks();

taskInput.value="";
taskDate.value="";
taskTime.value="";
}

function displayTasks(){

const taskList=document.getElementById("taskList");

taskList.innerHTML="";

tasks.forEach((task,index)=>{

const div=document.createElement("div");

div.className=`task ${task.completed ? "completed" : ""}`;

div.innerHTML=`

<div class="task-info">

<h3 class="task-text">${task.text}</h3>

<small>📅 ${task.date || "No Date"}</small>

<small>⏰ ${task.time || "No Time"}</small>

</div>

<div class="task-buttons">

<button class="complete"
onclick="toggleTask(${index})">

${task.completed ? "Undo" : "Done"}

</button>

<button class="edit"
onclick="editTask(${index})">

Edit

</button>

<button class="delete"
onclick="deleteTask(${index})">

Delete

</button>

</div>
`;

taskList.appendChild(div);

});
}

function toggleTask(index){

tasks[index].completed=
!tasks[index].completed;

saveTasks();
displayTasks();
}

function editTask(index){

const newTask=prompt(
"Edit Task",
tasks[index].text
);

if(newTask){

tasks[index].text=newTask;

saveTasks();
displayTasks();
}
}

function deleteTask(index){

tasks.splice(index,1);

saveTasks();
displayTasks();
}

displayTasks();
