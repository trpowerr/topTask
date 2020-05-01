
export default class Task {
  constructor(title) {
    this.pinned = false;
    this.title = title;
    Task.id += 1;
  }

  // addedTask(title) {
  //   this.title = title;
  // }

  pinnedTask() {
    this.pinned = true;
  }
}

// export const newTask = new Task();


// export default function getUser() {
//   const json = [
//     {
//       id: 1,
//       name: 'Иванов Александр',
//       avatar: 'http://freeava.ucoz.ru/_bl/16/51922.gif',
//       phone: '79600770000',
//       details: 'Подбробная информация о клиенте',
//     },
//     {
//       id: 2,
//       name: 'Суворова Оксана',
//       avatar: 'http://freeava.ucoz.ru/_bl/16/99692.gif',
//       phone: '79600770000',
//       details: 'Подбробная информация о клиенте',
//     },
//     {
//       id: 3,
//       name: 'Трякин Михаил',
//       avatar: 'http://freeava.ucoz.ru/_bl/16/13681.gif',
//       phone: '79600770000',
//       details: 'Подбробная информация о клиенте',
//     },
//   ];

//   return json;
// }
