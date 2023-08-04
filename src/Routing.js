import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/login/Login'
import Home from './components/home_page/Home'

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing