import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/authService';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await registerUser(formData);
    if (success) navigate('/login');
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} required />
        <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
        <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
      <p onClick={() => navigate('/login')} className="switch-link">Already have an account? Login</p>
    </div>
  );
};

export default Register;
