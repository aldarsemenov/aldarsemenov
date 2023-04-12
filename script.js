
// async function addMenu() {
//     let ad = await fetch("/menu.json");
//     let cost = await fetch("/cost.json");
//     menu2 = await ad.json();
//     ingPrice = await cost.json();
//     console.log(menu2)
//     console.log(ingPrice)
//     let ingNonVegan = ["chicken", "pork", "farsh", "beef"];

//     //1 zadanie
//     console.log("1 задание\n");
//     menu2.forEach(function (item) {
//         let costPrice = item.ing.reduce(function (sum, item) {
//             return sum + ingPrice[item];
//         }, 0);
//         console.log(`Наименование ${item.name}: Себестоимость  ${costPrice}`)
//     });


//     //2 zadanie  Используйте `map` , чтобы получить массив только с названием и стоимостью каждого блюда.
//     console.log("2 задание\n");

//     let priceName = menu2.map(function (item) {
//         return `${item.name} : ${item.cost}`;
//     });
//     console.log(priceName);

//     //3.Определите, есть ли в меню хоть одно вегетарианское блюдо, используя `some`.
//     //function которая выводит true если есть не веган ингредиенты
//     let veganEat1;
//     function veganOrNot(item) {
//         veganEat1 = item.ing.some(function (item) {
//             return ingNonVegan.includes(item)

//         })
//     }
//     console.log("3 задание\n");
//     let veganEat = menu2.some(function (item) {
//         veganOrNot(item)
//         return !veganEat1;
//     })
//     console.log(veganEat)

//     //4.Определите, полностью ли у вас вегетарианское меню с помощью `every`.
//     console.log("4 задание\n");
//     let allVeganEat = menu2.every(function (item) {
//         veganOrNot(item)
//         return !veganEat1;
//     });
//     console.log(allVeganEat);

//     //5.Создайте массив с вегетарианскими блюдами с помощью filter.
//     console.log("5 задание\n");
//     let veganMenu = menu2.filter(function (item) {
//         veganOrNot(item)
//         return !veganEat1;
//     });
//     console.log(veganMenu);
// }
// addMenu();//вызов функции





async function addMenu() {


  let [menu2,ingPrice]=  await Promise.all([
        fetch("/menu.json").then((r) => r.json()),
        fetch("/cost.json").then((r) => r.json())
    ])
{
    

    let ingNonVegan = ["chicken", "pork", "farsh", "beef"];

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

    let priceName = menu2.map(function (item) {
        return `${item.name} : ${item.cost}`;
    });
    console.log(priceName);

    //3.Определите, есть ли в меню хоть одно вегетарианское блюдо, используя `some`.
    //function которая выводит true если есть не веган ингредиенты
    let veganEat1;
    function veganOrNot(item) {
        veganEat1 = item.ing.some(function (item) {
            return ingNonVegan.includes(item)

        })
    }
    console.log("3 задание\n");
    let veganEat = menu2.some(function (item) {
        veganOrNot(item)
        return !veganEat1;
    })
    console.log(veganEat)

    //4.Определите, полностью ли у вас вегетарианское меню с помощью `every`.
    console.log("4 задание\n");
    let allVeganEat = menu2.every(function (item) {
        veganOrNot(item)
        return !veganEat1;
    });
    console.log(allVeganEat);

    //5.Создайте массив с вегетарианскими блюдами с помощью filter.
    console.log("5 задание\n");
    let veganMenu = menu2.filter(function (item) {
        veganOrNot(item)
        return !veganEat1;
    });
    console.log(veganMenu);



}
}


addMenu();