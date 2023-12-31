import Image from 'next/image';
import styles from './MainProducts.module.sass';
import { Product } from './interface';
import { error } from 'console';

const getProducts = async () => {
	try {
		const response = await fetch(
			`${process.env.SHOPPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
			{
				headers: new Headers({
					'X-Shopify-Access-Token': process.env.SHOPPIFY_API_KEY || '',
				}),
			}
		);
		throw new Error('error');
		const { products } = await response.json();
		return products;
	} catch (error) {
		console.log(error);
	}
};
export const MainProducts = async () => {
	const products = await getProducts();

	return (
		<section className={styles.MainProducts}>
			<h3>✨ New products released!</h3>
			<div className={styles.MainProducts__grid}>
				{products.map((product: Product) => {
					const imageSrc = product.images[0].src;
					return (
						<article key={product.id}>
							<p>{product.title}</p>
							<Image
								src={imageSrc}
								fill
								alt={product.title}
								loading="eager"
							/>
						</article>
					);
				})}
			</div>
		</section>
	);
};
