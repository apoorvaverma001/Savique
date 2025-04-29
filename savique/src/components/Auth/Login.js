import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/authService';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await loginUser(formData);
    if (success) navigate('/dashboard');
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
        <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      <p onClick={() => navigate('/register')} className="switch-link">Don't have an account? Register</p>
    </div>
  );
};

export default Login;
