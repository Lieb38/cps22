import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/pages/NavBar';
import Profile from './components/pages/Profile.js';
import Register from './components/pages/RegisterForm.js';
import Login from './components/pages/LoginForm.js';
import About from './components/pages/About.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="profile" element={<Profile />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route index element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
