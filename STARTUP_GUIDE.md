# 🚀 Startup Guide - Mywoods Website

This project is set up as a linked workspace containing the React frontend (`Mywoods-Wesbsite`) and the Express/Node.js real backend (`Mywoods-Backend`).

## Prerequisites
- Node.js installed on your system.
- A running MongoDB cluster (already configured in `Mywoods-Backend/.env`).

## How to Start (Recommended - Concurrently)

You can run both the frontend and backend servers together with a single command from the project root directory:

1. Open a terminal/PowerShell in the project root directory.
2. Start the workspace:
   ```bash
   npm run dev
   ```
   
   **Expected Output:**
   This starts both servers concurrently:
   - **Frontend (Vite):** http://localhost:5173/
   - **Backend (Express):** http://localhost:5000/
   - You will see logs indicating:
     ```
     Connected to MongoDB
     Default admin user created successfully (admin@gmail.com / 123456)
     ```

---

## Alternative: Start Servers Separately

If you want to run them in separate terminal windows:

### 1. Start Backend Server
1. Navigate to the backend directory:
   ```bash
   cd Mywoods-Backend
   ```
2. Start the server:
   ```bash
   npm run dev
   ```

### 2. Start Frontend Server
1. Navigate to the frontend directory:
   ```bash
   cd Mywoods-Wesbsite
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

---

## 🔑 Login and CMS Access

The backend automatically seeds a default admin account on startup so that the credentials on the login screen work directly with the MongoDB database.

- **Email:** `admin@gmail.com`
- **Password:** `123456`

1. Open http://localhost:5173/ in your browser.
2. Click **Login** in the navigation bar.
3. Click **Check Backend** to verify the Express server is running.
4. Enter the credentials and log in to manage your woods inventory on the CMS dashboard.
