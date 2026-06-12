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

Scope:
1. Global : 
    Data can be accessed everywhere, 
    inside file/function and outside function also
2. Functional: 
    Data can be accessed only within the function only
    like local variable declaration
3. Block:
    Data can be accessed within that block(if/for/while...etc) only
*/
console.log("-------Global Scope-------");
var fname = "Hiteshi";
let location = "US";
const email = "hiteshi@gmail.com";

console.log("First name is : "+fname);
console.log("Location is : "+location);
console.log("Email is : "+email);

//inside function
function test1()
{
    console.log("------Global data from function---------");
    console.log("First name is : "+fname);
    console.log("Location is : "+location);
    console.log("Email is : "+email);
}
test1();

console.log("-------Functional Scope-------");
console.log("-------Inside Function-------");
function test2()
{
    var profile = "QA";//local data
    let id = 101;
    let bname = "Chrome";
    console.log("Profile is : "+profile);
}
test2();
console.log("-------Outside Function-------");
// console.log("Profile is : "+profile);//ReferenceError: profile is not defined
// console.log("Id is : "+id);//ReferenceError: id is not defined
// console.log("Browser name is : "+bname);//ReferenceError: bname is not defined

console.log("-------Block Scope-------");
if(true)
{
    let toolName = "Playwright";
    console.log("Tool Name : "+toolName);
    const vendor = "Microsoft";
    console.log("Vendor Name : "+vendor);
}
//console.log("Tool Name : "+toolName);//ReferenceError: toolName is not defined
//console.log("Vendor Name : "+vendor);//ReferenceError: vendor is not defined

console.log("---Difference between var, let, const---");
function test3()
{
    var a=20;
    console.log(a);//20
    if(true)
    {
        var a=30;
        console.log("block a: "+a);//30
    }
    console.log("functional a: "+a)//30
}
test3();

console.log("-----------Redeclaration of var------------");
var tool = "Selenium";
var tool = "Cypress";
var tool = "Playwright";
tool = "Appium";
console.log(tool);

console.log("-----------Redeclaration of let and const------------");
//not allowed for let/const
let bookName = "Learn Selenium";
//let bookName = "Learn Cypress";//SyntaxError: Identifier 'bookName' has already been declared
console.log(bookName);
const price = 1000;
//const price = 2000;
//console.log(price);//SyntaxError: Identifier 'price' has already been declared

console.log("-----------Reassignment of let and const------------");
//allowed for let but not const
let city = "Pune";
city = "Mumbai";
console.log(city);
const version = 1.5;
version = 1.6;
console.log(version);//TypeError: Assignment to constant variable.
