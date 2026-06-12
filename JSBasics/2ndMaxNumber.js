let num1 = 14;
let num2 = 18;
let num3 = 26;
if(num1>num2 && num1>num3)
{
    if(num2>num3)
    {
        console.log(num2 +" is second largest number.");
    }
    else
    {
        console.log(num3 + " is second largest number.");
    }
}
else if(num2>num1 && num2>num3)
{
    if(num1>num3)
    {
        console.log(num1 +" is second largest number.");
    }
    else
    {
        console.log(num3 + " is second largest number.");
    }
}
else
{
    if(num1>num2)
    {
        console.log(num1 +" is second largest number.");
    }
    else
    {
        console.log(num2 + " is second largest number.");
    }
}