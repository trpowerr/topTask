import { filterByNameOrPhone } from './filter';
import Task from './data';

let id = null;
const taskData = [];

function createTodoItem(title) {
  const newTask = new Task(id += 1, addInput.value);
  taskData.push(newTask);

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';

  const label = document.createElement('label');
  label.innerText = title;
  label.className = 'title';

  const listItem = document.createElement('li');
  listItem.className = 'todo-item';
  listItem.id = id;

  listItem.appendChild(label);
  listItem.appendChild(checkbox);

  bindEvents(listItem);

  filter();

  return listItem;
}

function bindEvents(todoItem) {
  const checkbox = todoItem.querySelector('.checkbox');
  checkbox.addEventListener('change', pinningTodoItem);
}

function filter() {
  addInput.addEventListener('input', () => {
    filterByNameOrPhone(taskData, addInput.value);
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
  taskData[pinningItem.id - 1].pinned = true;
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
