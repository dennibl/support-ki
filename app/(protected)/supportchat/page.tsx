import ChatInterface from '@/components/ChatInterface';
import React from 'react';

import { requireRole } from '@/lib/requireRole';

export default async function SupportChatPage() {
	const session = await requireRole(['ADMIN', 'SUPPORTER']);

	return (
		<div className='p-6'>
			<h1 className='text-2xl font-semibold'>Support-Chat</h1>
			<p>Willkommen, {session.user.email}!</p>
			<ChatInterface />
		</div>
	);
}
