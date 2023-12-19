'use client';
// import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { Header } from 'app/components/header';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
// 	title: 'Store NextJs Future World',
// 	description: 'Tienda en línea',
// };

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	console.log('Hola layout');
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
