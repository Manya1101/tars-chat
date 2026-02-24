import {
ClerkProvider,
SignInButton,
SignUpButton,
SignedIn,
SignedOut,
UserButton,
} from '@clerk/nextjs'

import './globals.css'

export default function RootLayout({ children }) {

return (

<ClerkProvider>

<html lang="en">

<body>

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

</body>

</html>

</ClerkProvider>

)

}