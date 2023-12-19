import Link from 'next/link';
import React from 'react';

export const Header = () => {
	console.log('Hola Header');
	return (
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
	);
};
