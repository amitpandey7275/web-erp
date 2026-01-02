import "../styles/teacher.css";
import logo from "../assets/school-logo.png";

function TeacherDashboard() {
  return (
    <div className="teacher-page">

      {/* ===== HEADER ===== */}
      <div className="teacher-header">
        <img src={logo} alt="School Logo" />
        <div>
          <h2>Teacher Panel</h2>
          <p>Pt. Ramchandra Mishra Memorial Public School</p>
        </div>
      </div>

      {/* ===== INFO BAR ===== */}
      <div className="teacher-info">
        <div>
          <h3>Welcome</h3>
          <p>Have a productive day 👋</p>
        </div>
      </div>

      {/* ===== DASHBOARD GRID ===== */}
      <div className="teacher-grid">

        <div className="tcard blue">Take Attendance</div>
        <div className="tcard green">Upload Homework</div>
        <div className="tcard orange">Upload Classwork</div>

        <div className="tcard purple">Upload Notes</div>
        <div className="tcard teal">View Timetable</div>
        <div className="tcard pink">Exam Marks</div>

        <div className="tcard indigo">Students List</div>
        <div className="tcard brown">Leave Request</div>
        <div className="tcard cyan">Profile</div>

      </div>

      {/* ===== BOTTOM NAV ===== */}
      <div className="teacher-bottom-nav">
        <span className="active">Home</span>
        <span>Classes</span>
        <span>Attendance</span>
        <span>Profile</span>
      </div>

    </div>
  );
}

export default TeacherDashboard;
