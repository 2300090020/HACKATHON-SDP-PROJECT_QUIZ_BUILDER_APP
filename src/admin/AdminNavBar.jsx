import { Routes, Route, Link } from "react-router-dom";
import "./admin.css";
import AdminHome from "./AdminHome";
import ViewPlayers from "./ViewPlayers";
import AdminLogin from "./AdminLogin";
import { useAuth } from "../contextapi/AuthContext";
import WriteQuiz from "./WriteQuiz"; 
import CreateQuiz from "./CreateQuiz";   // ✅ New component


export default function AdminNavBar() {
  const { setIsAdminLoggedIn } = useAuth();

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Welcome Admin</div>
        <ul className="nav-links">
          <li><Link to="/adminhome">Home</Link></li>
          <li><Link to="/viewallplayers">View All Players</Link></li>

          {/* Dropdown for Quiz */}
          <li className="dropdown">
            <span>Quiz ▾</span>
            <ul className="dropdown-menu">
              <li><Link to="/createquiz">Create Quiz</Link></li>
              <li><Link to="/writequiz">Write Quiz</Link></li>
            </ul>
          </li>

          <li>
            <Link to="/adminlogin" onClick={handleLogout}>Logout</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/viewallplayers" element={<ViewPlayers />} />
        <Route path="/writequiz" element={<WriteQuiz />} />
        <Route path="/createquiz" element={<CreateQuiz />} />   {/* ✅ New */}
        <Route path="/adminlogin" element={<AdminLogin />} />
      </Routes>
    </div>
  );
}
