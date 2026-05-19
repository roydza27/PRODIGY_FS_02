# Employee Management System

<div align="center">

**Secure full-stack employee management with role-based access control**

</div>

Employee Management System is a modern full-stack web application built for securely managing employee records with authentication, authorization, and scalable CRUD operations. It provides administrators with complete employee management capabilities while maintaining protected, role-based access for standard users.

## ✨ Features

* **Secure Authentication**: JWT-based authentication with protected routes
* **Role-Based Access Control**: Separate admin and user permissions
* **Employee CRUD Operations**: Create, view, update, and delete employee records
* **Advanced Filtering & Search**: Search employees by name/email with filters
* **Responsive Dashboard UI**: Clean, modern, and mobile-friendly interface
* **Protected APIs**: Secure backend route protection and validation
* **Reusable UI Components**: Modular frontend architecture using reusable components
* **Drawer-Based Workflows**: Smooth create, edit, and details interactions
* **Pagination Support**: Efficient employee data handling
* **Type-Safe Architecture**: Full TypeScript implementation across frontend and backend
* **Validation Layer**: Strong server-side and frontend validation
* **Professional Project Structure**: Scalable feature-based architecture

---

## 🚀 Quick Start

### Clone the repository

```bash
git clone https://github.com/roydza27/PRODIGY_FS_02.git
cd PRODIGY_FS_02
```

### Install dependencies

```bash
npm install
```

### Setup environment variables

Create a `.env` file inside the `server/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Run the backend

```bash
cd server
npm run dev
```

### Run the frontend

```bash
cd client
npm run dev
```

Then open:

```txt
http://localhost:5173
```

---

## 🔐 Authentication & Authorization

The application uses:

* JWT-based authentication
* Protected backend routes
* Protected frontend routes
* Role-based authorization middleware
* Admin-only management actions

### Roles

#### Admin

* Full employee CRUD access
* Create/edit/delete employees
* Access all protected management actions

#### User

* Read-only employee access
* View employee information
* Cannot modify employee data

---

## 🧱 Technologies Used

### Frontend

* **React 18**
* **TypeScript**
* **Vite**
* **Tailwind CSS**
* **shadcn/ui**
* **React Router**
* **TanStack Table**
* **Lucide React**

### Backend

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **JWT Authentication**
* **Zod Validation**

---

## 📂 Project Structure

```txt
PRODIGY_FS_02/
├── client/
│   ├── src/
│   │   ├── app/
│   │   │   ├── providers/
│   │   │   ├── router/
│   │   │   └── store/
│   │   │
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   ├── dashboard/
│   │   │   ├── employee/
│   │   │   │   ├── components/
│   │   │   │   ├── pages/
│   │   │   │   ├── services/
│   │   │   │   └── types/
│   │   │   └── home/
│   │   │
│   │   └── shared/
│   │       │── components/ui/
│   │       └── layouts/
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── middleware/
│   │   ├── modules/
│   │   │   ├── auth/
│   │   │   └── employee/
│   │   ├── config/
│   │   └── utils/
│   │
│   └── package.json
│
└── README.md
```

---

## 📋 Employee Module Features

### Employee Management

* Add employees
* Update employee records
* Delete employees
* View employee details
* Search employees
* Filter by department/status
* Paginated employee listing

### Employee Data

* Full Name
* Email
* Phone Number
* Department
* Job Title
* Salary
* Employment Status
* Date of Joining
* Address

---

## 🛡️ Security Features

* Protected API routes
* JWT verification middleware
* Role-based route access
* Server-side validation
* Request sanitization
* Proper error handling
* Hidden admin-only actions
* Secure password handling

---

## 🎨 UI/UX Highlights

* Modern dark dashboard UI
* Responsive layouts
* Drawer-based interactions
* Interactive employee tables
* Clean hierarchy and spacing
* Consistent component design
* Role-aware interface rendering

---

## ⚙️ Development Commands

### Frontend

```bash
cd client

npm run dev
npm run build
npm run preview
```

### Backend

```bash
cd server

npm run dev
npm run build
```

---

## 📈 Future Improvements

* Employee profile image uploads
* Export employees to CSV/PDF
* Audit logs
* Advanced analytics dashboard
* Attendance management
* Department management module
* Email notifications
* Activity tracking

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

* shadcn/ui for the component system
* Tailwind CSS for utility-first styling
* React ecosystem for frontend architecture
* Express & MongoDB ecosystem for backend services
* Lucide React for iconography

---

<div align="center">

**Built with ❤️ using React, TypeScript, Express, and MongoDB**

</div>
