
/*
For multiple condition validation we use ladderif
*/

//declare 3 numbers and test numbers are greater or numbers are equals number

let num1=1000,num2=2000,num3=1000;

if(num1>num2 && num1>num3)
{
console.log(`${num1} is greater than ${num2} & ${num3}`);

}else if(num2>num1 && num2>num3)
{
   console.log(`${num2} is greater than ${num1} & ${num3}`); 
}
else if(num1===num2 && num2===num3)
{
    console.log(`All numbers are equal`);
    
}else{
    console.log(`${num3} is greater than ${num1} & ${num2}`);
}