import React, { useRef, useState } from "react";
import './LoginWithLocalStorage.css'; // Import your CSS file here

function EduplayLogin() {
    const [error, setError] = useState("");
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // Check if the entered email and password match the stored data
        if (email === "example@example.com" && password === "password") {
            // Store the email in localStorage
            localStorage.setItem("eduplayEmail", email);
            // Redirect the user to the home page or perform other actions
            console.log("Login successful!");
        } else {
            setError("Invalid email or password. Please try again.");
        }
    };

    return (
        <div className="login-container">
            <h2>EDUPLAY Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" ref={emailRef} required />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" ref={passwordRef} required />
                </div>
                <button type="submit">Login</button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
}

export default EduplayLogin;
