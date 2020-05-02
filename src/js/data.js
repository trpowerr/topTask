export default class Task {
  constructor(id, title) {
    this.id = id;
    this.pinned = false;
    this.title = title;
  }

  pinnedTask() {
    this.pinned = true;
  }
}
