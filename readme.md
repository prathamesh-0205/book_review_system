# 📚 Book Review REST API

A RESTful API built with Node.js, Express, MongoDB, and JWT authentication for managing users, books, and reviews.

---

## 🚀 Features

- User signup and login with JWT
- Create, view books
- Add, update, and delete reviews
- Protected routes using middleware
- MongoDB (Mongoose) for database

---

## 🧰 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- dotenv for environment variables

---

## 📦 Installation & Setup

```bash
git clone https://github.com/prathamesh-0205/book_review_system.git
cd <project-folder>
npm install

🛢️ MongoDB Setup
Ensure MongoDB is running locally or connect via MongoDB Atlas using your MONGO_URI.

🧪 Sample Data Insertion (Mongo Shell or Compass)
db.users.insertOne({
  username: "john_doe",
  password: "hashed_password_here"
});

How to Use Authenticated Routes
First register using /signup or login via /login

Copy the returned token

Use it in Authorization header as:

makefile
Copy
Edit
Authorization: Bearer <your_token>


POST   http://localhost:5555/signup         - Register new user
POST   http://localhost:5555/login          - Login and receive JWT

POST   http://localhost:5555/books          - Add a new book (Requires Auth)
GET    http://localhost:5555/books          - Get all books
GET    http://localhost:5555/books/:id      - Get details of a book by ID

POST   http://localhost:5555/books/:id/reviews    - Add review to a book (Requires Auth)
PUT    http://localhost:5555/reviews/:id          - Update a review (Requires Auth)
DELETE http://localhost:5555/reviews/:id          - Delete a review (Requires Auth)

note:in id->paste autogenerated object id 
