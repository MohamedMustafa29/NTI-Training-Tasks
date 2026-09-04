### 📦 Task 7: Product Management API

Build a RESTful API using Node.js & Express for managing products with proper architecture, in-memory data storage, and views.

---

#### 📌 Features & Requirements

* **REST API Endpoints:**
  * `GET /products` — Fetch all products.
  * `GET /products/:id` — Fetch a single product by ID.
  * `POST /products` — Add a new product.
  * `PUT /products/:id` — Update an existing product.
  * `DELETE /products/:id` — Delete a product.

* **Architecture & Project Structure:**
  * `ProductsController.js` — Core business logic, validation, and HTTP responses.
  * `ProductsRoutes.js` — Route definitions mapping to controller methods.
  * `app.js` — Express application setup & route mounting.
  * `products.js` — In-memory array data store.
  * `views/` — Frontend template for product listing and creation form.

* **Validation & Error Handling:**
  * Returns `400 Bad Request` for missing/invalid input fields.
  * Returns `404 Not Found` if a requested product ID doesn't exist.
  * Proper HTTP status codes and JSON responses for all requests.
