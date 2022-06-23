//1. Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

// const question = prompt("Какое официальное название JavaScript?");

const question = prompt("Какое официальное название JavaScript?");

if ("ECMAScript" === question) {
    alert ("Верно!");
} else {
    alert("Не знаете? ECMAScript!");
}