/*
    TYPES IN TYPESCRIPT:
    * String
    * Number
    * Null
    * Object
    * Boolean
    * Void
    * Undefined
    * Tuples
    * Array
    * any
    
    ASSIGNING TYPE TO A VARIABLE:
        " let myvariable: TYPE = value "
*/
// Introduction To TypeScript !
var greeting = "Hello Typescript World";
console.log(greeting);
console.log(greeting.toUpperCase()); // We can use String methods only on type:String
// console.log(greeting.toFixed()) -- will throw error as .toFixed is not a Type:String method 
// NUMBERS:
var a = 20;
var b = 10;
var sum = a + b;
// let sum:number = a + "adada" -- will throw type error
console.log(sum);
console.log(sum.toFixed()); // We can use Numbers methods only on type:Numbers but not that of string
// BOOLEANS:
var isValidTypeSyntax = true;
console.log(isValidTypeSyntax);
// TYPE INFERENCE:
/*
    The above code is a way of defining the type but not overall good practice in coding
    bcz TypeScript is already smart enough to detect the scope of variable and allows us
    to write more efficiently with less bugs (hover on variable and see how typescript
    infer a type smartly), But at more complex time the above code writting get Useful
*/
var myNum = 10;
console.log(myNum);
console.log(myNum.toFixed());
// ANY:
var Hero; // this is not a good practice to use , but we can use any for e.g: we dont know what 
// value will be passed on running the function so we can use it
// In this cases a good practice will be to declare the scope of variable , let Hero: String;
function getHero() {
    return "SpiderMan";
}
Hero = getHero();
// FUNCTIONS:
/*
    
    function addTwo(num) {
        num.toUpperCase()
        return num + 2
    }
    
    let value = addTwo(3)
    let value = addTwo("StringAssignment To Function Which Return Number , Doesn't make Sense")

    The above decalartion is not a TypeDeclarative way of writing a function as it takes type of
    'any' and can be return any value or allows us to use String method is Number or any thing else
    which doesn't make sense and later on these buggy codes throws error on runtime , Here since the function
    is only returing the a value with addition of but still i can use .toUppercase() method , So this is what we are
    not doing in our code as our code should be declarative and understandable !!!!

*/
function addTwo(num) {
    return (num + 2);
}
var value = addTwo(10);
console.log(value);
var LoginUser = function (name, email, isAdult) {
    if (isAdult === void 0) { isAdult = true; }
};
console.log(LoginUser("Arham", "Arham@gmail.com", true));
// For some reason we will not be using the isAdult parameter but typescript doesn't allow us
console.log(LoginUser("arham", "arham@gmail.com"));
// so not to use the isAdult parameter will be to assign a default value to it , hence problem solve
// Better way to write fully purpose FUNCTION
/*
    function addThree(num:number){
         return (num + "String" + 3)
    }

    since in the above function we're not declaring type of return value so type'any' value
    can be returned , this also doesnot make sense for valid purpose FUNCTION

*/
function addThree(num) {
    // return (num + "String") -- it will not allow to return a value for which function is not defined
    return (num + 3);
}
var threeValue = addThree(10);
console.log(threeValue);
// Making a FUNCTION a PROCEDURE :
// The type void make sure that nothing is returning to function
var consoleError = function (errMsg) {
    console.log(errMsg);
};
var HandleError = function (msg) {
    throw new Error(msg);
};
// ARRAYS:
var myArray = ["arham", "madeeha", "ahmed"];
// let myArray: string[] =["arham",311313, "ahmed"] -- will throw type error
var isActive = true;
// isActive = 2 -- will throw type error
// OBJECTS :
var User_Obj = {
    name: "Arham",
    email: "arham@gmail.com",
    isActive: true
};
function CreateUSer() {
    return { name: "arham", email: "a@gmail.com" };
}
function createUser(User) {
    console.log(User.name);
    console.log(User.email);
    console.log(User.password);
    console.log(User.isActive);
    return User;
}
createUser({ _id: 12131, name: "aa", email: "dada@hma", password: "adada", isActive: false });
var theUser = {
    _id: 1231,
    name: "Ahmed",
    email: "ahmed@gmail.com",
    password: "qwertyuiop",
    isActive: false
    // Here creditDetail is not passed thus we're not receiving any error bcz its optional
};
// console.log(theUser._id = 2212) cant assign a value to id bcz it is readonly property which doesnot allow original value to be overwritten 
console.log(theUser.name);
console.log(theUser.email);
