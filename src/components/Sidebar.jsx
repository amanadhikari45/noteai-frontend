import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X, Upload, FileText, Mic, LogOut } from "lucide-react"

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div
      className={`h-screen bg-gray-900 text-white flex flex-col transition-all duration-300
        ${isOpen ? "w-64" : "w-20"}`}
    >

      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {isOpen && <h2 className="text-lg font-bold">Noted AI Dashboard</h2>}
        <button
          className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col mt-6 space-y-2 px-2">
        <Link
          to="/dashboard"
          className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-800 transition-colors"
        >
          <Upload className="h-5 w-5" />
          {isOpen && "Upload PDF"}
        </Link>

       

        <Link
          to="/dashboard/dashboardvoice"
          className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-800 transition-colors"
        >
          <Mic className="h-5 w-5" />
          {isOpen && "Voice Record"}
        </Link>

        <Link
          to="/dashboard/dashboardlist"
          className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-800 transition-colors"
        >
          <FileText className="h-5 w-5" />
          {isOpen && "Summaries List"}
        </Link>



        <Link
          to="/dashboard/logout"
          className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-800 transition-colors"
        >
          <LogOut className="h-5 w-5" />
          {isOpen && "Logout"}
        </Link>
      </nav>
    </div>
  )
}
