// Objects in JavaScript

// Creating objects
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  };
  
  // Accessing object properties
  console.log("First Name:", person.firstName);
  console.log("Last Name:", person.lastName);
  
  // Modifying object properties
  person.age = 31;
  console.log("Updated age:", person.age);
  
  // Iterating through object properties
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }
  
  // Nested objects and more advanced object manipulation
  