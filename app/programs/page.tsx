"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import {
  GraduationCap,
  Music,
  Users,
  Clock,
  Calendar,
  Award,
  Star,
  CheckCircle,
  Sparkles,
  Target,
  TrendingUp,
  BookOpen,
  Heart,
  Zap
} from "lucide-react";

export default function ProgramsPage() {
  const programs = [
    {
      id: 1,
      title: "Beginner Piano Course",
      subtitle: "Perfect start for aspiring pianists",
      description: "A comprehensive foundation program designed for students with little or no prior piano experience. Learn proper technique, music reading, and basic theory while building confidence at the keyboard.",
      duration: "6-12 months",
      frequency: "Weekly 60-minute lessons",
      level: "Beginner",
      ageGroup: "Ages 6+",
      price: "₹3,000/month",
      color: "from-blue-500 to-cyan-500",
      icon: <Music className="w-8 h-8" />,
      features: [
        "Proper hand position and posture",
        "Note reading and music theory basics",
        "Simple melodies and coordination exercises",
        "Introduction to rhythm and timing",
        "Fun, age-appropriate repertoire",
        "Progress tracking with parent updates"
      ],
      outcomes: [
        "Read basic musical notation",
        "Play simple pieces with both hands",
        "Understand fundamental music concepts",
        "Build strong technical foundation"
      ]
    },
    {
      id: 2,
      title: "ABRSM Exam Preparation",
      subtitle: "Grade 1 through Grade 8",
      description: "Structured preparation for Associated Board of the Royal Schools of Music (ABRSM) examinations. Comprehensive coverage of syllabus requirements including repertoire, scales, sight-reading, and aural training.",
      duration: "Varies by grade",
      frequency: "Weekly lessons + practice guidance",
      level: "All Grades",
      ageGroup: "Ages 7+",
      price: "₹5,000/month",
      color: "from-purple-500 to-pink-500",
      icon: <Award className="w-8 h-8" />,
      features: [
        "Complete syllabus coverage",
        "Repertoire selection guidance",
        "Scales and arpeggios mastery",
        "Sight-reading practice",
        "Aural training exercises",
        "Mock examinations",
        "Performance anxiety management",
        "Exam technique strategies"
      ],
      outcomes: [
        "Achieve grade-level certification",
        "Master technical requirements",
        "Develop exam confidence",
        "Build systematic practice habits"
      ]
    },
    {
      id: 3,
      title: "Trinity College Preparation",
      subtitle: "Initial through Grade 8 & Diplomas",
      description: "Tailored preparation for Trinity College London examinations with emphasis on performance skills and musical expression. Flexible approach accommodating individual learning styles and musical interests.",
      duration: "Varies by level",
      frequency: "Weekly lessons",
      level: "All Levels",
      ageGroup: "Ages 7+",
      price: "₹5,000/month",
      color: "from-green-500 to-emerald-500",
      icon: <GraduationCap className="w-8 h-8" />,
      features: [
        "Trinity syllabus expertise",
        "Performance-focused training",
        "Technical work and studies",
        "Supporting tests preparation",
        "Improvisation (if selected)",
        "Individual program planning",
        "Mock assessment sessions"
      ],
      outcomes: [
        "Trinity certification achievement",
        "Strong performance skills",
        "Musical interpretation ability",
        "Confident stage presence"
      ]
    },
    {
      id: 4,
      title: "Advanced Performance Program",
      subtitle: "For serious musicians",
      description: "Intensive program for advanced students pursuing music at the highest level. Focus on advanced repertoire, interpretation, performance psychology, and preparation for competitions or college auditions.",
      duration: "Ongoing",
      frequency: "90-minute lessons",
      level: "Advanced (Grade 6+)",
      ageGroup: "Ages 12+",
      price: "₹6,000/month",
      color: "from-orange-500 to-red-500",
      icon: <Star className="w-8 h-8" />,
      features: [
        "Advanced repertoire exploration",
        "In-depth musical analysis",
        "Performance preparation",
        "Competition coaching",
        "College audition guidance",
        "Recording sessions",
        "Masterclass participation",
        "Career pathway mentoring"
      ],
      outcomes: [
        "Professional performance skills",
        "Competition readiness",
        "College audition preparation",
        "Artistic maturity development"
      ]
    },
    {
      id: 5,
      title: "Adult Piano Classes",
      subtitle: "Never too late to learn",
      description: "Flexible program designed for adult learners pursuing piano for pleasure, personal growth, or delayed dreams. Learn at your own pace with repertoire choices that resonate with your musical tastes.",
      duration: "Flexible",
      frequency: "Weekly or bi-weekly",
      level: "All Levels",
      ageGroup: "Adults",
      price: "₹3,500/month",
      color: "from-indigo-500 to-purple-500",
      icon: <Heart className="w-8 h-8" />,
      features: [
        "Flexible scheduling (weekends)",
        "Customized repertoire selection",
        "Self-paced learning",
        "Popular music and classics",
        "Music theory as needed",
        "Stress-free environment",
        "Optional performance opportunities"
      ],
      outcomes: [
        "Play favorite pieces",
        "Develop musical hobby",
        "Stress relief through music",
        "Personal achievement satisfaction"
      ]
    },
    {
      id: 6,
      title: "Summer Intensive Program",
      subtitle: "Accelerate your progress",
      description: "Immersive summer program offering concentrated learning during school holidays. Ideal for students wanting to advance quickly or prepare for upcoming examinations.",
      duration: "4-8 weeks",
      frequency: "2-3 lessons per week",
      level: "All Levels",
      ageGroup: "Ages 8+",
      price: "₹8,000/month",
      color: "from-yellow-500 to-orange-500",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Intensive practice schedule",
        "Accelerated learning",
        "Group masterclasses",
        "Performance workshops",
        "Theory intensives",
        "Peer collaboration",
        "End-of-program recital"
      ],
      outcomes: [
        "Rapid skill advancement",
        "Exam preparation completion",
        "Enhanced musicianship",
        "Increased confidence"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Personalized Approach",
      description: "Every student receives a customized learning plan tailored to their goals, learning style, and musical interests."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Progress Tracking",
      description: "Advanced digital tools help monitor progress with detailed analytics and regular feedback for students and parents."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Performance Opportunities",
      description: "Regular recitals, masterclasses, and events provide valuable performance experience in supportive environments."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Comprehensive Resources",
      description: "Access to extensive library of sheet music, practice materials, tutorials, and reference resources."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-musical-purple-50 dark:from-gray-900 dark:to-musical-purple-950">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-musical-purple-100/50 to-musical-gold-100/50 dark:from-musical-purple-900/20 dark:to-musical-gold-900/20" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center p-3 bg-musical-purple-100 dark:bg-musical-purple-900 rounded-full mb-6">
              <GraduationCap className="w-8 h-8 text-musical-purple-600" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-musical-purple-600 to-musical-gold-600">
              Piano Programs
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Comprehensive piano education programs designed for every age, level, and goal. From beginners to advanced performers, find the perfect program for your musical journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index % 2) }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Left: Header */}
                    <div className={`p-8 bg-gradient-to-br ${program.color} text-white`}>
                      <div className="mb-4">{program.icon}</div>
                      <h2 className="text-3xl font-bold mb-2">{program.title}</h2>
                      <p className="text-white/90 mb-6">{program.subtitle}</p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{program.frequency}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <GraduationCap className="w-4 h-4" />
                          <span>{program.level}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="w-4 h-4" />
                          <span>{program.ageGroup}</span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/30">
                        <div className="text-3xl font-bold mb-2">{program.price}</div>
                        <Button className="w-full bg-white text-gray-900 hover:bg-gray-100">
                          Enroll Now
                        </Button>
                      </div>
                    </div>

                    {/* Middle: Description & Features */}
                    <div className="p-8">
                      <h3 className="text-xl font-bold mb-4">Program Overview</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-6">
                        {program.description}
                      </p>

                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-musical-purple-600" />
                        What's Included
                      </h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: Learning Outcomes */}
                    <div className="p-8 bg-gray-50 dark:bg-gray-800">
                      <h4 className="font-bold mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5 text-musical-purple-600" />
                        Learning Outcomes
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        By the end of this program, students will be able to:
                      </p>
                      <ul className="space-y-3">
                        {program.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <Star className="w-4 h-4 text-musical-gold-600 mt-0.5 flex-shrink-0" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <Button variant="outline" className="w-full">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold mb-4 text-musical-purple-600">
              Why Choose Our Programs?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Experience the difference of personalized, professional piano education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-shadow border-musical-purple-100 hover:border-musical-purple-300">
                  <div className="p-3 bg-musical-purple-100 dark:bg-musical-purple-900 rounded-lg text-musical-purple-600 inline-flex mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-musical-purple-600 to-musical-gold-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <Sparkles className="w-12 h-12 text-white mx-auto mb-4" />
            <h2 className="text-4xl font-display font-bold mb-4 text-white">
              Ready to Begin Your Musical Journey?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Schedule a free trial lesson and discover which program is right for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-musical-purple-600 hover:bg-gray-100" size="lg">
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Trial
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                size="lg"
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
