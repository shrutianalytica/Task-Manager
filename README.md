# Task Manager API

A full-stack backend project built using Node.js, Express, and MongoDB.

---

## 🚀 Features

- User Registration & Login (JWT Authentication)
- Create, Read, Update, Delete Tasks
- Project Management
- Protected Routes using Authentication

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JWT (Authentication)

---

## 🌐 Live API

https://task-manager-production-a9ea.up.railway.app

---

## 📌 API Endpoints

### Auth
- POST /auth/register
- POST /auth/login

### Tasks
- GET /tasks
- POST /tasks
- PUT /tasks/:id
- DELETE /tasks/:id

### Projects
- POST /projects
- GET /projects

---

## 🔐 Authorization

For protected routes, add header:

Authorization: YOUR_TOKEN

---

## 📦 Installation (Local Setup)

```bash
npm install
npm run dev

---
## ⚙️ Environment Variables

This project uses environment variables.

In production (Railway), variables are configured in the Railway dashboard:

- MONGO_URI
- JWT_SECRET