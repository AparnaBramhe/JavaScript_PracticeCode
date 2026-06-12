/*
Scenario: 
if score is equal more than 90 then grade--->A
if score is equal and more than 95--->A++
otherwise grade is: B
*/

let score=94;

if(score>=90)
{
    if(score>=95)
    {
        console.log("A++");
        
    }
    else
    {
        console.log("A");
    }
}
else
{
    console.log("B");    
}