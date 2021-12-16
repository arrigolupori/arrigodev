import Link from 'next/link'
import SEO from '../components/SEO'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from '../components/useDarkMode'
import { lightTheme, darkTheme } from '../components/Themes'
import { GlobalStyles } from '../components/GlobalStyles'
import Navigation from '../components/Navigation'
import styles from '../styles/Home.module.css'

export default function _404() {
	const [theme, themeToggler, mountedComponent] = useDarkMode()

	const themeMode = theme === 'light' ? lightTheme : darkTheme

	if (!mountedComponent) return <div />

	return (
		<>
			<SEO
				title='404: Nothing Found'
				description='There is nothing on this page, sorry! Please go back to the home page to navigate useful SaaS resources from Arrigo.dev.'
			/>
			<ThemeProvider theme={themeMode}>
				<GlobalStyles />
				<div className={styles.container}>
					<p>
						<Link href='/'>
							<a>« back to home page</a>
						</Link>
					</p>
					<Navigation
						theme={theme}
						themeToggler={themeToggler}
						showLogin
					/>

					<p>
						Sorry, there&apos;s nothing here. Go back to the home
						page to navigate useful resources on how to build your
						own SaaS from scratch.
					</p>
				</div>
			</ThemeProvider>
		</>
	)
}
