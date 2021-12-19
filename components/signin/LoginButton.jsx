import AuthContext from '../../context/AuthContext'
import { useContext } from 'react'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function LoginButton(altButton) {
	const { user, logout } = useContext(AuthContext)
	return (
		<>
			{user ? (
				<>
					<button
						className={styles.logInButton}
						onClick={() => logout()}
					>
						« log out
					</button>
				</>
			) : (
				<>
					<Link href={altButton === true ? '/' : '/login'}>
						<button className={styles.logInButton}>
							{altButton === true ? 'Join us »' : 'Log in »'}
						</button>
					</Link>
				</>
			)}
		</>
	)
}
