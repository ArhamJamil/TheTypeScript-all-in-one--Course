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
let greeting: string = "Hello Typescript World"
console.log(greeting)
console.log(greeting.toUpperCase()) // We can use String methods only on type:String
// console.log(greeting.toFixed()) -- will throw error as .toFixed is not a Type:String method 


// NUMBERS:
let a:number = 20
let b:number = 10
let sum:number = a + b
// let sum:number = a + "adada" -- will throw type error
console.log(sum)
console.log(sum.toFixed()) // We can use Numbers methods only on type:Numbers but not that of string


// BOOLEANS:
let isValidTypeSyntax: boolean = true
console.log(isValidTypeSyntax)


// TYPE INFERENCE:
/*
    The above code is a way of defining the type but not overall good practice in coding
    bcz TypeScript is already smart enough to detect the scope of variable and allows us
    to write more efficiently with less bugs (hover on variable and see how typescript 
    infer a type smartly), But at more complex time the above code writting get Useful 
*/ 

let myNum = 10
console.log(myNum)
console.log(myNum.toFixed())


// ANY:
let Hero; // this is not a good practice to use , but we can use any for e.g: we dont know what 
         // value will be passed on running the function so we can use it
        // In this cases a good practice will be to declare the scope of variable , let Hero: String;

function getHero() {
    return "SpiderMan"
}

Hero = getHero()


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

function addTwo(num:number) {
    return (num + 2)
}
let value = addTwo(10)
console.log(value)

const LoginUser = (name:string, email:string, isAdult:boolean=true) =>{}
console.log(LoginUser("Arham", "Arham@gmail.com", true))
// For some reason we will not be using the isAdult parameter but typescript doesn't allow us
console.log(LoginUser("arham", "arham@gmail.com"))
// so not to use the isAdult parameter will be to assign a default value to it , hence problem solve

// Better way to write fully purpose FUNCTION
/*
    function addThree(num:number){
         return (num + "String" + 3)
    }

    since in the above function we're not declaring type of return value so type'any' value 
    can be returned , this also doesnot make sense for valid purpose FUNCTION

*/ 

function addThree(num:number): number {
    // return (num + "String") -- it will not allow to return a value for which function is not defined
    return (num+3)
}
let threeValue = addThree(10)
console.log(threeValue)

// Making a FUNCTION a PROCEDURE :
// The type void make sure that nothing is returning to function
const consoleError = (errMsg:string): void => {
    console.log(errMsg)
}

const HandleError = (msg:string): never => {
    throw new Error(msg)
}

// ARRAYS:
let myArray: string[] =["arham", "madeeha", "ahmed"]
// let myArray: string[] =["arham",311313, "ahmed"] -- will throw type error
let isActive: boolean = true
// isActive = 2 -- will throw type error


// OBJECTS :

const User_Obj = {
    name: "Arham",
    email: "arham@gmail.com",
    isActive: true,
}

function CreateUSer():{name: string, email: string} {
    
    return {name:"arham", email:"a@gmail.com",}
}

// The above function is object returning function which will take 
// object as a parameter with name and email properties , and no other properties

// TYPE ALIASES, READONLY and OPTIONAL: :
/*
We’ve been using object types and union types by writing them directly in type annotations. This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.

A type alias is exactly that - a name for any type. The syntax for a type alias is:
*/ 

type myUser = {
    readonly _id: number
    name: string,
    email: string,
    password: string,
    isActive: boolean,
    creditCard_details?: number // the ? with creditDetails is optional parameter from which a object may
                                // or may not contain this value this can be done with var, functional params etc ...

}

function createUser(User: myUser): myUser {
    console.log(User.name)
    console.log(User.email)
    console.log(User.password)
    console.log(User.isActive)
    return User
}
createUser({_id:12131,name:"aa", email:"dada@hma", password:"adada", isActive:false})

let theUser : myUser = {
    _id: 1231,
    name: "Ahmed",
    email: "ahmed@gmail.com",
    password: "qwertyuiop",
    isActive: false
    // Here creditDetail is not passed thus we're not receiving any error bcz its optional
}

// console.log(theUser._id = 2212) cant assign a value to id bcz it is readonly property which doesnot allow original value to be overwritten 
console.log(theUser.name)
console.log(theUser.email)

type creditNumber = {
    num : number
}

type creditName = {
    name: string
}

type creditDate = {
    date: string
}

type creditDetails = creditName & creditNumber & creditDate 
// The & allows to use multiple value inside a one single variable
// in the code above the creditDetails may require all type defined with & 


// UNINOINS IN TYPESCRIPT :

/*
    it allows to be in the situation where you are not pretty sure what type of dat might have to come in , it might be string or might be boolean or might be a number , or either of the two or three , unions is method which allows to declare multiples types of data , which is better way instead of using any 

    let data : string | number 
    data = 3
    data = "3"

    here we can see we can insert two type of data 

*/ 

type UnionUser = {
    name : string
    password: string
}
type UnionAdmin = {
    adminName: string,
    adminPassword: string
    isAdmin: boolean
}

let Arham: UnionUser | UnionAdmin = {name: "arham", password: "arham123"}

Arham = {adminName: "AdminArham", isAdmin: true, adminPassword:"im_adminPass"}

function getDatabaseID (id: number | string){
    console.log(id)
    /* console.log(id.toUpperCase()) Property 'toUpperCase' does not exist on type 'string | number'. bcz typeScript doesnot treat that it is number or string but a new type
    string | number 
    */

    if (typeof id === "string"){
        console.log(id.toUpperCase())
    }
    if(typeof id === "number"){
        console.log(id.toFixed())
    }
}
getDatabaseID(1000)
getDatabaseID("1000")

let ourData1: number[] | string[] =["1,2,4"]
ourData1 = [1,3,4,5,6,6,]
// ourData1 = ["1,3,4,5,5,6", 11312321] -- bcz it is wrong way to assign a mutiple type to array as it treat array either of number or string not both of two 
let ourData2: (number | string | boolean)[] = ["1,2,4", 4242, true]
// Here this declare specify that array may contain three different values


// TUPLES in TypeScript :

let normal_User_Array: (number | string)[] = ["Arham", 2]

/*
    In the above array code we have multiple type of values which array can contain but not in precided order

    To store an value in precised order we use Tuples

    Tuples is simply arry which alllows us to store a value in order which is useful in API call where data should be in ordered way 
*/ 

let tuple_User_Array: [string,number, boolean]
tuple_User_Array = ["Arham", 18, true]
// tuple_User_Array= [20,"Arham", true] -- Throws error

tuple_User_Array[0] = "ArhamJamil"
tuple_User_Array[2] = false



// ENUMS in TypeScript :
/*
    Enums are a feature added to JavaScript by TypeScript which allows for describing a value which could be one of a set of possible named constants.

    members are auto-incremented,This auto-incrementing behavior is useful for cases where we might not care about the member values themselves, but do care that each value is distinct from other values in the same enum.
*/

enum SeatChoice {
    Front,
    Middle,
    Back,
    VIP,
}

let Arham_SeatChoice = SeatChoice.Front

enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

/*
    Above, we have a numeric enum where Up is initialized with 1. All of the following members are auto-incremented from that point on. In other words, Direction.Up has the value 1, Down has 2, Left has 3, and Right has 4.
*/ 



// INTERFACE in TYPESCRIPT 

interface Human {
    FirstName: string
    LastName: string
    Age: number
}

let Inteface_User1: Human = {FirstName: "Arham", LastName:"Jamil", Age:18}
