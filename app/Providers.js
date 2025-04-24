'use client'

import { ClerkProvider } from '@clerk/nextjs'

export function Providers({ children }) {
  console.log("Clerk key:", process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) // for debugging
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      {children}
    </ClerkProvider>

  )
}
