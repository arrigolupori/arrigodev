import Link from 'next/link'
import SEO from '../components/SEO'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from '../components/useDarkMode'
import { lightTheme, darkTheme } from '../components/Themes'
import { GlobalStyles } from '../components/GlobalStyles'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import WhySub from '../components/WhySub'
import WhoFor from '../components/WhoFor'
import WhoAm from '../components/WhoAm'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
	const [theme, themeToggler, mountedComponent] = useDarkMode()

	const themeMode = theme === 'light' ? lightTheme : darkTheme

	if (!mountedComponent) return <div />

	return (
		<>
			<SEO
				title='Build a SaaS from Scratch for Free'
				description='Learn how to build a SaaS app from scratch with the latest technologies for free. Every 2 weeks a new issue directly in your inbox.'
			/>
			<ThemeProvider theme={themeMode}>
				<GlobalStyles />
				<div className={styles.container}>
					<p>
						<Link href='/blog'>
							<a>Read the latest updates »</a>
						</Link>
					</p>
					<Navigation
						theme={theme}
						themeToggler={themeToggler}
						showLogin
					/>
					<Hero />
					<WhoFor />
					<WhySub />
					<WhoAm />
					<Footer />
				</div>
			</ThemeProvider>
		</>
	)
}
