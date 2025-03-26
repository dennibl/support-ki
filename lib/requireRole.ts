import { redirect } from 'next/navigation';
import { getServerSession } from './getServerSession';

export async function requireRole(allowedRoles: ('ADMIN' | 'SUPPORTER')[]) {
	const session = await getServerSession();

	if (!session || !allowedRoles.includes(session.user.role)) {
		redirect('/login');
	}

	return session;
}
