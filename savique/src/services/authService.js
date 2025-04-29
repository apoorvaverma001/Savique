import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

export const registerUser = async (userData) => {
  try {
    const res = await axios.post(`${API_URL}/register`, userData);
    alert('Registered successfully! 🎉');
    return true;
  } catch (error) {
    alert(error.response?.data?.message || 'Registration failed');
    return false;
  }
};

export const loginUser = async (userData) => {
  try {
    const res = await axios.post(`${API_URL}/login`, userData);
    localStorage.setItem('token', res.data.token);
    alert('Logged in successfully! 🚀');
    return true;
  } catch (error) {
    alert(error.response?.data?.message || 'Login failed');
    return false;
  }
};
