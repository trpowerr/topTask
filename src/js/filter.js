export function filterBy(contacts, filterCallback) {
  return contacts.filter(filterCallback);
}
export function containsText(data, search) {
  const clean = search.trim().toLowerCase();
  return data.toLowerCase().includes(clean);
}
export function filterByNameOrPhone(contacts, text) {
  return filterBy(contacts, o => (
    containsText(o.title, text)
  ));
}
