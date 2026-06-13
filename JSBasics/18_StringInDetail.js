/*
String is Prdefined Immutable Object and primitive data type in Js
-String is collection of characters
-Strings are immutable and once value declare we cannot modify value of
string ,if value modified then internally in JsEngine string creates new address/object

{'J','a','y}
 0   1   2

 property
------------------
length 

 Methods
 ----------------
1. inclues()
2. toUpperCase()
3. toLowerCase()
4. trim()
6. chatAt()
7. indexOf()
8. replace()
9. startswith()
10. endsWith()
11. replace()
12. split()
*/

//Strings are immutable
let name="Jay";
console.log(name);
console.log(typeof name);//string

console.log(name[0]);
//name[2]="Y";//TypeError: Cannot assign to read only property '2' of string 'Jay'
name=name+"Nigade";
console.log(name);

//Equality between String
let s1="Hello";
let s2="Hello";
let s3="hello";
console.log(s1 === s2);//true
console.log(s1 === s3);//false


console.log("---------------");

//length property
let ss1="Hello All";
console.log('Total length of string is: '+ss1.length);//9

//toLowserCase() & toUpperCase()
console.log(ss1.toUpperCase());
console.log(ss1.toLowerCase());

//trim(): ignore white space from before and after the string

let ss2="   welcome all    ";
console.log(ss2);
console.log(ss2.trim());

//includes: partial match
let info="Playwright is webui and api testing framework";
console.log("search for api?: "+info.includes("api"));//true
console.log("search for mocha?: "+info.includes('mocha'));//false

//startswith(prefix)  endsWith(suffix)
console.log("String starts with Playwright?: "+info.startsWith("Playwright"));//true

console.log("String starts with playwright?: "+info.startsWith("playwright"));//fase

console.log("String starts with Play?: "+info.startsWith("Play"));//true

console.log("String starts with P?: "+info.startsWith("P"));//true
console.log("-----------");

console.log("string ends with framework?: "+info.endsWith("framework"));//true
console.log("string ends with work?: "+info.endsWith("work"));//true
console.log("string ends with k?: "+info.endsWith("k"));////true
console.log("string ends with frame?: "+info.endsWith("frame"));//false

//chatAt(index):As per the index we can retrive character from string
//Returns the character at the specified index.
let ss3="Hello All";
//index  012345678 
console.log("Get the character at index 3: "+ss3.charAt(3));//l

//indexOf('string/char'):returns index number of given character
//Returns the position of the first occurrence of a substring, or -1 if it is not present.
let ss4="Selenium WebDriver is webUi automation tool";

console.log("Index number for character e: "+ss4.indexOf('e'));//1
console.log("Index number for character z: "+ss4.indexOf('z'));//-1

let fo=ss4.indexOf('e');
//second occurrence of e
let so=ss4.indexOf('e',fo+1);
//third occurrence
let to=ss4.indexOf('e',so+1);
console.log("Third occurrence inde of e: "+to);//10

//get the third e index value:
console.log("Index of third occurrence index of e: "+ss4.indexOf('e',4));//10

//lastIndexOf(): return last index occurrence for string/char
console.log("Last index of e: "+ss4.lastIndexOf('e'));

//How to count number of occurrence for any character?: e
let ss5="Selenium WebDriver is webUi automation tool";

let count=0;
for(let i=0;i<ss5.length;i++)
{
    let ch=ss5.charAt(i);
    if(ch === 'e')
    {
        count++;
    }
}

console.log("Total number of charcter e are: "+count);

console.log("----------------------------");
//replace()

let sentence="Automation Testing is important and Automation Testing with modern tool is more important";

console.log(sentence);
console.log(sentence.replace('Testing','#####'));
console.log(sentence.replaceAll('Testing',"*****"));
console.log("----------------------------");

//concat():The strings to append to the end of the string.
let ss6="Hello";
let ss7="All";

console.log(ss6+" "+ss7);
console.log(ss6,ss7);
console.log(ss6.concat(" "+ss7));

//split(): returns String array

let allTools="Selenium,Appium,Cypress,Postman,Playwright";
//index          0      1       2       3        4
console.log(allTools);

let tools=allTools.split(",");
console.log(tools);

//cypress
console.log(tools[2]);//Cypress

//OR

let toolName=allTools.split(",")[2];
console.log(toolName);//Cypress

console.log("-------------------------------");
/*
Scenario: validate amount from bill

statment: Your toal amount is 50000
validate amount should be less than 10000
*/


let bill="Your total amount is 5000";
//spilt the current string & get the amount

let data=bill.split(" ")[4];
//by defult amount is string
console.log(typeof data);//string

//convert that string into number
let amount=Number(data);
console.log(typeof amount);

//validate
if(amount<10000)
{
    console.log("Amount match...Test pass!");
    
}else{
    console.log("Amount not match...Test Fail!");
    
}

console.log("-------------");

let date="13-June-2026";

let day=date.split("-")[0];

let month=date.split("-")[1];

let year=date.split("-")[2];


console.log(day);
console.log(month);
console.log(year);