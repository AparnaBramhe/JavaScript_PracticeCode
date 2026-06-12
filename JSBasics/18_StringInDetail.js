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
let name="Jay";
console.log(name);
console.log(typeof name);//string

console.log(name[0]);
//name[2]="Y";//TypeError: Cannot assign to read only property '2' of string 'Jay'
name=name+"Nigade";
console.log(name);

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