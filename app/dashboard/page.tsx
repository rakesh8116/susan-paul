"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import {
  Calendar,
  Music,
  Award,
  TrendingUp,
  BookOpen,
  Clock,
  Target,
  Star,
  Users,
  ChevronRight,
  Play,
  CheckCircle,
  AlertCircle,
  BarChart3,
  FileText,
  MessageSquare,
  Bell
} from "lucide-react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock user data
  const user = {
    name: "Student Name",
    role: "student",
    grade: "Grade 5",
    nextLesson: "Saturday, Nov 16, 2024 at 10:00 AM",
    practiceStreak: 7,
    practiceGoal: 30, // minutes per day
    averagePractice: 35
  };

  const stats = [
    {
      icon: <Music className="w-6 h-6" />,
      label: "Lessons Completed",
      value: "24",
      change: "+3 this month",
      color: "text-musical-purple-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Practice Hours",
      value: "42",
      change: "+8 this month",
      color: "text-blue-600"
    },
    {
      icon: <Target className="w-6 h-6" />,
      label: "Practice Streak",
      value: `${user.practiceStreak} days`,
      change: "Keep it up!",
      color: "text-green-600"
    },
    {
      icon: <Award className="w-6 h-6" />,
      label: "Achievements",
      value: "12",
      change: "+2 this week",
      color: "text-musical-gold-600"
    }
  ];

  const upcomingLessons = [
    {
      id: 1,
      date: "Nov 16, 2024",
      time: "10:00 AM",
      duration: "60 min",
      type: "Regular Lesson",
      status: "confirmed"
    },
    {
      id: 2,
      date: "Nov 23, 2024",
      time: "10:00 AM",
      duration: "60 min",
      type: "Regular Lesson",
      status: "confirmed"
    },
    {
      id: 3,
      date: "Nov 30, 2024",
      time: "10:00 AM",
      duration: "60 min",
      type: "Exam Preparation",
      status: "pending"
    }
  ];

  const recentProgress = [
    {
      id: 1,
      date: "Nov 10, 2024",
      piece: "Moonlight Sonata - Movement 1",
      proficiency: 85,
      feedback: "Excellent dynamics control. Work on the tempo consistency in measures 12-16."
    },
    {
      id: 2,
      date: "Nov 8, 2024",
      piece: "Scales - C Major (4 octaves)",
      proficiency: 92,
      feedback: "Great improvement! Keep practicing the left hand thumb crossing."
    },
    {
      id: 3,
      date: "Nov 5, 2024",
      piece: "Sight Reading - Grade 5",
      proficiency: 78,
      feedback: "Good rhythm. Focus on recognizing key signatures faster."
    }
  ];

  const assignments = [
    {
      id: 1,
      title: "Practice Hanon Exercises 1-5",
      dueDate: "Nov 15, 2024",
      status: "pending",
      priority: "high"
    },
    {
      id: 2,
      title: "Learn first 8 bars of new piece",
      dueDate: "Nov 16, 2024",
      status: "in_progress",
      priority: "medium"
    },
    {
      id: 3,
      title: "Record practice session",
      dueDate: "Nov 18, 2024",
      status: "pending",
      priority: "low"
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "7-Day Streak",
      description: "Practiced for 7 consecutive days",
      icon: "🔥",
      earnedAt: "Nov 10, 2024"
    },
    {
      id: 2,
      title: "Early Bird",
      description: "Completed 10 morning practice sessions",
      icon: "🌅",
      earnedAt: "Nov 8, 2024"
    },
    {
      id: 3,
      title: "Scale Master",
      description: "Mastered all major scales",
      icon: "🎹",
      earnedAt: "Nov 5, 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-musical-purple-50 dark:from-gray-900 dark:to-musical-purple-950">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-musical-purple-100/50 to-musical-gold-100/50 dark:from-musical-purple-900/20 dark:to-musical-gold-900/20" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-musical-purple-600 to-musical-gold-600">
              Welcome back, {user.name}!
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Your musical journey continues
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-lg ${stat.color}`}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{stat.label}</div>
                  <div className="text-xs text-green-600">{stat.change}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Upcoming Lessons */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-musical-purple-600 flex items-center gap-2">
                    <Calendar className="w-6 h-6" />
                    Upcoming Lessons
                  </h2>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                <div className="space-y-4">
                  {upcomingLessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-musical-purple-100 dark:bg-musical-purple-900 rounded-lg">
                          <Music className="w-5 h-5 text-musical-purple-600" />
                        </div>
                        <div>
                          <div className="font-semibold">{lesson.type}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {lesson.date} at {lesson.time} • {lesson.duration}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {lesson.status === "confirmed" ? (
                          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full text-xs font-semibold">
                            Confirmed
                          </span>
                        ) : (
                          <span className="px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 rounded-full text-xs font-semibold">
                            Pending
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Recent Progress */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-musical-purple-600 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6" />
                    Recent Progress
                  </h2>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                <div className="space-y-4">
                  {recentProgress.map((progress) => (
                    <div
                      key={progress.id}
                      className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="font-semibold mb-1">{progress.piece}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {progress.date}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-musical-purple-600">
                            {progress.proficiency}%
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">Proficiency</div>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-3">
                        <div
                          className="bg-gradient-to-r from-musical-purple-600 to-musical-gold-600 h-2 rounded-full"
                          style={{ width: `${progress.proficiency}%` }}
                        />
                      </div>
                      <div className="text-sm text-gray-700 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                        <strong>Feedback:</strong> {progress.feedback}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4 text-musical-purple-600">Quick Actions</h3>
                <div className="space-y-2">
                  <Button className="w-full justify-start" variant="outline">
                    <Play className="w-4 h-4 mr-2" />
                    Log Practice Session
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Message Teacher
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Lesson
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <BookOpen className="w-4 h-4 mr-2" />
                    View Resources
                  </Button>
                </div>
              </Card>

              {/* Assignments */}
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4 text-musical-purple-600 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Assignments
                </h3>
                <div className="space-y-3">
                  {assignments.map((assignment) => (
                    <div
                      key={assignment.id}
                      className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div className="flex items-start gap-2">
                        {assignment.status === "pending" ? (
                          <AlertCircle className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                        ) : (
                          <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <div className="text-sm font-semibold">{assignment.title}</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            Due: {assignment.dueDate}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Recent Achievements */}
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4 text-musical-purple-600 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Recent Achievements
                </h3>
                <div className="space-y-3">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className="p-3 bg-gradient-to-r from-musical-purple-50 to-musical-gold-50 dark:from-musical-purple-950 dark:to-musical-gold-950 rounded-lg"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">{achievement.icon}</div>
                        <div>
                          <div className="font-semibold text-sm">{achievement.title}</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            {achievement.description}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                            {achievement.earnedAt}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
