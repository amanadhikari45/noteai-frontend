import { useState } from "react"

export default function useLogin() {
  const [loading, setLoading] = useState(false)

  const login = async (email, password) => {
    setLoading(true)

    try {
      const res = await fetch("https://your-api.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || "Login failed")
      }

      return data   // return user data or token
    } catch (err) {
      return { error: err.message }
    } finally {
      setLoading(false)
    }
  }

  return { login, loading }
}
