// Variables in JavaScript

// Declaring variables using var, let, and const
var name = "John";  // Use var (avoid in modern JavaScript)
let age = 30;       // Use let for mutable variables
const country = "USA"; // Use const for immutable variables

// Printing variable values
console.log("Name:", name);
console.log("Age:", age);
console.log("Country:", country);

// Variable scope
function scopeExample() {
  var localVar = "I am a local variable";
  console.log(localVar);
}

scopeExample();
// Uncomment the line below to see an error (localVar is not defined here)
// console.log(localVar);
