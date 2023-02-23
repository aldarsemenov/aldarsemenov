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
    let podjarka = [potato,farsh,onion];
    let lagman = [makaron,potato,beef];
    let pizza = [cheese,chicken,onion,testo];
    let menu2=[podjarka,lagman,pizza];
    let price=[150,200,300];
    let ingr = [makaron,cheese,milk,chicken,potato,onion,pork,farsh,testo,beef];
    profit=0;
    let makaron =  10;
    
    let cheese =  20;
    
    let milk = 10;
    
    let chicken =  30;
    
    let potato =20;
    
    let onion =  10;
    
    let pork =  60;
    
    let farsh = 20;
    
    let testo =  5;
    
    let beef = 80;
    
    
    let cena=0;
    for (i=0;i<menu2.length;i++){
        for (j=0;j<menu2[j].length;j++){
            for (k=0;k<ingr.length;k++){
                if (menu2[i][j]==ingr[k]){
                    cena = cena+ingr[k];
                    
                }
            }
        }
        alert('Цена блюда = '+cena);
        profit= price[i]-cena;
        alert('Цена прибыли ='+profit);
        cena=0;
        profit=0;
    }
   
   
   
    