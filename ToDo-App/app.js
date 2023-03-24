let tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  const task = taskInput.value.trim();
  if (!task) return;

  tasks.push(task);
  taskInput.value = '';

  const taskIndex = tasks.length - 1;
  const listItem = document.createElement('li');
  listItem.innerHTML = `${task} <button onclick="updateTask(${taskIndex})">Edit</button> <button onclick="deleteTask(${taskIndex})">Delete</button>`;
  taskList.appendChild(listItem);
}

function updateTask(index) {
  const newTask = prompt('Enter new task:');
  if (!newTask) return;

  tasks[index] = newTask;

  const listItem = document.querySelector(`#taskList li:nth-child(${index + 1})`);
  listItem.innerHTML = `${newTask} <button onclick="updateTask(${index})">Edit</button> <button onclick="deleteTask(${index})">Delete</button>`;
}

function deleteTask(index) {
  tasks.splice(index, 1);

  const listItem = document.querySelector(`#taskList li:nth-child(${index + 1})`);
  listItem.remove();

  // Update the index of remaining list items
  const listItems = document.querySelectorAll('#taskList li');
  for (let i = index; i < listItems.length; i++) {
    const button = listItems[i].querySelectorAll('button');
    button[0].setAttribute('onclick', `updateTask(${i})`);
    button[1].setAttribute('onclick', `deleteTask(${i})`);
  }
}
