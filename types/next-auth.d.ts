import NextAuth from 'next-auth';

declare module 'next-auth' {
	interface Session {
		user: {
			id: string;
			email: string;
			role: 'ADMIN' | 'SUPPORTER';
		};
	}

	interface User {
		id: string;
		role: 'ADMIN' | 'SUPPORTER';
	}
}
