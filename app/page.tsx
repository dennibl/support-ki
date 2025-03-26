'use client';

import UserMenu from '@/components/auth/UserMenu';
import { SessionProvider } from 'next-auth/react';

export default function Home() {
	return (
		<>
			<SessionProvider>
				<header className='flex justify-between w-4/5 mx-auto items-center py-2'>
					<h1>Logo</h1>
					<nav className='flex gap-4 items-center justify-center'>
						<ul className='flex gap-2 items-center justify-center'>
							<li>Home</li>
							<li>Über uns</li>
							<li>Kontakt</li>
						</ul>
						<UserMenu />
					</nav>
				</header>
				<main className='container mx-auto py-10 space-y-8'></main>
			</SessionProvider>
		</>
	);
}

// Dialog-Test-Komponente
