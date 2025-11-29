import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white p-6 space-y-4">
      <h2 className="text-xl font-bold mb-6">My Dashboard</h2>

      <nav className="space-y-3">
        <Link to="/dashboard" className="block hover:text-primary">Dashboard</Link>

      </nav>
    </div>
  )
}
