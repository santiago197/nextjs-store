import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Store NextJs Future World',
	description: 'Tienda en línea',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<header>
					<nav>
						<ul>
							<Link href="/">
								<li>Home</li>
							</Link>
							<Link href="/store">
								<li>Store</li>
							</Link>
						</ul>
					</nav>
				</header>

				{children}
			</body>
		</html>
	);
}
