import Head from 'next/head'
import Link from 'next/link'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from '../components/useDarkMode'
import { lightTheme, darkTheme } from '../components/Themes'
import { GlobalStyles } from '../components/GlobalStyles'
import Toggle from '../components/ThemeToggler'
import styles from '../styles/Home.module.css'

export default function _404() {
	const [theme, themeToggler, mountedComponent] = useDarkMode()

	const themeMode = theme === 'light' ? lightTheme : darkTheme

	if (!mountedComponent) return <div />

	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			<div className={styles.container}>
				<Head>
					<title>404: Nothing Found | Arrigo.dev</title>
					<meta name='author' content='Arrigo Lupori' />
					<meta
						name='description'
						content='There is nothing on this page, sorry! Please go back to the home page to navigate useful SaaS resources from Arrigo.dev.'
					/>
					<link rel='icon' href='/favicon.ico' />
				</Head>
				<Toggle theme={theme} toggleTheme={themeToggler} />
				<p>
					<Link href='/'>
						<a>« back to home page</a>
					</Link>
				</p>

				<p>
					Sorry, there's nothing here. Go back to the home page to
					navigate useful resources on how to build your own SaaS from
					scratch.
				</p>
			</div>
		</ThemeProvider>
	)
}
