### 👤 Task 1: User Management System

A TypeScript program demonstrating core features including Enums, Default Parameters, Optional Parameters, and Array Processing.

---

#### 📌 Requirements & Features

* **UserStatus Enum:**
  * Defines user states: `Active`, `Inactive`, and `Suspended`.

* **`createUser` Function:**
  * Accepts `name` (`string`), `age` (`number`), and `status` (`UserStatus`, default: `Active`).
  * Returns a formatted summary string.

* **`calculateDiscount` Function:**
  * Accepts an array of item prices (`number[]`) and an optional `discount` percentage (default: `10%`).
  * Calculates and returns the final discounted sum.

---

#### 💻 Expected Output Example

```typescript
console.log(createUser("Alice", 28));
// Output: "User: Alice, Age: 28, Status: Active"

console.log(calculateDiscount([100, 200, 300], 15));
// Output: 510 (total 600 - 15% discount)
