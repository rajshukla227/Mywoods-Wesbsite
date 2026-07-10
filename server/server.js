const express = require("express");
const cors = require("cors");

const app = express();

// Configure CORS properly
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

// Health check endpoint
app.get("/", (req, res) => {
    console.log("Backend health check requested");
    res.send("Backend is Working");
});

// Login endpoint with better error handling
app.post("/login", (req, res) => {
    console.log("Login request received:", req.body);
    
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email and password are required"
        });
    }

    if (email === "admin@gmail.com" && password === "123456") {
        console.log("Login successful for:", email);
        return res.json({
            success: true,
            message: "Login Successful"
        });
    }

    console.log("Login failed for:", email);
    return res.json({
        success: false,
        message: "Invalid Email or Password"
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error("Server Error:", err);
    res.status(500).json({
        success: false,
        message: "Server error occurred"
    });
});

const PORT = 5000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`\n✅ Backend Server Started on http://localhost:${PORT}`);
    console.log(`📝 Use credentials - Email: admin@gmail.com, Password: 123456\n`);
});