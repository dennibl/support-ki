import { requireAdmin } from '@/lib/requireAuth';

export default async function AdminDashboardPage() {
	const session = await requireAdmin();

	return (
		<div className='p-6'>
			<h1>Admin-Dashboard</h1>
			<p>{session.user.email}</p>
		</div>
	);
}
