interface UserInterface{
    name: string;
    email: string; 
    age: number;
    register();
    payInvoice();
}

class User implements UserInterface{
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age;

        console.log(`
        User created! 

        Name: ${this.name} 
        Email: ${this.email} 
        Age: ${this.age}`);
    }

    register(){
        console.log(`${this.name} is now registered!`)
    }

    payInvoice(){
        console.log(`${this.name} paid invoice!`)
    }
}

class Members extends User{
    id: number;

    constructor(id: number, name: string, email: string, age: number){
        super(name, email, age)
        this.id = id;
    }

    payIinvoice(){
        super.payInvoice();
    }
}

// let Kei = new User("Keimoto", "keimoto@gmail.com", 22);
// Kei.register();

let Kei: User = new Members(1, "KeiKeishi", "keimoto@gmail", 100);

Kei.payInvoice();