Task 1: User Management System

Create a TypeScript program with the following requirements:

Define an enum UserStatus with values: Active, Inactive, Suspended
Create a function createUser that takes:
name (string)
age (number)
status (UserStatus, default: Active)
Returns a formatted string
Create a function calculateDiscount that:
Takes an array of numbers (prices)
Takes a discount percentage (optional, default: 10)
Returns the total after discount
Test your functions with sample data
Expected Output:

// Your implementation here
// Test cases
console.log(createUser("Alice", 28));
// "User: Alice, Age: 28, Status: Active"
console.log(calculateDiscount([100, 200, 300], 15));
// 510 (total 600, minus 15% = 90)