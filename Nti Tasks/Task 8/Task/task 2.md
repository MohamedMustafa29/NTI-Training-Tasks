### 📚 Task 2: Library Management System

A TypeScript object-oriented program demonstrating Interfaces, Generics, Encapsulation, and Class Constructors.

---

#### 📌 Requirements & Features

* **`Book` Interface:**
  * Properties: `id` (`number`), `title` (`string`), `author` (`string`), `isAvailable` (`boolean`), and optional `publishedYear` (`number`).

* **Generic `Library<T>` Class:**
  * Stores items in a private internal array.
  * `addItem(item: T): void` — Adds an item to the collection.
  * `getAllItems(): T[]` — Retrieves all stored items.
  * `findById(id: number): T | undefined` — Finds a specific item by its unique ID.

* **`Member` Class:**
  * Features a constructor with `public name` and `private memberId`.
  * Includes a Getter method for secure access to `memberId`.

---

#### 💻 Expected Usage & Output

```typescript
const library = new Library<Book>();
library.addItem({ id: 1, title: "1984", author: "George Orwell", isAvailable: true });

const member = new Member("John Doe", 101);
console.log(member.borrowBook(library.findById(1)));
// Output: "John Doe borrowed 1984"
