import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import RedButton from "./pages/RedButtonLmao";
import NavbarComponent from "./NavbarComponent";

export function App() {
  return (
    <BrowserRouter>
        <NavbarComponent />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/button' element={<RedButton/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
