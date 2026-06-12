/*
Function:
    Group of statements we can write to perform certain functionality/task.
Two types:
1. Function Declaration
2. Function Expression
    2.1 Anonymous Function
    2.2 Arrow(short hand) Function
*/

console.log("--------Function Declaration--------");
//definition
function test1()
{
    console.log("test1 is calling...");
}
//calling
test1();

console.log("--------Function Expression--------");
console.log("--------Anonymous Function--------");
//definition
let test2 = function()
{
    console.log("test2 calling...");
}
//calling
test2();

console.log("--------Arrow(short hand) Function--------");
//definition
let test3 = ()=>{
    console.log("test3 calling...");
}
//calling
test3();
