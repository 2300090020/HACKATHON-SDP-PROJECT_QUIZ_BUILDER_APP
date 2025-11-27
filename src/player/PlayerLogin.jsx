import { useState } from 'react';
import '../style.css'; // use common styles
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import { useAuth } from '../contextapi/AuthContext';

export default function PlayerLogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { setIsPlayerLoggedIn } = useAuth();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/player/checkplayerlogin`, formData);
      if (response.status === 200) {
        setIsPlayerLoggedIn(true);
        navigate("/playerhome");
      } else {
        setMessage(response.data);
      }
    } catch (err) {
      if (err.response) setError(err.response.data);
      else setError("An unexpected error occurred.");
    }
  };

  return (
    <div className="page-container">
      <div className="card">
        <h1>Player Login</h1>
        <h2 style={{ color: '#555', marginBottom: '20px', fontSize: '1.2rem' }}>
          Access your account to play quizzes!
        </h2>

        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="button">Login</button>
        </form>
      </div>
    </div>
  );
}
