import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({

users: defineTable({

name: v.string(),

email: v.string(),

image: v.string(),

clerkId: v.string(),

}),



conversations: defineTable({

memberIds: v.array(v.string()),

}),



messages: defineTable({

senderId: v.string(),

conversationId: v.id("conversations"),

text: v.string(),

createdAt: v.number(),

}),


});