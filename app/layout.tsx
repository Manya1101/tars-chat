import type { ReactNode } from "react";

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import Providers from "./Providers";
import SaveUser from "./components/SaveUser";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ClerkProvider>

<html lang="en">

<body>

<Providers>

<SaveUser />

<header className="flex justify-end gap-4 p-4">

<SignedOut>

<SignInButton />

<SignUpButton>
<button className="bg-blue-500 text-white px-4 py-2 rounded">
Sign Up
</button>
</SignUpButton>

</SignedOut>

<SignedIn>
<UserButton />
</SignedIn>

</header>

{children}

</Providers>

</body>

</html>

    </ClerkProvider>
  );
}