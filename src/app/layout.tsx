import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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
							<li>Home</li>
							<li>Store</li>
						</ul>
					</nav>
				</header>

				{children}
			</body>
		</html>
	);
}
