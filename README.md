# Employee Management System

A modern Full Stack Employee Management System built using **Quarkus** and **React**.

## Features

-  Create Employee
-  Read Employee
-  Update Employee
-  Delete Employee
-  Form Validation
-  Exception Handling
-  REST API
-  Swagger Documentation

---

## Tech Stack

### Backend

- Java 21
- Quarkus
- Hibernate ORM (Panache)
- PostgreSQL
- Jakarta Validation
- REST API

### Frontend

- React
- TypeScript
- Vite
- Axios
- React Router

---

## Project Structure

```
employee-management-quarkus
│
├── backend
│   └── employee-management-api
│
├── frontend
│
└── README.md
```

---

## Getting Started

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/employee-management-quarkus.git
```

---

### Backend

```bash
cd backend/employee-management-api

mvn quarkus:dev
```

Backend runs on

```
http://localhost:8080
```

Swagger UI

```
http://localhost:8080/q/swagger-ui
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

## API

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /employees | Get All Employees |
| GET | /employees/{id} | Get Employee |
| POST | /employees | Create Employee |
| PUT | /employees/{id} | Update Employee |
| DELETE | /employees/{id} | Delete Employee |

---

## Author

**M. Hasbianur**

GitHub:
https://github.com/MHASBIANUR

