import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import SignUp from './pages/SignUp/SignUp.js';
import Login from './pages/Login/Login.js';

function App() {
  return (
    
      <Router>
        <Routes>
          {/* <Route exact path="/" element={<Navbar />} /> */}
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      </Router>
 
  );
}

export default App;
