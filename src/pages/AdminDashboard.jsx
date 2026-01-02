import "../styles/admin.css";
import logo from "../assets/school-logo.png";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {

  // ✅ hook ALWAYS component ke andar
  const navigate = useNavigate();

  return (
    <div className="admin-page">

      {/* ===== HEADER ===== */}
      <div className="admin-header">
        <img src={logo} alt="School Logo" />
        <h2>Pt. Ramchandra Mishra Memorial Public School</h2>
      </div>

      {/* ===== SLIDER IMAGE ===== */}
      <div className="banner">
        <img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350"
          alt="School"
        />
      </div>

      {/* ===== DASHBOARD GRID ===== */}
      <div className="dashboard-grid">

        {/* 🔥 Add Notice (ROUTED) */}
        <div
          className="card blue"
          onClick={() => navigate("/admin/upload-notice")}
        >
          Add Notice
        </div>

        <div className="card orange">Events</div>
        <div className="card purple">Upload Gallery</div>

        <div className="card yellow">Upload Timetable</div>
        <div className="card green">Upload Exam</div>
        <div className="card pink">View Timetable</div>

        <div className="card violet">Teachers List</div>
        <div className="card gold">Students List</div>
        <div className="card brown">Teachers Attendance</div>

      </div>

    </div>
  );
}

export default AdminDashboard;
