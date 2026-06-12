/*
-Switch Case we use for multiple conditions validation
Key === value
-We dont use any methods or operators in case value
- We can use break statement in every case
- break statment use to exit from switch case body/scope

break statment we use only with switch-case  and loop
*/

//traffic lights
let color="orange";
switch (color) 
{
    case "red":
        console.log("STOP");
            break;
    case "yellow":
        console.log("READY"); 
            break;
    case "green":
        console.log("GO");                 
            break;
    default:
        console.log("---ERROR----");
            
}
console.log("---------------------");

//browser validation for switch case

//To ignore white space from string :trim()

let browserName="  Edge";

switch(browserName.trim().toLowerCase())
{
    case "chrome":
            console.log("Test case is executing on chrome");
            break;
     case "edge":
            console.log("Test case is executing on edge");
            break;
     case "firefox":
            console.log("Test case is executing on firefox");
            break;
    default:
        console.log("Invalid browser for Test!");           
}
console.log("-------------------");

//calculator
let num1=10,num2=30;
let operator="-";

switch (operator) {
    case "+":
        console.log("Addition is: "+(num1+num2));
        break;
     case "-":
        console.log("Subtraction is: "+(num1-num2));
        break;
     case "*":
        console.log("Multiplication is: "+(num1*num2));
        break;
     case "/":
        console.log("Division is: "+(num1/num2));
        break;
    
    default:
        break;
}
