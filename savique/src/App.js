import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import DashboardHome from './components/Dashboard/DashboardHome';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="*" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
