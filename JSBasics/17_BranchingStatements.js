/*
break
-----------
- break statment used to exit from switch and loop statement

continue
------------
- continue statment will skip certain part of code and continue 
itertion till the end of that expression

return:
--------------
during function
*/

console.log("------break-----");

for(let i=1;i<=10;i++)
{
    if(i>=5)
    {
        break;
    }else
    {
        console.log(i);   
    }
}

console.log("---------------");

for(let i=1;i<=10;i++)
{
    if(i===5)
    {
        break;
    }else
    {
        console.log(i);   
    }
}
console.log("------------------");

for(let i=1;i<=10;i++)
{
    if(i>5)
    {
        break;
    }else
    {
        console.log(i);   
    }
}
console.log("--------Continue----------");

for(let i=1;i<=10;i++)
{
    if(i===8)
    {
        continue;//skip the that iteration and continue with next
    }else
    {
        console.log(i);        
    }
}

console.log("---------------------");

/*
Scenario: If Url of application is not appropriate
If link does not contains http or https protocol then 
no need to test that link this is applicable for baseUrl

2. All links in application
if link does not have href attribute then skip that link
*/

let i=1;
do{
let url="www.google.com";

//skip when url doen not contains protocol
if(!(url.includes("https") || url.includes("http")))
{
    console.log("Url is Invalid and skip this");
    continue;
}
else
{
    console.log("Url is valid ...Test It");    
}
}while(i==10);

console.log("---------------");
//link should have href attribute and it should not be null
do
{
    let href=null;

    if(href===null)
    {
        console.log("Invalid link...skip link");
        continue;
    }
    else
        {
            console.log("Valid link...Test it");   
        }
}while(i==0);