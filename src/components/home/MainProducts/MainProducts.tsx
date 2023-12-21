const getProducts = async () => {
	const response = await fetch(
		`${process.env.SHOPPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
		{
			headers: new Headers({
				'X-Shopify-Access-Token': process.env.SHOPPIFY_API_KEY || '',
			}),
		}
	);
	const data = await response.json();
	return data;
};
export const MainProducts = async () => {
	const products = await getProducts();
	console.log(products);
	return <div>MainProducts</div>;
};
