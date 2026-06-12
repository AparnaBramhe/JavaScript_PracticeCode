/*
Loop
------------
For number of iterations we used

1.for loop
--------------
- When number of  iterations are known to you/fixed
Scenarios: 
- calendar/datepicker 30/31/28/29
- dropdown/menu/list firxed number of options

2.while loop
--------------
- While loop is entry controlled loop
- when number of iterations are not fixed/unknown to you
Scenarios: 
- Webtable(pagination)
- every page load time(page load timeout)
- some actions like click on arrow

3.dowhile loop
-----------------
- do while loop is exit control loop
- One time iteration without matters what is outcome of condition
    scenario: one time time

Working with Array/Object
--------------------------
4. for...of loop
------------------------
- It is applicable for Array/string
- For...of loop is iterates over values

5. for...in loop
------------------------
- It is applicable for object
- For...in loop is iterates over keys & index
*/

//print hello statment 5 times
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");

console.log("-----------------");

//print Hello 5times

for(let i=1;i<=5;i++)
{
    console.log("Hello");
    
}

console.log("-----------------");
//print 1 to 10 numbers


for(let i=1;i<=10;i++)
{
    console.log(i);
    
}

console.log("-----------------");
//print 10 to 1

for(let i=10;i>=1;i--)
{
    console.log(i);
    
}

console.log("------Interview question-----------");

//for loop condition is always true

// for(;;)
// {
//     console.log("hi");
    
// }

//print sum of 100 natural number
//1+2+3+4+.....+100= 5050

let sum=0;
for(let i=1;i<=100;i++)
{
   sum=sum+i;
}
console.log("sum of 100 natural number:"+sum);

//print factorial of5
//5!=5*4*3*2*1 =120

let fact=1;

for(let i=5;i>=1;i--)
{
    fact=fact*i;
}

console.log("Factorial of 5 is:"+fact);