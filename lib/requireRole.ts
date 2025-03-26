import { getServerSession } from './getServerSession';

export async function requireRole(requiredRole: 'ADMIN' | 'SUPPORTER') {
	const session = await getServerSession();

	if (!session) return { status: 'unauthenticated' as const };
	if (session.user.role !== requiredRole)
		return { status: 'unauthorized' as const };

	return { status: 'authorized' as const, session };
}
