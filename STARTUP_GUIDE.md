# 🚀 Startup Guide - Mywoods Website

## Prerequisites
Make sure you have Node.js installed on your system.

## Step 1: Start the Backend Server

1. Open a terminal/PowerShell
2. Navigate to the server directory:
   ```
   cd server
   ```
3. Start the backend server:
   ```
   npm start
   ```
   
   **Expected Output:**
   ```
   ✅ Backend Server Started on http://localhost:5000
   📝 Use credentials - Email: admin@gmail.com, Password: 123456
   ```

## Step 2: Start the Frontend Development Server

1. Open another terminal/PowerShell (keep the backend running in the first one)
2. Navigate to the project root directory
3. Start the Vite development server:
   ```
   npm run dev
   ```
   
   **Expected Output:**
   ```
   ➜  Local:   http://localhost:5173/
   ```

## Step 3: Test the Login

1. Open your browser and go to `http://localhost:5173/`
2. Click on "Login" in the navigation
3. Click "Check Backend" to verify the backend is running
4. Enter the test credentials:
   - **Email:** `admin@gmail.com`
   - **Password:** `123456`
5. Click "Login"

## 🔧 Troubleshooting

### "Network Error" or "Backend is not running"
- Make sure the backend server is running (check the first terminal)
- The backend must be on port 5000
- Try clicking "Check Backend" button on the login page

### Port Already in Use
If port 5000 or 5173 is already in use:
- **For Backend:** Edit `server/server.js` and change the PORT number
- **For Frontend:** The Vite server will automatically use the next available port

### Connection Timeout
- Check if your firewall is blocking port 5000
- Try disabling antivirus temporarily
- Restart both servers

## 📝 Test Credentials
```
Email: admin@gmail.com
Password: 123456
```

## 🛑 Stopping the Servers
- Press `Ctrl + C` in each terminal to stop the servers
