'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError('');

		const res = await signIn('credentials', {
			redirect: false,
			email,
			password,
		});

		if (res?.error) {
			setError('Login fehlgeschlagen');
		}

		if (res?.ok) {
			// Session holen → Rolle prüfen
			const sessionRes = await fetch('/api/auth/session');
			const session = await sessionRes.json();

			const role = session?.user?.role;

			if (role === 'ADMIN') {
				router.push('/admin/dashboard');
			} else if (role === 'SUPPORTER') {
				router.push('/supportchat');
			} else {
				setError('Unbekannte Rolle');
			}
		}
	};

	return (
		<div className='max-w-md mx-auto mt-20 p-6 border rounded'>
			<h1 className='text-2xl mb-4 font-semibold text-center'>Login</h1>
			<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
				<input
					type='email'
					placeholder='E-Mail'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className='p-2 border rounded'
					required
				/>
				<input
					type='password'
					placeholder='Passwort'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className='p-2 border rounded'
					required
				/>
				<button type='submit' className='bg-blue-600 text-white p-2 rounded'>
					Einloggen
				</button>
				{error && <p className='text-red-500 text-sm'>{error}</p>}
			</form>
		</div>
	);
};

export default LoginPage;
