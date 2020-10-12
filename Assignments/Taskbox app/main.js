const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const ulHandle = document.querySelector("ul");
const h2Handle = document.querySelector("h2");
const handleSubmit = (e) => {
  e.preventDefault();

  const task = {
    id: Number(new Date()),
    title: e.target.title.value,
  };

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  e.target.reset(); //it will reset the input field after hit enter

  liGenerator(task);
};
//create list element
const liGenerator = (task) => {
  const liHandle = document.createElement("li");
  liHandle.textContent = task.title;
  ulHandle.appendChild(liHandle);
  h2Handle.textContent = `My Tasks-${tasks.length}`;

  liRemove(liHandle, task);
};

//remove list item after completion by setting an eventLstener
const liRemove = (liHandle, task) => {
  liHandle.addEventListener("click", () => {
    ulHandle.removeChild(liHandle);
    const index = tasks.findIndex((arrTask) => arrTask.id == task.id);
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    h2Handle.textContent = `My Tasks-${tasks.length}`;
  });
};

// this will initialize our list item
tasks.forEach((task) => liGenerator(task));
