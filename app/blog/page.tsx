"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import {
  BookOpen,
  Calendar,
  Clock,
  User,
  Search,
  ArrowRight,
  Music,
  TrendingUp,
  Tag,
  Filter,
  Mail
} from "lucide-react";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "5 Essential Practice Techniques for Piano Students",
      excerpt: "Discover proven methods to make your practice sessions more effective and enjoyable. Learn how to structure your time and achieve faster progress.",
      category: "Practice Tips",
      author: "Susan Paul",
      date: "2024-10-15",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&h=500&fit=crop",
      featured: true,
      tags: ["Practice", "Technique", "Students"]
    },
    {
      id: 2,
      title: "Understanding ABRSM Grade Examinations",
      excerpt: "A comprehensive guide for parents and students preparing for ABRSM piano exams. What to expect and how to prepare effectively.",
      category: "Exam Preparation",
      author: "Susan Paul",
      date: "2024-10-10",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=500&fit=crop",
      featured: true,
      tags: ["ABRSM", "Exams", "Guide"]
    },
    {
      id: 3,
      title: "How Music Education Enhances Cognitive Development",
      excerpt: "Exploring the scientific research behind music's impact on brain development, memory, and academic performance in children.",
      category: "Music Education",
      author: "Susan Paul",
      date: "2024-10-05",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop",
      featured: false,
      tags: ["Education", "Science", "Development"]
    },
    {
      id: 4,
      title: "Choosing the Right Piano for Your Home",
      excerpt: "From acoustic to digital, learn about different piano options and what factors to consider when making this important investment.",
      category: "Resources",
      author: "Susan Paul",
      date: "2024-09-28",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1552422535-c45813c61732?w=800&h=500&fit=crop",
      featured: false,
      tags: ["Piano", "Buying Guide", "Resources"]
    },
    {
      id: 5,
      title: "Performance Anxiety: Tips for Young Musicians",
      excerpt: "Strategies to help students overcome stage fright and perform with confidence at recitals and examinations.",
      category: "Performance",
      author: "Susan Paul",
      date: "2024-09-20",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=500&fit=crop",
      featured: false,
      tags: ["Performance", "Mental Health", "Students"]
    },
    {
      id: 6,
      title: "Trinity College vs ABRSM: Which Exam Board to Choose?",
      excerpt: "A detailed comparison of the two major piano examination boards to help you make an informed decision for your musical journey.",
      category: "Exam Preparation",
      author: "Susan Paul",
      date: "2024-09-15",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=500&fit=crop",
      featured: false,
      tags: ["Trinity", "ABRSM", "Comparison"]
    },
    {
      id: 7,
      title: "Building a Consistent Practice Routine",
      excerpt: "Learn how to establish and maintain a daily practice schedule that fits your lifestyle and accelerates your progress.",
      category: "Practice Tips",
      author: "Susan Paul",
      date: "2024-09-08",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?w=800&h=500&fit=crop",
      featured: false,
      tags: ["Practice", "Routine", "Discipline"]
    },
    {
      id: 8,
      title: "The Importance of Music Theory in Piano Learning",
      excerpt: "Understanding why music theory matters and how it enhances your ability to learn, interpret, and perform music.",
      category: "Music Education",
      author: "Susan Paul",
      date: "2024-09-01",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&h=500&fit=crop",
      featured: false,
      tags: ["Theory", "Education", "Learning"]
    }
  ];

  const categories = [
    "all",
    "Practice Tips",
    "Exam Preparation",
    "Music Education",
    "Performance",
    "Resources"
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

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
              <BookOpen className="w-8 h-8 text-musical-purple-600" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-musical-purple-600 to-musical-gold-600">
              Music Education Blog
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Insights, tips, and resources for piano students, parents, and music enthusiasts
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-musical-purple-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={
                  selectedCategory === category
                    ? "bg-musical-purple-600 hover:bg-musical-purple-700 flex-shrink-0"
                    : "flex-shrink-0"
                }
              >
                {category === "all" ? "All Posts" : category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "all" && !searchQuery && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="w-6 h-6 text-musical-purple-600" />
              <h2 className="text-3xl font-display font-bold text-musical-purple-600">
                Featured Articles
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer h-full">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-musical-purple-600 text-white text-sm rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <span className="inline-block px-3 py-1 bg-musical-gold-100 dark:bg-musical-gold-900 text-musical-gold-700 dark:text-musical-gold-300 text-xs rounded-full mb-3">
                        {post.category}
                      </span>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-musical-purple-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {post.author}
                          </span>
                        </div>
                        <Button variant="ghost" className="group-hover:text-musical-purple-600">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-8 text-musical-purple-600">
            {searchQuery ? `Search Results (${filteredPosts.length})` :
             selectedCategory === "all" ? "All Articles" : selectedCategory}
          </h2>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <Music className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No articles found. Try adjusting your search or filters.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index % 3) }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <span className="inline-block px-3 py-1 bg-musical-gold-100 dark:bg-musical-gold-900 text-musical-gold-700 dark:text-musical-gold-300 text-xs rounded-full mb-3 self-start">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-musical-purple-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {post.author}
                          </span>
                        </div>
                        <Button variant="ghost" size="sm" className="group-hover:text-musical-purple-600">
                          Read
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-musical-purple-600 to-musical-gold-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <Mail className="w-12 h-12 text-white mx-auto mb-4" />
            <h2 className="text-4xl font-display font-bold mb-4 text-white">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Subscribe to our newsletter for the latest tips, resources, and updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-musical-purple-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
