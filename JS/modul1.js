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
// 5. При загрузке страницы пользователю предлагается
//в prompt ввести число. Ввод добавляется к значению
//переменной total.
//Операция ввода числа продолжается до тех пор,
//пока пользователь не нажмет кнопку Cancel в prompt.
//После того как пользователь прекратил ввод нажав на
//кнопку Cancel, показать alert со строкой "Общая сумма введенных чисел равна [число]."
//Делать проверку,что пользователь ввел именно число,
//а не произвольный набор символов, не нужно.

// let userInput = prompt("Введите число")
// let total = 0;
// while (userInput) {
//     total += Number(userInput);
//     userInput = prompt("Введите число")
// }
// alert (`Общая сумма введенных чисел равна ${total}.`)
// console.log(total)

//7. Напишите цикл, который предлагает ввести
//число больше 100 через prompt.
//Если посетитель ввёл другое число - попросить
//ввести ещё раз и так далее.
//Цикл должет спрашивать число, пока посетитель не
//введёт число больше 100, либо не нажмет кнопку
//Отмена в prompt

//Создайте массив styles с элементами «Джаз» и «Блюз».
//Добавьте «Рок-н-ролл» в конец.
//Замените значение «Блюз» на «Классика».
//Удалите первый элемент массива и выведите его в консоль.
//Вставьте «Рэп» и «Регги» в начало массива.

// const styles = ['Джаз', 'Блюз']
// console.log(styles.push('Рок-н-рол'))

// styles[1] = 'Классика'
// styles.splice(1, 1, 'Классика')
// styles.shift()
// styles.splice(0, 1)
// console.log(styles.shift())
// styles.splice(0, 0, 'Реп', 'Реггі')
// styles.unshift('Реп', 'Реггі')

// console.log(styles)

//Лёша на полке клопа нашёл
//А роза упала на лапу Азора

function checkPalindrome(str) {
  const str1 = str.toLowerCase().replaceAll(" ", "");
  const strArr = str1.split("").reverse();
  const checkStr = strArr.join("");

  console.log(str1 === checkStr);
}

checkPalindrome("А роза упала на лапу Азора");
