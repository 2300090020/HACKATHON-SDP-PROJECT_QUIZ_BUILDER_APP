import { Routes, Route, Link } from 'react-router-dom';
import './player.css';
import PlayerHome from './PlayerHome';
import PlayerProfile from './PlayerProfile';
import PlayerLogin from './PlayerLogin';
import { useAuth } from '../contextapi/AuthContext';
import UpdateProfile from './UpdateProfile';

export default function PlayerNavBar() 
{
  const { setIsPlayerLoggedIn } = useAuth(); 

  const handleLogout = () => 
  {
    setIsPlayerLoggedIn(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Welcome Player</div>
        <ul className="nav-links">
          <li><Link to="/playerhome">Home</Link></li>
          <li><Link to="/playerprofile">Player Profile</Link></li>
          <li><Link to="/updateprofile">Update Profile</Link></li>
          <li><Link to="/playerlogin" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/playerhome" element={<PlayerHome />} exact />
        <Route path="/playerprofile" element={<PlayerProfile />} exact />
        <Route path="/updateprofile" element={<UpdateProfile />} exact />
        <Route path="/updateprofile" element={<UpdateProfile />} exact />
        <Route path="/playerlogin" element={<PlayerLogin />} exact />
      </Routes>
    </div>
  );
}
