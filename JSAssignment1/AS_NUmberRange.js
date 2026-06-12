/*
JavaScript's Number type is a 64-bit floating-point number based on 
the IEEE 754 standard. 
It can represent values approximately from ±5e-324 to ±1.7976931348623157e+308.
For integer calculations, the safe range is 
from -9007199254740991 to 9007199254740991 (-(2^53 - 1) to 2^53 - 1). 
Beyond this range, integer precision may be lost."
*/
console.log(Number.MAX_VALUE);
//1.7976931348623157e+308
console.log(Number.MIN_VALUE);
//5e-324