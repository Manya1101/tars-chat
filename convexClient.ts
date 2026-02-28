// convexClient.ts
'use client';

import { ConvexReactClient } from "convex/react";

// Use your NEXT_PUBLIC_CONVEX_URL from .env
export const client = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL!
);