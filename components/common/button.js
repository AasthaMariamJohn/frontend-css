import React from 'react'

import styles from './button.module.css'

export default function Button({ icon, text, variant = 'default', size = 'md' }) {
	return (
		<button type='button' className={`${styles['button']} ${styles[variant]} ${styles[size]}`}>
			<div className={styles['icon-wrapper']}>{icon}</div>
			{text}
		</button>
	)
}