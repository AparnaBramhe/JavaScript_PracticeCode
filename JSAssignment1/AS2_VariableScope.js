/*
2. Variable Scope Check 
What will be the output of the following? 
var x = 10; 
function test() { 
var x = 20; 
console.log(x); 
} 
test(); 
console.log(x); 
*/

var x = 10;     //Global Scope
function test() { 
var x = 20;     //Functional scope
console.log(x); 
} 
test(); 
console.log(x); 