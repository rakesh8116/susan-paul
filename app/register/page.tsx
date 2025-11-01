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
  UserPlus,
  User,
  Phone,
  Calendar,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "student",
    dateOfBirth: "",
    agreeToTerms: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (!formData.agreeToTerms) {
      toast.error("Please agree to the terms and conditions");
      return;
    }

    setIsLoading(true);

    // Simulate registration
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success("Registration successful! Welcome to Susan Paul Music!");
    setIsLoading(false);

    // In a real app, this would redirect to dashboard
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const benefits = [
    "Access to exclusive learning resources",
    "Track your progress with detailed analytics",
    "Schedule and manage lessons online",
    "Connect with your teacher anytime",
    "Join events, recitals, and masterclasses",
    "Earn achievements and badges"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-musical-purple-50 dark:from-gray-900 dark:to-musical-purple-950">
      <Navigation />

      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-musical-purple-100/50 to-musical-gold-100/50 dark:from-musical-purple-900/20 dark:to-musical-gold-900/20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Benefits */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="hidden lg:block sticky top-32"
              >
                <div className="p-12 bg-gradient-to-br from-musical-purple-600 to-musical-gold-600 rounded-2xl text-white">
                  <div className="mb-6">
                    <Music className="w-16 h-16" />
                  </div>
                  <h2 className="text-4xl font-display font-bold mb-6">
                    Join Our Musical Community
                  </h2>
                  <p className="text-lg mb-8 text-white/90">
                    Create your account to access personalized piano education,
                    track your progress, and achieve your musical goals.
                  </p>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg mb-4">What you'll get:</h3>
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span className="text-white/90">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Registration Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="p-8 lg:p-12">
                  <div className="text-center mb-8">
                    <h1 className="text-3xl font-display font-bold mb-2 text-musical-purple-600">
                      Create Account
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                      Start your musical journey today
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-musical-purple-500 focus:border-transparent transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Address *
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

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-musical-purple-500 focus:border-transparent transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    {/* Role & Date of Birth */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          I am a *
                        </label>
                        <select
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-musical-purple-500 focus:border-transparent transition-all"
                        >
                          <option value="student">Student</option>
                          <option value="parent">Parent</option>
                          <option value="adult_learner">Adult Learner</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Date of Birth
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Calendar className="w-5 h-5 text-gray-400" />
                          </div>
                          <input
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-musical-purple-500 focus:border-transparent transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Password */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Password *
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
                          minLength={8}
                          className="w-full pl-10 pr-12 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-musical-purple-500 focus:border-transparent transition-all"
                          placeholder="Create a strong password"
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
                      <p className="text-xs text-gray-500 mt-1">
                        Must be at least 8 characters long
                      </p>
                    </div>

                    {/* Confirm Password */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Confirm Password *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-12 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-musical-purple-500 focus:border-transparent transition-all"
                          placeholder="Re-enter your password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                          ) : (
                            <Eye className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div>
                      <label className="flex items-start gap-2">
                        <input
                          type="checkbox"
                          name="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onChange={handleChange}
                          className="w-4 h-4 mt-1 text-musical-purple-600 border-gray-300 rounded focus:ring-musical-purple-500"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          I agree to the{" "}
                          <Link href="/terms" className="text-musical-purple-600 hover:underline">
                            Terms and Conditions
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" className="text-musical-purple-600 hover:underline">
                            Privacy Policy
                          </Link>
                        </span>
                      </label>
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
                          Creating your account...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <UserPlus className="w-5 h-5 mr-2" />
                          Create Account
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
                          Or sign up with
                        </span>
                      </div>
                    </div>

                    {/* Social Sign Up Buttons */}
                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full"
                        onClick={() => toast("Google sign up coming soon!")}
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
                        onClick={() => toast("Facebook sign up coming soon!")}
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        Facebook
                      </Button>
                    </div>
                  </form>

                  {/* Sign In Link */}
                  <div className="mt-8 text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Already have an account?{" "}
                      <Link
                        href="/login"
                        className="text-musical-purple-600 hover:text-musical-purple-700 font-semibold"
                      >
                        Sign in
                      </Link>
                    </p>
                  </div>
                </Card>

                {/* Mobile - Benefits */}
                <div className="lg:hidden mt-8 p-6 bg-musical-purple-50 dark:bg-musical-purple-950 rounded-lg">
                  <h3 className="font-semibold mb-4 text-musical-purple-600">
                    What you'll get:
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-musical-purple-600 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
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
