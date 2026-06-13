let x=10;
{
    let x=20;
    console.log(x);
}
//20
//-----------------------------
let num=0;
if(num)
{
    console.log("True");
}
else
{
    console.log("False");
}
//False
//----------------------------
console.log(NaN===NaN); //false
//----------------------------
console.log(1<2<3); //true
//----------------------------
console.log(Boolean("false")); //true
//----------------------------
console.log("5"+ +"5"); //55
//----------------------------
let x1=10;

function test()
{
    console.log(x1);
    var x1=20;
}
test(); //undefined
//------------------------------
