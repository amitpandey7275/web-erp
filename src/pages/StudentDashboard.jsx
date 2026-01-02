import "../styles/student.css";
import logo from "../assets/school-logo.png";

function StudentDashboard() {
  return (
    <div className="student-web">

      {/* ===== TOP HEADER ===== */}
      <div className="top-header">
        <img src={logo} alt="logo" />
        <h2>Pt. Ramchandra Mishra Memorial Public School</h2>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="main-layout">

        {/* ===== LEFT : STUDENT PROFILE (ERP STYLE) ===== */}
        <div className="profile-panel">

          <div className="profile-card">

            {/* LEFT DETAILS */}
            <div className="profile-left">
              <p><b>Name :</b> Amit Pandey</p>
              <p><b>Father Name :</b> Ramashankar Pandey</p>
              <p><b>Mother Name :</b> Sunita Devi</p>
              <p><b>Class :</b> 10</p>
              <p><b>Section :</b> A</p>
              <p><b>Roll No :</b> 12</p>
              <p><b>Session :</b> 2024–25</p>
              <p><b>Mobile :</b> 98XXXXXX21</p>
            </div>

            {/* RIGHT SMALL IMAGE */}
            <div className="profile-right">
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt="student"
              />
            </div>

          </div>
        </div>

        {/* ===== RIGHT : DASHBOARD CARDS ===== */}
        <div className="dashboard-panel">

          <div className="student-card blue">HomeWork</div>
          <div className="student-card orange">ClassWork</div>
          <div className="student-card purple">Notice</div>

          <div className="student-card red">Event</div>
          <div className="student-card green">Gallery</div>
          <div className="student-card pink">YouTube</div>

          <div className="student-card teal">Notes</div>
          <div className="student-card yellow">Upcoming Exam</div>
          <div className="student-card sky">Time Table</div>

          <div className="student-card cyan">Contact</div>
          <div className="student-card violet">Sports</div>
          <div className="student-card indigo">Follow Us</div>

        </div>

      </div>
    </div>
  );
}

export default StudentDashboard;
