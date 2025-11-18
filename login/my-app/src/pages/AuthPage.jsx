import React from "react";
import axios from "axios";
import AuthForm from "../components/AuthForm";
import bgImage from "../assets/bg.jpg";

export default function AuthPage() {
  const handleAuth = async (data, isLogin) => {
    try {
      const url = isLogin
        ? "http://localhost:5000/api/auth/login"
        : "http://localhost:5000/api/auth/signup";

      const res = await axios.post(url, data);
      alert(`${isLogin ? "Login" : "Signup"} successful!`);

      // Save JWT token
      localStorage.setItem("token", res.data.token);

     // Redirect to app running on port 3001
      window.location.href = "http://localhost:3000/";
    } catch (err) {
      alert(err.response?.data?.msg || "Something went wrong!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#d9f1c7",
      }}
    >
      <div
        style={{
          flex: 1,
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          color: "#1b5e20",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <h1 className="fw-bold display-5">CARBON</h1>
        <h1 className="fw-bold display-5">FOOTPRINT</h1>
        <h1 className="fw-bold display-5">TRACKER</h1>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#e8f5e9",
        }}
      >
        <AuthForm onSubmit={handleAuth} />
      </div>
    </div>
  );
}
