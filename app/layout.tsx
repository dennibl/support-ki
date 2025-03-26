import type { Metadata } from 'next';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

export const metadata: Metadata = {
	title: 'Support KI',
	description: 'KI-Tool für Electronic-Banking-Support',
};

interface Props {
	children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
	return (
		<html lang='de' className='dark'>
			<body className=''>{children}</body>
		</html>
	);
}
