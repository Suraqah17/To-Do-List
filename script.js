// Function to add a new task to the list
function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    input.value = "";

    if (taskText === "") {
        return;
    }

    const taskList = document.getElementById("taskList");
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `<span>${taskText}</span><button onclick="removeTask(this)">Remove</button>`;
    taskList.appendChild(taskItem);
}

// Function to remove a task from the list
function removeTask(button) {
    const taskItem = button.parentNode;
    taskItem.remove();
}
