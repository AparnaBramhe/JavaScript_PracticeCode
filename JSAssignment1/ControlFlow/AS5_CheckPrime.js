//Check whether a number is prime or not. 
//Prime number has only 2 factors 1 and number itself.
let num = 51;
let isPrime = true;
if (num<=1)
{
    isPrime = false;
}
else if (num===2)
{
    isPrime = true;
}
else
{
    for(let i=2; i<=Math.sqrt(num); i++)
    {
        if(num%i === 0)
            isPrime = false;
            break;
    }
}
if(isPrime === false)
    console.log(`${num} is not prime`);
else
    console.log(`${num} is prime`);