/*
Type Casting
----------------
One type of data we can convert into other type is called type casting

In JS we have two types of Conversion
---------------------------------------
1.Type Coercion (Implicit Type casting)
--------------------------------------------
-In Js type will be automatiocally converted into other type if it is 
compatible.
-It is responsibility of Js Engine

2.Explicit casting
------------------------------
- It is manual conversion and as per reuqirement we do it
Number() constructor
String()
Boolean() 

Constructor
----------------
It is special method who is responsible to initialize Object
In class structure we use constructor

Boolean Conversion
=====================
truthy and falsy
---------------------
-Any value which is true in boolean context is called truthy value
ex: any non zero number,non empty string

- Any value which is false in boolean context is called falsy value
ex: 0,NaN,"",undefined,null


*/
console.log("-----Type Coercion (Implicit Type casting)----");
console.log("----String conversion------");
/*
boolean/number----->convert into----->string

when any expression is written with number/boolean/string and + operator used 
then number/boolean type will coerced into string type

*/

let a="Hello"+190;//here 190 which number type that coerced into string "190"
console.log(a);//Hello190
console.log(typeof a);//string

let b="10"+20+50;//here 20 and 50 conerced into string
console.log(b);//102050
console.log(typeof b);//string

let c=true+50+"100";//here true(1)+50=51 then 51 coerced into string
console.log(c);//51100
console.log(typeof c);//string

let d="90"+true+45+"10"//here true,45 will coerced into string
console.log(d);//90true4510
console.log(typeof d);//string


console.log("----Number conversion------");

/*
string/boolean----->convert into----->number

when any expression is written with number/boolean/string and operators like -,*,/ used 
then string(compatible)/boolean type will coerced into number type

*/

let i="100"/10;//here "100"will coerced into 100 then 100/10=10
console.log(i);//10
console.log(typeof i);//number

let j="hi"/5;
console.log(j);//NaN
console.log(typeof j);//number

let r=90-"30"*true;//here "30" coerced into 30 90-30=60 true coerced into number
console.log(r);//60
console.log(typeof r);//number

let y="78"-15+100+"56";//here "78" coerced into number 78-15=63+100=163+"56"=16356
console.log(y);//16356
console.log(typeof y);//string

console.log("------Explicit Casting------");

//string(compatible)--->number: Number()

let t="1234";
console.log(typeof t);//string
//string to number
let stringToNumber=Number(t);
console.log(stringToNumber);//1234
console.log(typeof stringToNumber);//number

//number/boolean----->string : String()

let num=89;
console.log(typeof num);//number
//number to string: String()
let numToString=String(num);
console.log(numToString);//"89"
console.log(typeof numToString);//string


console.log("--------Number-------");
console.log(Number("389"));//389
console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number(null));//0
console.log(Number(undefined));//NaN
console.log(Number("Hello"));//NaN

console.log("--------------------");

/*
Scenario: Amount validation
"Your total amount is 5000"
validate this bill message that amount should be less than 10000
*/

let bill="Your total amount is 5000";
//index  0      1      2     3   4

//extract the 5000 from string
let data=bill.split(" ")[4];
console.log(data);//5000
console.log(typeof data);//string

//string to number conversion:Number()
let amount=Number(data);
console.log(amount);//5000
console.log(typeof amount);//number

//validate it should be less than 10000
//conditional statements
if(amount<10000)
{
    console.log("Amount match....Test Pass!");
    
}else{
    console.log("Amount is not match...Test Fail!");
    
}

console.log("------Boolean Conversion-----");
/*

Boolean Conversion
=====================
truthy 
---------------------
-Any value which is true in boolean context is called truthy value
ex: any non zero number,non empty string

falsy
-----------------
- Any value which is false in boolean context is called falsy value
ex: 0,NaN,"",undefined,null
*/

console.log(Boolean("Jay"));//true
console.log(Boolean(1234));//true
console.log(Boolean(56.77));//true
console.log(Boolean(true));//true

console.log(Boolean(""));//empty string false
console.log(Boolean(0));//false
console.log(Boolean(null));//false
console.log(Boolean(56));//true
console.log(Boolean(undefined));//false
console.log(Boolean(NaN));//false