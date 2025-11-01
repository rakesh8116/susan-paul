import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Users table
  users: defineTable({
    clerkId: v.string(),
    email: v.string(),
    name: v.string(),
    role: v.union(v.literal("teacher"), v.literal("student"), v.literal("parent")),
    imageUrl: v.optional(v.string()),
    phone: v.optional(v.string()),
    address: v.optional(v.string()),
    bio: v.optional(v.string()),
    // For parent accounts
    linkedStudentIds: v.optional(v.array(v.id("students"))),
    // For Susan's professional info
    professionalTitle: v.optional(v.string()),
    qualifications: v.optional(v.array(v.string())),
    experience: v.optional(v.string()),
    specializations: v.optional(v.array(v.string())),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_clerkId", ["clerkId"])
    .index("by_email", ["email"])
    .index("by_role", ["role"]),

  // Students table
  students: defineTable({
    userId: v.id("users"),
    parentIds: v.array(v.id("users")),
    currentGrade: v.optional(v.string()),
    examBoard: v.union(v.literal("ABRSM"), v.literal("Trinity")),
    startDate: v.number(),
    dateOfBirth: v.optional(v.string()),
    emergencyContact: v.optional(v.string()),
    medicalNotes: v.optional(v.string()),
    isActive: v.boolean(),
    // Musical information
    instrumentLevel: v.string(), // Beginner, Grade 1-8, Diploma
    repertoire: v.optional(v.array(v.string())),
    practiceGoalMinutes: v.optional(v.number()),
    notes: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_userId", ["userId"])
    .index("by_parentId", ["parentIds"])
    .index("by_active", ["isActive"]),

  // Lessons table
  lessons: defineTable({
    studentId: v.id("students"),
    teacherId: v.id("users"),
    date: v.number(),
    duration: v.number(), // in minutes
    type: v.union(v.literal("regular"), v.literal("makeup"), v.literal("exam_prep"), v.literal("masterclass")),
    status: v.union(v.literal("scheduled"), v.literal("completed"), v.literal("cancelled"), v.literal("rescheduled")),
    location: v.optional(v.string()),
    isOnline: v.boolean(),
    meetingLink: v.optional(v.string()),
    // Lesson content
    topics: v.array(v.string()),
    homework: v.optional(v.string()),
    teacherNotes: v.optional(v.string()),
    studentNotes: v.optional(v.string()),
    // Recordings
    recordingUrls: v.optional(v.array(v.string())),
    sheetMusicIds: v.optional(v.array(v.id("resources"))),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_student", ["studentId"])
    .index("by_teacher", ["teacherId"])
    .index("by_date", ["date"])
    .index("by_status", ["status"]),

  // Progress tracking
  progress: defineTable({
    studentId: v.id("students"),
    lessonId: v.optional(v.id("lessons")),
    date: v.number(),
    practiceMinutes: v.number(),
    // Pieces practiced
    pieces: v.array(v.object({
      title: v.string(),
      composer: v.string(),
      grade: v.optional(v.string()),
      proficiencyLevel: v.number(), // 1-10
      notes: v.optional(v.string()),
    })),
    // Skills assessment
    skills: v.object({
      sightReading: v.optional(v.number()), // 1-10
      technique: v.optional(v.number()),
      rhythm: v.optional(v.number()),
      expression: v.optional(v.number()),
      theory: v.optional(v.number()),
      aural: v.optional(v.number()),
    }),
    // Teacher feedback
    teacherFeedback: v.optional(v.string()),
    // Parent viewable
    parentViewable: v.boolean(),
    // Achievements
    achievementIds: v.optional(v.array(v.id("achievements"))),
    createdAt: v.number(),
  })
    .index("by_student", ["studentId"])
    .index("by_lesson", ["lessonId"])
    .index("by_date", ["date"]),

  // Achievements/Badges
  achievements: defineTable({
    studentId: v.id("students"),
    type: v.string(), // practice_streak, exam_passed, piece_mastered, etc.
    title: v.string(),
    description: v.string(),
    icon: v.string(),
    earnedAt: v.number(),
    metadata: v.optional(v.any()),
  })
    .index("by_student", ["studentId"])
    .index("by_type", ["type"]),

  // Events
  events: defineTable({
    title: v.string(),
    description: v.string(),
    type: v.union(v.literal("recital"), v.literal("masterclass"), v.literal("workshop"), v.literal("exam")),
    date: v.number(),
    endDate: v.optional(v.number()),
    location: v.string(),
    isOnline: v.boolean(),
    meetingLink: v.optional(v.string()),
    maxAttendees: v.optional(v.number()),
    registeredStudentIds: v.array(v.id("students")),
    isPublic: v.boolean(),
    imageUrl: v.optional(v.string()),
    requirements: v.optional(v.string()),
    fee: v.optional(v.number()),
    createdBy: v.id("users"),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_date", ["date"])
    .index("by_type", ["type"])
    .index("by_public", ["isPublic"]),

  // Resources (sheet music, recordings, tutorials)
  resources: defineTable({
    title: v.string(),
    description: v.optional(v.string()),
    type: v.union(v.literal("sheet_music"), v.literal("recording"), v.literal("tutorial"), v.literal("theory")),
    category: v.string(), // Grade 1, Grade 2, Beginner, Advanced, etc.
    fileUrl: v.string(),
    fileType: v.string(), // pdf, mp3, mp4, etc.
    thumbnailUrl: v.optional(v.string()),
    grade: v.optional(v.string()),
    composer: v.optional(v.string()),
    tags: v.array(v.string()),
    isPublic: v.boolean(),
    allowedStudentIds: v.optional(v.array(v.id("students"))),
    uploadedBy: v.id("users"),
    downloads: v.number(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_type", ["type"])
    .index("by_category", ["category"])
    .index("by_public", ["isPublic"])
    .searchIndex("search_resources", {
      searchField: "title",
      filterFields: ["type", "category", "grade"],
    }),

  // Blog posts / Tutorials
  posts: defineTable({
    title: v.string(),
    slug: v.string(),
    content: v.string(), // Markdown content
    excerpt: v.string(),
    coverImage: v.optional(v.string()),
    category: v.string(),
    tags: v.array(v.string()),
    published: v.boolean(),
    featured: v.boolean(),
    authorId: v.id("users"),
    viewCount: v.number(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_slug", ["slug"])
    .index("by_published", ["published"])
    .index("by_author", ["authorId"])
    .index("by_featured", ["featured"])
    .searchIndex("search_posts", {
      searchField: "title",
      filterFields: ["category", "published"],
    }),

  // Messages/Communications
  messages: defineTable({
    fromUserId: v.id("users"),
    toUserId: v.id("users"),
    subject: v.optional(v.string()),
    content: v.string(),
    isRead: v.boolean(),
    attachmentUrls: v.optional(v.array(v.string())),
    parentMessageId: v.optional(v.id("messages")), // For replies
    createdAt: v.number(),
  })
    .index("by_sender", ["fromUserId"])
    .index("by_recipient", ["toUserId"])
    .index("by_read", ["isRead", "toUserId"]),

  // Practice logs
  practiceLogs: defineTable({
    studentId: v.id("students"),
    date: v.number(),
    startTime: v.number(),
    endTime: v.number(),
    durationMinutes: v.number(),
    pieces: v.array(v.object({
      title: v.string(),
      minutesPracticed: v.number(),
      notes: v.optional(v.string()),
    })),
    overallNotes: v.optional(v.string()),
    mood: v.optional(v.union(v.literal("excellent"), v.literal("good"), v.literal("okay"), v.literal("frustrated"))),
    parentVerified: v.boolean(),
    createdAt: v.number(),
  })
    .index("by_student", ["studentId"])
    .index("by_date", ["date"]),

  // Payments/Invoices
  payments: defineTable({
    studentId: v.id("students"),
    amount: v.number(),
    currency: v.string(),
    status: v.union(v.literal("pending"), v.literal("paid"), v.literal("overdue"), v.literal("cancelled")),
    dueDate: v.number(),
    paidDate: v.optional(v.number()),
    paymentMethod: v.optional(v.string()),
    invoiceNumber: v.string(),
    description: v.string(),
    lessonIds: v.optional(v.array(v.id("lessons"))),
    notes: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_student", ["studentId"])
    .index("by_status", ["status"])
    .index("by_dueDate", ["dueDate"]),
});
