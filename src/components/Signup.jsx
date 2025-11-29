"use client"

import { useState } from "react"
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import useSignup from "../hooks/UseSignup"

export default function SignUpPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const { signup, loading } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            alert("Passwords do not match!")
            return
        }

        const result = await signup(email, password)

        if (result?.error) {
            alert(result.error)
            return
        }

        alert("Signup successful!")
    }

    return (
        <div className="dark min-h-screen bg-background flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gray-900">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-40" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-40" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-20" />
            </div>

            <div className="w-full max-w-md relative z-10">

                {/* Header */}
                <div className="text-center mb-10 sm:mb-12">
                    <div className="inline-block mb-4">
                        <div className="h-12 w-12 rounded-xl bg-linear-to-r from-primary to-accent flex items-center justify-center">
                            <Lock className="h-6 w-6 text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 tracking-tight">
                        Create Account
                    </h1>
                    <p className="text-gray-900 text-sm sm:text-base">
                        Sign up to get started
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="space-y-6 bg-card/50 backdrop-blur-xl border  border-white rounded-2xl p-8 sm:p-10"
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
                                className="w-full pl-12 pr-4 py-3 bg-input/50 border border-border/50 rounded-lg text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 hover:border-border"
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
                                className="w-full pl-12 pr-12 py-3 bg-input/50 border border-border/50 rounded-lg text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 hover:border-border"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-white transition-colors"
                            >
                                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-3">
                        <label htmlFor="confirmPassword" className="block text-sm font-semibold text-white">
                            Confirm Password
                        </label>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white group-focus-within:text-primary transition-colors" />
                            <input
                                id="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="••••••••"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="w-full pl-12 pr-12 py-3 bg-input/50 border border-border/50 rounded-lg text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 hover:border-border"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-white transition-colors"
                            >
                                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full mt-8 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group"
                    >
                        {loading ? (
                            <>
                                <div className="h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                                <span>Signing up...</span>
                            </>
                        ) : (
                            <>
                                <span>Sign Up</span>
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </form>

                <div className="mt-10 text-center text-sm">
                    <span className="text-white">Already have an account? </span>
                    <Link
                        to="/"
                        className="text-white hover:text-accent font-semibold transition-colors duration-300"
                    >
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    )
}
