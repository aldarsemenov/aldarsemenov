let login = prompt ('Введите логин');
let password = prompt ('Введите пароль');
let a=0;

let database = {
    admin:'root',
    user:'123'}


    if (database[login])
    {
        
    if (database[login]==password)
    {
        alert('Вы вошли')
    }
    else {
        alert('Неверный пароль');
    }
}
    else 
    {
        alert('Такого пользователя не существует')
    }

  
    
    