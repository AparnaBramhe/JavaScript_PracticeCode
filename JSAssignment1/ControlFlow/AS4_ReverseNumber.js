/*Reverse a number using a loop. 
Input:1234 
Output:4321 */

let num = 1234;
let rev=0;
let rem;
while(num>0)
{
    rem = num%10;
    num = Math.floor(num/10);
    rev = rev*10+rem;
}
console.log("Reverse Number : "+rev);