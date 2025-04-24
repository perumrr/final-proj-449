
import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware({
  //apiKey: process.env.CLERK_API_KEY,
  publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
});
