
   
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
    let ingr = ['makaron','cheese','milk','chicken','potato','onion','pork','farsh','testo','beef'];
    let price= [10,20,10,30,20,10,60,20,5,80];
    profit=0;
    let cena=0;
    let MainMenu= '';
    for (i=0;i<menu2.length;i++){
        for (j=0;j<menu2[i].ing.length;j++){
            for (k=0;k<ingr.length;k++){
                if (menu2[i].ing[j]==ingr[k]){
                    cena = cena+price[k];
                }
            }
        }
        //alert('Цена блюда = '+cena);
        profit= menu2[i].cost-cena;
        //alert('Цена прибыли ='+profit);
        let bluda='';
        bluda= `Название : ${menu2[i].name} \n Цена: ${menu2[i].cost}\n`;
       MainMenu+= bluda;
        cena=0;
        profit=0;
    }
    alert(MainMenu);
   
   
   
    