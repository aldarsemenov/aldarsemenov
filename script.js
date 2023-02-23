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
let raznica=0;
for (i=0;
    i<menu.length;
    i++)
    {
        profit= menu[i].cost-menu[i].costPrice;
        
        alert('Прибыль с единицы товара = '+profit);
        raznica=menu[i].length;
        menu[i].raznica=profit;
        alert(JSON.stringify(menu[i]));
    }
// 3 *
    let ingr = [makaron,cheese,milk,chicken,potato,onion,pork,farsh,testo,beef];
    
    let makaron = {
        name: 'makaron',
        cost: 10
    }
    let cheese = {
        name: 'cheese',
        cost: 20
    }
    let milk = {
        name: 'milk',
        cost:10
    }
    let chicken = {
        name: 'chicken',
        cost: 30
    }
    let potato = {
        name: 'potato',
        cost: 20
    }
    let onion = {
        name: 'onion',
        cost: 10
    }
    let pork = {
        name: 'pork',
        cost: 60
    }
    let farsh = {
        name: 'farsh',
        cost:20
    }
    let testo = {
        name: 'testo',
        cost: 5
    }
    let beef = {
        name: 'beef',
        cost: 80
    }
    let f=0;
    let cena=0;
    for (j=0;j<menu.length;j++){
    for (f=0;f<4;f++){
    for (i=0; i<ingr.length; i++){

        if (menu[j].f === ingr[i].name){
            cena=cena+ingr[i].cost;    
        } 
    }
    alert ('cena ingr = '+cena);
    profit= menu[i].cost-cena;
    cena = 0;
    }
    }