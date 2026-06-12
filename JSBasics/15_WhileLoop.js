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
Scenarios: Webtable(pagination)
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

//print hello statment 5 time
let i=1;
while(i<=5)
{
    console.log("Hello");
    i++;
}

//sum of digits logic
//90,123,1234 number of digits not fixed

let num=1020,rem,sum=0;
while(num>0)
{
    rem=num%10;
    num=Math.floor(num/10);
    sum=sum+rem;
}
console.log("Sum of digitis: "+sum);

console.log("-------------------");

let num1=12356,rm,res=0;

while(num1>0)
{
    rm=num1%10;
    num1=Math.floor(num1/10);
    res=res*10+rm;
}
console.log("Reverse number is: "+res);
/*
try
-----------
1.Write logic to test palindrome number
2.Write logic to test Armstrong number like 153
*/