function getCurrentDateTime() {
    return new Date().toLocaleString();
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.innerHTML = `
        <strong>${taskText}</strong>
        <div class="task-info">Added: ${getCurrentDateTime()}</div>
    `;

    const actions = document.createElement("div");
    actions.className = "actions";

    const completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";
    completeBtn.onclick = () => completeTask(li);

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.onclick = () => editTask(taskSpan);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = () => li.remove();

    actions.append(completeBtn, editBtn, deleteBtn);
    li.append(taskSpan, actions);

    document.getElementById("pendingList").appendChild(li);
    taskInput.value = "";
}
function completeTask(taskItem) {
    taskItem.classList.add("completed");

    const info = taskItem.querySelector(".task-info");
    info.innerHTML += `<br>Completed: ${getCurrentDateTime()}`;

    const completeBtn = taskItem.querySelector(".actions button");
    completeBtn.remove();

    document.getElementById("completedList").appendChild(taskItem);
}

function editTask(taskSpan) {
    const oldText = taskSpan.querySelector("strong").innerText;
    const newText = prompt("Edit task:", oldText);

    if (newText && newText.trim() !== "") {
        taskSpan.querySelector("strong").innerText = newText;
    }
}
