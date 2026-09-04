# NTI Tasks

A collection of exercises and mini-projects completed during the NTI training program, covering JavaScript (ES6+), OOP, Promises/Fetch, Node.js, MongoDB, Express.js, and TypeScript.

# 📁 Repository Contents

### 🔹 [Task 1: Destructuring & Array Methods](./Tasks/Task%201)
* **Topic:** `JavaScript ES6+`
* **Description:** Variable swapping, rest/spread operators, and array methods (`map`, `filter`, `forEach`, `every`, `some`).

---

### 🔹 [Task 2: OOP with Shapes](./Tasks/Task%202)
* **Topic:** `JS OOP (Classes)`
* **Description:** `Shape` parent class with `Rectangle`, `Square`, and `Circle` inheritance, overriding `toString()`, and `static` instance counter.

---

### 🔹 [Task 3: Users & Posts Viewer](./Tasks/Task%203)
* **Topic:** `Promises / Fetch API`
* **Description:** Dynamic UI fetching users and posts from JSONPlaceholder API using `then/catch` and `async/await`.

---

### 🔹 [Task 4: MongoDB Queries](./Tasks/Task%204)
* **Topic:** `MongoDB (CRUD)`
* **Description:** Practical exercises covering CRUD operations, advanced query filters, updates, and deletion against products collection.

---

### 🔹 [Task 5: MongoDB Aggregation](./Tasks/Task%205)
* **Topic:** `Aggregation Framework`
* **Description:** 15 progressive aggregation pipeline challenges (Levels 1 → 4): grouping, pagination, sorting, and statistical calculations.

---

### 🔹 [Task 6: File Organizer Script](./Tasks/Task%206)
* **Topic:** `Node.js (fs, path)`
* **Description:** Automated Node.js CLI script organizing files into extension-based folders with missing-extension error handling.

---

### 🔹 [Task 7: Product Management API](./Tasks/Task%207)
* **Topic:** `Node.js + Express.js`
* **Description:** REST API (`GET`, `POST`, `PUT`, `DELETE`), architected with Controller/Routes pattern, input validation, and HTTP error handling.

---

### 🔹 [Task 8: User & Library Systems](./Tasks/Task%208)
* **Topic:** `TypeScript`
* **Description:** Two modules: User management with `enums`, and Library system utilizing `generics`, `interfaces`, and access modifiers (`public`/`private`).

---
Each task folder contains two subfolders:
- **Task/** → the original task description (image or file)
- **My Solution/** → my solution to the task

## 🛠️ Tech Stack
- JavaScript (ES6+)
- Node.js
- Express.js
- MongoDB (Queries & Aggregation)
- TypeScript
- HTML/CSS (Task 3)

## ▶️ How to Run
For tasks with a `package.json` (e.g. Task 7):
```bash
cd "Tasks/Task 7/My Solution"
npm install
npm run dev
```

For TypeScript tasks (Task 8):
```bash
cd "Tasks/Task 8/My Solution"
npx tsc task8.ts && node task8.js
```
