import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from '../src/components/Signup';
import Home from '../src/components/Home'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home/>} /> 
        <Route path="/signup" element={<Signup />} /> 
      </Routes>
    </Router>
  );
}

export default App;
