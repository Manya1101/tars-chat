import { mutation } from "./_generated/server";

export const getOrCreateConversation = mutation({

  args: {},

  handler: async (ctx) => {

    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not authenticated");
    }

    // Find existing conversation for this user
    const existing = await ctx.db
      .query("conversations")
      .filter((q) =>
        q.eq(q.field("memberIds"), [identity.subject])
      )
      .first();

    if (existing) {
      return existing._id;
    }

    // Create new conversation
    const id = await ctx.db.insert("conversations", {
      memberIds: [identity.subject],
    });

    return id;
  },
});