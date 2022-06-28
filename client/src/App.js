import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/pages/NavBar';
import Profile from './components/pages/Profile';
import Register from './components/RegisterForm';
import Login from './components/LoginForm';
import About from './components/About';

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
      {/* <NavBar /> */}
      <About />
      <Login />
      <Register />
      <label htmlFor=""></label>
    </div>
  );
}

export default App;
