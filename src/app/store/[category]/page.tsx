interface CategoryProps {
	params: {
		category: string;
	};
}
export default function Category(props: CategoryProps) {
	const { category } = props.params;

	return <h1>Category dinamico {category}</h1>;
}
