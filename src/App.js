import React from 'react'
import './App.css';
import Header from './views/Header/Header';
import Home from "./views/Home/Home";
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import CheckOut from './views/CheckOut/CheckOut';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
