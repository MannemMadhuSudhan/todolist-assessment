document.addEventListener("DOMContentLoaded", function () {
    const todoUserInput = document.getElementById("todoUserInput");
    const addTodoButton = document.querySelector(".add-todo-button");
    const todoItemsContainer = document.getElementById("todoItemsContainer");
  
    function addTask() {
      const taskText = todoUserInput.value.trim();
      if (taskText !== "") {
        const todoItem = document.createElement("li");
        todoItem.classList.add("todo-item-container");
        
        const checkboxInput = document.createElement("input");
        checkboxInput.type = "checkbox";
        checkboxInput.classList.add("checkbox-input");
        
        const label = document.createElement("label");
        label.classList.add("checkbox-label");
        label.textContent = taskText;
        
        const deleteIconContainer = document.createElement("span");
        deleteIconContainer.classList.add("delete-icon-container");
        
        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fas", "fa-trash-alt", "delete-icon");
        
        deleteIconContainer.appendChild(deleteIcon);
        
        todoItem.appendChild(checkboxInput);
        todoItem.appendChild(label);
        todoItem.appendChild(deleteIconContainer);
        
        todoItemsContainer.appendChild(todoItem);
        
        todoUserInput.value = "";
        
        deleteIcon.addEventListener("click", function () {
          todoItemsContainer.removeChild(todoItem);
        });
      } else {
        alert("Please enter a task!");
      }
    }
  
    addTodoButton.addEventListener("click", addTask);
  
    todoUserInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        addTask();
      }
    });
  });
  