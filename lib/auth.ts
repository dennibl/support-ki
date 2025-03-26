import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from './prisma';
import bcrypt from 'bcrypt';
import { type User } from '@prisma/client';

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) return null;

				const user = await prisma.user.findUnique({
					where: { email: credentials.email },
				});

				if (!user) return null;

				const isValid = await bcrypt.compare(
					credentials.password,
					user.password
				);

				if (!isValid) return null;

				return user;
			},
		}),
	],
	pages: {
		signIn: '/login',
	},
	callbacks: {
		async session({ session, token }) {
			if (session?.user) {
				session.user.id = token.sub ?? '';
				session.user.role = token.role as 'ADMIN' | 'SUPPORTER';
			}
			return session;
		},
		async jwt({ token, user }) {
			if (user) {
				token.role = (user as User).role;
			}
			return token;
		},
		async redirect({ url, baseUrl }) {
			return url.startsWith(baseUrl) ? url : baseUrl;
		},
	},
	session: {
		strategy: 'jwt',
	},
	secret: process.env.NEXTAUTH_SECRET,
};
