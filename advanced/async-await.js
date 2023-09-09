// Asynchronous Programming with async/await

// Example function with a delay (simulating an async operation)
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Using async/await for asynchronous operations
  async function fetchData() {
    try {
      console.log("Fetching data...");
      await delay(2000); // Simulate a 2-second delay
      console.log("Data fetched!");
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  fetchData();
  