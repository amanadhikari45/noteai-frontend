import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from './components/Login'
import SignUpPage from './components/Signup'
import DashboardLayout from './Layout/DashboardLayout'
import DashboardHome from './pages/Dashboard/DashboardHome'
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        {/* Auth Pages */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
