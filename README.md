# 🚀 JavaScript Mini Project — Task Manager App

This project helps you practice:

* HTML
* CSS
* JavaScript
* DOM Manipulation
* Events
* Arrays
* Objects
* Local Storage
* Functions
* CRUD Operations

You can run this project inside:

* IntelliJ IDEA
* VS Code
* Browser

---

# 📁 Project Structure

```text
TaskManager/
│
├── index.html
├── style.css
└── script.js
```

---

# 🚀 STEP 1 — index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Task Manager</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">

    <h1>Task Manager</h1>

    <div class="input-section">

        <input
                type="text"
                id="taskInput"
                placeholder="Enter Task"
        >

        <button onclick="addTask()">
            Add Task
        </button>

    </div>

    <div id="taskList">

    </div>

</div>

<script src="script.js"></script>

</body>
</html>
```

---

# 🚀 STEP 2 — style.css

```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial;
}

body{
    background:#f4f4f4;
}

.container{
    width:400px;
    margin:50px auto;
    background:white;
    padding:20px;
    border-radius:10px;
    box-shadow:0 0 10px rgba(0,0,0,0.2);
}

h1{
    text-align:center;
    margin-bottom:20px;
}

.input-section{
    display:flex;
    gap:10px;
}

input{
    flex:1;
    padding:10px;
}

button{
    padding:10px 15px;
    border:none;
    background:black;
    color:white;
    cursor:pointer;
    border-radius:5px;
}

.task{
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:#eee;
    padding:10px;
    margin-top:10px;
    border-radius:5px;
}

.completed{
    text-decoration:line-through;
    color:gray;
}

.btn-group button{
    margin-left:5px;
}
```

---

# 🚀 STEP 3 — script.js

```javascript
let tasks = JSON.parse(localStorage.getItem("tasks")) || []

function saveTasks(){

    localStorage.setItem("tasks",JSON.stringify(tasks))
}

function renderTasks(){

    const taskList = document.getElementById("taskList")

    taskList.innerHTML = ""

    tasks.forEach((task,index)=>{

        const div = document.createElement("div")

        div.classList.add("task")

        div.innerHTML = `

            <span class="${task.completed ? 'completed' : ''}">
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
```

---

# 🚀 WHAT YOU LEARN FROM THIS PROJECT

# HTML

* Input Fields
* Buttons
* Divs
* Structure

# CSS

* Flexbox
* Spacing
* Styling
* Hover Effects
* Layout

# JavaScript

* Functions
* Arrays
* Objects
* DOM Manipulation
* Event Handling
* Dynamic UI
* CRUD Operations
* Local Storage
* Template Literals

---

# 🚀 FEATURES

✅ Add Task

✅ Delete Task

✅ Complete Task

✅ Save Tasks in Browser

✅ Dynamic Rendering

✅ Real Project Structure

---

# 🚀 NEXT IMPROVEMENTS

After finishing this project add:

* Edit Task
* Dark Mode
* Search Task
* Filter Completed Tasks
* Task Date
* Priority Levels
* Drag and Drop
* Backend Connection

---

# 🚀 ADVANCED VERSION IDEAS

Convert this into:

* React Task Manager
* Spring Boot + JavaScript Full Stack App
* Firebase Todo App
* MERN Stack Todo App

---

# 🚀 IMPORTANT PRACTICE TASKS

After building this yourself create:

1. Calculator
2. Notes App
3. Weather App
4. Expense Tracker
5. Quiz App
6. Music Player
7. Digital Clock
8. Ecommerce Cart

---

# 🚀 INTERVIEW CONCEPTS COVERED

This project covers:

* DOM
* CRUD
* Arrays
* Objects
* Event Handling
* Local Storage
* Functions
* Dynamic Rendering
* JavaScript Logic

---

# 🚀 HOW TO RUN

STEP 1:

Create folder:

```text
TaskManager
```

STEP 2:

Create:

```text
index.html
style.css
script.js
```

STEP 3:

Paste code.

STEP 4:

Run index.html in browser.

---

# 🚀 FINAL CHALLENGE

Try to build this project again WITHOUT seeing code.

That is where real JavaScript learning starts.
