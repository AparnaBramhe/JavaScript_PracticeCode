/*
What is Variable
----------------
Variable is a name of the storage location where we can store data.
To declare variable in JS we use keywords
1) var(older)
- Scope:Global+Functional
- Re-declaration is allowed
- Re-assignment is allowed
- var is hoisted (we can access the value, before declaration of variable)
Modern
2) let(mutable data - data which can be changed)
- Scope:Global+Block
- Re-declaration is not allowed
- Re-assignment is allowed
- let is hoisted but due to TDZ(Temporal Dead Zone) if you access/call variable
  before declaration it will throw error

3) const(immutable data - data which cannot be changed)
- Scope:Global+Block
- Re-declaration is not allowed
- Re-assignment is not allowed
- const is hoisted but due to TDZ(Temporal Dead Zone) if you access/call variable
  before declaration it will throw error

syntax:
    let/const variableName = value;
Examples:
    let age = 26;
    let fname = "Aparna";

Datatypes
---------
- datatypes define type of data which can store into variable
- JS is dynamically typed language, so in this language we don't need 
to define datatype for a variable.

In JS everything is an object
-----------------------------
String/Number/Boolean/Object/Array - Interfaces

JS supports 2 types of datatypes:
1. Primitive(primary)
    1. number
    2. string
    3. boolean
    4. undefined
    5. null
Added after ES6, but we dont use these in Automation
    6. BigInt
    7. Symbol

2. Non-primitive(Object/reference details)
    1. Object
    2. Array

typeof operator
    In JS to check datatype of a vriable, typeof operator is used.
*/

console.log("--------number----------");
/*
Every number like any positive integer or negative integer,
decimal digit number is represented as number type in JS
*/
console.log("---------number--------");
let num1 = 100;
console.log(num1);//100
console.log(typeof num1);//number

let num2 = -100;
console.log(num2);//-100
console.log(typeof num2);//number

let num3 = 89.78;
console.log(num3);//89.78
console.log(typeof num3);//number

let age = 26;
console.log(typeof age);//number
age = true;
console.log(typeof age);//boolean
age = "Jay";
console.log(typeof age);//string

console.log("---------boolean--------");

let isActive = true;
console.log("Is student active?: "+isActive);//concatenate
console.log("Is student active?: ",isActive);//concatenate and adds a space

console.log(typeof isActive);//boolean

let isEmployeed = false;
console.log(isEmployeed);//boolean
console.log(typeof isEmployeed);//boolean

console.log("---------string--------");
/*
String is collection of characters
In JS there are 3 ways to declare string
1. Using single quotes ''
2. Using double quotes ""
3. Template string using back tick ``(Added in ES6)
*/
let fname = 'Jay';
console.log(fname);//Jay
console.log(typeof fname);//string

let lname = "Nigade";
console.log(lname);//Nigade
console.log(typeof lname);//string

let email = 'jay@gmail.com'
console.log(email);//jay@gmail.com
console.log(typeof email);//string

/*let profileData = "I am Priyanka,having 15 years of experience in IT.
I am ISTQB cerified tester, completed my masters in Computers!";
let profileData = "I am Priyanka,having 15 years of experience in IT."+
"I am ISTQB cerified tester, completed my masters in Computers!";*/

let profileData = `I am Priyanka,having 15 years of experience in IT.
I am ISTQB cerified tester, completed my masters in Computers!`;
console.log(profileData);
console.log(typeof profileData)

/*
To read external data from variable into template string, 
use syntax ${variableName}
*/
let cyear = 2026;
let diskSize = "2 TB";

//API Testing
let requestPayload = `{
  "name": "Apple MacBook Pro 16",
  "data": {
    "year": ${cyear},
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": ${diskSize}
  }
}`;
console.log(requestPayload);
console.log(typeof requestPayload);

console.log("---------undefined--------");
/*
When we declare any variable without initialization,
then value of that variable will become undefined

default value for a variable is undefined
*/
let dateOfBirth;
console.log(dateOfBirth);//undefined
console.log(typeof dateOfBirth);//undefined

console.log("---------null--------");
/*
null means unknown data
for null variable type of variable will be object type and
this is bug in JS. 

Why does typeof null return "object"?
This is actually a historical bug in JavaScript that has existed 
since the early days of the language. 
For backward compatibility, it was never changed.
*/
let policyMaturityDate = null;
console.log(policyMaturityDate);//null
console.log(typeof policyMaturityDate); //object

console.log("---------ES6--------");
//bigint
console.log("Max number in JS: "+Number.MAX_VALUE);
//1.7976931348623157e+308

//Biggest integer number
let num = 3459843574234235435324;
console.log(num);//3.4598435742342353e+21
console.log(typeof num);//number

let numB = 3459843574234235435325n;
console.log(numB);//3459843574234235435325n
console.log(typeof numB);//bigint

//non-primitive
console.log("---------JS Object--------");
//Object literal way : {}
//Object is key-value pain in JS
let user = {};
console.log(user);//{}
console.log(typeof user);//object

let person = {
    fname:"Sarang",
    id:101
};
console.log(person);//{ fname: 'Sarang', id: 101 }
console.log(typeof person);//object

/*
Symbol: 
    - is used to define unique properties for object, NA for automation
    - is a primitive data type introduced in ES6(2015).
    - is used to declare unique identifier
*/
console.log("---------Symbol--------");
let profile1 = Symbol("QA");
console.log(profile1);//Symbol(QA)
console.log(typeof profile1);//symbol

let profile2 = Symbol("QA");
console.log(profile2);//Symbol(QA)
console.log(typeof profile2);//symbol

//strict equality
console.log(profile1===profile2);//false

console.log("---------Object literal--------");
//Object literal
let product = { 
    name:"iphone",
    price:80000
};
//here product is an object 
//name and price are properties/keys
//and iphone and 80000 are values 
console.log(product);//{ name: 'iphone', price: 80000 }
console.log(typeof product);//object

//access properties
//1. using . notation 
//2. using bracket [""] notation
console.log(product.name);
console.log(product["price"]);

product.price = 90000;
console.log(product);//{ name: 'iphone', price: 90000 }

//unique property to object : symbol
let id = Symbol("pid");
product[id] = 1010;
console.log(product);//{ name: 'iphone', price: 90000, Symbol(pid): 1010 }

product.id=2020;
console.log(product);//{ name: 'iphone', price: 90000, id: 2020, Symbol(pid): 1010 }

product.pid=3030;
console.log(product);
/*
{
  name: 'iphone',
  price: 90000,
  id: 2020,
  pid: 3030,
  Symbol(pid): 1010
}
*/
//to update symbol type data
product[id]=4400;
console.log(product);
/*
{
  name: 'iphone',
  price: 90000,
  id: 2020,
  pid: 3030,
  Symbol(pid): 4400
}
*/
product["id"]=5104;
console.log(product);
/*
{
  name: 'iphone',
  price: 90000,
  id: 5104,
  pid: 3030,
  Symbol(pid): 4400
}
*/