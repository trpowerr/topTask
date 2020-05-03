export function filterBy(contacts, filterCallback) {
  return contacts.filter(filterCallback);
}
export function containsText(data, search) {
  const clean = search.trim().toLowerCase();
  return data.toLowerCase().includes(clean);
}
export function filterByNameOrPhone(contacts, text) {
  let a = filterBy(contacts, o => (
    containsText(o.title, text)
  ));
  // if (a.length === 0) {
  //   console.log('hello');
  //   const label = document.createElement('label');
  //   label.innerText = 'title';
  //   label.className = 'title';

  //   const listItem = document.createElement('li');
  //   listItem.className = 'zaglushka';

  //   const todoList = document.getElementById('todo-list');
  //   console.log(todoList);
  //   listItem.appendChild(label);
  //   todoList.appendChild(listItem);
  // }
  return a;
}
