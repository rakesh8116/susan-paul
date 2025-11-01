"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Instagram,
  Facebook,
  Youtube,
  Music
} from "lucide-react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    studentAge: "",
    experienceLevel: "beginner",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      studentAge: "",
      experienceLevel: "beginner",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "susan@susanpaulmusic.com",
      link: "mailto:susan@susanpaulmusic.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "Bangalore, Karnataka, India",
      link: "#",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Class Timings",
      details: "Weekends: 9 AM - 6 PM",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      link: "#",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      name: "Facebook",
      link: "#",
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      name: "YouTube",
      link: "#",
    },
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
              <MessageSquare className="w-8 h-8 text-musical-purple-600" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-musical-purple-600 to-musical-gold-600">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Have questions about our programs? Ready to start your musical journey?
              We'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-shadow border-musical-purple-100 hover:border-musical-purple-300 h-full">
                  <div className="inline-flex items-center justify-center p-3 bg-musical-purple-100 dark:bg-musical-purple-900 rounded-full mb-4 text-musical-purple-600">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  {item.link && item.link !== "#" ? (
                    <a
                      href={item.link}
                      className="text-gray-600 dark:text-gray-400 hover:text-musical-purple-600 transition-colors"
                    >
                      {item.details}
                    </a>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400">{item.details}</p>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Info */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <Card className="p-8">
                <h2 className="text-3xl font-display font-bold mb-6 text-musical-purple-600">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-musical-purple-500 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-musical-purple-500 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-musical-purple-500 focus:border-transparent transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Student Age (if applicable)
                      </label>
                      <input
                        type="text"
                        name="studentAge"
                        value={formData.studentAge}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-musical-purple-500 focus:border-transparent transition-all"
                        placeholder="e.g., 10 years"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-musical-purple-500 focus:border-transparent transition-all"
                        placeholder="Inquiry about piano lessons"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Experience Level
                      </label>
                      <select
                        name="experienceLevel"
                        value={formData.experienceLevel}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-musical-purple-500 focus:border-transparent transition-all"
                      >
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                        <option value="grade1-3">Grade 1-3</option>
                        <option value="grade4-6">Grade 4-6</option>
                        <option value="grade7-8">Grade 7-8</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-musical-purple-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your musical goals and any questions you have..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-musical-purple-600 hover:bg-musical-purple-700 text-white py-6 text-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <Music className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Quick Contact */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-musical-purple-600">
                  Quick Contact
                </h3>
                <div className="space-y-4 text-sm">
                  <p className="text-gray-600 dark:text-gray-400">
                    For immediate inquiries, feel free to reach out via:
                  </p>
                  <div className="space-y-2">
                    <a
                      href="mailto:susan@susanpaulmusic.com"
                      className="flex items-center gap-2 text-musical-purple-600 hover:text-musical-purple-700"
                    >
                      <Mail className="w-4 h-4" />
                      Email Us
                    </a>
                    <a
                      href="tel:+919876543210"
                      className="flex items-center gap-2 text-musical-purple-600 hover:text-musical-purple-700"
                    >
                      <Phone className="w-4 h-4" />
                      Call Us
                    </a>
                  </div>
                </div>
              </Card>

              {/* Office Hours */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-musical-purple-600">
                  Class Schedule
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Saturday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Sunday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Weekdays</span>
                    <span className="font-medium">By Appointment</span>
                  </div>
                </div>
              </Card>

              {/* Social Media */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-musical-purple-600">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="p-3 bg-musical-purple-100 dark:bg-musical-purple-900 rounded-lg text-musical-purple-600 hover:bg-musical-purple-200 dark:hover:bg-musical-purple-800 transition-colors"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  Stay updated with our latest events, student performances, and music education tips!
                </p>
              </Card>

              {/* FAQ Link */}
              <Card className="p-6 bg-gradient-to-r from-musical-purple-100 to-musical-gold-100 dark:from-musical-purple-900/50 dark:to-musical-gold-900/50">
                <h3 className="text-lg font-semibold mb-2">
                  Have General Questions?
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  Check out our frequently asked questions for quick answers.
                </p>
                <Button variant="outline" className="w-full">
                  View FAQ
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
