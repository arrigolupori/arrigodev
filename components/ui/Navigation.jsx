import AuthContext from '../../context/AuthContext'
import { useContext } from 'react'
import Link from 'next/link'
import LoginButton from '../signin/LoginButton'
import Toggle from '../mode/ThemeToggler'
import styles from '../../styles/Home.module.css'

export default function Navigation({
	theme,
	themeToggler,
	showLogin,
	altButton,
}) {
	const { user, logout } = useContext(AuthContext)
	return (
		<>
			{showLogin === true ? <LoginButton /> : <></>}
			<span className={styles.smallEmoji}>
				<Toggle theme={theme} toggleTheme={themeToggler} />
			</span>
			{user ? (
				<>
					<p>
						<Link href='/saas/issue/1'>
							<a>Continue learning »</a>
						</Link>
					</p>
				</>
			) : (
				<></>
			)}
		</>
	)
}
