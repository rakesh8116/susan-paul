"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import {
  Music,
  Award,
  GraduationCap,
  Heart,
  Users,
  Star,
  Target,
  Sparkles,
  BookOpen,
  TrendingUp,
  Calendar,
  Mail
} from "lucide-react";

export default function AboutPage() {
  const qualifications = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Music Qualifications",
      items: [
        "ABRSM Piano Teacher & Performer",
        "Trinity College London Examinations",
        "Ongoing Musicianship - Berklee College of Music",
        "Music Courses - University of Sheffield"
      ]
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Professional Background",
      items: [
        "20+ years Communications Leadership",
        "Internal Communications Leader - PwC (2021-2025)",
        "Strategic roles at Cisco, IBM, Dell, Aricent",
        "MBA Marketing - Sikkim Manipal University"
      ]
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Teaching Philosophy",
      items: [
        "Student-centered approach",
        "Technical excellence with creative expression",
        "Progress tracking and goal setting",
        "Building confidence and musical joy"
      ]
    }
  ];

  const achievements = [
    {
      number: "500+",
      label: "Students Taught",
      icon: <Users className="w-8 h-8" />
    },
    {
      number: "95%",
      label: "Exam Pass Rate",
      icon: <Award className="w-8 h-8" />
    },
    {
      number: "20+",
      label: "Years Experience",
      icon: <Star className="w-8 h-8" />
    },
    {
      number: "100+",
      label: "Recitals Organized",
      icon: <Music className="w-8 h-8" />
    }
  ];

  const teachingApproach = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Personalized Learning",
      description: "Every student is unique. I create customized lesson plans that match individual learning styles, goals, and musical interests."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Progress Tracking",
      description: "Using modern technology and structured assessment, students and parents can track progress with detailed analytics and regular feedback."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Comprehensive Curriculum",
      description: "From scales and sight-reading to repertoire and theory, I ensure a well-rounded musical education that prepares students for examinations and beyond."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Nurturing Environment",
      description: "Creating a supportive atmosphere where students feel encouraged to take risks, make mistakes, and grow both as musicians and individuals."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Creative Expression",
      description: "While technical proficiency is important, I emphasize musical interpretation and helping students develop their own artistic voice."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Flexible Scheduling",
      description: "Weekend classes and flexible timing options designed for busy students and working professionals in Bangalore."
    }
  ];

  const values = [
    {
      title: "Excellence",
      description: "Striving for the highest standards in musical education while making learning accessible and enjoyable."
    },
    {
      title: "Integrity",
      description: "Honest assessment, transparent communication, and genuine care for each student's development."
    },
    {
      title: "Innovation",
      description: "Combining traditional teaching methods with modern technology and creative approaches to learning."
    },
    {
      title: "Community",
      description: "Building a supportive network of students, parents, and music enthusiasts who inspire and encourage one another."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-musical-purple-50 dark:from-gray-900 dark:to-musical-purple-950">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-musical-purple-100/50 to-musical-gold-100/50 dark:from-musical-purple-900/20 dark:to-musical-gold-900/20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-musical-purple-600 to-musical-gold-600">
                About Susan Paul
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
                Where Corporate Excellence Meets Musical Passion
              </p>
              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  A strategic Communications leader with 20+ years of experience in pioneering roles at
                  PwC, Cisco, IBM, Dell, Aricent (Capgemini), and Covansys, I bring a unique blend of
                  strategic clarity, creative storytelling, and human-centered leadership to piano education.
                </p>
                <p>
                  Throughout my corporate journey, I built, scaled, and transformed internal, HR, and
                  corporate communications functions from the ground up. As a trusted advisor to leadership,
                  I translated complex business strategies into authentic messaging that united global teams.
                  These same principles now guide my approach to music education—clear communication,
                  measurable progress, and personalized engagement.
                </p>
                <p>
                  Music has been my lifelong passion. I'm currently pursuing advanced musicianship studies
                  with Berklee College of Music and have completed ABRSM examinations. Today, I'm dedicated
                  to helping students in Bangalore discover the joy of music while achieving their goals in
                  ABRSM and Trinity College examinations, combining technical excellence with creative expression.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop"
                  alt="Susan Paul - Piano Teacher and Communications Leader"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-musical-purple-900/50 to-transparent" />
              </div>
              {/* Floating achievement badges */}
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-musical-purple-100 dark:bg-musical-purple-900 rounded-lg">
                    <Award className="w-6 h-6 text-musical-purple-600" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">20+ Years</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Teaching Excellence</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Stats */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="inline-flex items-center justify-center p-4 bg-musical-purple-100 dark:bg-musical-purple-900 rounded-full mb-4 text-musical-purple-600">
                    {achievement.icon}
                  </div>
                  <div className="text-4xl font-bold text-musical-purple-600 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {achievement.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold mb-4 text-musical-purple-600">
              Qualifications & Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A unique blend of musical expertise and corporate leadership
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-musical-purple-100 dark:bg-musical-purple-900 rounded-lg text-musical-purple-600">
                      {qual.icon}
                    </div>
                    <h3 className="text-xl font-bold">{qual.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {qual.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <Star className="w-4 h-4 text-musical-gold-600 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold mb-4 text-musical-purple-600">
              My Teaching Approach
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Combining technical excellence with personalized care and modern methodology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachingApproach.map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index % 3) }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-shadow border-musical-purple-100 hover:border-musical-purple-300">
                  <div className="p-3 bg-musical-purple-100 dark:bg-musical-purple-900 rounded-lg text-musical-purple-600 inline-flex mb-4">
                    {approach.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{approach.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {approach.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold mb-4 text-musical-purple-600">
              Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything I do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center h-full hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-musical-purple-50 dark:from-gray-800 dark:to-musical-purple-950">
                  <h3 className="text-xl font-bold mb-3 text-musical-purple-600">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Note */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 lg:p-12 bg-gradient-to-r from-musical-purple-50 to-musical-gold-50 dark:from-musical-purple-950 dark:to-musical-gold-950 border-musical-purple-200">
              <div className="flex items-start gap-4 mb-6">
                <Music className="w-12 h-12 text-musical-purple-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-musical-purple-600">
                    A Personal Note
                  </h3>
                  <div className="prose prose-lg text-gray-700 dark:text-gray-300 space-y-4">
                    <p>
                      Music has been my lifelong passion, and teaching has given me the privilege
                      of sharing that passion with hundreds of students. What makes my approach
                      unique is the integration of skills from my corporate career—clear goal-setting,
                      structured progress tracking, and effective communication with both students
                      and parents.
                    </p>
                    <p>
                      I believe that every student has the potential to excel, and my role is to
                      provide the guidance, resources, and encouragement they need to reach their
                      goals. Whether you're preparing for Grade 1 or pursuing advanced diplomas,
                      I'm committed to making your musical journey both challenging and rewarding.
                    </p>
                    <p>
                      I look forward to welcoming you to our musical family!
                    </p>
                    <div className="font-display text-2xl text-musical-purple-600 mt-6">
                      — Susan Paul
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
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
              Ready to Start Your Musical Journey?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss your goals and create a personalized learning plan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-musical-purple-600 hover:bg-gray-100" size="lg">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Trial Class
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                size="lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
