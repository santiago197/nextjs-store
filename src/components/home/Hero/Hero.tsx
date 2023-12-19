import styles from './Hero.module.sass';

export const Hero = () => {
	console.log(styles);
	return (
		<section className={styles.Hero}>
			<h1>Hero</h1>
			<h2>Batman</h2>
		</section>
	);
};
