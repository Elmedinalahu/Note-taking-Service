import logo from './logo.svg';
import './App.css';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route  path="/signup" element={<SignUp />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
