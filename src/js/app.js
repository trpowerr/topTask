import { filterByNameOrPhone } from './filter';
import Task from './data';

const taskData = [];

function createTodoItem(title) {
  const newTask = new Task(addInput.value);
  console.log(newTask);

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';

  const label = document.createElement('label');
  label.innerText = title;
  label.className = 'title';

  const listItem = document.createElement('li');
  listItem.className = 'todo-item';

  listItem.appendChild(label);
  listItem.appendChild(checkbox);

  bindEvents(listItem);
  // filterTodoItem(data);

  taskData.push(newTask);
  console.log(taskData);

  return listItem;
}

function bindEvents(todoItem) {
  const checkbox = todoItem.querySelector('.checkbox');
  checkbox.addEventListener('change', pinningTodoItem);

  addInput.addEventListener('input', () => {
    // console.log(addInput.value);
    filterByNameOrPhone(data, addInput.value);
  });
}

function addTodoItem(event) {
  event.preventDefault();

  if (addInput.value === '') return alert('Необходимо ввести название задачи!');

  const todoItem = createTodoItem(addInput.value);
  todoList.appendChild(todoItem);
  addInput.value = '';
}

function pinningTodoItem() {
  const deleteNoPin = document.getElementById('no-pinned');
  if (deleteNoPin !== null) {
    pinnedList.removeChild(deleteNoPin);
  }
  const pinningItem = this.parentNode;
  pinnedList.appendChild(pinningItem);
  console.log('pin', pinningItem);
  for (let i = 0; i < taskData.length; i++) {
    console.log('arr', taskData.i);
  }
}

const todoForm = document.getElementById('todo-form');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');
const todoItems = document.querySelectorAll('.todo-item');
const pinnedList = document.getElementById('pinned-list');
// const pinnedItems = document.getElementById('pinned-item');
// const allTaskList = document.getElementById('all-task');

function main() {
  todoForm.addEventListener('submit', addTodoItem);
  todoItems.forEach((item) => bindEvents(item));
}

main();
