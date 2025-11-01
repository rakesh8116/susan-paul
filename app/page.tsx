"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Music, 
  Award, 
  Users, 
  Calendar, 
  BookOpen, 
  Star,
  ChevronRight,
  Play,
  GraduationCap,
  Target,
  Heart,
  Sparkles
} from "lucide-react";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import PianoAnimation from "@/components/animations/piano-animation";

export default function Home() {
  const [musicNotes, setMusicNotes] = useState<number[]>([]);

  useEffect(() => {
    // Generate floating music notes
    const notes = Array.from({ length: 5 }, (_, i) => i);
    setMusicNotes(notes);
  }, []);

  const features = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "ABRSM & Trinity Preparation",
      description: "Expert guidance for international music examinations with proven results"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Personalized Progress Tracking",
      description: "Monitor your musical journey with detailed analytics and achievements"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Parent Portal",
      description: "Stay connected with your child's progress and practice routine"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Flexible Scheduling",
      description: "Weekend classes designed for busy students and working professionals"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Rich Resources",
      description: "Access sheet music, tutorials, and practice materials anytime"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Holistic Approach",
      description: "Combining technical excellence with musical expression and creativity"
    }
  ];

  const stats = [
    { value: "20+", label: "Years Experience" },
    { value: "500+", label: "Students Taught" },
    { value: "95%", label: "Exam Success Rate" },
    { value: "100+", label: "Recitals Organized" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-musical-purple-50 dark:from-gray-900 dark:to-musical-purple-950">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-r from-musical-purple-100/50 to-musical-gold-100/50 dark:from-musical-purple-900/20 dark:to-musical-gold-900/20" />
        
        {/* Floating Music Notes Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {musicNotes.map((note) => (
            <motion.div
              key={note}
              className="absolute text-musical-purple-300"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: window.innerHeight + 50 
              }}
              animate={{ 
                y: -100,
                x: Math.random() * window.innerWidth
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5
              }}
            >
              <Music size={20 + Math.random() * 20} />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-musical-purple-600 to-musical-gold-600">
                Susan Paul Music Academy
              </h1>
              <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
                Where Musical Excellence Meets Personal Growth
              </p>
              <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
                Join Bangalore's premier piano education program. Expert instruction for ABRSM & Trinity examinations, 
                with a unique blend of technical mastery and creative expression.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-musical-purple-600 hover:bg-musical-purple-700 text-white"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Start Your Journey
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-musical-purple-600 text-musical-purple-600 hover:bg-musical-purple-50"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Trial Class
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-musical-purple-600">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <PianoAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Susan Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold mb-6 text-musical-purple-600">
              Meet Your Instructor
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700 dark:text-gray-300">
              <p className="mb-6">
                With over 20 years of experience in music education and a unique background combining 
                musical expertise with strategic communications leadership at Fortune 500 companies, 
                Susan Paul brings a distinctive approach to piano education.
              </p>
              <p className="mb-6">
                Susan's journey spans pioneering roles at PwC, Cisco, IBM, Dell, and other global organizations, 
                where she mastered the art of clear communication, structured learning, and progress tracking—skills 
                she now applies to create transformative musical experiences for her students.
              </p>
              <p>
                Her teaching philosophy combines technical excellence with creative expression, using innovative 
                methods and technology to make learning engaging, measurable, and deeply rewarding.
              </p>
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <Link href="/about">
                <Button variant="outline">
                  Learn More About Susan
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-musical-purple-50 to-white dark:from-musical-purple-950/20 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold mb-4 text-musical-purple-600">
              Why Choose Susan Paul Music?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              A comprehensive approach to musical education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-shadow border-musical-purple-100 hover:border-musical-purple-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-musical-purple-100 dark:bg-musical-purple-900 rounded-lg text-musical-purple-600">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-musical-purple-600 to-musical-gold-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-white" />
            <h2 className="text-4xl font-display font-bold mb-4 text-white">
              Begin Your Musical Journey Today
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join our community of passionate musicians and unlock your potential with personalized guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-musical-purple-600 hover:bg-gray-100"
              >
                Enroll Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
