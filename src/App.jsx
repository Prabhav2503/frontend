import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import RegisterSelection from './pages/RegisterSelection'
import Register from './pages/Register'
import RegisterMentor from './pages/RegisterMentor'
import Success from './pages/Success'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterSelection />} />
      <Route path="/register/student" element={<Register />} />
      <Route path="/register/mentor" element={<RegisterMentor />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  )
}

export default App
