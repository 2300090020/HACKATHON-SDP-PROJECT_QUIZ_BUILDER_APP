import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import PlayerLogin from '../player/PlayerLogin';
import PlayerRegistration from '../player/PlayerRegistration';
import AdminLogin from '../admin/AdminLogin';
import '../style.css'; // import global CSS

export default function MainNavBar() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">Quizometer</div>
        <ul className="nav-links">
          <li><Link className="nav-button" to="/">Home</Link></li>
          <li><Link className="nav-button" to="/about">About</Link></li>
          <li><Link className="nav-button" to="/playerregistration">Register</Link></li>
          <li className="dropdown">
            <span className="nav-button">Login ▾</span>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-link" to="/playerlogin">Player</Link></li>
              <li><Link className="dropdown-link" to="/adminlogin">Admin</Link></li>
            </ul>
          </li>
          <li><Link className="nav-button" to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/playerregistration" element={<PlayerRegistration />} exact />
        <Route path="/playerlogin" element={<PlayerLogin />} exact />
        <Route path="/adminlogin" element={<AdminLogin />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
