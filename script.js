let tasks = JSON.parse(localStorage.getItem("tasks")) || []

function saveTasks() {

  localStorage.setItem("tasks", JSON.stringify(tasks))
}

function renderTasks(){
  const taskList = document.getElementById("taskList")
  taskList.innerHTML =""
  tasks.forEach((task,index) =>{
    const div=document.createElement("div")
    div.classList.add("task")
    div.innerHTML = ` <span class="${task.completed ? 'completed' : ''}">
                ${task.name}
            </span>

            <div class="btn-group">

                <button onclick="completeTask(${index})">
                    ✔
                </button>

                <button onclick="deleteTask(${index})">
                    ❌
                </button>

            </div>
    `

    taskList.appendChild(div)
  })
}

function addTask(){
  const taskInput = document.getElementById("taskInput")

  const taskValue = taskInput.value.trim()

  if(taskValue === ""){

    alert("Please Enter Task")
    return
  }

  const taskObject = {
    name:taskValue,
    completed:false
  }

  tasks.push(taskObject)

  saveTasks()

  renderTasks()

  taskInput.value = ""
}

function deleteTask(index){

  tasks.splice(index,1)

  saveTasks()

  renderTasks()
}

function completeTask(index){

  tasks[index].completed = !tasks[index].completed

  saveTasks()

  renderTasks()
}

renderTasks()
