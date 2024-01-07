// functional-programming.js

/**
 * Functional Programming Example
 * 
 * Functional programming is a programming paradigm that treats computation as the evaluation
 * of mathematical functions and avoids changing state and mutable data. In functional programming,
 * functions are first-class citizens and can be passed around and composed to create more complex
 * functions.
 */

// Higher-order function example
const multiplyBy = (factor) => (num) => num * factor;

const double = multiplyBy(2);
console.log(double(5)); // Output: 10

// Using map and filter
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num ** 2);
const evens = numbers.filter(num => num % 2 === 0);

console.log(squared); // Output: [1, 4, 9, 16, 25]
console.log(evens);   // Output: [2, 4]

// Immutability
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4];

console.log(originalArray); // Output: [1, 2, 3]
console.log(newArray);      // Output: [1, 2, 3, 4]
