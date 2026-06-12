/*
Using IF-else we can validate true/false both condition
*/

//validate number is even or odd
let num=37;

if(num%2===0)
{
    console.log(num+" is Even number");
    
}else{
    console.log(num+" is Odd number");
    
}

console.log("----------------------");
//testing API status code should be 201

let statusCode=301;

if(statusCode === 201)
{
    console.log("POST call completed!");
    
}else
{
    console.log("POST call fail!");
    
}
console.log("----------------------");
//for any code which comes in range 200 to 299 is successfull


let responseCode=244;

if(responseCode>=200 && responseCode<=299)
{
    console.log("This is Successful Response");
    
}else{
    console.log("This is UnSuccessful Response");
}