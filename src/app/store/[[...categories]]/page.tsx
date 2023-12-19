interface CategoryProps {
	params: {
		categories: string[];
		searchParams?: string;
	};
}
export default function Category(props: CategoryProps) {
	const { categories } = props.params;
	// console.log(props);
	// console.log(categories);
	return <h1>Category dinamico {categories}</h1>;
}
