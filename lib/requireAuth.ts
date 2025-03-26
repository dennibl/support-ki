import { getServerSession } from './getServerSession';

export type RoleCheckResult =
	| { status: 'unauthenticated' }
	| { status: 'unauthorized' }
	| {
			status: 'authorized';
			session: Awaited<ReturnType<typeof getServerSession>>;
	  };

export async function requireRole(
	roles: ('ADMIN' | 'SUPPORTER')[]
): Promise<RoleCheckResult> {
	const session = await getServerSession();

	if (!session) {
		return { status: 'unauthenticated' };
	}

	if (!roles.includes(session.user.role)) {
		return { status: 'unauthorized' };
	}

	return { status: 'authorized', session };
}

export async function requireAdmin() {
	return requireRole(['ADMIN']);
}

export async function requireSupporter() {
	return requireRole(['SUPPORTER']);
}
