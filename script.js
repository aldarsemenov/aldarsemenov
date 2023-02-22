//1 zadanie
for (let i=1;i<=10;i++) {
if (i%2 ==0){
    alert('Четное число = '+i);
}
}
//2 zadanie
let j=1;
while (true){
    if (j==5){
        break;
    }
    j++;
}
alert('Количество итераций = '+j);

//3 zadanie
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
let buchler  = { 
     //бухлер
    ing1: 'beef',
    ing2: 'potato',
    costPrice: 100,
    cost: 230
}

let menu = [pasta,zharexa,booza,buchler]; // создание массива
let profit=0;
let nomer=0;
for (i=0;
    i<menu.length;
    i++)
    {
        profit= menu[i].cost-menu[i].costPrice;
        
        alert('Прибыль с единицы товара = '+profit);
        nomer=menu[i].length;
        menu[i].nomer=profit;
        alert(JSON.stringify(menu[i]));
    }

   