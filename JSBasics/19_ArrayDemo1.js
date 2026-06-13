/*
Array is Dynamic data structure in Js
Array is Collection of Similar/Diffent types of data+objects
Array stores element/data as per index , where index starts with 0

Types of Array
------------------
1.Single Dimensional array(1D)
2.Multi Dimensional array(2D)

Ways to declare an Array
-------------------------
1. Array using literal
2.Using Array Constructor
3.Using Array.of()

Syntax:Literal
---------------
let arryVariableName=[1,2,3,4,5];

Array support length property
Array Support multiple methods


Array Iteration
-------------------
1.Simple for loop
2.For...of loop

for...of loop Vs for...in loop
----------------------------------


*/


console.log("--------Array Literal--------");

let id=[];
console.log(id);//[]
console.log(typeof id);//object

console.log("--------");

let sid=[101,102,103,104,105];

//length property
console.log("Total Elements in array: "+sid.length);//5

//single entry from array: as per index you can get the value
console.log(sid[2]);//103
console.log(sid[4]);//105

//for wrong index Js return undefined
console.log(sid[9]);//undefined

console.log(sid[-5]);//undefined

//how to get all elements from Array
console.log(sid);//[ 101, 102, 103, 104, 105 ]

console.log("------------------");
//mixed type of array

let empData=["Sarang","Pune",679878909,30,'M',true];
console.log("Total Entries in Array: "+empData.length);
console.log(empData);//[ 'Sarang', 'Pune', 679878909, 30, 'M', true ]


console.log("-------Array Constructor-------");
/*
Constructor
-----------------
Is used to initialize object 
Constructor get called at the time Object creation
In Java/Js language Object creates with new Keyword

Array():Array Constructor

*/

let arr=new Array(5);//here 5 is length of array
console.log("Total length is: "+arr.length);//5
console.log(arr);//[ <5 empty items> ]
//initialize array
arr[0]=101;
arr[1]=102;
arr[2]=103;
arr[3]=104;
arr[4]=105;

arr[5]=106;
arr[6]=107;

console.log(arr);//[ 101, 102, 103, 104, 105 ]
console.log(arr.length);//7


console.log("-----");

let arr1=new Array(10,20,30,40,50,60);//here in array we have 6 entry
console.log("Total Elements are: "+arr1.length);
console.log(arr1);


console.log("-------Array.of()---------------");

let location=Array.of('Pune','Mumbai','Delhi','LA');
console.log(location);//[ 'Pune', 'Mumbai', 'Delhi', 'LA' ]
console.log("Total length: "+location.length);//4

//single entry
console.log(location[2]);//Delhi

console.log("---------Multi Dimensional Array----------");

//literal

let multiD=[
            ["Amit","test123"],
            ["Ruchi","ruchi123"],
            ["Parag","test123","parag@gmail.com"],
            ["Anita","test123"]
            ];

console.log("Total number of rows: "+multiD.length);//4
console.log("Total number of columns: "+multiD[0].length);//2
console.log("Total coumns for row3: "+multiD[2].length);//3


//Single entry
console.log(multiD[1][1]);//ruchi123
console.log(multiD[2][2]);//parag@gmail.com
//wrong index:undefined
//console.log(multiD[4][1]);//4 th row itself undefined :TypeError: Cannot read properties of undefined (reading '1')

console.log(multiD);