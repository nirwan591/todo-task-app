

The app allows users to:
- Create tasks by entering a title and description
- View the latest 5 pending tasks
- Mark tasks as "Done" (which hides them from the list)

---

## 🛠 Tech Stack

- 🎨 **Frontend**: React + CSS
- 🌐 **Backend**: Node.js + Express
- 🛢 **Database**: MySQL (`ToDoTask1`)
- 🐳 **DevOps**: Docker + Docker Compose

---

## 🚀 Features

- Add new tasks with title and description
- View only the **latest 5 uncompleted tasks**
- Mark tasks as completed (they disappear from the list)
- Fully responsive and clean UI
- Docker-ready for containerized deployment

---

## 📁 Project Structure

todo-task/
├── backend/ # Express.js server
│ ├── routes/ # Task API routes
│ ├── db.js # MySQL connection
│ ├── index.js # Main backend entry point
│ ├── .env # Environment variables
│ ├── Dockerfile
│ └── package.json
├── frontend/ # React frontend
│ ├── src/
│ │ ├── App.jsx
│ │ ├── index.js
│ │ └── components/
│ │ ├── TaskForm.jsx
│ │ └── TaskList.jsx
│ ├── public/
│ ├── Dockerfile
│ └── package.json
├── docker-compose.yml # Docker orchestration file
└── README.md # You're here

yaml
Copy
Edit

---

## 📦 Setup Instructions

### ✅ Option 1: Run with Docker (Recommended)

#### Prerequisites:
- Docker installed
- Docker Compose installed

#### Start the App:

```bash
docker-compose up --build


Services:

🖥 Frontend: http://localhost:3000

🔗 Backend: http://localhost:5000

🛢 MySQL: Port 3306 inside Docker

🧪 Option 2: Run Locally (Without Docker)
1️⃣ Setup MySQL (XAMPP or standalone):
Open phpMyAdmin or MySQL client and run:

sql
Copy
Edit
CREATE DATABASE ToDoTask1;

USE ToDoTask1;

CREATE TABLE task (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  is_completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
2️⃣ Run Backend
bash
Copy
Edit
cd backend
npm install
npm start
3️⃣ Run Frontend
bash
Copy
Edit
cd frontend
npm install
npm start
🔐 Backend .env File
Place this in backend/.env:

env
Copy
Edit
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=ToDoTask1
PORT=5000
🐳 If using Docker, use DB_HOST=mysql in .env

📡 REST API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Get latest 5 uncompleted tasks
POST	/api/tasks	Add a new task
PUT	/api/tasks/:id	Mark task as completed

🐳 Docker Compose Overview
yaml
Copy
Edit
version: "3.8"
services:
  mysql:
    image: mysql:5.7
    restart: always
    environment:
      MYSQL_DATABASE: ToDoTask1
      MYSQL_USER: root
      MYSQL_ALLOW_EMPTY_PASSWORD: "yes"
    volumes:
      - db_data:/var/lib/mysql
    ports:
      - "3306:3306"

  backend:
    build: ./backend
    ports:
      - "5000:5000"
    depends_on:
      - mysql
    environment:
      DB_HOST: mysql
      DB_USER: root
      DB_PASSWORD:
      DB_NAME: ToDoTask1

  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    stdin_open: true
    tty: true

volumes:
  db_data:
✨ Bonus
✅ Dockerized frontend + backend + MySQL

✅ Only latest 5 uncompleted tasks shown

✅ Clean, responsive React UI

⬜ (Optional) Unit tests with Jest, React Testing Library

👨‍💻 Developer
K.D.M. Nirwan
GitHub: @nirwan591
Email: (nirwanmilinda591@gmail.com)
