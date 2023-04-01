let podjarka = {
    name: 'Поджарка',
    ing:['potato','farsh','onion'],
    cost:150 }
let lagman = {
    name:'Лагман',
    ing:['makaron','potato','beef'],
    cost:200}
let pizza = {
    name:'Пицца',
    ing:['cheese','chicken','onion','testo'],
    cost:300}
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


let mainMenu= '';
for (i=0;i<menu2.length;i++){
    
    let cena=0;
    for (j=0;j<menu2[i].ing.length;j++){
         cena = cena+ingPrice[menu2[i].ing[j]];
    }
    //alert('Цена блюда = '+cena);
    let profit= menu2[i].cost-cena;
    //alert('Цена прибыли ='+profit);
    let bluda='';
    bluda= `Название : ${menu2[i].name} \n Цена: ${menu2[i].cost}\n`;
   mainMenu+= bluda;
    
}
alert(mainMenu);
