/*
    Object Oriented Programming : (OOPs)
        it is a programming praadigm("how we write and organized code") based on the concept of objects
        we use objects to model (describe) real-world or abstract features;

        objects may contain data(properties) and code(methods) , in OOP objects are
        self contained pieces /block of code
        Objects are building blocks of application and ineract with one another

    Classes and Instance :
        Class -> is a blueprint which we can create new objects 

        Instance -> New object created from the class , Like a real house from an abstract blueprint 



*/

class Human1 {
    firstName: string;
    lastName: string;

}

const user1 = new Human1()
console.log(user1.firstName = "arham")

const user2 = new Human1()
console.log(user2.firstName = "madeeha")

class Human2 {
    firstName: string;
    lastName: string;

    // To wrtite name dynamically
    // In class-based, object-oriented programming, a constructor is a special type of subroutine called to create an object. It prepares the new object for use, often accepting arguments that the constructor uses to set required member variables.
    constructor(fname: string, lname: string) {
        // "this" refers to use class and inside all properties defined within class, this is an empty object to add value from class we can do this by 'this.'
        // console.log(this) => this = {}

        this.firstName = fname
        this.lastName = lname
    }
}

const user3 = new Human2("Arham", "Jamil")
console.log(user3)
const user4 = new Human2("madeeha", "mehmood")

class Animal {
    animal_Name: string;

    constructor(name: string) {
        this.animal_Name = name
    }

    eat(food: string) {
        console.log(`${this.animal_Name} is eating food: ${food}`)
    }
}

let my_cat = new Animal("Cat")
console.log(my_cat)
console.log(my_cat.eat("biryani"))


// The Typescript allows us to use Class as Type literal
let my_Dog: Animal = new Animal("Dog")
console.log(my_Dog)
console.log(my_Dog.eat("Bone"))

class Base {
    n: number = 5
    constructor() { }
}

class Derived extends Base {
    age: number = this.n
    fname: string
    constructor(name: string) {
        // super() is a constructor of Parent class which must be called inside Child class
        // before calling it thorws exception 
        super()
        // After calling we can do any this. things
        this.fname = name

    }
}

let Arham = new Derived("Arham")
console.log(Arham)
console.log(`${Arham.fname} is ${Arham.age} years old`)

// Getter and Setter in OOPS:

class Setting_Length {
    private Length = 0
    // In javascript _Length used to define private props

    // to access the private props of class we can use this by making getter function 
    // and can use this private value outside of class
    get Get_My_Length() {
        return this.Length
    }

    // If we want to set the change the value of private props of class outside of block of class
    // we can use setter function/method to set the value of private props 
    set Set_My_Length(valueToBeSet: number) {
        this.Length = valueToBeSet
    }
}

let newLength = new Setting_Length()
console.log(newLength.Get_My_Length)
console.log(newLength.Set_My_Length = 10) 

// Calculator using OOP:

class Calculator {
    FirstNum: number
    SecondNum: number

    addition(n1: number, n2: number) {
        this.FirstNum = n1
        this.SecondNum = n2
        return (n1 + n2)
    }

    subtraction(n1: number, n2: number) {
        this.FirstNum = n1
        this.SecondNum = n2
        return (n1 - n2)
    }

    multiplication(n1: number, n2: number) {
        this.FirstNum = n1
        this.SecondNum = n2
        return (n1 * n2)
    }

    division(n1: number, n2: number) {
        this.FirstNum = n1
        this.SecondNum = n2
        return (n1 / n2)
    }
}

let cal1 = new Calculator()
console.log(cal1.addition(1, 2))
console.log(cal1.subtraction(1, 2))
console.log(cal1.multiplication(1, 2))
console.log(cal1.division(1, 2))


// INTERFACE & Implements with CLASSES:

// The interface allows to do type Casting with class , means it allows us to define 
// Those properties and methods which are required in more than one class compulsory

/*
Why interfaces are used in TypeScript?
    We should use Interface in TypeScript for validating the structure of an object in the case where we are creating an object, 
    passing object as parameters. The interface is only available in TypeScript code 
    when it compiles JavaScript code its existence disappears it doesn't make our final Source code heavier.
*/


/*
    Why implements? 
        implements is used to implemets the parents class or inteface , so props and methods
        which is define in Parents and Childs Which required these methods and props compulsory , we use this Inheritance as implements

    Why Extends ?
        it is same as Implements , but it allows optional way of defining method and props in Child Element
        but extends only work with Class , not for intefaces, bu a interface can extends another interface
*/

interface Pingable_Sound {
    ping_Sound(): void
    name: string
}

class Ball_1 implements Pingable_Sound {
    ping_Sound(): void {
        console.log("Ping")
    }
    name: string = "cricket_Ball"
}

class Ball_2 implements Pingable_Sound {
    ping_Sound(): void {
        console.log("Ping! Ping!")
    }
    name: string = "Table_tennis_Ball"

    pong_Sound() {
        console.log("Pong! Pong!")
    }
}

class Ball_3 implements Pingable_Sound {
    Bounce_Sound() {
        console.log("I am BOuncing")
    }

    // As the Class implement the interface type 
    // so all the props and methods defined in inteface 
    // must be required in the class otherwise it will throw errror
    // Error =>   Type 'Ball_3' is missing the following properties from type 'Pingable_Sound': ping_Sound, name
    name: string;
    ping_Sound() { }
}


//  MEMBER Visbility in OOP:

/*
    We use this to control certain methods and properties whether tthey are visible outside class

    PUBLIC :
        The default visbility of class member i public , A public member means it can be accessed anywhere
        a public is already default modifier you dont need write public on class member, but for readibility we can write it

    PROTECTED:
        Protected members are only visibl;e to sub Classes of the class ehre they are declared in .

    PRIVATE: 
        private members are only visible to to class and sub methods of that class, but cant be access to another class that extends Parents class where the membere is Private
*/

class Greeter {
    public Greet() {
        console.log("HI !")
    }
    protected name:string;
    NameGreet(n:string){
        console.log(`Hi ${this.name = n}`)
    }
}
const Greet_User1 = new Greeter()
Greet_User1.Greet()
console.log(Greet_User1.NameGreet("Arham"))

class Special_Greeter extends Greeter {
    public GoodMorning(person:string){
        // oK to access protected member here
        console.log(`Good Morning! ${this.name = person} ` )
    }
}

let Special_Greeter_User = new Special_Greeter()
Special_Greeter_User.GoodMorning("Arham")


// Static Members:
/*
    Classes may have static members. These members aren’t associated with a particular instance of the class. They can be accessed through the class constructor object itself
    Static members can also use the same public, protected, and private visibility modifiers:
    Static methods are often utility functions, such as functions to create or clone instances. Public static fields are useful when you want a field to exist only once per class, 
    not on every class instance you create. This is useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

    if we not use static when a fresh object is made using class the property will be rest to initialzer value,
    but if a property is set to static every time when a staic value will be changed in fresh object it will be updated 
    in class , and another object when will be made will have reflected value ,
    thus we can say static member is useful for State management
*/

class Employee {
    static count:number = 0
    id:number = 0
    name:string
    constructor(person:string){
        this.name = person
        this.id = ++Employee.count
        
    }
}

let Obj_person1 = new Employee("Arham")
console.log(`The name of person is: ${Obj_person1.name} with id: ${Obj_person1.id}`)


// GENERIC CLASSES - used to define classes with dynamically Typecaasting :

class BOX <typeValue> {
    contents: typeValue
    constructor(value:typeValue){
        this.contents = value
    }
}

let Generic_obj = new BOX<string>("Rectangle")
console.log(Generic_obj)

// let Generic_obj2= new BOX<number>("8908")
/*
    above code will throw error :
    Argument of type 'string' is not assignable to parameter of type 'number'.
*/ 

let Generic_obj2 = new BOX<number>(10)
console.log(Generic_obj2)