let login = prompt ('Введите логин');
let password = prompt ('Введите пароль');
let a=0;

let database = {
    admin:'root',
    user:'123'}

  //  let dlina=Object.keys(database).length; //считает количество ключей в обьекте
  //  for (let i=0;i<dlina; i++)
  //  { 
   //     let users=Object.keys(database); //конвертирует ключи обьекта в массив
   //     let pwrd=Object.values(database);//конвертирует значения в массив
   //     if ((login==users[i])&&(password==pwrd[i]))
  //      { alert('Вы вошли');
  //      break;
  //      }
  //      if ((login==users[i])&&(password!=pwrd[i]))
  //      { alert('Неверный пароль');
  //      break;
  //      }
   //     if (login!=users[i])
  //      {
  //          a=a+1;
  //      }
  //  }
  //  if (a==dlina)
 //   {
  //      alert('Такого пользователя не существует')
  //  }
    //alert(database.admin);

   // alert(database.login);

   
  //  if (database[login])
 //   {
        
 //   if (database[login]==password)
 //   {
 //       alert('Вы вошли')
 //   }
  //  else {
 //       alert('Неверный пароль');
 //   }
//}
//    else 
 //   {
 //       alert('Такого пользователя не существует')
 //   }

    
   if (database[login]==password&&database[login])
   {
       alert('Вы вошли')
   }
  if (database[login]&&database[login]!=password){
   alert('Неверный пароль');
  }
  if (database[login]==undefined)
  {
   alert('Такого пользователя не существует')
  }
    

  
    
    