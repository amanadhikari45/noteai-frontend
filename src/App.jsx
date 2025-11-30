
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from './components/Login'
import SignUpPage from './components/Signup'
import DashboardLayout from './Layout/DashboardLayout'
import DashboardHome from './pages/Dashboard/DashboardHome'
import DashboardVoice from './pages/Dashboard/DashboardVoice'
import DashboardList from './pages/Dashboard/DashboardList'
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
           <Route path="dashboardvoice" element={<DashboardVoice/>} />
           <Route path="dashboardlist" element={<DashboardList/>} />
            <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
