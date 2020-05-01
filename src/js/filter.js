export function filterBy(contacts, filterCallback) {
  return contacts.filter(filterCallback);
}
export function containsPhone(data, search) {
  const clean = search.replace(/[+ ()]/g, ''); // Удаляем +, ' ' и т.д.
  return data.startsWith(clean);
}
export function containsText(data, search) {
  const clean = search.trim().toLowerCase();
  return data.toLowerCase().includes(clean);
}
export function filterByNameOrPhone(contacts, text) {
  return filterBy(contacts, o => (
    containsPhone(o.phone, text) || containsText(o.name, text)
  ));
}
