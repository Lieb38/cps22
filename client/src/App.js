import './App.css';
import NavBar from './components/NavBar';
import Register from './components/RegisterForm';
import Login from './components/LoginForm';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Login />
      <Register />
      <label htmlFor=""></label>
    </div>
  );
}

export default App;
