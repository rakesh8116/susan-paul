"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Music,
  GraduationCap,
  Sparkles,
  Video,
  Tag,
  Check,
  Filter,
  ChevronRight,
  Award,
  User
} from "lucide-react";
import toast from "react-hot-toast";

export default function EventsPage() {
  const [selectedType, setSelectedType] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("upcoming");

  // Sample events data
  const events = [
    {
      id: 1,
      title: "Spring Recital 2024",
      description: "Join us for our annual spring recital where students showcase their progress and musical achievements. A wonderful opportunity for performers to gain stage experience in a supportive environment.",
      type: "recital",
      date: new Date("2024-12-15T18:00:00").getTime(),
      endDate: new Date("2024-12-15T20:30:00").getTime(),
      location: "Music Hall, Indiranagar",
      isOnline: false,
      meetingLink: null,
      maxAttendees: 100,
      registeredCount: 45,
      isPublic: true,
      imageUrl: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&h=500&fit=crop",
      requirements: "All enrolled students are welcome to perform. Please prepare 2-3 pieces.",
      fee: 0,
      status: "upcoming",
      tags: ["Performance", "Students", "Community"]
    },
    {
      id: 2,
      title: "ABRSM Grade 5 Theory Workshop",
      description: "Intensive workshop covering all aspects of ABRSM Grade 5 music theory. Interactive sessions with practice exercises and exam tips.",
      type: "workshop",
      date: new Date("2024-11-20T10:00:00").getTime(),
      endDate: new Date("2024-11-20T16:00:00").getTime(),
      location: "Online",
      isOnline: true,
      meetingLink: "https://zoom.us/meeting/123",
      maxAttendees: 25,
      registeredCount: 18,
      isPublic: true,
      imageUrl: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=800&h=500&fit=crop",
      requirements: "Basic music theory knowledge required. Materials will be provided.",
      fee: 1500,
      status: "upcoming",
      tags: ["Theory", "ABRSM", "Workshop"]
    },
    {
      id: 3,
      title: "Trinity Grade 8 Mock Examination",
      description: "Full mock examination for Trinity Grade 8 candidates with detailed feedback and performance coaching.",
      type: "exam",
      date: new Date("2024-11-25T14:00:00").getTime(),
      endDate: new Date("2024-11-25T17:00:00").getTime(),
      location: "Susan Paul Music Studio",
      isOnline: false,
      meetingLink: null,
      maxAttendees: 10,
      registeredCount: 8,
      isPublic: false,
      imageUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=500&fit=crop",
      requirements: "Grade 8 students only. Must have prepared all required pieces.",
      fee: 2000,
      status: "upcoming",
      tags: ["Trinity", "Grade 8", "Mock Exam"]
    },
    {
      id: 4,
      title: "Classical Piano Masterclass",
      description: "Guest masterclass with renowned pianist exploring interpretation techniques for romantic era repertoire.",
      type: "masterclass",
      date: new Date("2024-12-05T15:00:00").getTime(),
      endDate: new Date("2024-12-05T18:00:00").getTime(),
      location: "Bangalore Music Conservatory",
      isOnline: false,
      meetingLink: null,
      maxAttendees: 50,
      registeredCount: 32,
      isPublic: true,
      imageUrl: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&h=500&fit=crop",
      requirements: "Open to all levels. Advanced students may have performance opportunities.",
      fee: 800,
      status: "upcoming",
      tags: ["Masterclass", "Classical", "Guest"]
    },
    {
      id: 5,
      title: "Online Performance Anxiety Workshop",
      description: "Learn techniques to overcome stage fright and perform with confidence. Includes breathing exercises, mental preparation strategies, and practice performance sessions.",
      type: "workshop",
      date: new Date("2024-11-28T19:00:00").getTime(),
      endDate: new Date("2024-11-28T21:00:00").getTime(),
      location: "Online",
      isOnline: true,
      meetingLink: "https://zoom.us/meeting/456",
      maxAttendees: 30,
      registeredCount: 22,
      isPublic: true,
      imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=500&fit=crop",
      requirements: "All students welcome. No prior experience needed.",
      fee: 500,
      status: "upcoming",
      tags: ["Performance", "Mental Health", "Online"]
    },
    {
      id: 6,
      title: "Summer Music Camp 2024",
      description: "Week-long intensive music camp for young pianists featuring daily lessons, ensemble work, and a final showcase concert.",
      type: "workshop",
      date: new Date("2025-06-01T09:00:00").getTime(),
      endDate: new Date("2025-06-07T17:00:00").getTime(),
      location: "Music Academy, Koramangala",
      isOnline: false,
      meetingLink: null,
      maxAttendees: 40,
      registeredCount: 15,
      isPublic: true,
      imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=500&fit=crop",
      requirements: "Ages 8-16. Minimum Grade 2 level.",
      fee: 8000,
      status: "upcoming",
      tags: ["Camp", "Summer", "Young Musicians"]
    },
    {
      id: 7,
      title: "Winter Recital 2023",
      description: "Our winter recital featured wonderful performances from students across all grade levels.",
      type: "recital",
      date: new Date("2023-12-20T18:00:00").getTime(),
      endDate: new Date("2023-12-20T20:30:00").getTime(),
      location: "Music Hall, Indiranagar",
      isOnline: false,
      meetingLink: null,
      maxAttendees: 100,
      registeredCount: 52,
      isPublic: true,
      imageUrl: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=800&h=500&fit=crop",
      requirements: null,
      fee: 0,
      status: "completed",
      tags: ["Performance", "Students", "Community"]
    },
    {
      id: 8,
      title: "Jazz Improvisation Workshop",
      description: "Introduction to jazz piano with focus on chord progressions, scales, and improvisation techniques.",
      type: "workshop",
      date: new Date("2023-10-15T14:00:00").getTime(),
      endDate: new Date("2023-10-15T17:00:00").getTime(),
      location: "Online",
      isOnline: true,
      meetingLink: null,
      maxAttendees: 20,
      registeredCount: 20,
      isPublic: true,
      imageUrl: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&h=500&fit=crop",
      requirements: null,
      fee: 1200,
      status: "completed",
      tags: ["Jazz", "Improvisation", "Workshop"]
    }
  ];

  const eventTypes = [
    { value: "all", label: "All Events", icon: <Calendar className="w-4 h-4" /> },
    { value: "recital", label: "Recitals", icon: <Music className="w-4 h-4" /> },
    { value: "masterclass", label: "Masterclasses", icon: <Award className="w-4 h-4" /> },
    { value: "workshop", label: "Workshops", icon: <GraduationCap className="w-4 h-4" /> },
    { value: "exam", label: "Exams", icon: <Sparkles className="w-4 h-4" /> }
  ];

  const statusOptions = [
    { value: "upcoming", label: "Upcoming" },
    { value: "completed", label: "Past Events" }
  ];

  const filteredEvents = events.filter(event => {
    const matchesType = selectedType === "all" || event.type === selectedType;
    const matchesStatus = event.status === selectedStatus;
    return matchesType && matchesStatus;
  });

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleRegister = (event: typeof events[0]) => {
    if (!event.isPublic) {
      toast.error("This event is for enrolled students only. Please login to register.");
    } else if (event.registeredCount >= event.maxAttendees) {
      toast.error("Sorry, this event is fully booked!");
    } else {
      toast.success(`Successfully registered for ${event.title}!`);
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "recital":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300";
      case "masterclass":
        return "bg-gold-100 text-gold-700 dark:bg-gold-900 dark:text-gold-300";
      case "workshop":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300";
      case "exam":
        return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300";
    }
  };

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
              <Calendar className="w-8 h-8 text-musical-purple-600" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-musical-purple-600 to-musical-gold-600">
              Events & Workshops
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Join our recitals, masterclasses, workshops, and special events to enhance your musical journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white dark:bg-gray-900 sticky top-16 z-40 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          {/* Status Toggle */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Show:</span>
            </div>
            <div className="flex gap-2">
              {statusOptions.map((status) => (
                <Button
                  key={status.value}
                  onClick={() => setSelectedStatus(status.value)}
                  variant={selectedStatus === status.value ? "default" : "outline"}
                  className={
                    selectedStatus === status.value
                      ? "bg-musical-purple-600 hover:bg-musical-purple-700"
                      : ""
                  }
                >
                  {status.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Type Filter */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Tag className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Event Type:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {eventTypes.map((type) => (
                <Button
                  key={type.value}
                  onClick={() => setSelectedType(type.value)}
                  variant={selectedType === type.value ? "default" : "outline"}
                  size="sm"
                  className={
                    selectedType === type.value
                      ? "bg-musical-purple-600 hover:bg-musical-purple-700"
                      : ""
                  }
                >
                  {type.icon}
                  <span className="ml-2">{type.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-display font-bold text-musical-purple-600">
              {selectedStatus === "upcoming" ? "Upcoming Events" : "Past Events"}
            </h2>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''}
            </div>
          </div>

          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No {selectedStatus} events found.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index % 3) }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow group h-full flex flex-col">
                    {/* Event Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.imageUrl}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getEventTypeColor(event.type)}`}>
                          {event.type}
                        </span>
                      </div>
                      {!event.isPublic && (
                        <div className="absolute top-3 right-3">
                          <span className="px-3 py-1 bg-musical-purple-600 text-white rounded-full text-xs font-semibold">
                            Students Only
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-musical-purple-600 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                        {event.description}
                      </p>

                      {/* Event Details */}
                      <div className="space-y-2 mb-4 text-sm">
                        <div className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                          <Calendar className="w-4 h-4 mt-0.5 text-musical-purple-600 flex-shrink-0" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                          <Clock className="w-4 h-4 text-musical-purple-600 flex-shrink-0" />
                          <span>{formatTime(event.date)} - {formatTime(event.endDate)}</span>
                        </div>
                        <div className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                          {event.isOnline ? (
                            <Video className="w-4 h-4 mt-0.5 text-musical-purple-600 flex-shrink-0" />
                          ) : (
                            <MapPin className="w-4 h-4 mt-0.5 text-musical-purple-600 flex-shrink-0" />
                          )}
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                          <Users className="w-4 h-4 text-musical-purple-600 flex-shrink-0" />
                          <span>
                            {event.registeredCount} / {event.maxAttendees} attendees
                          </span>
                        </div>
                      </div>

                      {/* Tags */}
                      {event.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {event.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Fee */}
                      {event.fee > 0 && (
                        <div className="mb-4">
                          <span className="text-lg font-bold text-musical-purple-600">
                            ₹{event.fee.toLocaleString()}
                          </span>
                          <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                            registration fee
                          </span>
                        </div>
                      )}

                      {/* Action Button */}
                      <div className="mt-auto">
                        {selectedStatus === "upcoming" ? (
                          event.registeredCount >= event.maxAttendees ? (
                            <Button
                              disabled
                              className="w-full"
                              variant="outline"
                            >
                              Fully Booked
                            </Button>
                          ) : (
                            <Button
                              onClick={() => handleRegister(event)}
                              className="w-full bg-musical-purple-600 hover:bg-musical-purple-700"
                            >
                              <Check className="w-4 h-4 mr-2" />
                              {event.fee === 0 ? "Register Free" : "Register Now"}
                            </Button>
                          )
                        ) : (
                          <Button
                            variant="outline"
                            className="w-full"
                          >
                            View Details
                            <ChevronRight className="w-4 h-4 ml-2" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
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
              Stay Updated on Events
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Be the first to know about upcoming recitals, masterclasses, and special events
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-musical-purple-600 hover:bg-gray-100" size="lg">
                <User className="w-5 h-5 mr-2" />
                Create Account
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                size="lg"
              >
                View Calendar
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
