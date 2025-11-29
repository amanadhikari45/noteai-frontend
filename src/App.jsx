
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from './components/Login'
import SignUpPage from './components/Signup'
import DashboardLayout from './Layout/DashboardLayout'
import DashboardHome from './pages/Dashboard/DashboardHome'
import DashboardSummarize from './pages/Dashboard/DashbordSummarize'
import Logout from './pages/Dashboard/Logout'
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
           <Route path="dashboardsummarize" element={<DashboardSummarize />} />
            <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
