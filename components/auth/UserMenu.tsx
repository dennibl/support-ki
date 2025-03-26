'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { LogIn, LogOut } from 'lucide-react';

export default function UserMenu() {
	const { data: session, status } = useSession();

	if (status === 'loading') {
		return (
			<button
				onClick={() => signIn()}
				className='flex items-center gap-2 px-4 py-2 border rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800'
			>
				Lade...
			</button>
		);
	}

	if (!session) {
		return (
			<button
				onClick={() => signIn()}
				className='flex items-center gap-2 px-4 py-2 border rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800'
			>
				<LogIn size={16} />
				<span>Login</span>
			</button>
		);
	}

	return (
		<div className='flex items-center justify-center    gap-4'>
			<button
				onClick={() => signOut({ callbackUrl: '/login' })}
				className='flex items-center gap-2 px-4 py-2 border rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800'
			>
				<LogOut size={16} />
				<span>Logout</span>
			</button>
		</div>
	);
}
