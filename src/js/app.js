alert('посмотрите readme');
import { filterByNameOrPhone } from './filter';
import Task from './data';
// import buildTaskList from './build';

let id = null;
const taskData = [];

function buildTaskList(contacts, containerEl, elementTag) {
  containerEl.innerHTML = '';
  contacts.forEach((task) => {
    const el = document.createElement(elementTag);
    el.dataset.task = 'todo-item';
    el.className = 'todo-item';
    el.id = task.id;
    el.innerHTML = `
      <label class="title">${task.title}</label><input class="checkbox" id="checkbox" type="checkbox">
`;
    containerEl.appendChild(el);
    bindEvents(el);
  });
}

function bindEvents(todoItem) {
  const checkbox = todoItem.querySelector('.checkbox');
  checkbox.addEventListener('change', pinningTodoItem);
}

function addTodoItem(event) {
  event.preventDefault();

  if (addInput.value === '') return alert('Необходимо ввести название задачи!');
  const newTask = new Task(id += 1, addInput.value);
  taskData.push(newTask);

  buildTaskList(taskData, todoList, 'li');
  addInput.value = '';
  addInput.addEventListener('input', () => {
    buildTaskList(filterByNameOrPhone(taskData, addInput.value), todoList, 'li');
  });
}

function pinningTodoItem() {
  const deleteNoPin = document.getElementById('no-pinned');
  if (deleteNoPin !== null) {
    pinnedList.removeChild(deleteNoPin);
  }
  const pinningItem = this.parentNode;
  delete taskData[pinningItem.id - 1];
  pinnedList.appendChild(pinningItem);
}

const todoForm = document.getElementById('todo-form');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');
const todoItems = document.querySelectorAll('.todo-item');
const pinnedList = document.getElementById('pinned-list');

function main() {
  todoForm.addEventListener('submit', addTodoItem);
  todoItems.forEach((item) => bindEvents(item));
}

main();
