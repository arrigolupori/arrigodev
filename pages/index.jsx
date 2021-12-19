import Link from 'next/link'
import SEO from '../components/SEO'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from '../components/mode/useDarkMode'
import { lightTheme, darkTheme } from '../components/mode/Themes'
import { GlobalStyles } from '../components/mode/GlobalStyles'
import Navigation from '../components/ui/Navigation'
import Hero from '../components/sections/Hero'
import WhySub from '../components/sections/WhySub'
import WhoFor from '../components/sections/WhoFor'
import WhoAm from '../components/sections/WhoAm'
import Footer from '../components/ui/Footer'
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
