import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"

export default function DashboardLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 h-screen overflow-y-auto">
        <Navbar username="Aman" />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
