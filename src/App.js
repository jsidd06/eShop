import React from 'react'
import './App.css';
import Home from "./views/Home/Home";
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import CheckOut from './views/CheckOut/CheckOut';
import Login from './views/Login/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
