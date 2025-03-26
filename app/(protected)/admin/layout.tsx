import { requireAdmin } from '@/lib/requireAuth';
import AdminLoginWrapper from '@/components/auth/AdminLoginWrapper';

export default async function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const result = await requireAdmin();

	if (result.status === 'unauthenticated') {
		return (
			<div className='p-6 text-center'>
				<p className='text-lg mb-4'>
					🔐 Bitte melden Sie sich als Administrator an.
				</p>
				<AdminLoginWrapper />
			</div>
		);
	}

	if (result.status === 'unauthorized') {
		return (
			<div className='p-6 text-center'>
				<p className='text-lg text-red-600 font-semibold mb-2'>
					🚫 Kein Zugriff
				</p>
				<p className='text-sm text-gray-500 mb-4'>
					Dieser Bereich ist nur für Administratoren zugänglich.
				</p>
				<AdminLoginWrapper />
			</div>
		);
	}

	return <>{children}</>;
}
