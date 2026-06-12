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
test1();
function test1()
{
    console.log("Function test1 declaration..");
}
//Output : Function test1 declaration

//test2(); ReferenceError: Cannot access 'test2' before initialization
let test2 = function()
{
    console.log("Function test2 declaration..");
}

//test3(); ReferenceError: Cannot access 'test3' before initialization
let test3 = ()=>{
    console.log("Function test3 declaration..");
}