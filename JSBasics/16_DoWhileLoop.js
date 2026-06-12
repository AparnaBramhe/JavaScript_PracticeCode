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
scenario: one time testing

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
let i=1;
do
{   
    console.log("Hello");
    i++;
}while(i<=5);

console.log("-----------");

let j=1;
do
{
    console.log("Hi....");
    j++;
}while(j>10);