import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/signup')
  }, [navigate])

  return (
    <div className="flex items-center justify-center min-h-screen text-gray-900 dark:text-white">
      Logging out...
    </div>
  )
}

export default Logout
