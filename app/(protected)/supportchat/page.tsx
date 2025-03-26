import ChatInterface from '@/components/ChatInterface';
import React from 'react';

import { requireRole } from '@/lib/requireAuth';

export default async function SupportChatPage() {
	const session = await requireRole(['ADMIN', 'SUPPORTER']);

	return (
		<div className='p-6'>
			<h1>Support-Chat</h1>
			<p>{session.user.email}</p>
			<ChatInterface />
		</div>
	);
}
