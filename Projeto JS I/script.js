document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const taskItem = document.createElement("li");
  
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", () => {
          taskItem.classList.toggle("completed");
        });
  
        const span = document.createElement("span");
        span.textContent = taskText;
  
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remover";
        removeBtn.addEventListener("click", () => {
          taskItem.remove();
        });
  
        taskItem.appendChild(checkbox);
        taskItem.appendChild(span);
        taskItem.appendChild(removeBtn);
  
        taskList.appendChild(taskItem);
        taskInput.value = "";
      }
    });

    taskInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        addTaskBtn.click();
      }
    });
  });  