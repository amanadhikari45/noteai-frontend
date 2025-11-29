"use client"

import { useState } from "react"
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react"
import useLogin from "../hooks/UseLogin"
import { Link } from "react-router-dom"

export default function LoginPage() {
  const { login, loading } = useLogin()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const result = await login(email, password)

    if (result?.error) {
      alert(result.error)
      return
    }

    alert("Login successful!")
  }

  return (
    <div className="dark min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-block mb-4">
            <div className="h-12 w-12 rounded-xl bg-linear-to-br from-primary to-accent flex items-center justify-center">
              <Lock className="h-6 w-6 text-white " />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 tracking-tight">
            Welcome Back
          </h1>
          <p className="text-white text-sm sm:text-base">
            Sign in to your account to continue
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-8 sm:p-10"
        >
          {/* Email */}
          <div className="space-y-3">
            <label htmlFor="email" className="block text-sm font-semibold text-white">
              Email Address
            </label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white group-focus-within:text-primary transition-colors" />
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-3 bg-input/50 border border-border/50 rounded-lg text-white"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-3">
            <label htmlFor="password" className="block text-sm font-semibold text-white">
              Password
            </label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white group-focus-within:text-primary transition-colors" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-12 pr-12 py-3 bg-input/50 border border-border/50 rounded-lg text-white"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2  text-white text-whitehover:text-white"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-8 bg-linear-to-r from-primary to-accent text-white  font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                <span>Signing in...</span>
              </>
            ) : (
              <>
                <span>Sign In</span>
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </form>

        {/* Navigation */}
        <div className="mt-10 text-center text-sm">
          <span className="text-white">Don't have an account? </span>

          <Link
            to="/signup"
            className="text-white hover:text-accent font-semibold transition-colors duration-300"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}
