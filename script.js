const button = document.getElementById("addButton");
const input = document.getElementById("taskInput");
input.focus();
if (input.value === "") input.style.borderColor = "#b83e1f";
const addTask = () => {
  const image = document.createElement("img");
  const task = document.createElement("li");
  const list = document.getElementById("list");
  image.src = "./Images/icons8-close-32.png";
  image.className = "close-icon";
  image.addEventListener("click", () => {
    task.style.display = "none";
  });
  task.innerText = input.value;
  task.addEventListener("click", () => {
    task.classList.toggle("checked");
  });
  task.appendChild(image);
  if (input.value !== "") list.appendChild(task);
  else alert("Please type something");
  input.value = "";
  input.focus();
};

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
input.addEventListener(
  "keyup",
  (e) => {
    if (input.value !== "") input.style.borderColor = "#0078b9";
    else input.style.borderColor = "#b83e1f";
  },
  false
);
button.addEventListener("click", () => {
  addTask();
});
