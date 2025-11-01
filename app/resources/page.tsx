"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import {
  BookOpen,
  Music,
  Video,
  FileText,
  Download,
  Search,
  Filter,
  Play,
  Lock,
  Unlock,
  Star,
  Eye,
  Music2,
  Headphones,
  GraduationCap
} from "lucide-react";
import toast from "react-hot-toast";

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedGrade, setSelectedGrade] = useState("all");

  // Sample resources data
  const resources = [
    {
      id: 1,
      title: "ABRSM Grade 1 - Scale & Arpeggio Exercises",
      description: "Complete collection of scales and arpeggios required for Grade 1 examination with fingering guidelines.",
      type: "sheet_music",
      category: "Technique",
      grade: "Grade 1",
      composer: "ABRSM",
      fileUrl: "#",
      fileType: "PDF",
      thumbnailUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      isPublic: true,
      downloads: 245,
      tags: ["Scales", "ABRSM", "Grade 1", "Technique"]
    },
    {
      id: 2,
      title: "Introduction to Music Theory - Video Series",
      description: "Comprehensive video lessons covering basic music theory concepts including notation, rhythm, and key signatures.",
      type: "video",
      category: "Theory",
      grade: "Beginner",
      composer: "Susan Paul",
      fileUrl: "#",
      fileType: "MP4",
      thumbnailUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop",
      isPublic: true,
      downloads: 412,
      tags: ["Theory", "Video", "Beginner", "Tutorial"]
    },
    {
      id: 3,
      title: "Trinity Grade 3 - Repertoire Collection",
      description: "Selected pieces from the Trinity College Grade 3 syllabus with performance notes and practice tips.",
      type: "sheet_music",
      category: "Repertoire",
      grade: "Grade 3",
      composer: "Various",
      fileUrl: "#",
      fileType: "PDF",
      thumbnailUrl: "https://images.unsplash.com/photo-1552422535-c45813c61732?w=400&h=300&fit=crop",
      isPublic: false,
      downloads: 156,
      tags: ["Trinity", "Grade 3", "Repertoire"]
    },
    {
      id: 4,
      title: "Sight Reading Practice - Grade 2-4",
      description: "Progressive sight reading exercises to develop fluency and confidence at the piano.",
      type: "sheet_music",
      category: "Sight Reading",
      grade: "Grade 2-4",
      composer: "Susan Paul",
      fileUrl: "#",
      fileType: "PDF",
      thumbnailUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      isPublic: true,
      downloads: 328,
      tags: ["Sight Reading", "Practice", "Grade 2-4"]
    },
    {
      id: 5,
      title: "Classical Piano Masterclass Recording",
      description: "Recording of a live masterclass featuring interpretation techniques for classical repertoire.",
      type: "audio",
      category: "Masterclass",
      grade: "Advanced",
      composer: "Various",
      fileUrl: "#",
      fileType: "MP3",
      thumbnailUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop",
      isPublic: true,
      downloads: 189,
      tags: ["Classical", "Masterclass", "Advanced", "Recording"]
    },
    {
      id: 6,
      title: "Beginner's Guide to Piano Practice",
      description: "Essential guide covering practice techniques, posture, hand position, and building a daily routine.",
      type: "document",
      category: "Practice Guide",
      grade: "Beginner",
      composer: "Susan Paul",
      fileUrl: "#",
      fileType: "PDF",
      thumbnailUrl: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&h=300&fit=crop",
      isPublic: true,
      downloads: 567,
      tags: ["Practice", "Beginner", "Guide", "Technique"]
    },
    {
      id: 7,
      title: "Grade 5 Aural Training Exercises",
      description: "Audio exercises for developing aural skills including interval recognition and chord identification.",
      type: "audio",
      category: "Aural",
      grade: "Grade 5",
      composer: "ABRSM",
      fileUrl: "#",
      fileType: "MP3",
      thumbnailUrl: "https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?w=400&h=300&fit=crop",
      isPublic: false,
      downloads: 203,
      tags: ["Aural", "Grade 5", "ABRSM", "Exercises"]
    },
    {
      id: 8,
      title: "Performance Preparation Checklist",
      description: "Comprehensive checklist and tips for preparing for recitals, concerts, and examinations.",
      type: "document",
      category: "Performance",
      grade: "All Levels",
      composer: "Susan Paul",
      fileUrl: "#",
      fileType: "PDF",
      thumbnailUrl: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&h=300&fit=crop",
      isPublic: true,
      downloads: 445,
      tags: ["Performance", "Preparation", "Recital", "Exam"]
    },
    {
      id: 9,
      title: "Jazz Piano Improvisation Tutorial",
      description: "Video tutorial series introducing jazz concepts, chord progressions, and improvisation techniques.",
      type: "video",
      category: "Jazz",
      grade: "Intermediate",
      composer: "Susan Paul",
      fileUrl: "#",
      fileType: "MP4",
      thumbnailUrl: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=400&h=300&fit=crop",
      isPublic: true,
      downloads: 298,
      tags: ["Jazz", "Improvisation", "Video", "Intermediate"]
    },
    {
      id: 10,
      title: "Grade 8 Exam Repertoire Analysis",
      description: "In-depth analysis of selected Grade 8 pieces with historical context and interpretation suggestions.",
      type: "document",
      category: "Analysis",
      grade: "Grade 8",
      composer: "Susan Paul",
      fileUrl: "#",
      fileType: "PDF",
      thumbnailUrl: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=400&h=300&fit=crop",
      isPublic: false,
      downloads: 134,
      tags: ["Grade 8", "Analysis", "Repertoire", "Advanced"]
    },
    {
      id: 11,
      title: "Music Theory Worksheets - Level 1",
      description: "Printable worksheets covering note names, time signatures, and basic rhythms.",
      type: "document",
      category: "Theory",
      grade: "Beginner",
      composer: "Susan Paul",
      fileUrl: "#",
      fileType: "PDF",
      thumbnailUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop",
      isPublic: true,
      downloads: 623,
      tags: ["Theory", "Worksheets", "Beginner"]
    },
    {
      id: 12,
      title: "Finger Strength and Dexterity Exercises",
      description: "Daily technical exercises to build finger independence, strength, and velocity.",
      type: "sheet_music",
      category: "Technique",
      grade: "All Levels",
      composer: "Various",
      fileUrl: "#",
      fileType: "PDF",
      thumbnailUrl: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=400&h=300&fit=crop",
      isPublic: true,
      downloads: 389,
      tags: ["Technique", "Exercises", "Finger Work"]
    }
  ];

  const typeFilters = [
    { value: "all", label: "All Types", icon: <Filter className="w-4 h-4" /> },
    { value: "sheet_music", label: "Sheet Music", icon: <Music2 className="w-4 h-4" /> },
    { value: "video", label: "Videos", icon: <Video className="w-4 h-4" /> },
    { value: "audio", label: "Audio", icon: <Headphones className="w-4 h-4" /> },
    { value: "document", label: "Documents", icon: <FileText className="w-4 h-4" /> }
  ];

  const gradeFilters = [
    "all",
    "Beginner",
    "Grade 1",
    "Grade 2-4",
    "Grade 5",
    "Grade 8",
    "Intermediate",
    "Advanced",
    "All Levels"
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesType = selectedType === "all" || resource.type === selectedType;
    const matchesGrade = selectedGrade === "all" || resource.grade === selectedGrade;
    return matchesSearch && matchesType && matchesGrade;
  });

  const handleDownload = (resource: typeof resources[0]) => {
    if (!resource.isPublic) {
      toast.error("This resource is only available to enrolled students. Please login to access.");
    } else {
      toast.success(`Downloading ${resource.title}...`);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "sheet_music":
        return <Music2 className="w-5 h-5" />;
      case "video":
        return <Video className="w-5 h-5" />;
      case "audio":
        return <Headphones className="w-5 h-5" />;
      case "document":
        return <FileText className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
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
              <BookOpen className="w-8 h-8 text-musical-purple-600" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-musical-purple-600 to-musical-gold-600">
              Learning Resources
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Access our curated collection of sheet music, tutorials, exercises, and educational materials
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search resources by title, description, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-musical-purple-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white dark:bg-gray-900 sticky top-16 z-40 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          {/* Type Filter */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Type:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {typeFilters.map((filter) => (
                <Button
                  key={filter.value}
                  onClick={() => setSelectedType(filter.value)}
                  variant={selectedType === filter.value ? "default" : "outline"}
                  size="sm"
                  className={
                    selectedType === filter.value
                      ? "bg-musical-purple-600 hover:bg-musical-purple-700"
                      : ""
                  }
                >
                  {filter.icon}
                  <span className="ml-2">{filter.label}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Grade Filter */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Grade Level:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {gradeFilters.map((grade) => (
                <Button
                  key={grade}
                  onClick={() => setSelectedGrade(grade)}
                  variant={selectedGrade === grade ? "default" : "outline"}
                  size="sm"
                  className={
                    selectedGrade === grade
                      ? "bg-musical-purple-600 hover:bg-musical-purple-700"
                      : ""
                  }
                >
                  {grade === "all" ? "All Grades" : grade}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-display font-bold text-musical-purple-600">
              {searchQuery || selectedType !== "all" || selectedGrade !== "all"
                ? `Found ${filteredResources.length} resource${filteredResources.length !== 1 ? 's' : ''}`
                : "All Resources"}
            </h2>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {filteredResources.length} of {resources.length} resources
            </div>
          </div>

          {filteredResources.length === 0 ? (
            <div className="text-center py-12">
              <Music className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No resources found. Try adjusting your search or filters.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index % 4) }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow group h-full flex flex-col">
                    {/* Thumbnail */}
                    <div className="relative h-40 overflow-hidden bg-gray-100 dark:bg-gray-800">
                      <img
                        src={resource.thumbnailUrl}
                        alt={resource.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2">
                        {resource.isPublic ? (
                          <div className="p-1.5 bg-green-500 rounded-full" title="Public">
                            <Unlock className="w-3 h-3 text-white" />
                          </div>
                        ) : (
                          <div className="p-1.5 bg-musical-purple-600 rounded-full" title="Students Only">
                            <Lock className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="absolute top-2 left-2">
                        <div className="p-2 bg-white dark:bg-gray-900 rounded-lg text-musical-purple-600">
                          {getTypeIcon(resource.type)}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="mb-2">
                        <span className="inline-block px-2 py-1 bg-musical-gold-100 dark:bg-musical-gold-900 text-musical-gold-700 dark:text-musical-gold-300 text-xs rounded-full">
                          {resource.grade}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-musical-purple-600 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2 flex-1">
                        {resource.description}
                      </p>

                      {/* Meta Info */}
                      <div className="space-y-2 mb-3 text-xs text-gray-500 dark:text-gray-500">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1">
                            <Music className="w-3 h-3" />
                            {resource.composer}
                          </span>
                          <span className="flex items-center gap-1">
                            <Download className="w-3 h-3" />
                            {resource.downloads}
                          </span>
                        </div>
                        <div className="text-xs font-medium text-musical-purple-600">
                          {resource.category} • {resource.fileType}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {resource.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Download Button */}
                      <Button
                        onClick={() => handleDownload(resource)}
                        className="w-full bg-musical-purple-600 hover:bg-musical-purple-700"
                        size="sm"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        {resource.isPublic ? "Download" : "Login to Access"}
                      </Button>
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
            <Star className="w-12 h-12 text-white mx-auto mb-4" />
            <h2 className="text-4xl font-display font-bold mb-4 text-white">
              Unlock Premium Resources
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Enroll as a student to get full access to our exclusive sheet music, video tutorials, and practice materials
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-musical-purple-600 hover:bg-gray-100" size="lg">
                Enroll Now
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                size="lg"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
