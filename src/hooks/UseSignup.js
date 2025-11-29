import { useState } from "react"

export default function useSignup() {
  const [loading, setLoading] = useState(false)

  const signup = async (email, password) => {
    setLoading(true)

    try {
      const res = await fetch("https://your-api.com/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || "Signup failed")
      }

      return data
    } catch (err) {
      return { error: err.message }
    } finally {
      setLoading(false)
    }
  }

  return { signup, loading }
}
