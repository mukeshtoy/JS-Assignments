class User{
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email= email;
    }
    login(){
        console.log(`${this.name}(${this.age}) has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name}(${this.age}) has logged out`);
        return this;
    }
}
class Moderator extends User{
    constructor(name, age, email){
        super(name, age, email);
        this.coins=0;

    }
    addCoins(){
        this.coins++;
        console.log(`${this.name}(${this.age}) has ${this.coins} coins(s) now`);
        return this;
    }
    removeCoins(){
        this.coins--;
        console.log(`${this.name}(${this.age}) has ${this.coins} coin(s) now`);
        return this;
    }   
}
let user1 = new User("Ram", 30, "ram111@gmail.com");
user1.login().logout();

let user2 = new Moderator("Raju", 25, "raj123@gmail.com");
user2.addCoins().addCoins();
user2.removeCoins();