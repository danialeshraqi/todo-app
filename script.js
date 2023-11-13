const button = document.getElementById("addButton");
const input = document.getElementById("taskInput");
input.focus();
if (input.value === "") input.style.borderColor = "#b83e1f";

// gets the text of input and creates a new li and puts the text into the li item
const addTask = () => {
  const image = document.createElement("img");
  const task = document.createElement("li");
  const list = document.getElementById("list");

  // adding close button and click event for removing
  // !note that close button appears in hover mode
  image.src = "./Images/icons8-close-32.png";
  image.className = "close-icon";
  image.addEventListener("click", () => {
    task.style.display = "none";
  });
  task.innerText = input.value;

  // adding click event for compelting the task
  task.addEventListener("click", () => {
    task.classList.toggle("checked");
  });
  task.appendChild(image);
  if (input.value !== "") list.appendChild(task);
  else alert("Please type something");
  input.value = "";
  input.focus();
};

// add task with pressing enter button
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

// changing the border of input based on inputs text
input.addEventListener(
  "keyup",
  (e) => {
    if (input.value !== "") input.style.borderColor = "#0078b9";
    else input.style.borderColor = "#b83e1f";
  },
  false
);

// add task with button click
button.addEventListener("click", () => {
  addTask();
});
