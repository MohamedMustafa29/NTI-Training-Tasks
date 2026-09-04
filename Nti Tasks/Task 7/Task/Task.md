Product Management API – Task Summary
Build a simple Node.js + Express Product Management API using the existing project structure.

Requirements
REST API Create the following endpoints under /products:

GET /products – Get all products.
GET /products/:id – Get a single product.
POST /products – Add a new product.
PUT /products/:id – Update an existing product.
DELETE /products/:id – Delete a product.
Project Structure

ProductsController.js → Contains the main business logic, validation, and responses.
ProductsRoutes.js → Contains only route definitions.
app.js → Mounts the products routes.
products.js → Use an in-memory array as the data store.
views/ → Add a basic product list page and product creation form.
Validation & Error Handling

Return 400 for invalid or missing input.
Return 404 when a product is not found.
Return appropriate success status codes and JSON responses.
