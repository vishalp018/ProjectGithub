import React, { useRef, useState } from "react";
import './SignUpWithLocalStorage.css';

function SignUpWithLocalStorage() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState("");

    const handleSignUp = (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // Check if the email is already registered
        if (localStorage.getItem("eduplayEmail") === email) {
            setError("Email is already registered. Please use a different email.");
        } else {
            // Store the email and password in localStorage
            localStorage.setItem("eduplayEmail", email);
            localStorage.setItem("eduplayPassword", password);
            console.log("Sign-up successful!");
            window.location.href = "file:///E:/Eduplay/login/eduplay/src/login.html";
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSignUp}>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" ref={emailRef} required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" ref={passwordRef} required />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpWithLocalStorage;
