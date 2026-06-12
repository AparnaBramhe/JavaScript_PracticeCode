/*
Simple If is used to validate single true condition

*/



//validate current year

console.log("program starts.....");

let year=2027;

if(year === 2026)
{
    console.log("Year match & current year is: "+year);
    
}

console.log("program ends....");

console.log("-----------------");

/*validate url address: 
url address should have protocol(http/https)
url should not be null

For String equality we use === strict equality
For partial string comparison: includes('partial string')

*/

let baseUrl="https://www.google.com";

//url should have https protocol

if(baseUrl.includes("https"))
{
    console.log("Url is as per standard!");
    
}

console.log("-------------------------");

let actUrl="https://www.amazon.in";

let expUrl="https://www.amazon.in";

//test equality
if(actUrl === expUrl)
{
    console.log("Both urls are same....");
    
}
console.log("-------------------------");

//url should not be null
if(actUrl !== null)
{
console.log("Url is not null...Valid url!");

}