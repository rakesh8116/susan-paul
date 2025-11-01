"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import {
  Music,
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  UserPlus,
  ArrowRight
} from "lucide-react";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Login successful! Redirecting to dashboard...");
    setIsLoading(false);

    // In a real app, this would redirect to dashboard
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-musical-purple-50 dark:from-gray-900 dark:to-musical-purple-950">
      <Navigation />

      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-musical-purple-100/50 to-musical-gold-100/50 dark:from-musical-purple-900/20 dark:to-musical-gold-900/20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Welcome Message */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="hidden lg:block"
              >
                <div className="p-12 bg-gradient-to-br from-musical-purple-600 to-musical-gold-600 rounded-2xl text-white">
                  <div className="mb-6">
                    <Music className="w-16 h-16" />
                  </div>
                  <h2 className="text-4xl font-display font-bold mb-6">
                    Welcome Back to Your Musical Journey
                  </h2>
                  <p className="text-lg mb-8 text-white/90">
                    Access your personalized dashboard to track progress, view upcoming lessons,
                    and continue your path to musical excellence.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-white/20 rounded-lg mt-1">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Track Your Progress</h3>
                        <p className="text-sm text-white/80">
                          View detailed analytics and achievements
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-white/20 rounded-lg mt-1">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Access Resources</h3>
                        <p className="text-sm text-white/80">
                          Sheet music, tutorials, and practice materials
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-white/20 rounded-lg mt-1">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Manage Lessons</h3>
                        <p className="text-sm text-white/80">
                          Schedule, reschedule, and view lesson history
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Login Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="p-8 lg:p-12">
                  <div className="text-center mb-8">
                    <h1 className="text-3xl font-display font-bold mb-2 text-musical-purple-600">
                      Sign In
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                      Enter your credentials to access your account
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Field */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-musical-purple-500 focus:border-transparent transition-all"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    {/* Password Field */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-12 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-musical-purple-500 focus:border-transparent transition-all"
                          placeholder="Enter your password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                          ) : (
                            <Eye className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="rememberMe"
                          checked={formData.rememberMe}
                          onChange={handleChange}
                          className="w-4 h-4 text-musical-purple-600 border-gray-300 rounded focus:ring-musical-purple-500"
                        />
                        <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                          Remember me
                        </span>
                      </label>
                      <Link
                        href="/forgot-password"
                        className="text-sm text-musical-purple-600 hover:text-musical-purple-700"
                      >
                        Forgot password?
                      </Link>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-musical-purple-600 hover:bg-musical-purple-700 text-white py-6 text-lg"
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center">
                          <Music className="w-5 h-5 mr-2 animate-spin" />
                          Signing in...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <LogIn className="w-5 h-5 mr-2" />
                          Sign In
                        </span>
                      )}
                    </Button>

                    {/* Divider */}
                    <div className="relative my-6">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white dark:bg-gray-800 text-gray-500">
                          Or continue with
                        </span>
                      </div>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full"
                        onClick={() => toast("Google login coming soon!")}
                      >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="currentColor"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="currentColor"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          />
                          <path
                            fill="currentColor"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          />
                        </svg>
                        Google
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full"
                        onClick={() => toast("Facebook login coming soon!")}
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        Facebook
                      </Button>
                    </div>
                  </form>

                  {/* Sign Up Link */}
                  <div className="mt-8 text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Don't have an account?{" "}
                      <Link
                        href="/register"
                        className="text-musical-purple-600 hover:text-musical-purple-700 font-semibold"
                      >
                        Sign up now
                      </Link>
                    </p>
                  </div>
                </Card>

                {/* Mobile - Quick Links */}
                <div className="lg:hidden mt-8 p-6 bg-musical-purple-50 dark:bg-musical-purple-950 rounded-lg">
                  <h3 className="font-semibold mb-4 text-musical-purple-600">
                    What you'll get access to:
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-musical-purple-600" />
                      Progress tracking and analytics
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-musical-purple-600" />
                      Exclusive learning resources
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-musical-purple-600" />
                      Lesson scheduling and management
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
