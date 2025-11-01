import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { Doc, Id } from "./_generated/dataModel";

// Create a new student
export const createStudent = mutation({
  args: {
    userId: v.id("users"),
    parentIds: v.array(v.id("users")),
    currentGrade: v.optional(v.string()),
    examBoard: v.union(v.literal("ABRSM"), v.literal("Trinity")),
    dateOfBirth: v.optional(v.string()),
    emergencyContact: v.optional(v.string()),
    instrumentLevel: v.string(),
    practiceGoalMinutes: v.optional(v.number()),
    notes: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const studentId = await ctx.db.insert("students", {
      ...args,
      startDate: Date.now(),
      isActive: true,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    return studentId;
  },
});

// Get all students
export const getAllStudents = query({
  args: {},
  handler: async (ctx) => {
    const students = await ctx.db.query("students").collect();
    
    // Get user details for each student
    const studentsWithUserInfo = await Promise.all(
      students.map(async (student) => {
        const user = await ctx.db.get(student.userId);
        const parents = await Promise.all(
          student.parentIds.map((parentId) => ctx.db.get(parentId))
        );
        return {
          ...student,
          user,
          parents: parents.filter((p) => p !== null),
        };
      })
    );

    return studentsWithUserInfo;
  },
});

// Get students by parent ID
export const getStudentsByParent = query({
  args: { parentId: v.id("users") },
  handler: async (ctx, args) => {
    const students = await ctx.db
      .query("students")
      .withIndex("by_parentId", (q) => q.eq("parentIds", [args.parentId]))
      .collect();

    const studentsWithUserInfo = await Promise.all(
      students.map(async (student) => {
        const user = await ctx.db.get(student.userId);
        return {
          ...student,
          user,
        };
      })
    );

    return studentsWithUserInfo;
  },
});

// Get active students
export const getActiveStudents = query({
  args: {},
  handler: async (ctx) => {
    const students = await ctx.db
      .query("students")
      .withIndex("by_active", (q) => q.eq("isActive", true))
      .collect();

    const studentsWithUserInfo = await Promise.all(
      students.map(async (student) => {
        const user = await ctx.db.get(student.userId);
        return {
          ...student,
          user,
        };
      })
    );

    return studentsWithUserInfo;
  },
});

// Update student
export const updateStudent = mutation({
  args: {
    studentId: v.id("students"),
    currentGrade: v.optional(v.string()),
    instrumentLevel: v.optional(v.string()),
    practiceGoalMinutes: v.optional(v.number()),
    notes: v.optional(v.string()),
    isActive: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const { studentId, ...updates } = args;
    await ctx.db.patch(studentId, {
      ...updates,
      updatedAt: Date.now(),
    });
    return studentId;
  },
});

// Get student progress
export const getStudentProgress = query({
  args: { studentId: v.id("students") },
  handler: async (ctx, args) => {
    const progress = await ctx.db
      .query("progress")
      .withIndex("by_student", (q) => q.eq("studentId", args.studentId))
      .order("desc")
      .take(30);

    return progress;
  },
});

// Get student achievements
export const getStudentAchievements = query({
  args: { studentId: v.id("students") },
  handler: async (ctx, args) => {
    const achievements = await ctx.db
      .query("achievements")
      .withIndex("by_student", (q) => q.eq("studentId", args.studentId))
      .order("desc")
      .collect();

    return achievements;
  },
});
