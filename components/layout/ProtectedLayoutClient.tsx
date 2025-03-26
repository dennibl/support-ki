'use client';

import { SessionProvider } from 'next-auth/react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import MenuSidebar from '@/components/sidebar/MenuSidebar';

export default function ProtectedLayoutClient({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<SessionProvider>
			<SidebarProvider>
				<MenuSidebar />
				<main className='w-full h-[100vh] relative'>
					<SidebarTrigger className='fixed z-10 cursor-pointer h-12 w-12 mt-2' />
					{children}
				</main>
			</SidebarProvider>
		</SessionProvider>
	);
}
