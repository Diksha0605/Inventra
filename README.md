# 🏥 Inventra

A full-stack Medical Inventory Management System built using **React.js**, **Node.js**, **Express.js**, and **MongoDB Atlas**.

##  Project Overview

Inventra is a web-based inventory management system designed to help pharmacies and medical stores efficiently manage medicine records. It provides a simple dashboard for performing Create, Read, Update, and Delete (CRUD) operations while maintaining medicine information in a cloud-hosted MongoDB Atlas database.

The project follows a full-stack architecture where the React frontend communicates with the Express backend through REST APIs, and MongoDB Atlas is used for persistent cloud data storage.


##  Features

- Add new medicine records.
- View all medicines in a responsive dashboard.
- Update medicine quantity in real time.
- Delete medicine records from the inventory.
- RESTful CRUD APIs built with Express.js.
- Cloud database integration using MongoDB Atlas.
- React frontend integrated with backend using Axios.
- Responsive user interface for desktop and mobile devices.
- Real-time frontend and backend integration using REST APIs.


##  Tech Stack

### Frontend
- React.js
- HTML5
- CSS3
- JavaScript (ES6+)
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Development Tools
- Git
- GitHub
- Postman
- Visual Studio Code


##  Project Structure

```text
Inventra/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── index.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── package.json
│   └── README.md
│
├── README.md
└── .gitignore
```

##  Installation

### 1. Clone the Repository

```bash
git clone git clone https://github.com/Diksha0605/Inventra.git
```

### 2. Navigate to the Project

```bash
cd Inventra
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

### 4. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### 5. Configure Environment Variables

Create a `.env` file inside the `backend` folder and add:

```env
MONGO_URI=your_mongodb_atlas_connection_string
```

### 6. Start the Backend Server

```bash
cd backend
node index.js
```

### 7. Start the Frontend

```bash
cd frontend
npm start
```

The application will be available at:

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

##  API Endpoints

| Method | Endpoint         | Description                 |
|--------|------------------|-----------------------------|
| GET    | `/medicines`     | Retrieve all medicines      |
| GET    | `/medicines/:id` | Retrieve a medicine by ID   |
| POST   | `/medicines`     | Add a new medicine          |
| PUT    | `/medicines/:id` | Update an existing medicine |
| DELETE | `/medicines/:id` | Delete a medicine           |

##  Future Enhancements

- Search medicines by name.
- Low stock alerts and inventory monitoring.
- Medicine sorting and filtering.
- Export inventory reports.
- Authentication and role-based access.
- Dashboard analytics and charts.


##  Author

**Diksha Sahu**

- B.Tech Computer Science Engineering
- DY Patil International University, Pune
- GitHub: [Diksha0605](https://github.com/Diksha0605)
- LinkedIn: [Diksha Sahu](https://www.linkedin.com/in/diksha-sahu-68a84035b/)

