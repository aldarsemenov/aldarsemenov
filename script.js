let schetchik;
let name = prompt('Как вас зовут?');
alert(name +'Добро пожаловать на мой квиз');

let question = prompt ('Первый вопрос. Назовите столицу Италии')

if (question ='Рим') {
    alert('Верный ответ');
    schetchik= schetchik+1;
}
else {
    alert('Ошибочка')
}
let question2 = prompt ('Назовите столицу Японии')
if (question2 ='Япония') {
    alert('Верный ответ');
    schetchik= schetchik+1;
}
else {
    alert('Ошибочка')
}


alert('Количество правильных ответов'+schetchik);