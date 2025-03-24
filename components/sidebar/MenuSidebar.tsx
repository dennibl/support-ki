'use client';

import {
	Home,
	Search,
	Settings,
	MessageSquareText,
	Upload,
	TextSearch,
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

const items = [
	{
		title: 'Dashboard',
		url: '/admin/dashboard',
		icon: Home,
	},
	{
		title: 'Chat',
		url: '/supportchat',
		icon: MessageSquareText,
	},
	{
		title: 'Dokumentenübersicht',
		url: '/admin/data',
		icon: TextSearch,
	},
	{
		title: 'Dokumentenupload',
		url: '/admin/data/upload',
		icon: Upload,
	},

	{
		title: 'Einstellungen',
		url: '/admin/settings',
		icon: Settings,
	},
];

const MenuSidebar = () => {
	const [searchTerm, setSearchTerm] = useState('');
	return (
		<Sidebar collapsible='offcanvas' variant='floating'>
			<SidebarContent>
				<SidebarGroup>
					<div className='flex items-center gap-2 mb-5'>
						<Home className='w-6 h-6' />
						<span>Logo</span>
					</div>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				{/* Chat-Historie und Suchfunktion */}
				<SidebarGroup>
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
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
};

export default MenuSidebar;
