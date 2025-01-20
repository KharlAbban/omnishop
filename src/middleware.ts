import NextAuth from 'next-auth';
import { authConfig } from '../auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: [
    // Match all routes starting with /dashboard
    '/home/:path*',
    // Match all routes starting with /admin
    '/admin/:path*',
    ],
};