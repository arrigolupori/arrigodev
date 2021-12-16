import LoginButton from './LogInButton'
import Toggle from './ThemeToggler'
import styles from '../styles/Home.module.css'

export default function Navigation({
	theme,
	themeToggler,
	showLogin,
	altButton,
}) {
	return (
		<>
			{showLogin === true ? <LoginButton /> : <></>}
			<span className={styles.smallEmoji}>
				<Toggle theme={theme} toggleTheme={themeToggler} />
			</span>
		</>
	)
}
