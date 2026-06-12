/*
Hoisting:
    A behaviour in JS where interpreter allocates memory to the variable, 
    function, class or import declarations before executing the code, 
    making them appear as if they have been moved to the top of 
    their containing scope.
1. Memory allocation
2. Execution

Hoisting allows JS to call a variable/functions before even declaration. 
    - var type and function declaration are fully hoisted.
    - let and const type variables are hoisted but they always stay in TDZ
    (Temporal Dead Zone) and if we try to call before declaration, 
    we get an error.
    - same is true for modern functions (Anonymous and arrow).
*/
console.log(a);//undefined
var a=10;
console.log(a);//10

//console.log(x); //ReferenceError: Cannot access 'x' before initialization
let x = 40;

console.log(pi); //ReferenceError: Cannot access 'pi' before initialization
const pi = 3.14;
