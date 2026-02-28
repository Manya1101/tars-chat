# 🚀 TARS Chat

A modern real-time chat application built using **Next.js 16**, **Convex**, and **Clerk Authentication**.

TARS Chat provides secure authentication, real-time messaging, persistent conversations, and a clean responsive UI — deployed seamlessly on Vercel.

---

## 🌐 Live Demo
https://tars-chat-ojob.vercel.app/

---

## 🛠 Tech Stack

- **Frontend:** Next.js 16 (App Router), TypeScript, Tailwind CSS  
- **Backend:** Convex (Real-time database & server functions)  
- **Authentication:** Clerk  
- **Deployment:** Vercel  

---

## ✨ Features

- 🔐 Secure user authentication with Clerk
- 💬 Real-time chat using Convex queries & mutations
- 🧠 Persistent conversations stored in database
- ⚡ Instant UI updates (no refresh needed)
- 📱 Fully responsive layout
- 🎨 Modern and clean design

---

Configure Environment Variables

Create a .env.local file in the root folder and add:

NEXT_PUBLIC_CONVEX_URL=your_convex_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

---

Run the development server
npm run dev

Open:
http://localhost:3000
