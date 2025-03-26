import { redirect } from 'next/navigation';
import { getServerSession } from './getServerSession';

export async function requireLogin() {
	const session = await getServerSession();

	if (!session) {
		redirect('/login');
	}

	return session;
}

export async function requireRole(roles: ('ADMIN' | 'SUPPORTER')[]) {
	const session = await getServerSession();

	if (!session || !roles.includes(session.user.role)) {
		redirect('/login');
	}

	return session;
}

export async function requireAdmin() {
	return requireRole(['ADMIN']);
}

export async function requireSupporter() {
	return requireRole(['SUPPORTER']);
}
