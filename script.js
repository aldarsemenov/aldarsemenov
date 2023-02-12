let pasta = {
    ing1: 'makaron',
    ing2: 'cheese',
    ing3: 'milk',
    ing4:'chicken',
    costPrice:70, //себестоимость
    cost: 180      //цена
}
let zharexa = {   
     //жареха
     ing1: 'potato',
     ing2: 'onion',
     ing3: 'pork',
    costPrice:90,
    cost: 190
}
let  booza ={
    ing1: 'farsh',
    int2: 'testo',
    costPrice: 25,
    cost: 55
}
let buchler  = {  //бухлер
    ing1: 'beef',
    ing2: 'potato',
    costPrice: 100,
    cost: 230
}

let menu = [pasta,zharexa,booza,buchler]; // создание массива


menu.shift(); // удаление первого элемента и сдвиг назад

delete pasta.ing2; // удаление ингридиента из обьекта паста
menu.unshift(pasta); //добавление обьекта паста в массив 


// доход с продажи одной порции
let dohod =  `Выручка за продажу одной порции блюда   
Паста = ${pasta.cost-pasta.costPrice}
Жареха = ${zharexa.cost-zharexa.costPrice}
Бууза = ${booza.cost-booza.costPrice}
Бухлеор = ${buchler.cost-buchler.costPrice}`;
console.log(dohod);


//удаление данных с массива
menu.shift(pasta,booza,buchler);
alert(menu)
alert(dohod);

