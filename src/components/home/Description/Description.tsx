'use client';

import Image from 'next/image';
import styles from './Description.module.sass';
import { useState } from 'react';

import classNames from 'classnames/bind';

const PLACEHOLDER_IMAGE =
	'data:image/jpeg;base64,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';

export const Description = () => {
	const [hasBorder, setHasBorder] = useState(false);
	const handleClick = () => setHasBorder(!hasBorder);

	const cx = classNames.bind(styles);

	const buttonStyles = cx('Description__button', {
		'Description__button--border': hasBorder,
	});
	console.log(buttonStyles);
	return (
		<section className={styles.Description}>
			<button
				onClick={handleClick}
				className={buttonStyles}
			>
				<div className={styles.Description__imageContainer}>
					<Image
						src="/images/description.jpeg"
						alt="products marketplace"
						fill
						// quality={100}
						// priority={true}
						placeholder="blur"
						blurDataURL={PLACEHOLDER_IMAGE}
					/>
				</div>
			</button>
			<div className={styles.Description__text}>
				<h2>Bring the future today</h2>
				<p>
					Future World: Your Gateway to Tomorrow's Tech! Dive into a world of
					cutting-edge gadgets and gear. Stay ahead of the curve and redefine
					your digital lifestyle with us.
				</p>
			</div>
		</section>
	);
};
