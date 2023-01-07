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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human1 = /** @class */ (function () {
    function Human1() {
    }
    return Human1;
}());
var user1 = new Human1();
console.log(user1.firstName = "arham");
var user2 = new Human1();
console.log(user2.firstName = "madeeha");
var Human2 = /** @class */ (function () {
    // To wrtite name dynamically
    // In class-based, object-oriented programming, a constructor is a special type of subroutine called to create an object. It prepares the new object for use, often accepting arguments that the constructor uses to set required member variables.
    function Human2(fname, lname) {
        // "this" refers to use class and inside all properties defined within class, this is an empty object to add value from class we can do this by 'this.'
        // console.log(this) => this = {}
        this.firstName = fname;
        this.lastName = lname;
    }
    return Human2;
}());
var user3 = new Human2("Arham", "Jamil");
console.log(user3);
var user4 = new Human2("madeeha", "mehmood");
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.animal_Name = name;
    }
    Animal.prototype.eat = function (food) {
        console.log("".concat(this.animal_Name, " is eating food: ").concat(food));
    };
    return Animal;
}());
var my_cat = new Animal("Cat");
console.log(my_cat);
console.log(my_cat.eat("biryani"));
// The Typescript allows us to use Class as Type literal
var my_Dog = new Animal("Dog");
console.log(my_Dog);
console.log(my_Dog.eat("Bone"));
var Base = /** @class */ (function () {
    function Base() {
        this.n = 5;
    }
    return Base;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived(name) {
        var _this = 
        // super() is a constructor of Parent class which must be called inside Child class
        // before calling it thorws exception 
        _super.call(this) || this;
        _this.age = _this.n;
        // After calling we can do any this. things
        _this.fname = name;
        return _this;
    }
    return Derived;
}(Base));
var Arham = new Derived("Arham");
console.log(Arham);
console.log("".concat(Arham.fname, " is ").concat(Arham.age, " years old"));
// Getter and Setter in OOPS:
var Setting_Length = /** @class */ (function () {
    function Setting_Length() {
        this.Length = 0;
    }
    Object.defineProperty(Setting_Length.prototype, "Get_My_Length", {
        // In javascript _Length used to define private props
        // to access the private props of class we can use this by making getter function 
        // and can use this private value outside of class
        get: function () {
            return this.Length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting_Length.prototype, "Set_My_Length", {
        // If we want to set the change the value of private props of class outside of block of class
        // we can use setter function/method to set the value of private props 
        set: function (valueToBeSet) {
            this.Length = valueToBeSet;
        },
        enumerable: false,
        configurable: true
    });
    return Setting_Length;
}());
var newLength = new Setting_Length();
console.log(newLength.Get_My_Length);
console.log(newLength.Set_My_Length = 10);
// Calculator using OOP:
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.addition = function (n1, n2) {
        this.FirstNum = n1;
        this.SecondNum = n2;
        return (n1 + n2);
    };
    Calculator.prototype.subtraction = function (n1, n2) {
        this.FirstNum = n1;
        this.SecondNum = n2;
        return (n1 - n2);
    };
    Calculator.prototype.multiplication = function (n1, n2) {
        this.FirstNum = n1;
        this.SecondNum = n2;
        return (n1 * n2);
    };
    Calculator.prototype.division = function (n1, n2) {
        this.FirstNum = n1;
        this.SecondNum = n2;
        return (n1 / n2);
    };
    return Calculator;
}());
var cal1 = new Calculator();
console.log(cal1.addition(1, 2));
console.log(cal1.subtraction(1, 2));
console.log(cal1.multiplication(1, 2));
console.log(cal1.division(1, 2));
var Ball_1 = /** @class */ (function () {
    function Ball_1() {
        this.name = "cricket_Ball";
    }
    Ball_1.prototype.ping_Sound = function () {
        console.log("Ping");
    };
    return Ball_1;
}());
var Ball_2 = /** @class */ (function () {
    function Ball_2() {
        this.name = "Table_tennis_Ball";
    }
    Ball_2.prototype.ping_Sound = function () {
        console.log("Ping! Ping!");
    };
    Ball_2.prototype.pong_Sound = function () {
        console.log("Pong! Pong!");
    };
    return Ball_2;
}());
var Ball_3 = /** @class */ (function () {
    function Ball_3() {
    }
    Ball_3.prototype.Bounce_Sound = function () {
        console.log("I am BOuncing");
    };
    Ball_3.prototype.ping_Sound = function () { };
    return Ball_3;
}());
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
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.Greet = function () {
        console.log("HI !");
    };
    Greeter.prototype.NameGreet = function (n) {
        console.log("Hi ".concat(this.name = n));
    };
    return Greeter;
}());
var Greet_User1 = new Greeter();
Greet_User1.Greet();
console.log(Greet_User1.NameGreet("Arham"));
var Special_Greeter = /** @class */ (function (_super) {
    __extends(Special_Greeter, _super);
    function Special_Greeter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Special_Greeter.prototype.GoodMorning = function (person) {
        // oK to access protected member here
        console.log("Good Morning! ".concat(this.name = person, " "));
    };
    return Special_Greeter;
}(Greeter));
var Special_Greeter_User = new Special_Greeter();
Special_Greeter_User.GoodMorning("Arham");
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
var Employee = /** @class */ (function () {
    function Employee(person) {
        this.id = 0;
        this.name = person;
        this.id = ++Employee.count;
    }
    Employee.count = 0;
    return Employee;
}());
var Obj_person1 = new Employee("Arham");
console.log("The name of person is: ".concat(Obj_person1.name, " with id: ").concat(Obj_person1.id));
// GENERIC CLASSES - used to define classes with dynamically Typecaasting :
var BOX = /** @class */ (function () {
    function BOX(value) {
        this.contents = value;
    }
    return BOX;
}());
var Generic_obj = new BOX("Rectangle");
console.log(Generic_obj);
// let Generic_obj2= new BOX<number>("8908")
/*
    above code will throw error :
    Argument of type 'string' is not assignable to parameter of type 'number'.
*/
var Generic_obj2 = new BOX(10);
console.log(Generic_obj2);
