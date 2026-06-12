/*
4. Let vs Var 
What will be the output? 
*/
function testScope() { 
if (true) { 
var a = 10; 
let b = 20; 
} 
console.log(a); // ? 
console.log(b); // ? 
} 
testScope(); 
