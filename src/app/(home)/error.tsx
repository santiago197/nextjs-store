'use client';
import styles from './error.module.sass';

export default function ErrorProps({ error, reset }: ErrorProps) {
	return (
		<div className={styles.container}>
			<span className={styles.span__icon}>🙁</span>
			<h1>Ocurrio un error</h1>
			<button
				onClick={reset}
				className={styles.button}
			>
				Intentar de nuevo
			</button>
		</div>
	);
}
