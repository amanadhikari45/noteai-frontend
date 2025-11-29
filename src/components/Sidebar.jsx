import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white p-6 space-y-4">
      <h2 className="text-xl font-bold mb-6">Noted AI Dashboard</h2>

      <nav className="space-y-3">
        <Link to="/dashboard" className="block hover:text-primary">Upload PDf</Link>
        <Link to="/dashboard/dashboardsummarize" className="block hover:text-primary">DashboardSummarize</Link>
        <Link to="/dashboard/logout" className="block hover:text-primary">Logout</Link>

      </nav>
    </div>
  )
}
