# RESTful API with Express.js

This is a RESTful API built with **Express.js** that provides basic CRUD (Create, Read, Update, Delete) operations for managing users.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed on your system.
- **Postman** or any API testing tool to interact with the endpoints.

---

## Installation

1. Clone the repository or copy the code to your local environment.

```bash
mkdir express-rest-api
cd express-rest-api
```

2. Initialize a new Node.js project and install dependencies:

```bash
npm init -y
npm install express 
```

3. Create a file named `index.js` and copy the code from the provided script.

4. Run the server:

```bash
node index.js
```

The server will start at: `http://localhost:3000`

---

## API Endpoints

### 1. Get All Users
**Endpoint:** `GET /users`

**Description:** Retrieves a list of all users.

#### Example Request:
```bash
curl -X GET http://localhost:3000/users
```

#### Example Response:
```json
[
  { "id": 1, "name": "John Doe", "email": "john.doe@example.com" },
  { "id": 2, "name": "Jane Smith", "email": "jane.smith@example.com" }
]
```

---

### 2. Get User by ID
**Endpoint:** `GET /users/:id`

**Description:** Retrieves a specific user by their ID.

#### Example Request:
```bash
curl -X GET http://localhost:3000/users/1
```

#### Example Response:
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

#### Error Response:
```json
{
  "message": "User not found"
}
```

---

### 3. Create a New User
**Endpoint:** `POST /users`

**Description:** Adds a new user to the database.

#### Request Body:
```json
{
  "name": "Alice Brown",
  "email": "alice.brown@example.com"
}
```

#### Example Request:
```bash
curl -X POST -H "Content-Type: application/json" -d '{"name": "Alice Brown", "email": "alice.brown@example.com"}' http://localhost:3000/users
```

#### Example Response:
```json
{
  "id": 3,
  "name": "Alice Brown",
  "email": "alice.brown@example.com"
}
```

#### Error Response:
```json
{
  "message": "Invalid input"
}
```

---

### 4. Update User by ID
**Endpoint:** `PUT /users/:id`

**Description:** Updates the details of an existing user.

#### Request Body:
```json
{
  "name": "Alice Johnson",
  "email": "alice.johnson@example.com"
}
```

#### Example Request:
```bash
curl -X PUT -H "Content-Type: application/json" -d '{"name": "Alice Johnson", "email": "alice.johnson@example.com"}' http://localhost:3000/users/3
```

#### Example Response:
```json
{
  "id": 3,
  "name": "Alice Johnson",
  "email": "alice.johnson@example.com"
}
```

#### Error Response:
```json
{
  "message": "User not found"
}
```

---

### 5. Delete User by ID
**Endpoint:** `DELETE /users/:id`

**Description:** Removes a user from the database.

#### Example Request:
```bash
curl -X DELETE http://localhost:3000/users/3
```

#### Example Response:
```json
{
  "message": "User deleted successfully"
}
```

#### Error Response:
```json
{
  "message": "User not found"
}
```

---

## Expected Data

### User Object:
```json
{
  "id": Number,
  "name": String,
  "email": String
}
```

---

## Screenshot