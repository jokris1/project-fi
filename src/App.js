import React, { useState, useEffect } from 'react';
import './App.css';
// import f from './Functions/functions';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import Upload from './Pages/Upload';
import Images from './Pages/Images';

const nav = [
    {'name': 'Home', 'path': '/'},
    {'name': 'Upload', 'path': '/upload'},
    {'name': 'Images', 'path': '/images'},
]

export default function App() {

  return (
    <div>
        <Header nav={nav} />
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/upload" element={<Upload/>} />
                <Route exact path="/images" element={<Images/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
};