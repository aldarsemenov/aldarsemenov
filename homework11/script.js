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
   
    let podjarka = {
        ing:['potato','farsh','onion'],
        cost:150 }
    let lagman = {
        ing:['makaron','potato','beef'],
        cost:200}
    let pizza = {
        ing:['cheese','chicken','onion','testo'],
        cost:300}
    let menu2=[podjarka,lagman,pizza];
    let ingr = ['makaron','cheese','milk','chicken','potato','onion','pork','farsh','testo','beef'];
    let price= [10,20,10,30,20,10,60,20,5,80];
    profit=0;
    let cena=0;

    for (i=0;i<menu2.length;i++){
        for (j=0;j<menu2[i].ing.length;j++){
            for (k=0;k<ingr.length;k++){
                if (menu2[i].ing[j]==ingr[k]){
                    cena = cena+price[k];
                }
            }
        }
        alert('Цена блюда = '+cena);
        profit= menu2[i].cost-cena;
        alert('Цена прибыли ='+profit);
        cena=0;
        profit=0;
    }
   
   
   
    