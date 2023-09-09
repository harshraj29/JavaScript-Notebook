// Promises in JavaScript

// Example function that returns a promise
function fetchUserData() {
    return new Promise((resolve, reject) => {
      // Simulate a network request
      setTimeout(() => {
        const user = { id: 1, username: "user123" };
        if (user) {
          resolve(user); // Promise resolved with user data
        } else {
          reject("User not found"); // Promise rejected with an error message
        }
      }, 2000); // Simulate a 2-second delay
    });
  }
  
  // Using promises for asynchronous operations
  fetchUserData()
    .then(user => {
      console.log("User data:", user);
    })
    .catch(error => {
      console.error("Error:", error);
    });
  