import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./LoginPage.css";

export default function LoginPage() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("login"); // 'login' or 'signup'
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const isFormValid = () => {
    if (mode === "signup") {
      return name.trim() && email.trim() && phone.trim();
    }
    return name.trim();
  };

  const handleSubmit = () => {
    if (!isFormValid()) return;

    // (Optional) Store details locally
    localStorage.setItem("internName", name);
    navigate("/dashboard");
  };

  return (
    <main className="login-container">
      <div className="login-card slide-up">
        <div className="tabs">
          <button
            className={mode === "login" ? "active" : ""}
            onClick={() => setMode("login")}
          >
            Login
          </button>
          <button
            className={mode === "signup" ? "active" : ""}
            onClick={() => setMode("signup")}
          >
            Sign Up
          </button>
        </div>

        <h2>{mode === "signup" ? "Join the Mission" : "Welcome Back"}</h2>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {mode === "signup" && (
          <>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </>
        )}

        <button onClick={handleSubmit} disabled={!isFormValid()}>
          {mode === "signup" ? "Create Account →" : "Continue →"}
        </button>

        <button className="ghost-btn" onClick={() => navigate("/dashboard")}>
          🚀 Continue as Guest
        </button>
      </div>
    </main>
  );
}
