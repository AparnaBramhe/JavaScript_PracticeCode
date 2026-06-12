/*
5. Const Behavior 
What will happen? 
*/
const obj = { name: "Alice" }; 
obj.name = "Bob"; 
console.log(obj.name); 
obj = { name: "Charlie" }; // What happens here? 
