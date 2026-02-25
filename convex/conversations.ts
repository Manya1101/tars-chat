import { mutation } from "./_generated/server";

export const createConversation = mutation({
  args: {},

  handler: async (ctx) => {

    const user = await ctx.auth.getUserIdentity();

    if (!user) {
      throw new Error("Not authenticated");
    }

    const conversationId = await ctx.db.insert("conversations", {

      memberIds: [user.subject], // ✅ only this

    });

    return conversationId;

  },

});