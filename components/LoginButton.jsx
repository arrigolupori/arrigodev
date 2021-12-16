import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function LoginButton(altButton) {
	return (
		<>
			<Link href={altButton === true ? '/' : '/login'}>
				<button className={styles.logInButton}>
					{altButton === true ? 'Join us »' : 'Log in »'}
				</button>
			</Link>
		</>
	)
}
