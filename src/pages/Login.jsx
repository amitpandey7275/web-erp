import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import schoolLogo from "../assets/school-logo.png";

const BASE_URL = "https://school-erp-zhpk.onrender.com";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  // ===== LOGIN FUNCTION =====
const login = async () => {
  if (!email || !password) {
    setMsg("User ID & Password required");
    return;
  }

  try {
    setMsg("Logging in...");

    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const result = await res.json();
    console.log("LOGIN RESPONSE:", result);

    // 🔴 ERROR HANDLE
    if (result.error) {
      setMsg(result.error);
      return;
    }

    // 🔥 SUPABASE USER ID
    const userId = result.data.user.id;

    // 🔥 GET ROLE
    const roleRes = await fetch(`${BASE_URL}/get_role`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: userId }),
    });

    const roleData = await roleRes.json();
    console.log("ROLE:", roleData);

    if (roleData.error) {
      setMsg("Role fetch failed");
      return;
    }

    // 🔥 REDIRECT
    if (roleData.role === "admin") navigate("/admin");
    else if (roleData.role === "teacher") navigate("/teacher");
    else if (roleData.role === "student") navigate("/student");
    else setMsg("Unknown role");

  } catch (err) {
    console.error(err);
    setMsg("Server error");
  }
};

  return (
    <div className="login-page">
      <div className="login-card">

        {/* ===== RIT STYLE HEADER STRIP ===== */}
        <div className="rit-header">
          <img src={schoolLogo} alt="School Logo" />
          <div className="rit-text">
            <h2>Pt. Ramchandra Mishra Memorial Public School</h2>
            <p>ERP Login Portal</p>
          </div>
        </div>

        {/* ===== FORM BODY ===== */}
        <div className="rit-body">

          <div className="input-row">
            <span>👤</span>
            <input
              type="text"
              placeholder="User ID / Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-row">
            <span>🔑</span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="login-btn" onClick={login}>
            LOGIN
          </button>

          <p className="login-msg">{msg}</p>

          <div className="login-links">
            <span>Forgot Password?</span>
            <span>Forgot ID?</span>
          </div>

          <p className="powered">
            Powered by <b>Pt.RCMMPS</b>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;
