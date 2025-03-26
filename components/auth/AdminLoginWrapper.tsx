'use client';

import { signIn } from 'next-auth/react';

export default function AdminLoginWrapper() {
	return (
		<div className='max-w-md mx-auto mt-20 text-center space-y-6'>
			<h2 className='text-2xl font-bold'>Zugriff nur für Administratoren</h2>
			<p className='text-gray-500'>
				Bitte melden Sie sich mit einem Administrator-Konto an.
			</p>
			<button
				onClick={() => signIn()}
				className='bg-blue-600 text-white px-4 py-2 rounded'
			>
				Als Admin anmelden
			</button>
		</div>
	);
}
