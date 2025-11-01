"use client";

import { motion } from "framer-motion";
import { Music, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const musicalNotes = ["♪", "♫", "♬", "♭", "♮", "♯"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-musical-purple-50 via-white to-musical-gold-50">
        {/* Floating Musical Notes */}
        {musicalNotes.map((note, i) => (
          <motion.div
            key={i}
            className="absolute text-musical-purple-200 text-4xl opacity-20"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: -50 
            }}
            animate={{
              y: window.innerHeight + 50,
              x: Math.random() * window.innerWidth,
              rotate: 360,
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear",
            }}
          >
            {note}
          </motion.div>
        ))}
        
        {/* Piano Keys Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-5">
          <div className="flex h-full">
            {Array.from({ length: 52 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "flex-1 border-r border-gray-300",
                  [1, 3, 6, 8, 10].includes(i % 12)
                    ? "bg-gray-900 h-20"
                    : "bg-white h-full"
                )}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-musical-purple-100 rounded-full"
          >
            <Music className="w-4 h-4 mr-2 text-musical-purple-600" />
            <span className="text-sm font-medium text-musical-purple-700">
              Excellence in Piano Education
            </span>
          </motion.div>

          {/* Main Heading */}
          <div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6">
              Unlock Your
              <span className="block bg-gradient-to-r from-musical-purple-600 to-musical-gold-500 bg-clip-text text-transparent">
                Musical Potential
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Expert piano instruction for ABRSM and Trinity examinations, 
              where passion meets precision and every note tells your story
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-musical-purple-500 to-musical-purple-600 text-white hover:from-musical-purple-600 hover:to-musical-purple-700 shadow-lg"
              asChild
            >
              <Link href="/register">
                Start Your Journey
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-musical-purple-300 text-musical-purple-700 hover:bg-musical-purple-50"
              onClick={() => setIsVideoOpen(true)}
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Introduction
            </Button>
          </div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12"
          >
            {[
              { number: "20+", label: "Years Experience" },
              { number: "500+", label: "Students Taught" },
              { number: "95%", label: "Exam Success Rate" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-musical-purple-100"
              >
                <div className="text-3xl font-bold text-musical-purple-600">
                  {stat.number}
                </div>
                <div className="text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div className="bg-white rounded-lg max-w-4xl w-full p-2">
            <div className="aspect-video bg-gray-900 rounded flex items-center justify-center">
              <p className="text-white">Video Player Placeholder</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
