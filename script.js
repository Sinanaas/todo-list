// JavaScript
const createBtn = document.querySelector("#createBtn");

createBtn.onclick = () => {
  const createTaskValue = document.querySelector("#createTask").value;

  if (!createTaskValue) {
    alert("Please fill the task form!");
  } else {
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    existingTasks.push({ title: createTaskValue, done: false });
    localStorage.setItem("tasks", JSON.stringify(existingTasks));

    // Clear the input field
    document.querySelector("#createTask").value = "";

    populateTask();
  }
};

function deleteTask(index) {
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    existingTasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(existingTasks));

    populateTask();
}

function createDeleteButton(index) {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteTask(index));
    return deleteButton;
}

(function () {
  "use strict";
  const taskListDiv = document.getElementById("taskList");

  function populateTask() {
    taskListDiv.innerHTML = "";

    const storedTasks = JSON.parse(localStorage.getItem("tasks"));

    if (storedTasks && storedTasks.length > 0) {
      storedTasks.forEach((task, index) => {
        const taskRow = document.createElement("div");
        taskRow.classList.add("task-row");

        const taskTitle = document.createElement("h2");
        taskTitle.textContent = task.title;

        taskRow.appendChild(taskTitle);
        taskRow.appendChild(createDeleteButton(index));

        taskListDiv.appendChild(taskRow);
      });
    }
  }
  populateTask();
})();
