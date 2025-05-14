//notatki
let o1 = { test:1 }
let o2 = {__proto__: o1, test: 2}
console.log(o1)
console.log(o2)
console.log(o1.test, o2.test)

function f()
{
    let x =5;
    return function(){
        return x;
    }
}

console.log(f()())
let y = f();

console.log(y())

//zadanie

class book{
    constructor(){
        this.users = []
    }

    addUser(name, age, phone)
    {
        let user = {
            name: name,
            age: age,
            phone: phone
        }
        this.users.push(user)
    }

    showUsers()
    {
        console.log("Wszyscy użytkownicy w książce")
        for (let i = 0; i < this.users.length; i++)
        {
            console.log(this.users[i])
        }
    }

    findByName(name)
    {
        for (let i = 0; i < this.users.length; i++)
        {
            if(this.users[i].name === name)
            {
                console.log(this.users[i]);
                return;
            }
        }
        console.log(false);
    }

    findByPhone(phone)
    {
        for (let i = 0; i < this.users.length; i++)
        {
            if(this.users[i].phone === phone)
            {
                console.log(this.users[i]);
                return;
            }
        }
        console.log(false);
    }

    getCount()
    {
        console.log(this.users.length);
    }
}

let ksiazka = new book();

ksiazka.addUser('John', 23, 123);
ksiazka.addUser('John2', 43, 1234);
ksiazka.addUser('John Wick', 32, 12345);
ksiazka.showUsers();
ksiazka.findByName('John2');
ksiazka.findByPhone(12345);
ksiazka.findByPhone(123456);
ksiazka.getCount();