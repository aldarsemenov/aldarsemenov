import { comparison } from './comparison.js';
import { profit } from './profit.js';

let a = prompt ('Первое число a');
let b = prompt ('Второе число b');
if (a==b){
    alert('Вы ввели одинаковые значения! ');
}
else{
comparison (a,b);
alert('Наименьшее число = '+comparison(a,b));
}

//2 zadanie
    let podjarka = {
        ing:['potato','farsh','onion'],
        cost:150,
        costPrice:0, 
        raznica:0}
    let lagman = {
        ing:['makaron','potato','beef'],
        cost:200,
        costPrice:0,
        raznica:0}
    let pizza = {
        ing:['cheese','chicken','onion','testo'],
        cost:300,
        costPrice:0,
        raznica:0}
    let menu2=[podjarka,lagman,pizza];

    let ingPrice ={
        makaron:10,
        cheese:20,
        milk:10,
        chicken:30,
        potato:20,
        onion:10,
        pork:60,
        farsh:20,
        testo:5,
        beef:80
    }
   
   

    for (i=0;i<menu2.length;i++){
        let cena=0;
        for (j=0;j<menu2[i].ing.length;j++){
                cena = cena+ingPrice[menu2[i].ing[j]];
                }
                menu2[i].costPrice=cena;
                cena=0;
                alert('Цена блюда ='+menu2[i].costPrice);
                let dohod=0;
                dohod= profit (menu2[i].cost,menu2[i].costPrice);
                menu2[i].raznica=dohod;
                alert('Доход = '+menu2[i].raznica);
            }
        
       
        
        
    