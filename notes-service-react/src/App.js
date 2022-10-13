
//components
import Home from './components/Home';
import DataProvider from './context/DataProvider';
import './App.css';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";


function App() {
  const [note, setData] = useState("");
  const getNote = () => {
  
  fetch("https://localhost:7259/api/Notes")
    .then((response) => response.json())
    .then((data) => {
      setData(data.title + "..." + data.description);
    });
  };
  return (

    <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/*" element={<Home />}/>
        </Routes>
      </Router>
  );
}

export default App;