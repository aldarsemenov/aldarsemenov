let schetchik = 0;
let name = prompt("Как вас зовут?");
alert(name +". Добро пожаловать на мой квиз");

let question = prompt ("Первый вопрос. Назовите столицу Италии")

if (question =="Рим") {
    alert("Верный ответ");
    schetchik= schetchik+1;
} else {
    alert("Ошибочка")
}
let question2 = prompt ("Назовите столицу Японии")
if (question2 =="Токио") {
    alert("Верный ответ");
    schetchik++;
} else {
    alert("Ошибочка")
}

let question3 = prompt ("Назовите столицу Беларуси")
if (question3 =="Минск") {
    alert("Верный ответ");
    schetchik++;
} else {
    alert("Ошибочка")
}
let question4 = prompt("Назовите столицу Германии")
if (question4 =="Берлин") {
    alert("Верный ответ");
    schetchik++;
} else {
    alert("Ошибочка")
}

let question5 = prompt("Назовите столицу Польши")
if (question5 =="Варшава") {
    alert("Верный ответ");
    schetchik++;
} else {
    alert("Ошибочка")
}

alert("Спасибо что прошли мой квиз. Количество правильных ответов  = "+schetchik);