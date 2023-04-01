let podjarka = {
    name: 'Поджарка',
    ing:['potato','farsh','onion'],
    cost:150, 
    costPrice:0,
    vegan:false}
let lagman = {
    name:'Лагман',
    ing:['makaron','potato','beef'],
    cost:200, 
    costPrice:0,
    vegan:false}
let pizza = {
    name:'Пицца',
    ing:['cheese','chicken','onion','testo'],
    cost:300, 
    costPrice:0,
    vegan:false}
let salat = {
    name:'Овощной салат',
    ing:['tomato','cucumber'],
    cost:60,
    costPrice:0,
    vegan:true}
let veganKotleti={
    name:'Капустные котлеты',
    ing:['cabbage','onion'],
    cost:90,
    costPrice:0,
    vegan:true}
let menu2=[podjarka,lagman,pizza,salat,veganKotleti];

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
    beef:80,
    tomato:10,
    cucumber:10,
    cabbage:15
}



//1 zadanie

console.log("1 задание\n");
menu2.forEach(function (item) {
    let costPrice = item.ing.reduce(function (sum, item) {
        return sum + ingPrice[item];
    }, 0);
    console.log(`Наименование ${item.name}: Себестоимость  ${costPrice}`)  
});





//2 zadanie  Используйте `map` , чтобы получить массив только с названием и стоимостью каждого блюда.
console.log("2 задание\n");

let priceName = menu2.map(function(item) {
   return `${item.name} : ${item.cost}`;});
console.log(priceName);


//3.Определите, есть ли в меню хоть одно вегетарианское блюдо, используя `some`.
console.log("3 задание\n");

let veganEat = menu2.some(function(index) {
    return  index.vegan==true ;
  });
  console.log(veganEat)
 
//4.Определите, полностью ли у вас вегетарианское меню с помощью `every`.
console.log("4 задание\n");
let allVeganEat = menu2.every(function(index) {
    return  index.vegan==true ;
  });
  console.log(allVeganEat);

//5.Создайте массив с вегетарианскими блюдами с помощью filter.
console.log("5 задание\n");
let veganMenu = menu2.filter(function( index) {
    return  index.vegan==true ;
  });
  console.log(veganMenu);