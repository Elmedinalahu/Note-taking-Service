

//components
import Home from './components/Home';
import DataProvider from './context/DataProvider';
import './App.css';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div class = "App">
      
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route  path="/signup" element={<SignUp />}/>
          <Route path="/home" element={<Home />}/>
        </Routes>
      </Router>
    
      
    </div>

  );
}

export default App;
