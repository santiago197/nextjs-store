// import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from 'app/components/shared/Header';
import { Footer } from 'app/components/shared/Footer';

import 'app/sass/globals.sass';
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
	return (
		<html lang="es">
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
