import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure CSS is imported

// Import your UI Components
import Navbar from "../Navbar";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(["token"]); // Specify cookie name
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Prevent "flash" of content

  useEffect(() => {
    const verifyCookie = async () => {
        console.log("Verifying cookie...");
      if (!cookies.token) {
        console.log("No token found, redirecting to login...");
        navigate("/login");
        return;
      }
      console.log("Token found, verifying with backend...");
      try {
        const { data } = await axios.post(
          "http://localhost:3000/",
          {},
          { withCredentials: true }
        );
        console.log(data);
        const { status, user } = data;
        
        if (status) {
            console.log("Token verified, welcome user:", user);
          setUsername(user);
          toast(`Hello ${user}`, { position: "top-right" });
          setIsLoading(false); // Stop loading once verified
        } else {
          removeCookie("token");
          navigate("/login");
        }
      } catch (error) {
        console.error(error);
        removeCookie("token");
        navigate("/login");
      }
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/signup"); // Or "/login"
  };

  // 1. Show nothing (or a spinner) while checking login status
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  // 2. Show the Actual Home Page once logged in
  return (
    <>
      {/* Optional: Add Navbar here if you want it visible */}
      {/* <Navbar /> */}

      {/* User Session Bar (Welcome + Logout) */}
      <div className="user-session-bar" style={styles.sessionBar}>
        <h4>Welcome, <span>{username}</span></h4>
        <button onClick={Logout} style={styles.logoutBtn}>LOGOUT</button>
      </div>

      {/* The Actual Home Page Content */}
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />

      <ToastContainer />
    </>
  );
};

// Simple inline styles to make the top bar look decent
const styles = {
  sessionBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#f4f4f4",
    borderBottom: "1px solid #ddd",
  },
  logoutBtn: {
    padding: "5px 15px",
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  }
};

export default Home;