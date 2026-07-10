import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [backendStatus, setBackendStatus] = useState(null);

    const navigate = useNavigate();

    // Configure axios with timeout
    const axiosInstance = axios.create({
        baseURL: "http://localhost:5000",
        timeout: 5000,
        headers: {
            "Content-Type": "application/json"
        }
    });

    // Check Backend
    const checkBackend = async () => {
        setLoading(true);
        try {
            const response = await axiosInstance.get("/");
            console.log("Backend response:", response.data);
            setBackendStatus("Backend is Running!");
            alert("Backend is Running!\n" + response.data);
            setLoading(false);
        } catch (error) {
            console.error("Backend check error:", error);
            setBackendStatus("Backend is not running!");
            const errorMsg = error.code === 'ECONNABORTED' 
                ? "Connection timeout - Backend server is not responding" 
                : error.message === 'Network Error'
                ? "Network Error - Make sure backend is running on port 5000"
                : error.message;
            alert("Backend is not running!\n\nError: " + errorMsg + "\n\nPlease start the backend server first.");
            setLoading(false);
        }
    };

    // Login Function
    const handleLogin = async () => {
        // Validate inputs
        if (!email || !password) {
            alert("Please enter both email and password");
            return;
        }

        setLoading(true);
        try {
            const response = await axiosInstance.post("/login", {
                email: email,
                password: password,
            });

            console.log("Login response:", response.data);

            if (response.data.success) {
                alert("Login Successful: " + response.data.message);
                setEmail("");
                setPassword("");
                setLoading(false);
                navigate("/cms");
            } else {
                alert("Login Failed: " + response.data.message);
                setLoading(false);
            }
        } catch (error) {
            console.error("Login error:", error);
            let errorMsg = "Unknown error occurred";
            
            if (error.code === 'ECONNABORTED') {
                errorMsg = "Connection timeout - Backend server is not responding";
            } else if (error.message === 'Network Error' || !error.response) {
                errorMsg = "Network Error - Backend server is not running on http://localhost:5000";
            } else if (error.response?.data?.message) {
                errorMsg = error.response.data.message;
            } else if (error.response?.status) {
                errorMsg = "Server error (" + error.response.status + ")";
            } else {
                errorMsg = error.message;
            }
            
            alert("Login Failed\n\n" + errorMsg);
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h2>Login</h2>

            {backendStatus && (
                <div style={{ padding: "10px", marginBottom: "15px", borderRadius: "4px", backgroundColor: backendStatus.includes("Running") ? "#d4edda" : "#f8d7da" }}>
                    {backendStatus}
                </div>
            )}

            <label><strong>Email</strong></label>
            <br />
            <input
                type="email"
                placeholder="Enter Email (admin@gmail.com)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "4px", border: "1px solid #ddd" }}
            />

            <br />

            <label><strong>Password</strong></label>
            <br />
            <input
                type="password"
                placeholder="Enter Password (123456)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                style={{ width: "100%", padding: "8px", marginBottom: "15px", borderRadius: "4px", border: "1px solid #ddd" }}
            />

            <br />

            <button 
                onClick={checkBackend} 
                disabled={loading}
                style={{ padding: "8px 15px", marginRight: "10px", cursor: loading ? "not-allowed" : "pointer", opacity: 1, backgroundColor: loading ? "#ccc" : "#28a745", color: "white", border: "none", borderRadius: "4px" }}
            >
                {loading ? "Checking..." : "Check Backend"}
            </button>

            <button 
                onClick={handleLogin}
                disabled={loading}
                style={{ padding: "8px 15px", cursor: loading ? "not-allowed" : "pointer", opacity: 1, backgroundColor: loading ? "#ccc" : "#007bff", color: "white", border: "none", borderRadius: "4px" }}
            >
                {loading ? "Processing..." : "Login"}
            </button>
        </div>
    );
};

export default Login;
