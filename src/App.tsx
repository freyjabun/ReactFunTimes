import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RedButton from "./pages/RedButtonLmao";
import Navbar from "./Navbar";

export function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/button' element={<RedButton/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
