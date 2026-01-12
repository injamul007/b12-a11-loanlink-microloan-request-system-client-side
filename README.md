# 💰 LoanLink — Microloan Request & Approval Tracker System

## 📘 Project Name
**LoanLink - Microloan Request & Approval Tracker System**

---

## 🎯 Project Purpose
**LoanLink** is a responsive and modern **Microloan Platform** that helps individuals, freelancers, students, and small businesses access loans easily.  
It provides a secure and user-friendly environment for borrowers to explore loan options, apply for loans, and track their loan applications, while managers/admins can manage loan categories and view analytics.  

**The main goal** of this project is to simplify the borrowing process digitally, providing transparency, flexibility, and convenience to both borrowers and administrators.

---

## 🌐 Live URL
🔗 **Live Site:** *(https://loanlink-loan-management-systm.web.app/)*

---

## 🚀 Key Features

### 🏠 Home Page
- Featured loans displayed with carousel  
- Filter loans by category (Education, Business, Freelancer, Health, etc.)  
- Popular loans highlighted on homepage  
- Smooth animations with **Framer Motion**  
- Fully responsive layout for desktop, tablet, and mobile  

### 🔐 Authentication
- Firebase Authentication (Email/Password + Google Sign-In)  
- Login, Registration, and Logout system  
- Role-based access: **Admin**, **Manager**, **Borrower**  
- Protected routes for Dashboard and Loan Management pages  
- User state managed efficiently with React Context API  

### 📊 Dashboard System
- **Dynamic Dashboard** for Borrowers and Managers/Admins  
  - View all available loans  
  - Apply for loans  
  - Track loan status  
  - Manage loan categories and loan entries (Add/Edit/Delete)  
- Real-time data fetching using **React Query**  
- Role-based route protection  

### 💸 Stripe Payment System
- **Fully integrated Stripe payment system** for seamless loan application fee transactions
  - Loan Application fee payment  
  - Secure checkout flow
  - Payment confirmation and status updates

### 🧾 Loan Management & CRUD
- Managers/Admins can add, edit, update, and delete loans  
- Loan details include title, category, interest rate, max loan limit, documents required, EMI plans, and featured image  
- Instant UI updates after performing CRUD actions  
- Image hosting integrated via external URLs  

### 🎨 UI & Design
- Fully responsive, modern, and clean UI  
- Built with **Tailwind CSS** and **Framer Motion** for animations  
- Toast notifications using **React Hot Toast** & **SweetAlert2**  
- Carousel for featured loans using **React Responsive Carousel** and **Swiper**  
- Focused on accessibility, readability, and user experience  

---

## 🧩 Tech Stack Used

| Category | Technologies |
|-----------|---------------|
| **Frontend** | React.js, Tailwind CSS, React Router, TanStack React Query |
| **Backend** | Node.js, Express.js, MongoDB |
| **Authentication** | Firebase (Email/Password, Google Sign-In) |
| **Image Upload** | Hosted via URL ( Imgbb & Cloudinary) |
| **Hosting** | Firebase (Client), Vercel (Server) |
| **Utilities & Tools** | Axios, Framer Motion, SweetAlert2, React Hot Toast, React Responsive Carousel, Swiper |

---

## 📦 NPM Packages Used

| Package Name | Purpose |
|---------------|----------|
| **react** | Core library for building UI |
| **react-dom** | DOM rendering for React components |
| **react-router** | Page navigation and route protection |
| **firebase** | User authentication and security |
| **axios** | Data fetching from backend APIs |
| **tailwindcss** | Utility-first CSS framework for styling |
| **@tailwindcss/vite** | Tailwind integration with Vite |
| **framer-motion** | Smooth page transitions and animations |
| **react-hook-form** | Form handling and validation |
| **react-hot-toast** | Toast notifications |
| **sweetalert2** | Custom alerts and confirmation dialogs |
| **@headlessui/react** | Accessible UI components |
| **react-icons** | Icons for UI enhancement |
| **react-responsive-carousel** | Carousel for featured loans |
| **swiper** | Modern slider component |
| **react-spinners** | Loading spinners for UX feedback |

---

## 📦 Dependency

```json
{
  "@headlessui/react": "^2.2.9",
  "@tailwindcss/vite": "^4.1.17",
  "@tanstack/react-query": "^5.90.12",
  "axios": "^1.13.2",
  "firebase": "^12.6.0",
  "framer-motion": "^12.23.26",
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-hook-form": "^7.68.0",
  "react-hot-toast": "^2.6.0",
  "react-icons": "^5.5.0",
  "react-responsive-carousel": "^3.2.23",
  "react-router": "^7.10.1",
  "react-spinners": "^0.17.0",
  "sweetalert2": "^11.26.4",
  "swiper": "^12.0.3",
  "tailwindcss": "^4.1.17"
}
```

## 📥 Installation & Setup

# Clone the repository
git clone https://github.com/injamul007/b12-a11-loanlink-microloan-request-system-client-side

# Navigate into the project directory
cd your-repo

# Install all required dependencies
npm install

# Start the development server
npm run dev
