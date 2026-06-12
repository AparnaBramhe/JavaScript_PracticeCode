/*
1.Arithmetic Operator: +,-,*,/,%
2.Unary Operator: Increment  ++ and decrement --
3.Relational Operators: >,>=,<,<=
    To test equality
    1.loose equality ==
    2.strict equality ===
4.Logical Operator
    &&(And) ||(Or) !(Not)


*/
console.log("-------Arithmetic operators--------");

let a=10,b=2;
console.log(a+b);
//console.log("Addition is: "+a+b);
console.log("subtraction is: "+(a-b));
console.log("multiplication is: "+(a*b));
console.log("Division is: "+(a/b));
console.log("Modulus is: "+(a%b));

console.log("-----Interview-------");

console.log(90/0);//Infinity
console.log(-180/0);//-Infinity
console.log("Hello"/6);//NaN (Not a number)
console.log(undefined/5);//NaN
console.log(0/6);//0
console.log(null/8);//0

//null value in number format is 0
console.log(Number(null));//0

console.log(0/0);//NaN

console.log("-------Unary operators--------");

/*
1.Increament  ++
 let x=100; 
 x=x+1;
    postIncrement  x++: value use first then increment
    : This is post operator where value will not increment immediate 
    here next time when we reuse variable that time we get incremented value
    
    preIncrement ++x : value increment first then use 
    : This is pre opertaor value of variable increment immediate
    

2.Decrement -- 
let b=20;
b--= b=b-1

postDecrement b-- : value use first then decrement
and predecrement --b: value decrement first then use
*/


let x=100;
console.log(x);//100
console.log(++x);//101

let y=90;
console.log(y);//90
console.log(y++);//90
console.log(y);//91

console.log("------------");

let c=89;
let d=c++;//value of c assign first and then increment
console.log(c);//90
console.log(d);//89

let e=169;
let f=e++;
console.log(e);//170
console.log(f);//169

let i=100;
let j=++i;
console.log(i);//101
console.log(j);//101

console.log("--------------");
//decrement

//predecrement:  --p value will decrement first and then we use it
let p=90;
console.log(p);//90
console.log(--p);//89

//prostDecrement: p--: value use first and then decrement

let s=100;
console.log(s);//100
console.log(s--);//100
console.log(s);//99


let r=189;
let t=r--;
console.log(r);//188
console.log(t);//189

let k=78;
let l=--k;
console.log(k);//77
console.log(l);//77

let m=10;
let n=--m + m--;
console.log(m);//8
console.log(n);//18

console.log("------------------------");
/*
3.Relational Operators: >,>=,<,<=
    To test equality
    1.loose equality ==
    2.strict equality ===
Not equal : !=
Test Data
----------------
s=99 m=8 n=18 k=l=77 r=188 t=189 i=j=101
*/

console.log("less than operator < : "+(m<n));//true
console.log("less than equal to <=: "+(i<=j));//true
console.log(t<r);//false
console.log(i<=r);//true
console.log("greater than > : "+(n>m));//true
console.log("greater than equal to >=: "+(k>=l));//true
console.log(k>=s);//false
console.log(t>l);//true
console.log("not equal to operatior: "+(t!=r));//true
console.log(i!=j);//false

/*
loose equality  ==
---------------------
value will coerced(implicit conversion) first and then compare

strict equality === (Recommended Automation)
--------------------------
original values we are able to compare no coercion

*/

console.log("100" == 100);//true

console.log("100" === 100);//false

console.log(null == undefined);//true

console.log(null === undefined);//false


console.log("----------Logical Operators-----------");
/*
c1      c2             && (AND)          || (OR)         !(NOT)!c1
true    true            true                true            false
true    false           false               true            false
false   true            false               true            true
false   false           false               false           true

Test Data
----------------
s=99 m=8 n=18 k=l=77 r=188 t=189 i=j=101
*/
console.log("------&&------");

console.log(k===l  &&  i===j);//true
console.log(m<n  &&  r>t);//false
console.log(s<m  && k===l);//false
console.log(t<r  && i>j);//false


console.log("------||------");

console.log(k===l  ||  i===j);//true
console.log(m<n  ||  r>t);//true
console.log(s<m  || k===l);//true
console.log(t<r  || i>j);//false

console.log("-----!(NOT)------");

console.log(i===j);//true
console.log(!(i===j));//false

console.log(k<l);//false
console.log(!(k<l));//true


console.log("--------------");
console.log(0/0);//NaN
console.log(undefined+100);//NaN