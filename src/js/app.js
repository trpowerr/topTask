function createTodoItem(title) {
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

  return listItem;
}

function bindEvents(todoItem) {
  const checkbox = todoItem.querySelector('.checkbox');
  checkbox.addEventListener('change', pinningTodoItem);
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
    console.log(deleteNoPin);
    pinnedList.removeChild(deleteNoPin);
  }
  const pinningItem = this.parentNode;
  pinnedList.appendChild(pinningItem);
}

const todoForm = document.getElementById('todo-form');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');
const todoItems = document.querySelectorAll('.todo-item');
const pinnedList = document.getElementById('pinned-list');
// const pinnedItems = document.querySelectorAll('.pinned-item');
const pinnedItems = document.getElementById('pinned-item');

function main() {
  todoForm.addEventListener('submit', addTodoItem);
  todoItems.forEach((item) => bindEvents(item));
}

main();
