const taskDescription = document.getElementById("input")
const inputValidation = document.querySelector(".input-validation")
const addTask = document.getElementById("add-task-btn")
const toDoList = document.querySelector(".to-do-list")

addTask.addEventListener("click", (event) => {
    let taskDescriptionValue = taskDescription.value.trim()
    input.addEventListener("input", () => {
        taskDescriptionValue = taskDescription.value.trim()
        if (taskDescriptionValue.length < 5) inputValidation.classList.remove("none")
        else inputValidation.classList.add("none")
        updateStorage();
    })

    if (taskDescriptionValue.length < 5) inputValidation.classList.remove("none")
    else updateToDoList(taskDescriptionValue);
})

const updateToDoList = (taskDescriptionValue) => {
    const li = document.createElement("li");
    li.classList.add('task', 'center')
    li.innerHTML = `${taskDescriptionValue}<img src="./Assets/icons/delete.png" alt="">`
    toDoList.appendChild(li)
    taskDescription.value = ''
    updateStorage();

    li.querySelector("img").addEventListener("click", function () {
        this.parentElement.remove();
        updateStorage();
    })

    li.addEventListener("click", function () {
        this.classList.toggle("checked")
        updateStorage();
    })
}

window.addEventListener("load", () => {
    toDoList.innerHTML = localStorage.getItem('data')

    toDoList.querySelectorAll(".task").forEach(task => {
        task.addEventListener("click", () => {
            task.classList.toggle("checked")
            updateStorage();
        })

        task.querySelector("img").addEventListener("click", function () {
            this.parentElement.remove();
            updateStorage();
        })
    })
})

const updateStorage = () => {
    localStorage.setItem('data', toDoList.innerHTML);
}
