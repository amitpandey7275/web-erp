import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import AdminUploadNotice from "./pages/AdminUploadNotice";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Admin Panel */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Student Panel */}
        <Route path="/student" element={<StudentDashboard />} />

        {/* Teacher Panel */}
        <Route path="/teacher" element={<TeacherDashboard />} />

        
        <Route path="/admin/upload-notice" element={<AdminUploadNotice />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
