//1. Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

// const question = prompt("Какое официальное название JavaScript?");

// const question = prompt("Какое официальное название JavaScript?");

// if ("ECMAScript" === question) {
//     alert ("Верно!");
// } else {
//     alert("Не знаете? ECMAScript!");
// }

//2. Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10
// const globalMinutes = 90;
// let ourth = Math.floor(globalMinutes / 60);
// ourth = String(ourth).padStart(2, 0);
// let minse = globalMinutes % 60;
// minse = String(minse).padStart(2, 0);
// console.log(`${ourth}:${minse}`);

// 3. Напишите цикл, который выводит в консоль
//числа от max до min по убыванию
// Додайте все четные числа от min до max
// const max = 50;
// const min = 23;
// let total = 0;

// for (let i = max; i >= min; i -= 1) {
//   if (i % 2 !== 0) {
//     total += i;
//   }
// }

// console.log(total);

//4. Напишите код, который будет спрашивать
//логин с помощью prompt и логировать результат
//в консоль браузера

//Если посетитель вводит "Админ",
//то prompt запрашивает пароль.
//Если ничего не ввели или нажата клавиша Esc
//вывести стороку "Отменено"
//В противном случае вывксти строку "Я вас не знаю"

//Пароль проверять так:
//Если введён пароль "Я главный",
//то вывести строку "Здравствуйте!"
//иначе выводить строку "Неверный пароль!"

// if (loginInput === "Admin") {
//     const passwordInput = prompt("Введите свой пароль")
//     if (passwordInput === "Я главный") {
//         console.log("Здравствуйте!")
//     } else if (passwordInput === null) {
//         console.log("Отменено")
//     } else {
//         console.log("Неверный пароль!")
//     }
// } else if (loginInput === null) {
//     console.log("отменено")
// } else {
//     console.log("я вас не знаю")
// }
// console.log(loginInput)
// const loginInput = prompt("Введите свой логин");
// switch (loginInput) {
//     case "Admin" :
//         const passwordInput = prompt ("Введите свой пароль");
//             switch (passwordInput) {
//                 case "Я главный" :
//                     console.log("Здравствуйте!");
//                     break;
//                 case null:
//                 console.log("Отменено");
//                 break;
//                 default:
//                     console.log("Неверный пароль");
//             }
//         console.log(loginInput);
//         break;
//     case null:
//         console.log("Отменено");
//         break;
//     default:
//         console.log("Я вас не знаю");
// }
// const vehicles = [
//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: "Mazda",
//     model: "Mazda 6",
//     type: "sedan",
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: "Mazda",
//     model: "CX-9",
//     type: "suv",
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Sequoia",
//     type: "suv",
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Tacoma",
//     type: "truck",
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "F-150",
//     type: "truck",
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Fusion",
//     type: "sedan",
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Explorer",
//     type: "suv",
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];
// Получить машины на распродаже и сортировать по убыванию цены

// const carsOnSale = (cars) => {
//   return cars.filter(car => car.onSale)
//   .sort((a, b) => b.price - a.price)

// }
// console.table(carsOnSale(vehicles))

//Реализовать фильтер по свойству amount и получить
//только название модели

// const getAvailableCarNames = (cars, amountThreshold) => {
//   return cars
//     .filter(({ amount }) => amount > amountThreshold)
//     .map(({ model }) => model);
// };
// console.log(getAvailableCarNames(vehicles, 5));

// const getAvailableCarNames = (cars, amountThereshold) => {
//     return cars.reduce((acc, car) => {
//         if (car.amount > amountThereshold) {
//             acc.push(car.model)
//         }
//         return acc
//     }, [])
// }
// console.log(getAvailableCarNames(vehicles, 10));

// const ownMap = (arr, callback) => {
//   // console.log(arr);
//   // console.log(callback);
//   const newArray = []
//   for (let i = 0; i < arr.length; i += 1) {
//     // console.log(arr[i]);
//     newArray.push(callback(arr[i], i, arr));
//   }
//   return newArray;
// }

// const planets = ['Земля', 'Марс', 'Венера', 'Юпітер'];

// const planetsInUpperCase = ownMap(planets, (planet, index, array) => planet.toUpperCase());
// console.log(planetsInUpperCase);

// const planetLangth = ownMap(planets, (planet) => planet.length)
// console.log(planetLangth);

// const ownFilter = (arr, callback) => {
//   const newArray = []
//   for (let i = 0; i < arr.length; i += 1) {
//     if (callback(arr[i], i, arr)) {
//       newArray.push(arr[i]);
//    };
//   }
//   return newArray;
// }

// const values = [51, -3, 27, 100500, 21, 68, -42, -37, 100001];

// const positiveValues = ownFilter(values, (value, index, arr) =>
// {
//   // console.log(value); console.log(index); console.log(arr);
//   return value >= 0
// });
// console.log(positiveValues);

//6. Собрать в allTopics массив всех предметов всех курсов
//Выполнить фильтрацию, оставив в uniqueTopics только уникальные элементы

// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];

// const getSubjects = (courses) => {
//   return courses
//     .flatMap((course) => course.topics)
//     .filter((course, idx, arr) => arr.indexOf(course) === idx);
// };

// const getSubjects = (courses) => {
//   return courses
//     .reduce((previous, course) => [...previous, ...course.topics], [])
//     .filter((course, idx, arr) => arr.indexOf(course) === idx);
// };

// console.log(getSubjects(courses));
//Вернуть объект в котором указывается количество тегов
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
// const getTotalTags = (tweets) => {
//   return tweets
//     .flatMap((tweet) => tweet.tags)
//     .reduce((acc, tweet) => {
//       if (!acc[tweet]) {
//         acc[tweet] = 1;
//       } else {
//         acc[tweet] = acc[tweet] + 1;
//       }
//       //   console.log(tweet);
//       // console.log(acc[tweet]);
//       return acc;
//     }, {});
// };
// console.log(getTotalTags(tweets));

// const getTotalTags = (tweets) => {
//   return tweets
//     .flatMap((tweet) => tweet.tags)
//     .reduce((acc, tweet) => ({
//       ...acc,
//       [tweet]: acc[tweet] ? acc[tweet] + 1 : 1}), {});
// };
// console.log(getTotalTags(tweets));



//Создание массива значений Фаренгейта из массива значений Цельсия
// (32 °F − 32) × 5/9 = 0 °C
// t * 1.8 + 32;

let celsius = [-15, -5, 0, 10, 16, 20, 24, 32];
const farenherit = celsius.map(temp => temp * 1.8 + 32);
console.log(farenherit);
