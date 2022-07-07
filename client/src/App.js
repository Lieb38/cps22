import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/pages/NavBar';
import Profile from './components/pages/Profile.js';
import Register from './components/pages/RegisterForm.js';
import Login from './components/pages/LoginForm.js';
import About from './components/pages/About.js';
import Posts from './components/pages/Posts.js';
import { UserProvider } from './context/userContext';


function App() {
  return (
    <div className="App">
      <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="profile" element={<Profile />}>  
              {/* <Route path="posts" element={<Posts />} /> */}
            </Route>
            <Route path="posts" element={<Posts />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route index element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
