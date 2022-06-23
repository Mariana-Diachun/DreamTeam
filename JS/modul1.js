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
const globalMinutes = 90;
let ourth = Math.floor(globalMinutes / 60);
ourth = String(ourth).padStart(2, 0);
let minse = globalMinutes % 60;
minse = String(minse).padStart(2, 0);
console.log(`${ourth}:${minse}`);
