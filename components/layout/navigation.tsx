"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Music, 
  Menu, 
  X, 
  User, 
  Calendar, 
  BookOpen, 
  Home,
  Info,
  GraduationCap,
  Mail,
  LogIn,
  UserPlus,
  LayoutDashboard
} from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    { href: "/about", label: "About", icon: <Info className="w-4 h-4" /> },
    { href: "/programs", label: "Programs", icon: <GraduationCap className="w-4 h-4" /> },
    { href: "/events", label: "Events", icon: <Calendar className="w-4 h-4" /> },
    { href: "/resources", label: "Resources", icon: <BookOpen className="w-4 h-4" /> },
    { href: "/blog", label: "Blog", icon: <BookOpen className="w-4 h-4" /> },
    { href: "/contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-musical-purple-600 to-musical-gold-600 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative bg-gradient-to-r from-musical-purple-600 to-musical-gold-600 text-white p-2 rounded-lg">
                  <Music className="w-6 h-6" />
                </div>
              </div>
              <div>
                <span className="font-display font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-musical-purple-600 to-musical-gold-600">
                  Susan Paul
                </span>
                <span className="block text-xs text-gray-600 dark:text-gray-400">
                  Music Academy
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-lg transition-all duration-200 hover:bg-musical-purple-50 dark:hover:bg-musical-purple-900/20",
                    pathname === item.href
                      ? "bg-musical-purple-100 dark:bg-musical-purple-900/30 text-musical-purple-700 dark:text-musical-purple-300"
                      : "text-gray-700 dark:text-gray-300"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" size="sm">
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-musical-purple-600 hover:bg-musical-purple-700" size="sm">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Sign Up
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white dark:bg-gray-900 shadow-xl"
            >
              <div className="flex flex-col h-full pt-20 pb-6">
                <div className="flex-1 overflow-y-auto px-6">
                  <div className="space-y-1">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                          pathname === item.href
                            ? "bg-musical-purple-100 dark:bg-musical-purple-900/30 text-musical-purple-700 dark:text-musical-purple-300"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        )}
                      >
                        {item.icon}
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t space-y-3">
                    <Link href="/dashboard">
                      <Button variant="outline" className="w-full">
                        <LayoutDashboard className="w-4 h-4 mr-2" />
                        Dashboard
                      </Button>
                    </Link>
                    <Link href="/login">
                      <Button variant="outline" className="w-full">
                        <LogIn className="w-4 h-4 mr-2" />
                        Login
                      </Button>
                    </Link>
                    <Link href="/register">
                      <Button className="w-full bg-musical-purple-600 hover:bg-musical-purple-700">
                        <UserPlus className="w-4 h-4 mr-2" />
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
