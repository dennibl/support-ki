'use client';

import {
	Home,
	Search,
	Settings,
	MessageSquareText,
	Upload,
	TextSearch,
	User,
} from 'lucide-react';
import React, { useState } from 'react';

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';

import { useSession } from 'next-auth/react';
import UserMenu from '../auth/UserMenu';

const items = [
	{
		title: 'Dashboard',
		url: '/admin/dashboard',
		icon: Home,
		allowedRoles: ['ADMIN'],
	},
	{
		title: 'Chat',
		url: '/supportchat',
		icon: MessageSquareText,
		allowedRoles: ['ADMIN', 'SUPPORTER'],
	},
	{
		title: 'Dokumentenübersicht',
		url: '/admin/data',
		icon: TextSearch,
		allowedRoles: ['ADMIN'],
	},
	{
		title: 'Dokumentenupload',
		url: '/admin/data/upload',
		icon: Upload,
		allowedRoles: ['ADMIN'],
	},
	{
		title: 'Einstellungen',
		url: '/admin/settings',
		icon: Settings,
		allowedRoles: ['ADMIN'],
	},
	{
		title: 'Benutzerverwaltung',
		url: '/admin/users',
		icon: User,
		allowedRoles: ['ADMIN'],
	},
];

const MenuSidebar = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const { data: session } = useSession();
	const role = session?.user?.role ?? 'SUPPORTER';

	return (
		<Sidebar collapsible='offcanvas' variant='floating'>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<div className='flex items-center gap-2 '>
							<Home className='w-6 h-6' />
							<span>Logo</span>
						</div>
					</SidebarGroupContent>
				</SidebarGroup>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu className='flex flex-col gap-3'>
							{items
								.filter((item) => item.allowedRoles.includes(role))
								.map((item) => (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton asChild>
											<a href={item.url}>
												<item.icon />
												<span className='text-[1rem]'>{item.title}</span>
											</a>
										</SidebarMenuButton>
									</SidebarMenuItem>
								))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				{/* Chat-Historie und Suchfunktion */}
				<SidebarGroup>
					<SidebarGroupContent>
						<h2 className=' text-2xl font-bold py-2'>Letzte Chats</h2>
						<div className='flex items-center gap-2   rounded-2xl'>
							<input
								type='text'
								value={searchTerm}
								onChange={(e) => {
									setSearchTerm(e.target.value);
								}}
								placeholder='Suche'
								className='focus:outline-none p-2 w-full bg-transparent'
							/>
							<span className='p-2'>
								<Search />
							</span>
						</div>
					</SidebarGroupContent>
				</SidebarGroup>
				<SidebarGroupContent className='absolute bottom-5'>
					<UserMenu />
				</SidebarGroupContent>
			</SidebarContent>
		</Sidebar>
	);
};

export default MenuSidebar;
