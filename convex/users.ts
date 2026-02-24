import { mutation, query } from "./_generated/server";
import { v } from "convex/values";


// Save user to database
export const createUser = mutation({

args: {

name: v.string(),

email: v.string(),

image: v.string(),

clerkId: v.string(),

},

handler: async (ctx, args) => {

const existingUser = await ctx.db

.query("users")

.filter((q) => q.eq(q.field("clerkId"), args.clerkId))

.first();


if (existingUser) return existingUser;


return await ctx.db.insert("users", args);

},

});




// Get all users
export const getUsers = query({

handler: async (ctx) => {

return await ctx.db.query("users").collect();

},

});