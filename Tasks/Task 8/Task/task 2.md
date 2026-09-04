Task 2: Library Management System

Create a TypeScript library system with the following:

Interface Book:

id (number)
title (string)
author (string)
isAvailable (boolean)
publishedYear (optional, number)
Generic class Library<T>:

Private array to store items
Method addItem(item: T): void
Method getAllItems(): T[]
Method findById(id: number): T | undefined
Class Member with:

Constructor: name (public), memberId (private)
Getter for memberId
Test your implementation

Expected Output:

// Your implementation here
// Test
const library = new Library<Book>();
library.addItem({ id: 1, title: "1984", author: "George Orwell", isAvailable: true });
const member = new Member("John Doe", 101);
console.log(member.borrowBook(/* book */));
// "John Doe borrowed 1984"