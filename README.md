# Stunning Challenge – NestJS + MongoDB Backend

A simple backend built with NestJS and MongoDB for managing website sections (title, description). Ideal for collecting and previewing website ideas.

## 🚀 Features

- RESTful API using NestJS
- MongoDB integration via Mongoose
- Section model with title and description
- `.env` support for Mongo URI
- Easy to extend with more features

---

## 📦 Installation

Clone the repo and install dependencies:

```bash
npm install
⚙️ Setup
Create a .env file in the root with your MongoDB connection:

env
🏁 Running the App
npm run start
The server will start on http://localhost:3000

📋 API Endpoints
Method	Endpoint	Description
GET	/section	Get all sections
POST	/section	Create a new section
