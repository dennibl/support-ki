import { requireRole } from '@/lib/requireAuth';
import AdminLoginWrapper from '@/components/auth/AdminLoginWrapper';
import ProtectedLayoutClient from '@/components/layout/ProtectedLayoutClient';

export default async function ProtectedLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const result = await requireRole(['ADMIN', 'SUPPORTER']);

	if (result.status === 'unauthenticated') {
		return (
			<div className='p-6 text-center'>
				<p className='text-lg mb-4'>🔐 Bitte melden Sie sich an.</p>
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
					Dieser Bereich ist nur für Supporter oder Administratoren zugänglich.
				</p>
				<AdminLoginWrapper />
			</div>
		);
	}

	// Zugriff erlaubt → Session mitgeben, falls gewünscht
	return <ProtectedLayoutClient>{children}</ProtectedLayoutClient>;
}
