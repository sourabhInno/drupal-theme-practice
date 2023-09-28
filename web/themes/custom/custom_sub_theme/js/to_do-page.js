(function ($, Drupal, once) {
  Drupal.behaviors.toDoList = {
    attach: function (context, settings) {
      once("toDo", "#toDoContainer", context).forEach((element) => {
        const addButton = document.querySelector("#add");
        const inputText = document.querySelector("#new-item");
        const taskList = document.querySelector("#mylist");

        let remove = (e) => {
          let element = e.target;
          element.parentNode.remove();
        };
        addButton.onclick = () => {
          const value = inputText.value;
          if (value !== "") {
            const li = document.createElement("li");
            li.classList.add("list-group-item");
            const removeButton = document.createElement("div");
            removeButton.classList.add("text-right", "btn", "btn-danger");
            const removeButtonText = document.createTextNode("X");
            removeButton.appendChild(removeButtonText);
            removeButton.onclick = remove;
            const text = document.createTextNode(value);
            li.appendChild(text);
            li.appendChild(removeButton);
            taskList.appendChild(li);
          }
        };
      });
    },
  };
})(jQuery, Drupal, once);
