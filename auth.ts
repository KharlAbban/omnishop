import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import axios from 'axios';
import { loginSchema } from '@/utils/constants';
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = loginSchema.safeParse(credentials);
        const backEndUrl = process.env.NEXT_PUBLIC_BACKEND_SERVER_URL;

        if (!backEndUrl) throw new Error('No backend server url found!!');

        if (parsedCredentials.success) {
            // Verify from Node/Express backend for login credentials
            const verifiedUser = await axios.post(`${backEndUrl}/auth/login`, parsedCredentials.data);

            if (verifiedUser.status !== 200) {
              console.log('Invalid credentials');
              throw new Error("Invalid credentials");
                return null;
            };
 
            return verifiedUser.data;

        }
      },
    }),
  ],
});