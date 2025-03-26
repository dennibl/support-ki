import { requireRole } from '@/lib/requireRole';

export default async function AdminDashboardPage() {
	const session = await requireRole(['ADMIN']);

	return (
		<div className='p-6'>
			<h1 className='text-2xl font-semibold'>Admin-Dashboard</h1>
			<p>Willkommen, {session.user.email}!</p>
		</div>
	);
}
