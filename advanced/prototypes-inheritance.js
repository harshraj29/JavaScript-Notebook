// prototypes-inheritance.js

/**
 * Prototypes and Inheritance Example
 * 
 * Prototypal inheritance is a mechanism in JavaScript where objects can inherit properties
 * and methods from other objects. Each object has a prototype chain, and if a property or
 * method is not found on an object, JavaScript looks up the prototype chain until it finds
 * the property or until it reaches the end of the chain.
 */

// Prototypal Inheritance
function Animal(name) {
  this.name = name;
}

Animal.prototype.makeSound = function() {
  console.log('Generic animal sound');
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log('Woof!');
};

// Usage
const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.makeSound(); // Output: Generic animal sound
myDog.bark();      // Output: Woof!
